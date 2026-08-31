import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

export interface CaktoCustomer {
  name: string;
  email: string;
  phone?: string | null;
  docNumber?: string | null;
  birthDate?: string | null;
  docType?: string | null;
}

export interface CaktoOffer {
  id: string;
  name: string;
  price: number;
  image?: string | null;
}

export interface CaktoProduct {
  id: string;
  name: string;
  short_id?: string;
  supportEmail?: string;
  type?: string;
  invoiceDescription?: string;
}

export interface CaktoCommission {
  user: string;
  totalAmount: number;
  type: string;
  percentage: number;
}

export interface CaktoCard {
  lastDigits?: string;
  holderName?: string;
  brand?: string;
}

export interface CaktoOrderItem {
  id: string;
  refId?: string;
  customer: CaktoCustomer;
  address?: unknown | null;
  shipping?: unknown | null;
  affiliate?: string | null;
  offer: CaktoOffer;
  offer_type?: "main" | "orderbump" | "upsell" | string;
  product: CaktoProduct;
  checkout?: number;
  subscription?: unknown | null;
  subscription_period?: number;
  parent_order?: string | null;
  checkoutUrl?: string;
  status: "paid" | "waiting_payment" | "refused" | "refunded" | "chargedback" | "canceled" | string;
  baseAmount?: number;
  discount?: number;
  amount: number;
  commissions?: CaktoCommission[];
  fees?: number;
  couponCode?: string | null;
  reason?: string | null;
  refund_reason?: string | null;
  installments?: number;
  paymentMethod?: string;
  paymentMethodName?: string;
  paidAt?: string | null;
  createdAt?: string;
  due_date?: string | null;
  refundedAt?: string | null;
  chargedbackAt?: string | null;
  canceledAt?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  sck?: string | null;
  fbc?: string | null;
  fbp?: string | null;
  card?: CaktoCard;
  [key: string]: unknown;
}

export interface CaktoWebhookPayload {
  secret: string;
  event: "purchase_approved" | "purchase_refunded" | "purchase_chargedback" | "purchase_canceled" | string;
  data: CaktoOrderItem[];
  [key: string]: unknown;
}

const DEFAULT_SECRETS = [
  "5q4fPClpsdySPasfDSLrWjV5Mdq5vtUh15W7",
  "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3454",
];
const webhookHistory: Array<{ receivedAt: string; event: string; itemsCount: number; data: CaktoOrderItem[] }> = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON Body Parser for webhook payloads
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));

  // Health check endpoint
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Webhook handler function (supports /api/webhook and /api/webhook/cakto)
  const handleWebhook = (req: Request, res: Response) => {
    const payload = req.body as CaktoWebhookPayload;
    const configuredSecret = process.env.API_SECRET_KEY || process.env.CAKTO_WEBHOOK_SECRET;
    const validSecrets = configuredSecret ? [configuredSecret, ...DEFAULT_SECRETS] : DEFAULT_SECRETS;
    const isSecretValid = payload?.secret ? validSecrets.includes(payload.secret) : false;

    console.log(`\n========================================`);
    console.log(`[WEBHOOK RECEIVED] ${new Date().toISOString()}`);
    console.log(`Event: ${payload?.event || "unknown_event"}`);
    console.log(`Secret Match: ${isSecretValid ? "YES" : "NO"}`);

    if (payload?.secret && !isSecretValid) {
      console.warn(`[WEBHOOK WARN] Secret mismatch! Received: ${payload.secret}`);
    }

    const event = payload?.event || "unknown_event";
    const dataItems = Array.isArray(payload?.data) ? payload.data : [];

    console.log(`Processed Orders Count: ${dataItems.length}`);

    dataItems.forEach((item, index) => {
      console.log(`--- Item #${index + 1} (${item.offer_type || "main"}) ---`);
      console.log(`  Order ID: ${item.id} (Ref: ${item.refId || "N/A"})`);
      console.log(`  Customer: ${item.customer?.name || "N/A"} <${item.customer?.email || "N/A"}>`);
      console.log(`  Product: ${item.product?.name || "N/A"} (Offer: ${item.offer?.name || "N/A"})`);
      console.log(`  Status: ${item.status} | Value: R$ ${item.amount} (${item.paymentMethodName || item.paymentMethod || "N/A"})`);
      if (item.parent_order) {
        console.log(`  Parent Order ID: ${item.parent_order}`);
      }
    });
    console.log(`========================================\n`);

    // Store in recent webhook history (keep last 50)
    webhookHistory.unshift({
      receivedAt: new Date().toISOString(),
      event,
      itemsCount: dataItems.length,
      data: dataItems,
    });
    if (webhookHistory.length > 50) {
      webhookHistory.pop();
    }

    return res.status(200).json({
      success: true,
      message: "Webhook processed successfully",
      event: event,
      itemsCount: dataItems.length,
      receivedAt: new Date().toISOString(),
    });
  };

  // Webhook Status / Documentation endpoint
  app.get(["/api/webhook", "/api/webhook/cakto"], (_req: Request, res: Response) => {
    res.json({
      status: "active",
      message: "Cakto Webhook receiver is ready to accept events",
      endpoint: "/api/webhook",
      expectedSecret: DEFAULT_SECRET,
      recentEventsReceived: webhookHistory.length,
      sampleExpectedEvents: ["purchase_approved", "purchase_canceled", "purchase_refunded", "purchase_chargedback"],
    });
  });

  // Webhook Logs endpoint
  app.get("/api/webhook/logs", (_req: Request, res: Response) => {
    res.json({
      total: webhookHistory.length,
      logs: webhookHistory,
    });
  });

  // Webhook POST endpoints
  app.post(["/api/webhook", "/api/webhook/cakto"], handleWebhook);

  // Vite middleware for development vs static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: "0.0.0.0", port: PORT },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("{*all}", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});

import express, { Request, Response } from "express";
import path from "path";
import crypto from "crypto";
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

// --- Meta Conversions API Helpers ---
const hashData = (data: string | undefined | null) => {
  if (!data) return undefined;
  return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
};

const sendMetaCAPIEvent = async (
  eventName: string,
  userData: { email?: string; phone?: string; clientIpAddress?: string; clientUserAgent?: string; fbp?: string; fbc?: string },
  customData: any,
  eventId?: string
) => {
  const pixelId = process.env.META_PIXEL_ID || '1383508423908783';
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!accessToken) {
    console.warn(`[CAPI WARN] META_ACCESS_TOKEN is not set. Event ${eventName} will not be sent to Meta.`);
    return;
  }

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_id: eventId,
        user_data: {
          client_ip_address: userData.clientIpAddress,
          client_user_agent: userData.clientUserAgent,
          em: userData.email ? [hashData(userData.email)] : undefined,
          ph: userData.phone ? [hashData(userData.phone)] : undefined,
          fbp: userData.fbp,
          fbc: userData.fbc,
        },
        custom_data: customData,
      }
    ]
  };

  try {
    const response = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    console.log(`[CAPI SUCCESS] Event ${eventName} sent:`, result);
  } catch (err) {
    console.error(`[CAPI ERROR] Failed to send event ${eventName}:`, err);
  }
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON Body Parser
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));

  // Health check endpoint
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Client-side event tracking proxy for CAPI (ViewContent, AddToCart, InitiateCheckout)
  app.post("/api/track", async (req: Request, res: Response) => {
    const { eventName, customData, eventId } = req.body;
    if (!eventName) {
      return res.status(400).json({ error: "eventName is required" });
    }

    const clientIpAddress = req.ip || req.headers['x-forwarded-for'] as string;
    const clientUserAgent = req.headers['user-agent'];

    // Safely extract FBP/FBC cookies if sent via headers or standard parsing
    const cookieHeader = req.headers.cookie || '';
    const fbpMatch = cookieHeader.match(/_fbp=([^;]+)/);
    const fbcMatch = cookieHeader.match(/_fbc=([^;]+)/);

    await sendMetaCAPIEvent(
      eventName, 
      {
        clientIpAddress,
        clientUserAgent,
        fbp: fbpMatch ? fbpMatch[1] : undefined,
        fbc: fbcMatch ? fbcMatch[1] : undefined,
      },
      customData,
      eventId
    );

    res.json({ success: true });
  });

  // Webhook handler function
  const handleWebhook = async (req: Request, res: Response) => {
    const payload = req.body as CaktoWebhookPayload;
    const configuredSecret = process.env.API_SECRET_KEY || process.env.CAKTO_WEBHOOK_SECRET;
    const validSecrets = configuredSecret ? [configuredSecret, ...DEFAULT_SECRETS] : DEFAULT_SECRETS;
    const isSecretValid = payload?.secret ? validSecrets.includes(payload.secret) : false;

    console.log(`\n========================================`);
    console.log(`[WEBHOOK RECEIVED] ${new Date().toISOString()}`);
    console.log(`Event: ${payload?.event || "unknown_event"}`);
    
    if (payload?.secret && !isSecretValid) {
      console.warn(`[WEBHOOK WARN] Secret mismatch!`);
    }

    const event = payload?.event || "unknown_event";
    const dataItems = Array.isArray(payload?.data) ? payload.data : [];

    dataItems.forEach(async (item, index) => {
      console.log(`--- Item #${index + 1} (${item.offer_type || "main"}) ---`);
      console.log(`  Order ID: ${item.id} | Status: ${item.status} | Value: R$ ${item.amount}`);
      
      // If purchase approved, send CAPI Event
      if (event === "purchase_approved" && item.status === "paid") {
        await sendMetaCAPIEvent(
          "Purchase",
          {
            email: item.customer?.email,
            phone: item.customer?.phone || undefined,
            fbp: item.fbp || undefined,
            fbc: item.fbc || undefined,
          },
          {
            currency: "BRL",
            value: item.amount,
            content_name: item.product?.name,
            content_ids: [item.product?.id || item.offer?.id],
            content_type: "product"
          },
          item.id // Use Order ID as Event ID to deduplicate
        );
      }
    });
    console.log(`========================================\n`);

    // Store in recent webhook history
    webhookHistory.unshift({
      receivedAt: new Date().toISOString(),
      event,
      itemsCount: dataItems.length,
      data: dataItems,
    });
    if (webhookHistory.length > 50) webhookHistory.pop();

    return res.status(200).json({ success: true });
  };

  // Webhook endpoints
  app.get(["/api/webhook", "/api/webhook/cakto"], (_req: Request, res: Response) => {
    res.json({
      status: "active",
      recentEventsReceived: webhookHistory.length,
    });
  });
  app.get("/api/webhook/logs", (_req: Request, res: Response) => {
    res.json({ total: webhookHistory.length, logs: webhookHistory });
  });
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

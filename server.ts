import express, { Request, Response } from "express";
import path from "path";
import crypto from "crypto";
import { createServer as createViteServer } from "vite";

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

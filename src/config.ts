import React from "react";

/**
 * CONFIGURAÇÃO DO CHECKOUT
 * Substitua as URLs abaixo pelos links dos seus checkouts de pagamento (ex: Kiwify, Hotmart, Eduzz, Kirvano, etc.)
 */
export const CHECKOUT_URL_BASIC = "https://pay.wiapy.com/6a97631370d6d30424e366b4";
export const CHECKOUT_URL_PREMIUM = "https://pay.wiapy.com/NMkKqKFFqzBp";

export const PRODUCT_INFO = {
  name: "KIT DE ALFABETIZAÇÃO Ler & Brincar",
  methodName: "KIT DE ALFABETIZAÇÃO Ler & Brincar",
  headline: "Seu filho lendo com confiança em poucas semanas",
  subheadline: "Com apenas 10 minutos por dia, o Método Premium ajuda crianças de 4 a 8 anos a acelerar a alfabetização em até 5x, por meio de uma metodologia simples, divertida e fácil de aplicar em casa.",
  
  // Basic Tier (6 Cadernos Principais)
  basicPriceOriginal: "R$ 47,90",
  basicPriceCurrent: "R$ 22,90",
  basicInstallments: "Parcele em até 12x no cartão de crédito",
  
  // Premium Tier (Kit Completo + 6 Bônus + Passaporte + Quadro)
  premiumPriceOriginal: "R$ 97,00",
  premiumPriceCurrent: "R$ 29,90",
  premiumInstallments: "Parcele em até 12x no cartão de crédito",
  
  ctaPrimary: "QUERO COMEÇAR AGORA",
  ctaOffer: "QUERO O MÉTODO COMPLETO",
  guaranteeDays: 7,
};

export const PLANS = {
  basic: {
    id: "basic",
    badge: "OFERTA BÁSICA",
    name: "Kit Completo de Alfabetização",
    originalPrice: "R$ 47,90",
    currentPrice: "R$ 22,90",
    installments: "Parcele em até 12x no cartão de crédito",
    cta: "QUERO COMEÇAR AGORA",
    features: [
      "4 materiais progressivos completos",
      "+ de 150 atividades exclusivas",
      "+ de 300 páginas ilustradas",
      "Acesso vitalício",
      "7 dias de garantia",
    ],
  },
  premium: {
    id: "premium",
    badge: "MAIS VANTAJOSO",
    name: "Kit + 6 Bônus Exclusivos",
    originalPrice: "R$ 97,00",
    currentPrice: "R$ 29,90",
    installments: "Parcele em até 12x no cartão de crédito",
    cta: "QUERO O PACOTE PRÊMIO",
    features: [
      "Tudo do Kit Completo",
      "🎁 Bônus 1 — 30 Atividades Extras de Fixação",
      "🎁 Bônus 2 — Calendário 30 Dias de Leitura",
      "🎁 Bônus 3 — Certificados de Conquista",
      "🎁 Bônus 4 — Jogos de Alfabetização",
      "🎁 Bônus 5 — Cartões de Sílabas",
      "🎁 Bônus 6 — Kit de Apostilas Complementares",
      "Acesso vitalício + 7 dias de garantia",
    ],
  },
};

// Declaração de tipo para Meta Pixel (fbq)
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Função utilitária para enviar eventos para o Pixel no navegador e via API de Conversões (CAPI)
 */
export const trackEvent = async (eventName: string, customData: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;

  // Gerar um Event ID único para deduplicação (Pixel vs CAPI)
  const eventId = typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : Math.random().toString(36).substring(2, 15);

  // 1. Browser Pixel (fbq)
  if (typeof window.fbq === "function") {
    try {
      window.fbq("track", eventName, customData, { eventID: eventId });
    } catch {
      // Ignora silenciosamente
    }
  }

  // 2. Meta Conversions API (via backend)
  try {
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventName, customData, eventId }),
    });
  } catch (e) {
    console.warn("CAPI Track Error:", e);
  }
};

/**
 * Função utilitária para anexar todos os parâmetros de rastreamento (UTMs, fbclid, src, sck) à URL do Checkout
 */
export const buildCheckoutUrlWithTracking = (baseUrl: string): string => {
  if (typeof window === "undefined" || !baseUrl) return baseUrl;
  
  try {
    const url = new URL(baseUrl);
    const currentParams = new URLSearchParams(window.location.search);
    
    // Lista de parâmetros comuns de tráfego pago e afiliados
    const trackingKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "fbclid",
      "gclid",
      "ttclid",
      "src",
      "sck",
    ];

    trackingKeys.forEach((key) => {
      const value = currentParams.get(key);
      if (value && !url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });

    // Se houver qualquer outro parâmetro na URL atual, repassa também
    currentParams.forEach((value, key) => {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  } catch {
    return baseUrl;
  }
};

export const handleCheckoutClick = (plan: "basic" | "premium" = "premium", e?: React.MouseEvent) => {
  const targetUrl = plan === "premium" ? CHECKOUT_URL_PREMIUM : CHECKOUT_URL_BASIC;
  const selectedPlan = plan === "premium" ? PLANS.premium : PLANS.basic;
  const numericPrice = plan === "premium" ? 27.90 : 9.90;

  // 1. Disparo do Evento InitiateCheckout (Pixel + CAPI)
  const eventData = {
    content_name: "+400 Atividades de Grafismo Fonético",
    content_category: "Kit Alfabetizacao",
    value: numericPrice,
    currency: "BRL",
    num_items: 1,
  };
  
  // Removido AddToCart para evitar duplicidade no Meta Ads
  trackEvent("InitiateCheckout", eventData);

  if (targetUrl && !targetUrl.startsWith("#")) {
    const urlWithParams = buildCheckoutUrlWithTracking(targetUrl);
    window.location.href = urlWithParams;
  } else {
    if (e) e.preventDefault();
    const offerElement = document.getElementById("oferta");
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: "smooth" });
    }
  }
};



export const scrollToOffer = (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  const offerElement = document.getElementById("oferta");
  if (offerElement) {
    offerElement.scrollIntoView({ behavior: "smooth" });
  }
};

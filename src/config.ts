import React from "react";

/**
 * CONFIGURAÇÃO DO CHECKOUT
 * Substitua as URLs abaixo pelos links dos seus checkouts de pagamento (ex: Kiwify, Hotmart, Eduzz, Kirvano, Cakto, etc.)
 */
export const CHECKOUT_URL_BASIC = "https://pay.cakto.com.br/m9qtssx_1073217";
export const CHECKOUT_URL_PREMIUM = "https://pay.cakto.com.br/63bhgoa_1073228";

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
  const numericPrice = plan === "premium" ? 29.90 : 22.90;

  // 1. Disparo do Evento InitiateCheckout para o Meta Pixel
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      window.fbq("track", "InitiateCheckout", {
        content_name: selectedPlan.name,
        content_category: "Kit Alfabetização",
        value: numericPrice,
        currency: "BRL",
        num_items: 1,
      });
    } catch {
      // Ignora silenciosamente em caso de bloqueador de anúncios
    }
  }
  
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



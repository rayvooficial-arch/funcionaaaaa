import fs from 'fs';
let code = fs.readFileSync('src/config.ts', 'utf-8');
code = code.replace(
  /export const handleCheckoutClick = [\s\S]*?if \(targetUrl && !targetUrl\.startsWith\("#"\)\) \{/,
`export const handleCheckoutClick = (plan: "basic" | "premium" = "premium", e?: React.MouseEvent) => {
  const targetUrl = plan === "premium" ? CHECKOUT_URL_PREMIUM : CHECKOUT_URL_BASIC;
  const selectedPlan = plan === "premium" ? PLANS.premium : PLANS.basic;
  const numericPrice = plan === "premium" ? 29.90 : 22.90;

  // 1. Disparo dos Eventos InitiateCheckout e AddToCart (Pixel + CAPI)
  const eventData = {
    content_name: selectedPlan.name,
    content_category: "Kit Alfabetizacao",
    value: numericPrice,
    currency: "BRL",
    num_items: 1,
  };
  
  trackEvent("AddToCart", eventData);
  trackEvent("InitiateCheckout", eventData);

  if (targetUrl && !targetUrl.startsWith("#")) {`
);
fs.writeFileSync('src/config.ts', code);

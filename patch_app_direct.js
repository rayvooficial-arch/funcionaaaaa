import fs from 'fs';
const app = `import React, { useEffect } from "react";
import { trackEvent } from "./config";
import { TopBanner } from "./components/TopBanner";
import { Hero } from "./components/Hero";
import { BenefitsSection } from "./components/BenefitsSection";
import { MaterialShowcase } from "./components/MaterialShowcase";
import { BonusesSection } from "./components/BonusesSection";
import { OfferSection } from "./components/OfferSection";
import { Testimonials } from "./components/Testimonials";
import { Guarantee } from "./components/Guarantee";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  useEffect(() => {
    trackEvent("ViewContent", {
      content_name: "Kit Alfabetizacao Home",
      content_category: "Landing Page",
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-page)] text-[var(--color-text-body)] selection:bg-[var(--color-primary)]/20 selection:text-[var(--color-primary)]">
      <TopBanner />
      <main className="flex-grow">
        <Hero />
        <BenefitsSection />
        <MaterialShowcase />
        <BonusesSection />
        <OfferSection />
        <Testimonials />
        <Guarantee />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
`;
fs.writeFileSync('src/App.tsx', app);

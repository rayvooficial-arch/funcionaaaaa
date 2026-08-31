import React, { useEffect } from "react";
import { trackEvent } from "./config";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { MaterialShowcase } from "./components/MaterialShowcase";
import { Bonuses } from "./components/Bonuses";
import { BenefitsSection } from "./components/BenefitsSection";
import { HowItWorks } from "./components/HowItWorks";
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
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <MaterialShowcase />
        <Bonuses />
        <BenefitsSection />
        <HowItWorks />
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

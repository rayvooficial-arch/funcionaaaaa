import React from "react";
import { Check } from "lucide-react";
import { scrollToOffer } from "../config";
import heroImageAsset from "../assets/images/1a2407bd-2c68-409c-ab80-18ec26e94ce4.webp";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-8 pb-6 md:pt-10 md:pb-8">
      <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--color-yellow)]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-[64px] font-display font-black text-slate-800 leading-[1.1] mb-6 tracking-tight">
            Existe uma <span className="text-[var(--color-primary)]">forma mais leve</span> de <span className="text-[var(--color-primary)]">ensinar seu filho a ler</span>…
          </h1>
          
          <div className="mb-10">
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Descubra o método que transforma a alfabetização em uma experiência mais simples e divertida.
            </p>
          </div>

          <div className="mb-12 max-w-2xl mx-auto">
            <img src={heroImageAsset} alt="Mockup Ler e Brincar" fetchPriority="high" className="w-full h-auto object-contain rounded-2xl drop-shadow-xl mx-auto" />
          </div>

          <div className="flex flex-col items-center pb-8">
            <button onClick={(e) => scrollToOffer(e)} id="hero-cta-button" className="bg-[var(--color-cta)] text-[var(--color-on-action)] hover:opacity-90 px-10 py-5 rounded-full text-lg md:text-2xl font-bold transition-all flex items-center justify-center gap-3 w-full md:w-auto cursor-pointer shadow-2xl shadow-[var(--color-cta)]/30 animate-cta-pulse">
              QUERO CONHECER O MÉTODO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

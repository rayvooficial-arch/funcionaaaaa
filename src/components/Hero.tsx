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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-800 leading-[1.1] mb-4 tracking-tight">
            +400 Atividades de <span className="text-[var(--color-primary)]">grafismo fonético</span> prontas e organizadas
          </h1>
          
          <p className="text-base md:text-xl text-slate-700 mb-6 max-w-lg md:max-w-2xl mx-auto font-medium leading-snug">
            Ajude a criança a aprender a ler de forma rápida e divertida, mesmo que tenha dificuldade hoje
          </p>

          <div className="mb-8 max-w-2xl mx-auto">
            <img src={heroImageAsset} alt="Mockup Ler e Brincar" fetchpriority="high" className="w-full h-auto object-contain rounded-2xl drop-shadow-xl mx-auto" />
          </div>

          <button onClick={(e) => scrollToOffer(e)} id="hero-cta-button" className="bg-[var(--color-cta)] text-[var(--color-on-action)] hover:opacity-90 px-10 py-5 rounded-full text-xl md:text-2xl font-bold transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer shadow-xl shadow-[var(--color-cta)]/30 animate-cta-pulse w-full md:w-auto">
            👉 Quero as atividades
          </button>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-700 font-bold text-sm md:text-base px-4">
            <div className="inline-flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
              <span>10 minutos por dia</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
              <span>Mesmo pra crianças com dificuldade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

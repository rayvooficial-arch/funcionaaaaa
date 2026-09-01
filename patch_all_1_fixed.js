import fs from 'fs';

fs.writeFileSync('src/components/TopBanner.tsx', `import React from "react";
export const TopBanner: React.FC = () => {
  return (
    <div className="bg-[var(--color-cta)] text-[var(--color-on-action)] py-2 px-2 text-center font-bold text-[11px] sm:text-sm md:text-base flex items-center justify-center gap-2 relative z-[100] whitespace-nowrap overflow-hidden">
      <span>⚡ Desconto só HOJE nessa página 1/9/2026</span>
    </div>
  );
};
`);

fs.writeFileSync('src/components/Hero.tsx', `import React from "react";
import { Check } from "lucide-react";
import { handleCheckoutClick } from "../config";
import heroImageAsset from "../assets/images/mockup_livro_grafismo_fonetico_1788145969916.jpg";

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
            <img src={heroImageAsset} alt="Mockup Pequenos Leitores" className="w-full h-auto object-contain rounded-2xl drop-shadow-xl mx-auto" />
          </div>

          <button onClick={(e) => handleCheckoutClick("premium", e)} id="hero-cta-button" className="bg-[var(--color-cta)] text-[var(--color-on-action)] hover:opacity-90 px-10 py-5 rounded-full text-xl md:text-2xl font-bold transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer shadow-xl shadow-[var(--color-cta)]/30 animate-cta-pulse w-full md:w-auto">
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
`);

fs.writeFileSync('src/components/BenefitsSection.tsx', `import React from "react";
import { CheckCircle2, TrendingUp, Smile } from "lucide-react";

export const BenefitsSection: React.FC = () => {
  const benefits = [
    { icon: CheckCircle2, title: "+400 atividades de grafismo fonético organizadas" },
    { icon: TrendingUp, title: "Evolução passo a passo, do básico até a leitura" },
    { icon: Smile, title: "Método simples que a criança entende e aplica" }
  ];

  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-10 font-bold text-slate-800 tracking-tight">
            O que você vai <span className="text-[var(--color-primary)]">receber</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4">
                  <div className="bg-[var(--color-primary)]/10 p-3 rounded-xl">
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 leading-snug">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
`);

let showcase = fs.readFileSync('src/components/MaterialShowcase.tsx', 'utf8');
showcase = showcase.replace(
  'Por dentro do <span className="text-[var(--color-primary)]">Material</span>',
  'Veja algumas atividades <span className="text-[var(--color-primary)]">por dentro do material</span>'
);
fs.writeFileSync('src/components/MaterialShowcase.tsx', showcase);


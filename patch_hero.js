import fs from 'fs';
const newHero = `import React from "react";
import { Check } from "lucide-react";
import { handleCheckoutClick } from "../config";
import { Hero3DBackground } from "./Hero3DBackground";
import heroImageAsset from "../assets/images/mockup_livro_grafismo_fonetico_1788145969916.jpg";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-8 pb-6 md:pt-10 md:pb-8"
    >
      <Hero3DBackground />

      <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--color-primary)]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--color-yellow)]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-800 leading-[1.1] mb-4 tracking-tight">
            Livro de <span className="text-[var(--color-primary)]">Grafismo Fonético</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-700 mb-6 max-w-lg md:max-w-2xl mx-auto font-medium leading-snug">
            O material completo para o seu filho aprender a ler e escrever brincando, com atividades divertidas e método comprovado.
          </p>

          <div className="mb-8 max-w-2xl mx-auto">
            <img
              src={heroImageAsset}
              alt="Livro de Grafismo Fonético"
              className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <button
            onClick={(e) => handleCheckoutClick("premium", e)}
            id="hero-cta-button"
            className="bg-[var(--color-cta)] text-[var(--color-on-action)] hover:opacity-90 px-10 py-5 rounded-full text-xl md:text-2xl font-bold transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer shadow-xl shadow-[var(--color-cta)]/30 animate-cta-pulse"
          >
            👉 Quero o material completo
          </button>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-700 font-bold text-sm md:text-base px-4">
            <div className="inline-flex items-center justify-center gap-2 mx-auto md:mx-0">
              <Check className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
              <span>Acesso imediato após o pagamento</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2 mx-auto md:mx-0">
              <Check className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2 mx-auto md:mx-0">
              <Check className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
              <span>Garantia de 7 Dias</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
`;
fs.writeFileSync('src/components/Hero.tsx', newHero);

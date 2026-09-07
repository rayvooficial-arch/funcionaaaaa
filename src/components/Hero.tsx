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
          <div className="mb-8 max-w-2xl mx-auto">
            <img src={heroImageAsset} alt="Mockup Ler e Brincar" fetchPriority="high" className="w-full h-auto object-contain mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-[64px] font-display font-black text-slate-800 leading-[1.1] mb-6 tracking-tight">
            Existe uma <span className="text-[var(--color-primary)]">forma mais leve</span> de <span className="text-[var(--color-primary)]">ensinar seu filho a ler</span>…
          </h1>
          
          <div className="mb-10">
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              E ela começa antes de cobrar que a criança simplesmente leia.
            </p>
          </div>

          <div className="flex flex-col items-center pb-8 w-full">
            <p className="text-xl md:text-2xl text-slate-700 mb-8 font-medium">
              Com apenas <strong>10 minutos</strong> por dia.
            </p>

            <div className="bg-[#FFFDF4] border border-[#F4EAC2] rounded-xl p-5 md:p-6 mb-10 w-full flex flex-col md:flex-row gap-5 justify-between text-left divide-y md:divide-y-0 md:divide-x divide-[#F4EAC2] shadow-sm">
              <div className="flex-1 flex items-start gap-3 pt-4 md:pt-0 md:px-2 first:pt-0">
                <div className="bg-[#C6A857] rounded-full p-0.5 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                </div>
                <p className="text-[15px] text-[#8C7A44] leading-snug">
                  Ideal para crianças de 2 a 12 anos,<br className="hidden lg:block"/> no ritmo natural de cada uma
                </p>
              </div>
              <div className="flex-1 flex items-start gap-3 pt-4 md:pt-0 md:px-6">
                <div className="bg-[#C6A857] rounded-full p-0.5 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                </div>
                <p className="text-[15px] text-[#8C7A44] leading-snug">
                  Mesmo que ainda não reconheça<br className="hidden lg:block"/> letras ou sons
                </p>
              </div>
              <div className="flex-1 flex items-start gap-3 pt-4 md:pt-0 md:px-6">
                <div className="bg-[#C6A857] rounded-full p-0.5 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                </div>
                <p className="text-[15px] text-[#8C7A44] leading-snug">
                  Funciona também com crianças<br className="hidden lg:block"/> com TDAH, Autismo ou<br className="hidden lg:block"/> dificuldades de foco
                </p>
              </div>
            </div>

            <button onClick={(e) => scrollToOffer(e)} id="hero-cta-button" className="bg-[#15803D] text-white hover:bg-[#166534] px-8 py-5 rounded-full text-xl md:text-2xl font-bold transition-all flex items-center justify-center w-full md:w-auto shadow-[0_8px_30px_rgb(21,128,61,0.3)] hover:shadow-[0_8px_30px_rgb(21,128,61,0.5)] hover:-translate-y-1 cursor-pointer mb-10">
              Quero meu pequeno lendo rápido!
            </button>

            <p className="text-lg md:text-2xl text-slate-800 text-center max-w-3xl font-medium leading-relaxed">
              Seu filho ou aluno vai aprender a ler até <strong>5x mais rápido</strong><br className="hidden md:block"/> de forma divertida, <strong>simples e eficaz</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

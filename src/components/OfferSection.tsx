import React from "react";
import { Check, ShieldCheck, X } from "lucide-react";
import { handleCheckoutClick } from "../config";
import imagemPacoteCompleto from "../assets/images/1a2407bd-2c68-409c-ab80-18ec26e94ce4.webp";

export const OfferSection: React.FC = () => {
  const commonFeatures = [
    { text: "+400 Atividades de Grafismo Fonético", included: true },
    { text: "+200 Atividades Extras de Alfabetização", included: true },
    { text: "App para apoio", included: false },
    { text: "Leitura progressiva por sílabas", included: false },
    { text: "Jogo da Memória das Sílabas", included: false },
    { text: "Garantia de 7 dias", included: true },
    { text: "Acesso Imediato e Vitalício", included: true },
  ];

  const premiumFeatures = [
    { text: "+400 Atividades de Grafismo Fonético", included: true },
    { text: "+200 Atividades Extras de Alfabetização", included: true },
    { text: "App para apoio", included: true },
    { text: "Leitura progressiva por sílabas", included: true },
    { text: "Jogo da Memória das Sílabas", included: true },
    { text: "Garantia de 7 dias", included: true },
    { text: "Acesso Imediato e Vitalício", included: true },
  ];

  return (
    <section id="oferta" className="py-12 relative overflow-hidden bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl mb-10 font-bold text-slate-800 tracking-tight text-center">
          Escolha o melhor plano para seu filho.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Pacote Comum */}
          <div className="bg-white rounded-[32px] border-2 border-slate-200 overflow-hidden shadow-lg relative flex flex-col mt-0 md:mt-8">
            <div className="p-6 md:p-8 flex-1 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Pacote Comum</h3>
              <p className="text-slate-500 mb-6 text-center font-medium">O essencial para iniciar a alfabetização</p>
              
              <div className="space-y-1 mb-8 text-center">
                <p className="text-[var(--color-action)] font-bold text-lg line-through opacity-80">De R$ 47,90</p>
                <p className="text-slate-700 text-lg font-bold">Por Apenas:</p>
                <p className="text-[var(--color-cta)] font-display font-black text-5xl mb-2">R$ 9,90</p>
              </div>

              <div className="w-full space-y-3 mb-8 text-left flex-1">
                {commonFeatures.map((feat, idx) => (
                  <div key={idx} className={`flex items-start gap-[10px] ${!feat.included ? 'opacity-50' : ''}`}>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${feat.included ? 'border-slate-800' : 'border-red-400'}`}>
                      {feat.included ? (
                        <Check className="w-4 h-4 text-slate-800 stroke-[3]" />
                      ) : (
                        <X className="w-4 h-4 text-red-500 stroke-[3]" />
                      )}
                    </div>
                    <span className={`font-bold text-sm md:text-base tracking-tight leading-snug ${!feat.included ? 'text-slate-400' : 'text-slate-800'}`}>
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>

              <button onClick={(e) => handleCheckoutClick("basic", e)} className="w-full bg-[var(--color-cta)] hover:opacity-90 text-white py-5 rounded-2xl text-xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-[var(--color-cta)]/30 cursor-pointer">
                COMPRAR AGORA
              </button>
            </div>
          </div>

          {/* Pacote Exclusivo (Mais Vendido) */}
          <div className="bg-white rounded-[32px] border-[3px] border-[var(--color-primary)] overflow-hidden shadow-2xl relative flex flex-col">
            <div className="bg-[var(--color-primary)] text-white text-center py-2 font-bold uppercase tracking-widest text-sm">
              Mais Vendido
            </div>
            
            <img src={imagemPacoteCompleto} alt="Kit Completo" className="w-full h-auto block max-h-[200px] object-cover border-b border-slate-100" />
            
            <div className="p-6 md:p-8 flex-1 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Pacote Exclusivo</h3>
              <p className="text-slate-500 mb-6 text-center font-medium">Kit Completo + Todos os Bônus</p>
              
              <div className="space-y-1 mb-8 text-center">
                <p className="text-[var(--color-action)] font-bold text-lg line-through opacity-80">De R$ 67,00</p>
                <p className="text-slate-700 text-lg font-bold">Por Apenas:</p>
                <p className="text-[var(--color-primary)] font-display font-black text-6xl mb-2">R$ 27,90</p>
              </div>

              <div className="w-full space-y-3 mb-8 text-left flex-1">
                {premiumFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-[10px]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-[var(--color-primary)] stroke-[3]" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm md:text-base tracking-tight leading-snug">{feat.text}</span>
                  </div>
                ))}
              </div>

              <button onClick={(e) => handleCheckoutClick("premium", e)} id="offer-buy-button" className="w-full bg-[var(--color-primary)] hover:opacity-90 text-[var(--color-on-action)] py-5 rounded-2xl text-xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-[var(--color-primary)]/30 animate-cta-pulse cursor-pointer">
                COMPRAR AGORA
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-600 font-bold text-sm mb-2 flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[var(--color-success)]" /> Compra 100% Segura e Protegida
          </p>
          <p className="text-slate-500 text-xs font-medium">Após a compra, você recebe acesso ao Material em PDF diretamente no seu E-mail</p>
        </div>
      </div>
    </section>
  );
};

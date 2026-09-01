import fs from 'fs';
const newOffer = `import React from "react";
import { Check, ShieldCheck, Lock } from "lucide-react";
import { handleCheckoutClick, PLANS } from "../config";
import imagemPacoteCompleto from "../assets/images/9b00a708-b82d-4654-ac51-40dcbb85adcb.jpg";

export const OfferSection: React.FC = () => {
  const plan = PLANS.premium;

  return (
    <section id="oferta" className="py-8 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
        
        <h2 className="text-3xl md:text-4xl mb-16 font-bold text-slate-800 tracking-tight">
          Comece a <span className="text-[var(--color-primary)]">evolução</span> na leitura hoje mesmo!
        </h2>

        <div className="space-y-12">
          
          <div className="bg-white rounded-[32px] border-2 border-[var(--color-primary)] overflow-hidden shadow-lg relative">
            
            <div className="absolute top-4 right-4 bg-[var(--color-primary)] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-md z-10">
              {plan.badge}
            </div>

            <img
              src={imagemPacoteCompleto}
              alt="Kit Completo"
              className="w-full h-auto block max-h-[400px] object-cover"
            />

            <div className="p-6 md:p-8 pt-4 md:pt-4 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                {plan.name}
              </h3>
              
              <p className="text-slate-600 text-lg mb-4 leading-relaxed max-w-2xl mx-auto">
                Tudo o que seu filho precisa para acelerar a alfabetização de forma divertida.
              </p>

              <div className="space-y-1 mb-6">
                <p className="text-[var(--color-cta)] font-bold text-lg line-through opacity-80">
                  De {plan.originalPrice}
                </p>
                <p className="text-slate-700 text-lg font-bold">
                  Por apenas
                </p>
                <p className="text-[var(--color-primary)] font-display font-black text-5xl md:text-6xl mb-2">
                  {plan.currentPrice}
                </p>
              </div>

              <div className="w-full max-w-sm mx-auto space-y-3 mb-8 text-left">
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-[10px]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-[var(--color-primary)] stroke-[3]" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm md:text-base tracking-tight leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={(e) => handleCheckoutClick("premium", e)}
                id="offer-buy-button"
                className="w-full md:max-w-md bg-[var(--color-cta)] hover:opacity-90 text-[var(--color-on-action)] py-5 rounded-2xl text-xl md:text-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-[var(--color-cta)]/30 animate-cta-pulse cursor-pointer"
              >
                👉 {plan.cta}
              </button>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-slate-500 text-sm font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> 7 dias de garantia
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4" /> Compra 100% Segura
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
`;
fs.writeFileSync('src/components/OfferSection.tsx', newOffer);

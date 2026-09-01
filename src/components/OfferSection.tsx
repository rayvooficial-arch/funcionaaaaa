import React from "react";
import { Check, ShieldCheck, Lock } from "lucide-react";
import { handleCheckoutClick } from "../config";
import imagemPacoteCompleto from "../assets/images/mockup_kit_grafismo_1788303716716.jpg";

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl mb-10 font-bold text-slate-800 tracking-tight">
          +400 Atividades de Grafismo Fonético <span className="text-[var(--color-primary)]">+ 4 Bônus Exclusivos</span>
        </h2>
        <div className="bg-white rounded-[32px] border-2 border-[var(--color-primary)] overflow-hidden shadow-lg relative max-w-2xl mx-auto">
          <img src={imagemPacoteCompleto} alt="Kit Completo" className="w-full h-auto block max-h-[350px] object-cover" />
          <div className="p-6 md:p-8 pt-4 md:pt-4 flex flex-col items-center">
            <div className="space-y-1 mb-6 text-center">
              <p className="text-[var(--color-cta)] font-bold text-lg line-through opacity-80">De R$ 67,00</p>
              <p className="text-slate-700 text-lg font-bold">Por Apenas:</p>
              <p className="text-[var(--color-primary)] font-display font-black text-6xl mb-2">R$ 9,90</p>
            </div>
            <div className="w-full max-w-sm mx-auto space-y-3 mb-8 text-left">
              {[
                "+400 Atividades de Grafismo Fonético",
                "+200 Atividades Extras de Alfabetização",
                "App para apoio",
                "Leitura progressiva por sílabas",
                "Jogo da Memória das Sílabas",
                "Garantia de 7 dias",
                "Acesso Imediato e Vitalício"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-[10px]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[var(--color-primary)] stroke-[3]" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm md:text-base tracking-tight leading-snug">{feat}</span>
                </div>
              ))}
            </div>
            <button onClick={(e) => handleCheckoutClick("premium", e)} id="offer-buy-button" className="w-full md:max-w-md bg-[var(--color-cta)] hover:opacity-90 text-[var(--color-on-action)] py-5 rounded-2xl text-xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-[var(--color-cta)]/30 animate-cta-pulse cursor-pointer">
              👉 Comprar Agora
            </button>
            <div className="mt-4 text-center">
              <p className="text-slate-600 font-bold text-sm mb-2 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--color-success)]" /> Compra 100% Segura e Protegida
              </p>
              <p className="text-slate-500 text-xs font-medium">Após a compra, você recebe acesso ao Material em PDF diretamente no seu E-mail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

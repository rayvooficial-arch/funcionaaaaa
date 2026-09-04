import React from "react";
import { handleCheckoutClick } from "../config";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-800 leading-[1.1] mb-8 tracking-tight">
          Comece a evolução na leitura <span className="text-[var(--color-primary)]">hoje mesmo!</span>
        </h2>
        <button onClick={(e) => handleCheckoutClick("premium", e)} className="bg-[var(--color-cta)] text-[var(--color-on-action)] hover:opacity-90 px-8 py-5 rounded-full text-xl font-bold transition-all inline-flex items-center justify-center shadow-xl shadow-[var(--color-cta)]/30 animate-cta-pulse cursor-pointer w-full md:w-auto">
          👉 QUERO APROVEITAR A OFERTA AGORA
        </button>
        <p className="mt-4 text-slate-500 font-bold text-sm">
          Acesso imediato após o pagamento
        </p>
      </div>
    </section>
  );
};

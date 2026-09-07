import React from "react";
import { handleCheckoutClick } from "../config";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-800 leading-[1.1] mb-6 tracking-tight">
          Seu filho não precisa sofrer para <span className="text-[var(--color-primary)]">aprender a ler.</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto">
          Dê a ele um caminho mais leve, visual e divertido para construir as bases da alfabetização.
        </p>
        <button onClick={(e) => handleCheckoutClick("premium", e)} className="bg-[var(--color-cta)] text-[var(--color-on-action)] hover:opacity-90 px-10 py-5 rounded-full text-xl font-bold transition-all inline-flex items-center justify-center shadow-xl shadow-[var(--color-cta)]/30 animate-cta-pulse cursor-pointer w-full md:w-auto">
          QUERO COMEÇAR AGORA
        </button>
      </div>
    </section>
  );
};

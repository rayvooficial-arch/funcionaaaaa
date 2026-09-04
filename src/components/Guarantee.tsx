import React from "react";
import { ShieldCheck } from "lucide-react";

export const Guarantee: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-slate-800 rounded-[40px] p-8 md:p-12 text-center shadow-lg border border-[var(--color-primary)]/20">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 leading-tight tracking-normal text-slate-800">
            Garantia de <span className="text-[var(--color-primary)]">7 dias</span>
          </h3>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium mb-8">
            Fique tranquilo! Você tem 7 dias para acessar o material, conhecer as atividades e avaliar se ele faz sentido para sua realidade. Se não gostar, devolvemos 100% do seu dinheiro.
          </p>
          <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto shadow-sm">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

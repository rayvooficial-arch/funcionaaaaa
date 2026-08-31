import React from "react";
import { ShieldCheck, ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { handleCheckoutClick } from "../config";

export const Guarantee: React.FC = () => {
  return (
    <section id="garantia" className="py-14 sm:py-20 bg-gradient-to-b from-[var(--color-bg-page)] via-[var(--color-bg-alt)] to-[var(--color-bg-page)] border-b border-[var(--color-border)] relative overflow-hidden">
      
      {/* Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-80 bg-[var(--color-success)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="bg-[var(--color-bg-card)] p-7 sm:p-10 rounded-[32px] border-3 border-[var(--color-success)]/30 shadow-xl text-center relative overflow-hidden">
          
          {/* Security Seal Icon */}
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[var(--color-success)] to-[var(--color-success-dark)] text-white mx-auto flex items-center justify-center mb-5 shadow-lg shadow-[var(--color-success)]/25">
            <ShieldCheck className="w-11 h-11" />
          </div>

          <div className="inline-block px-3.5 py-1 bg-[var(--color-success-bg)] text-[var(--color-success)] rounded-full text-xs font-black uppercase tracking-wider mb-2 border border-[var(--color-success)]/20">
            GARANTIA TOTAL DE SATISFAÇÃO
          </div>

          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[var(--color-text-title)] tracking-tight mb-3">
            7 DIAS PARA TESTAR SEM RISCO
          </h3>

          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-medium max-w-xl mx-auto leading-relaxed mb-6">
            Baixe todas as apostilas, imprima as atividades e experimente com seu filho. Se por qualquer motivo você achar que o método não é para ele, basta nos enviar um único e-mail para receber 100% do seu dinheiro de volta na hora. Sem perguntas e sem letras miúdas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleCheckoutClick()}
              className="btn-brand-cta w-full sm:w-auto px-8 py-4 font-display text-base sm:text-lg font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>EXPERIMENTAR POR 7 DIAS SEM RISCO</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[var(--color-text-muted)] font-bold">
            <Lock className="w-3.5 h-3.5 text-[var(--color-success)]" />
            <span>Transação Segura • Risco Zero para Você</span>
          </div>

        </div>

      </div>
    </section>
  );
};

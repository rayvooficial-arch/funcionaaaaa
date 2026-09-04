import React from "react";
import { HOW_IT_WORKS } from "../data";
import { CreditCard, Download, Printer, Smile, ArrowRight, CheckCircle2 } from "lucide-react";
import { StarSpark } from "./BrandDoodles";

export const HowItWorks: React.FC = () => {
  const iconMap = {
    CreditCard: CreditCard,
    Download: Download,
    Printer: Printer,
    Smile: Smile,
  };

  return (
    <section id="como-funciona" className="py-16 sm:py-24 border-b border-[var(--color-border)] relative overflow-hidden">
      
      {/* Background accents */}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-bg-card)] text-[var(--color-primary)] text-xs font-black uppercase tracking-wider mb-3 border border-[var(--color-primary)]/20 shadow-2xs">
            <StarSpark color="var(--color-primary)" size={14} />
            <span>PASSO A PASSO</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl md:text-[40px] font-black text-[var(--color-text-title)] tracking-tight leading-tight">
            Como funciona na prática
          </h2>
          <p className="text-xs sm:text-base text-[var(--color-text-secondary)] font-medium mt-2">
            Sem complicações. Em menos de 2 minutos você já tem acesso a todo o material.
          </p>
        </div>

        {/* 4 Clean Action Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {HOW_IT_WORKS.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || CreditCard;
            return (
              <div
                key={item.step}
                className="bg-[var(--color-bg-card)] p-6 rounded-[24px] border-2 border-[var(--color-border)] shadow-xs hover:border-[var(--color-primary)]/30 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-2xl text-[var(--color-text-muted)] opacity-60">
                      {item.step}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-lg text-[var(--color-text-title)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[var(--color-border)] text-[11px] font-bold text-[var(--color-text-muted)]">
                  {idx === 0 && "🔒 Pagamento 100% Seguro"}
                  {idx === 1 && "⚡ Imediato no seu e-mail"}
                  {idx === 2 && "🖨️ Imprima quando quiser"}
                  {idx === 3 && "🌟 5 a 10 min por dia"}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

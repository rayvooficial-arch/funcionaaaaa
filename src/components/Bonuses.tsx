import React from "react";
import { BONUS_BOOKS } from "../data";
import { Sparkles, Gift } from "lucide-react";
import { StarSpark } from "./BrandDoodles";

export const Bonuses: React.FC = () => {
  return (
    <section id="bonus" className="py-16 sm:py-24 bg-gradient-to-b from-[var(--color-bg-page)] via-[var(--color-bg-warm)] to-[var(--color-bg-page)] border-b border-[var(--color-border)] relative overflow-hidden">
      
      {/* Background festive glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[var(--color-yellow)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[var(--color-cta)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-[38px] font-extrabold text-[var(--color-text-title)] tracking-tight leading-snug max-w-3xl mx-auto">
            Com o kit completo você ainda recebe estes{" "}
            <span className="text-[var(--color-cta)] bg-[var(--color-cta)]/10 px-2.5 py-0.5 rounded-xl border border-[var(--color-cta)]/20 inline-block my-0.5">
              super bônus
            </span>{" "}
            para acelerar ainda mais o aprendizado!
          </h2>

          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-medium mt-3 max-w-xl mx-auto">
            Cada material complementar foi desenvolvido para acelerar o aprendizado e tornar os momentos de estudo ainda mais divertidos.
          </p>
        </div>

        {/* 2 Cards per Column Grid matching exact reference style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 mb-14 pt-4">
          {BONUS_BOOKS.map((bonus) => (
            <div
              key={bonus.id}
              className="relative bg-[var(--color-bg-card)] rounded-[26px] sm:rounded-[30px] border-2 border-dashed border-[var(--color-yellow)]/70 shadow-sm hover:shadow-xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              {/* Floating Top-Left "BÔNUS" Badge */}
              <div className="absolute -top-3.5 left-4 sm:left-6 z-10">
                <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[var(--color-cta)] text-white shadow-sm">
                  BÔNUS
                </span>
              </div>

              <div>
                {/* 3D Book Cover Visual Preview Container */}
                <div className="w-full aspect-square rounded-[20px] bg-[var(--color-bg-alt)]/70 flex items-center justify-center mb-4 mt-2 overflow-hidden border border-[var(--color-border)]">
                  {bonus.coverImage ? (
                    <img
                      src={bonus.coverImage}
                      alt={bonus.title}
                      width={400}
                      height={400}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className={`w-full h-full rounded-xl bg-gradient-to-br ${bonus.color} p-4 text-white flex flex-col justify-between shadow-md`}>
                      <span className="text-2xl">{bonus.icon}</span>
                      <div className="font-display font-black text-sm leading-tight">
                        {bonus.title}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bonus Title */}
                <h3 className="font-display font-black text-[var(--color-text-title)] text-base sm:text-lg leading-snug mb-1 text-left">
                  {bonus.title}
                </h3>

                {/* Bonus Description */}
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium leading-relaxed mb-3 text-left">
                  {bonus.description}
                </p>
              </div>

              {/* Price Row: De R$ XX,XX GRÁTIS */}
              <div className="pt-2 flex items-center text-left">
                <span className="text-xs sm:text-sm text-[var(--color-cta-dark)] font-bold line-through mr-2">
                  De {bonus.originalPrice}
                </span>
                <span className="text-xs sm:text-sm font-black text-[var(--color-success)] tracking-wide">
                  GRÁTIS
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Bonus Value Summary Card - Clean, responsive, no button */}
        <div className="bg-[var(--color-bg-card)]/90 backdrop-blur-xs border border-[var(--color-border)] p-5 sm:p-7 rounded-[24px] text-center max-w-xl mx-auto shadow-sm">
          <span className="text-[11px] sm:text-xs font-black text-[var(--color-primary)] uppercase tracking-widest block mb-1">
            ECONOMIA TOTAL HOJE
          </span>
          <div className="font-display text-xl sm:text-2xl font-black text-[var(--color-text-title)] leading-tight mb-2">
            Total em bônus: <span className="line-through text-[var(--color-text-muted)] font-bold text-base sm:text-lg">De R$ 168,40</span>{" "}
            por <span className="text-[var(--color-success)]">R$ 0,00</span>
          </div>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium leading-relaxed max-w-md mx-auto">
            Todos esses 6 materiais de apoio são liberados automaticamente no seu acesso sem nenhum custo adicional.
          </p>
        </div>

      </div>
    </section>
  );
};

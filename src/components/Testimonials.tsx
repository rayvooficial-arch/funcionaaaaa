import React from "react";
import { TESTIMONIALS } from "../data";
import { Star, MessageSquareHeart, CheckCircle2, Heart } from "lucide-react";
import { StarSpark } from "./BrandDoodles";

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-gradient-to-b from-[var(--color-bg-page)] via-[var(--color-bg-alt)] to-[var(--color-bg-page)] border-b border-[var(--color-border)] relative overflow-hidden">
      
      {/* Soft Maternal Ambient Glows */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-[var(--color-pink)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[var(--color-yellow)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-bg-card)] text-[var(--color-pink)] text-xs font-black uppercase tracking-wider mb-3 border border-[var(--color-pink)]/20 shadow-2xs">
            <Heart className="w-3.5 h-3.5 fill-[var(--color-pink)]" />
            <span>DEPOIMENTOS DE MÃES REAIS</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl md:text-[40px] font-extrabold text-[var(--color-text-title)] tracking-tight leading-tight max-w-2xl mx-auto">
            O que dizem as mães e educadoras que usam o método
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-medium mt-3 max-w-xl mx-auto">
            Histórias reais de famílias que transformaram a alfabetização em momentos de orgulho e leveza diária.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[var(--color-bg-card)] p-6 sm:p-7 rounded-[24px] border-2 border-[var(--color-border)] shadow-xs hover:border-[var(--color-pink)]/30 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3.5">
                  {Array.from({ length: t.stars || 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--color-yellow)] text-[var(--color-yellow)]" />
                  ))}
                  <span className="text-xs font-black text-[var(--color-yellow-dark)] ml-1.5">5.0</span>
                </div>

                {/* Highlight Quote */}
                <p className="font-display font-black text-[var(--color-text-title)] text-base sm:text-lg leading-snug mb-2.5">
                  “{t.highlight}”
                </p>

                {/* Full Body Text */}
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium leading-relaxed">
                  {t.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {t.image ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-pink)]/30 shadow-2xs shrink-0 bg-[var(--color-bg-alt)]">
                      <img
                        src={t.image}
                        alt={t.name}
                        width={48}
                        height={48}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    <div className={`w-11 h-11 rounded-full ${t.avatarBg} text-white font-black text-sm flex items-center justify-center shadow-2xs shrink-0`}>
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <div className="font-display font-bold text-sm text-[var(--color-text-title)] leading-tight">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-[var(--color-text-secondary)] font-medium">
                      {t.role} • {t.childInfo}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-black text-[var(--color-success)] bg-[var(--color-success-bg)] px-2.5 py-1 rounded-full border border-[var(--color-success)]/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)]" />
                  <span>Verificada</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

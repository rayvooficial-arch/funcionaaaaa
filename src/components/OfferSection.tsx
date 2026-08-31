import React from "react";
import { Star, ShieldCheck, Lock, Zap, ArrowDown, Check, Sparkles } from "lucide-react";
import { handleCheckoutClick } from "../config";
import imagemOfertaBasica from "../assets/images/mockup_livro_grafismo_fonetico_1788145969916.jpg";
import imagemPacoteCompleto from "../assets/images/9b00a708-b82d-4654-ac51-40dcbb85adcb.jpg";

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="py-14 sm:py-20 bg-[var(--color-bg-page)] relative overflow-hidden">
      <div className="max-w-xl mx-auto px-4 sm:px-6">

        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-block px-5 py-1.5 rounded-full bg-[var(--color-yellow-badge)] text-[var(--color-text-title)] text-xs font-black uppercase tracking-wider mb-3 border border-[var(--color-yellow)]/30 shadow-2xs">
            VALORES ESPECIAIS HOJE
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-[34px] font-black text-[var(--color-text-title)] leading-tight tracking-tight">
            Escolha o melhor plano para o seu filho
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium mt-2">
            Acesso digital imediato e vitalício. Imprima quantas vezes quiser!
          </p>
        </div>

        {/* STACKED PRICING CARDS */}
        <div className="space-y-10 sm:space-y-12">
          
          {/* CARD 1: KIT COMPLETO DE ALFABETIZAÇÃO (BÁSICO) */}
          <div className="relative bg-[var(--color-bg-card)] rounded-[32px] sm:rounded-[36px] border-2 border-[var(--color-success)]/40 shadow-[0_8px_30px_var(--color-shadow-neutral)] p-6 sm:p-8 flex flex-col items-center text-center">
            
            {/* Top Badge */}
            <div className="mb-3">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[var(--color-success-bg)] text-[var(--color-success)] border border-[var(--color-success)]/20">
                OFERTA BÁSICA
              </span>
            </div>

            {/* Plan Title */}
            <h3 className="font-display text-xl sm:text-2xl font-black text-[var(--color-text-title)] tracking-tight mb-2">
              Livro de Grafismo Fonético - Ler & Brincar
            </h3>

            {/* Stars & Reviews */}
            <div className="flex items-center justify-center gap-1 text-[var(--color-yellow)] mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[var(--color-yellow)] text-[var(--color-yellow)]" />
              ))}
              <span className="text-xs font-bold text-[var(--color-text-muted)] ml-1.5">
                4.9/5 • 380 mães aprovaram
              </span>
            </div>

            {/* Image Mockup */}
            <div className="w-full max-w-[340px] aspect-square rounded-2xl bg-[var(--color-bg-card)] flex items-center justify-center mb-6 shadow-sm border border-[var(--color-border)] overflow-hidden">
              <img
                id="img-oferta-basica"
                src={imagemOfertaBasica}
                alt="Kit Completo de Alfabetização - Ler & Brincar"
                width={400}
                height={400}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Features Checklist */}
            <div className="w-full space-y-2.5 mb-6 text-left max-w-sm mx-auto">
              {[
                "4 materiais progressivos completos",
                "+ de 150 atividades exclusivas",
                "+ de 300 páginas ilustradas",
                "Acesso vitalício",
                "7 dias de garantia",
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[var(--color-text-body)]">
                  <div className="w-5 h-5 rounded-full border-2 border-[var(--color-success)] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[var(--color-success)] stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Price Box */}
            <div className="mb-5 text-center">
              <span className="text-xs sm:text-sm text-[var(--color-text-muted)] font-bold line-through block">
                De R$ 47,90
              </span>
              <div className="font-display text-4xl sm:text-5xl font-black text-[var(--color-success)] tracking-tight my-1">
                R$ 22,90
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] font-medium flex items-center justify-center gap-1">
                <span>💳</span> Parcele em até 12x no cartão de crédito.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={(e) => handleCheckoutClick("basic", e)}
              className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[var(--color-success)] to-[var(--color-success-dark)] hover:brightness-105 text-[var(--color-on-action)] font-display font-black text-base sm:text-lg uppercase tracking-wide shadow-lg shadow-[var(--color-success)]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              QUERO COMEÇAR AGORA
            </button>

            <span className="text-[11px] text-[var(--color-text-muted)] font-semibold mt-2.5 block">
              Acesso liberado em minutos
            </span>

            {/* Notice / Upsell Banner */}
            <div className="mt-6 pt-5 border-t border-[var(--color-border)] text-center w-full">
              <p className="text-xs sm:text-sm font-bold text-[var(--color-cta)] flex items-center justify-center gap-1.5 flex-wrap">
                <span>🚨</span>
                <span>ATENÇÃO: Temos uma oferta ainda mais VANTAJOSA para você.</span>
                <span className="flex items-center gap-1">
                  Confira abaixo! <ArrowDown className="w-3.5 h-3.5 inline animate-bounce" />
                </span>
              </p>
            </div>
          </div>


          {/* CARD 2: KIT COMPLETO + 6 BÔNUS (MAIS VANTAJOSO / PRÊMIO) */}
          <div className="relative bg-[var(--color-bg-card)] rounded-[32px] sm:rounded-[36px] border-3 border-[var(--color-cta)] shadow-xl shadow-[var(--color-cta)]/15 p-6 sm:p-8 flex flex-col items-center text-center">
            
            {/* Top Floating Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="inline-flex items-center gap-1 px-5 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider bg-[var(--color-cta)] text-[var(--color-on-action)] shadow-md shadow-[var(--color-cta)]/30">
                <Sparkles className="w-3.5 h-3.5" />
                MAIS VANTAJOSO
              </span>
            </div>

            {/* Sub-badge */}
            <div className="mt-2 mb-3">
              <span className="inline-block px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[var(--color-cta-bg)] text-[var(--color-cta)] border border-[var(--color-cta)]/20">
                PACOTE COMPLETO
              </span>
            </div>

            {/* Plan Title */}
            <h3 className="font-display text-xl sm:text-2xl font-black text-[var(--color-text-title)] tracking-tight mb-2">
              Kit Completo - Livro de Grafismo Fonético - Ler & Brincar + 6 Bônus Exclusivos
            </h3>

            {/* Image Mockup */}
            <div className="w-full max-w-[340px] aspect-square rounded-2xl bg-[var(--color-bg-card)] flex items-center justify-center mb-4 border border-[var(--color-cta)]/20 shadow-sm overflow-hidden">
              <img
                id="img-pacote-completo"
                src={imagemPacoteCompleto}
                alt="Kit Completo + 6 Bônus Exclusivos"
                width={400}
                height={400}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Stars & Reviews */}
            <div className="flex items-center justify-center gap-1 text-[var(--color-yellow)] mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[var(--color-yellow)] text-[var(--color-yellow)]" />
              ))}
              <span className="text-xs font-bold text-[var(--color-text-secondary)] ml-1.5">
                4.9/5 • 920 mães aprovaram
              </span>
            </div>

            {/* Features Checklist */}
            <div className="w-full space-y-2.5 mb-6 text-left max-w-sm mx-auto">
              {[
                { text: "Livro de Grafismo Fonético", isMain: true },
                { text: "🎁 Bônus 1 — 30 Atividades Extras de Fixação" },
                { text: "🎁 Bônus 2 — Atividades para Colorir" },
                { text: "🎁 Bônus 3 — Certificados de Conquista" },
                { text: "🎁 Bônus 4 — Jogos de Alfabetização" },
                { text: "🎁 Bônus 5 — Cartões de Sílabas" },
                { text: "🎁 Bônus 6 — Kit de Apostilas Complementares" },
                { text: "Acesso vitalício + 7 dias de garantia", isMain: true },
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[var(--color-text-title)]">
                  <div className="w-5 h-5 rounded-full border-2 border-[var(--color-cta)] bg-[var(--color-cta-bg)] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[var(--color-cta)] stroke-[3]" />
                  </div>
                  <span className={feat.isMain ? "text-[var(--color-text-title)] font-extrabold" : "text-[var(--color-text-body)] font-semibold"}>
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Price Box */}
            <div className="mb-5 text-center">
              <span className="text-xs sm:text-sm text-[var(--color-text-muted)] font-bold line-through block">
                De R$ 97,00
              </span>
              <div className="font-display text-4xl sm:text-5xl font-black text-[var(--color-cta)] tracking-tight my-1">
                R$ 29,90
              </div>
              <span className="inline-block text-[11px] font-bold text-[var(--color-cta)] bg-[var(--color-cta-bg)] px-3 py-0.5 rounded-full mb-1">
                ⏳ Oferta por tempo limitado
              </span>
              <p className="text-xs text-[var(--color-text-secondary)] font-medium flex items-center justify-center gap-1">
                <span>💳</span> Parcele em até 12x no cartão de crédito.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={(e) => handleCheckoutClick("premium", e)}
              className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[var(--color-cta)] to-[var(--color-cta-light)] hover:brightness-105 text-[var(--color-on-action)] font-display font-black text-base sm:text-lg uppercase tracking-wide shadow-lg shadow-[var(--color-cta)]/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              QUERO O PACOTE PRÊMIO
            </button>

            <span className="text-[11px] text-[var(--color-text-muted)] font-semibold mt-2.5 block">
              Acesso liberado em minutos
            </span>
          </div>

        </div>

        {/* Bottom Trust & Security Bar */}
        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[var(--color-text-muted)]" />
            <span>Compra Segura</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[var(--color-success)]" />
            <span>7 dias de garantia</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[var(--color-yellow)]" />
            <span>Acesso imediato</span>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from "react";
import { ShieldCheck, Zap, Lock, Star, ArrowRight, Sparkles } from "lucide-react";
import { handleCheckoutClick, PRODUCT_INFO } from "../config";
import { BrandLogo } from "./BrandLogo";
import { CharacterAvatar } from "./BrandCharacters";
import { StarSpark, WavyDoodle } from "./BrandDoodles";
import { Hero3DBackground } from "./Hero3DBackground";
import heroImageAsset from "../assets/images/mockup_livro_grafismo_fonetico_1788145969916.jpg";
import avatar1 from "../assets/avatar-1.webp";
import avatar2 from "../assets/avatar-2.webp";
import avatar3 from "../assets/avatar-3.webp";
import avatar4 from "../assets/avatar-4.webp";
import avatarMaeFamilia from "../assets/images/juliana_barreto_depoimento_1788131852685.jpg";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-6 pb-14 sm:pt-10 sm:pb-24 overflow-hidden bg-gradient-to-b from-[var(--color-bg-alt)] via-[var(--color-bg-page)] to-[var(--color-bg-page)]"
    >
      {/* 3D Floating Toys & Elements with Depth Blur */}
      <Hero3DBackground />

      {/* Dynamic Background Halos & CSS Floating Elements */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[380px] bg-gradient-to-b from-[var(--color-primary)]/12 via-[var(--color-primary-light)]/10 to-transparent rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[var(--color-yellow)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[var(--color-pink)]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Star & Doodle Accents */}
      <div className="absolute top-12 left-8 pointer-events-none opacity-60 hidden md:block">
        <StarSpark color="var(--color-yellow)" size={32} className="animate-float-slow" />
      </div>
      <div className="absolute top-28 right-12 pointer-events-none opacity-60 hidden md:block">
        <StarSpark color="var(--color-pink)" size={28} className="animate-float-reverse" />
      </div>
      <div className="absolute top-1/2 left-4 pointer-events-none opacity-40 hidden lg:block">
        <WavyDoodle color="var(--color-primary-light)" />
      </div>
      <div className="absolute top-2/3 right-8 pointer-events-none opacity-40 hidden lg:block">
        <WavyDoodle color="var(--color-yellow)" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Brand Header */}
        <div className="mb-4 sm:mb-6">
          <BrandLogo size="md" />
        </div>

        {/* Main Headline with playful pedagogical identity highlight for 'confiança' */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[var(--color-text-title)] tracking-tight leading-[1.2] mb-5">
          Seu filho lendo com{" "}
          <span className="relative inline-block mx-1.5 align-baseline">
            {/* Soft Playful Cloud / Cushion Pill Backdrop */}
            <span
              className="absolute -inset-x-3 sm:-inset-x-4 -inset-y-1 sm:-inset-y-1.5 bg-gradient-to-r from-[var(--color-primary-bg)] via-[var(--color-yellow-light)] to-[var(--color-pink-light)] rounded-2xl sm:rounded-3xl border-2 border-[var(--color-primary)]/25 shadow-[0_4px_16px_var(--color-shadow-neutral)] -z-10"
              aria-hidden="true"
            />

            {/* Sparkle Star Decors on Corners */}
            <span className="absolute -top-3.5 -left-3 pointer-events-none hidden sm:block animate-float-slow">
              <StarSpark color="var(--color-primary)" size={18} />
            </span>
            <span className="absolute -top-3.5 -right-3 pointer-events-none hidden sm:block animate-wiggle">
              <StarSpark color="var(--color-yellow)" size={20} />
            </span>

            {/* Glowing & High-Contrast Typography */}
            <span className="relative z-10 font-black px-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-primary)] inline-block tracking-normal">
              confiança
            </span>

            {/* Playful Childlike Smile Arc Underline */}
            <svg
              className="absolute -bottom-2.5 sm:-bottom-3 left-1/2 -translate-x-1/2 w-[92%] h-3 sm:h-4 text-[var(--color-yellow)] pointer-events-none"
              viewBox="0 0 120 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Shadow arc */}
              <path
                d="M4 8C35 15 85 15 116 8"
                stroke="var(--color-highlight-strong)"
                strokeWidth="4.5"
                strokeLinecap="round"
                opacity="0.3"
              />
              {/* Primary vibrant solar arc */}
              <path
                d="M4 6C35 13 85 13 116 6"
                stroke="var(--color-highlight)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          em poucas semanas.
        </h1>

        {/* Subheadline with maximum clarity and clean reading rhythm */}
        <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-body)] font-normal leading-relaxed max-w-3xl mx-auto mb-8">
          <strong className="text-[var(--color-primary)] font-bold">Com apenas 10 minutos por dia</strong>, o Método Premium ajuda crianças de <strong className="text-[var(--color-text-title)] font-bold">4 a 8 anos</strong> a acelerar a alfabetização em até 5x, por meio de uma metodologia simples, divertida e fácil de aplicar em casa.
        </p>

        {/* 3D Floating Tangible Product Mockup (HERO CENTERPIECE) */}
        <div className="max-w-2xl mx-auto mb-8 relative">
          {/* Ambient Glow Behind Image */}
          <div className="absolute -inset-4 rounded-full blur-3xl -z-10 bg-gradient-to-r from-[var(--color-primary)]/25 via-[var(--color-primary-light)]/20 to-[var(--color-success)]/25 animate-glow-pulse opacity-80" />

          {/* Floating 3D Image Wrapper */}
          <div className="relative animate-hero-float transition-transform duration-300 hover:scale-[1.02]">
            {/* Top-Right Badge: KIT COMPLETO IMPRIMÍVEL (50% inside, 50% outside) */}
            <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-30 pointer-events-none">
              <div className="bg-gradient-to-r from-[var(--color-cta)] via-[var(--color-cta-dark)] to-[var(--color-cta-dark)] text-[var(--color-on-action)] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-black text-[11px] sm:text-xs md:text-sm tracking-wide shadow-xl shadow-[var(--color-cta)]/35 border-2 border-[var(--color-overlay-border)] flex items-center gap-1.5 whitespace-nowrap animate-wiggle">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-yellow-light)] fill-[var(--color-yellow-light)] shrink-0" />
                <span>KIT COMPLETO IMPRIMÍVEL</span>
              </div>
            </div>

            {/* Mascot Speech Floating Bubble */}
            <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:left-4 z-20 hidden sm:flex items-center gap-2.5 bg-[var(--color-bg-card)]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[var(--color-primary)]/20 shadow-lg animate-float-slow">
              <CharacterAvatar id="leo" size="sm" />
              <div className="text-left">
                <span className="text-[10px] font-black uppercase text-[var(--color-primary)] block tracking-wider">Turminha Ler & Brincar</span>
                <span className="text-xs font-bold text-[var(--color-text-title)]">"Aprender a ler é muito divertido!"</span>
              </div>
            </div>

            {/* Pure Floating Image with 3D Depth Shadows */}
            <img
              src={heroImageAsset}
              alt="Método Premium de Alfabetização - Atividades e Cadernos Completos"
              width={640}
              height={420}
              className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl filter drop-shadow-[0_20px_35px_var(--color-shadow-neutral)]"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          {/* 3D Floor Shadow under the floating product */}
          <div className="w-[80%] h-5 mx-auto bg-[var(--color-surface-dark)]/15 rounded-[100%] blur-md -mt-2 animate-glow-pulse pointer-events-none" />
        </div>

        {/* Social Stars Rating */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3">
          <div className="flex text-[var(--color-yellow)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[var(--color-yellow)] text-[var(--color-yellow)]" />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-extrabold text-[var(--color-text-body)]">
            4,9/5 com base em 1.292 avaliações de mães e pedagogas
          </span>
        </div>

        {/* Social Proof Pill Badge with Real Customer Profile Photos */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--color-bg-card)]/95 backdrop-blur-xs border border-[var(--color-primary)]/20 shadow-sm text-xs sm:text-sm font-bold text-[var(--color-text-body)] mb-6">
          <div className="flex items-center -space-x-2 shrink-0">
            <img
              src={avatar1}
              alt="Mãe aluna"
              width={28}
              height={28}
              className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-[var(--color-bg-card)] object-cover shadow-2xs"
              loading="lazy"
              decoding="async"
            />
            <img
              src={avatarMaeFamilia}
              alt="Mãe aluna"
              width={28}
              height={28}
              className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-[var(--color-bg-card)] object-cover shadow-2xs"
              loading="lazy"
              decoding="async"
            />
            <img
              src={avatar3}
              alt="Pai aluno"
              width={28}
              height={28}
              className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-[var(--color-bg-card)] object-cover shadow-2xs"
              loading="lazy"
              decoding="async"
            />
            <img
              src={avatar4}
              alt="Educador"
              width={28}
              height={28}
              className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-[var(--color-bg-card)] object-cover shadow-2xs"
              loading="lazy"
              decoding="async"
            />
            <img
              src={avatar2}
              alt="Mãe aluna"
              width={28}
              height={28}
              className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-[var(--color-bg-card)] object-cover shadow-2xs"
              loading="lazy"
              decoding="async"
            />
          </div>
          <span>Método aprovado por <strong className="text-[var(--color-primary)]">+1.200 famílias</strong></span>
          <StarSpark color="var(--color-yellow)" size={16} />
        </div>

        {/* Pricing Box & High-Conversion Action */}
        <div className="max-w-md mx-auto bg-[var(--color-bg-card)] p-6 sm:p-8 rounded-[28px] border-2 border-[var(--color-primary)]/20 shadow-xl shadow-[var(--color-primary)]/10 card-brand text-center relative overflow-hidden">
          
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="text-sm sm:text-base text-[var(--color-text-muted)] line-through font-semibold">
              DE R$ 47,90
            </span>
            <span className="text-xs font-black uppercase px-2.5 py-0.5 bg-[var(--color-success-bg)] text-[var(--color-success)] rounded-full border border-[var(--color-success)]/20">
              Economize 52%
            </span>
          </div>

          <div className="mb-2">
            <span className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider block mb-1">
              POR APENAS
            </span>
            <div className="font-display text-4xl sm:text-5xl font-black text-[var(--color-text-title)] tracking-tight">
              R$ 22,90
            </div>
            <span className="text-xs text-[var(--color-text-secondary)] font-semibold block mt-1">
              ou em até 3x de R$ 8,15 • Pagamento único
            </span>
          </div>

          {/* High-Conversion Orange CTA Button with Continuous Subtle Pulse & Shimmer */}
          <button
            onClick={() => {
              const offerSection = document.getElementById("oferta");
              if (offerSection) {
                offerSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            id="hero-cta-button"
            className="btn-brand-cta w-full mt-4 py-4 px-6 font-display text-lg sm:text-xl font-extrabold tracking-wide flex items-center justify-center gap-2.5 cursor-pointer animate-cta-pulse relative overflow-hidden"
          >
            <div className="shimmer-overlay" />
            <span className="relative z-10">QUERO COMEÇAR AGORA</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
          </button>

          {/* Trust Guarantees */}
          <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-[var(--color-text-secondary)] font-bold flex-wrap">
            <span className="inline-flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[var(--color-success)]" /> Pagamento seguro
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-[var(--color-yellow)]" /> Acesso imediato
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-primary)]" /> 7 dias de garantia
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};


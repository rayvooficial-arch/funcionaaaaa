import React from "react";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Zap, 
  Star, 
  CheckCircle2, 
  Download,
  Gift
} from "lucide-react";
import { handleCheckoutClick } from "../config";
import { StarSpark, WavyDoodle } from "./BrandDoodles";
import { CharactersSquad } from "./BrandCharacters";

export const FinalCTA: React.FC = () => {
  return (
    <section 
      id="final-cta" 
      aria-label="Chamada Final para Alfabetização"
      className="py-16 sm:py-24 bg-[var(--color-bg-page)] relative overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[var(--color-primary-bg)]/80 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Final CTA Card Container */}
        <div className="bg-gradient-to-b from-[var(--color-primary-dark)] to-[var(--color-bg-dark)] text-white rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 md:p-14 shadow-2xl shadow-[var(--color-primary)]/20 border-2 border-[var(--color-primary-light)]/30 relative overflow-hidden text-center">
          
          {/* Subtle Star / Doodles inside card */}
          <div className="absolute top-6 left-8 opacity-40 hidden sm:block">
            <StarSpark color="var(--color-yellow)" size={26} />
          </div>
          <div className="absolute bottom-8 right-8 opacity-40 hidden sm:block">
            <WavyDoodle color="var(--color-pink-light)" />
          </div>
          <div className="absolute top-12 right-12 opacity-30 hidden md:block">
            <StarSpark color="var(--color-yellow-light)" size={18} />
          </div>

          {/* Squad / Mascot Floating Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-white mb-6">
            <CharactersSquad className="scale-75 -mr-1" />
            <span className="text-[var(--color-yellow)] font-black">Turminha Ler & Brincar</span>
            <span className="text-white/70 hidden sm:inline">• Prontos para começar</span>
          </div>

          {/* Main Action Headline */}
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight max-w-2xl mx-auto mb-4 text-white">
            Destrave a leitura do seu filho com apenas{" "}
            <span className="text-[var(--color-yellow)] underline decoration-[var(--color-cta)] decoration-wavy decoration-2">
              10 minutos por dia
            </span>
          </h2>

          {/* Supportive Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/85 font-normal max-w-xl mx-auto mb-8 leading-relaxed">
            Mais de <strong className="text-white font-bold">1.200 famílias</strong> já transformaram o aprendizado em um momento leve, divertido e sem estresse.
          </p>

          {/* Summary Checklist of Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 text-xs sm:text-sm font-bold text-white/90">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-success-light)] shrink-0" />
              <span>+300 páginas prontas para imprimir</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <Gift className="w-4 h-4 text-[var(--color-yellow)] shrink-0" />
              <span>6 Super Bônus Inclusos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <Zap className="w-4 h-4 text-[var(--color-cta-light)] shrink-0" />
              <span>Acesso Imediato & Vitalício</span>
            </div>
          </div>

          {/* Pricing Highlight Box inside CTA */}
          <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 mb-8">
            <div className="text-xs text-white/75 uppercase tracking-widest font-bold">
              Pacote Completo + Todos os 6 Bônus
            </div>
            <div className="flex items-baseline justify-center gap-2 mt-0.5">
              <span className="text-xs sm:text-sm text-white/60 line-through font-semibold">
                De R$ 97,00
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white">
                Por R$ 29,90
              </span>
              <span className="text-xs text-[var(--color-yellow)] font-bold">
                (pagamento único)
              </span>
            </div>
          </div>

          {/* Primary Big CTA Action Button */}
          <div className="max-w-md mx-auto space-y-3">
            <button
              onClick={(e) => handleCheckoutClick("premium", e)}
              id="btn-final-cta-checkout"
              className="w-full py-4 sm:py-5 px-8 rounded-full bg-gradient-to-r from-[var(--color-cta)] to-[var(--color-cta-light)] hover:brightness-110 text-white font-display font-black text-base sm:text-xl uppercase tracking-wider shadow-2xl shadow-[var(--color-cta)]/50 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-3 group"
            >
              <Sparkles className="w-5 h-5 fill-white" />
              <span>QUERO GARANTIR MEU ACESSO</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Instant Delivery Notice */}
            <p className="text-xs text-white/80 font-medium flex items-center justify-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-[var(--color-yellow)]" />
              <span>Receba o acesso em PDF no seu e-mail em menos de 2 minutos</span>
            </p>
          </div>

          {/* Trust Guarantees Footer Row */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-white/75">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[var(--color-success-light)]" />
              <span>Garantia Incondicional de 7 Dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[var(--color-yellow)]" />
              <span>Pagamento 100% Protegido</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-[var(--color-yellow)] text-[var(--color-yellow)]" />
              <span>Satisfação Comprovada</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

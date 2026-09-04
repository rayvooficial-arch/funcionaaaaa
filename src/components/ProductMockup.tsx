import React from "react";
import { Sparkles, CheckCircle2, Award, Star, BookOpen, Layers, Gift } from "lucide-react";
import { StarSpark } from "./BrandDoodles";

interface ProductMockupProps {
  size?: "large" | "medium" | "compact";
  className?: string;
}

export const ProductMockup: React.FC<ProductMockupProps> = ({ size = "large", className = "" }) => {
  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
      {/* Background Soft Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-primary)]/15 via-[var(--color-primary-light)]/15 to-[var(--color-success)]/15 rounded-3xl blur-2xl -z-10 transform scale-95" />

      {/* Container with tactile card backdrop */}
      <div className="relative bg-[var(--color-bg-card)] p-4 sm:p-7 rounded-[28px] border-2 border-[var(--color-primary)]/20 shadow-xl shadow-[var(--color-primary)]/10 overflow-hidden">
        
        {/* Floating Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--color-border)]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary-bg)] text-[var(--color-primary)] text-xs font-bold tracking-wide">
            <StarSpark color="var(--color-primary)" size={14} />
            <span>MÉTODO COMPLETO 6 EM 1</span>
          </div>
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-success-bg)] text-[var(--color-success)] text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Pronto para Imprimir</span>
          </div>
        </div>

        {/* The Visual Bundle Representation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 pt-2">
          
          {/* Caderno 1 */}
          <div className="group relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white p-3 sm:p-4 rounded-2xl shadow-md transform hover:-translate-y-1 transition-all flex flex-col justify-between aspect-[3/4] border border-white/30">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-extrabold/25 px-2 py-0.5 rounded-md backdrop-blur-xs">
                VOL. 01
              </span>
              <span className="text-lg">🔤</span>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold opacity-90">Caderno 01</div>
              <div className="font-display font-bold text-sm sm:text-base leading-tight mt-0.5">
                Letras & Alfabeto
              </div>
              <div className="text-[10px] text-white/80 mt-1 line-clamp-1">A ao Z + Sons</div>
            </div>
            <div className="text-[9px] bg-black/15 rounded px-1.5 py-0.5 font-mono text-center">
              Reconhecimento
            </div>
          </div>

          {/* Caderno 2 */}
          <div className="group relative bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary-dark)] text-white p-3 sm:p-4 rounded-2xl shadow-md transform hover:-translate-y-1 transition-all flex flex-col justify-between aspect-[3/4] border border-white/30">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-extrabold/25 px-2 py-0.5 rounded-md backdrop-blur-xs">
                VOL. 02
              </span>
              <span className="text-lg">🎨</span>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold opacity-90">Caderno 02</div>
              <div className="font-display font-bold text-sm sm:text-base leading-tight mt-0.5">
                Sons das Vogais
              </div>
              <div className="text-[10px] text-white/80 mt-1 line-clamp-1">A, E, I, O, U</div>
            </div>
            <div className="text-[9px] bg-black/15 rounded px-1.5 py-0.5 font-mono text-center">
              Consciência Sonora
            </div>
          </div>

          {/* Caderno 3 */}
          <div className="group relative bg-gradient-to-br from-[var(--color-pink)] to-[var(--color-pink-dark)] text-white p-3 sm:p-4 rounded-2xl shadow-md transform hover:-translate-y-1 transition-all flex flex-col justify-between aspect-[3/4] border border-white/30">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-extrabold/25 px-2 py-0.5 rounded-md backdrop-blur-xs">
                VOL. 03
              </span>
              <span className="text-lg">🧩</span>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold opacity-90">Caderno 03</div>
              <div className="font-display font-bold text-sm sm:text-base leading-tight mt-0.5">
                Famílias Silábicas
              </div>
              <div className="text-[10px] text-white/80 mt-1 line-clamp-1">Sílabas Simples</div>
            </div>
            <div className="text-[9px] bg-black/15 rounded px-1.5 py-0.5 font-mono text-center">
              Construção
            </div>
          </div>

          {/* Caderno 4 */}
          <div className="group relative bg-gradient-to-br from-[var(--color-yellow)] to-[var(--color-cta)] text-[var(--color-text-title)] p-3 sm:p-4 rounded-2xl shadow-md transform hover:-translate-y-1 transition-all flex flex-col justify-between aspect-[3/4] border border-white/40">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-extrabold bg-black/10 px-2 py-0.5 rounded-md">
                VOL. 04
              </span>
              <span className="text-lg">📖</span>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold opacity-90">Caderno 04</div>
              <div className="font-display font-bold text-sm sm:text-base leading-tight mt-0.5">
                Formação de Palavras
              </div>
              <div className="text-[10px] text-[var(--color-text-body)] mt-1 line-clamp-1">Recorte & Escrita</div>
            </div>
            <div className="text-[9px] bg-black/10 rounded px-1.5 py-0.5 font-mono text-center font-bold">
              Vocabulário
            </div>
          </div>

          {/* Caderno 5 */}
          <div className="group relative bg-gradient-to-br from-[var(--color-success)] to-[var(--color-success-dark)] text-white p-3 sm:p-4 rounded-2xl shadow-md transform hover:-translate-y-1 transition-all flex flex-col justify-between aspect-[3/4] border border-white/30">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-extrabold/25 px-2 py-0.5 rounded-md backdrop-blur-xs">
                VOL. 05
              </span>
              <span className="text-lg">⭐</span>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold opacity-90">Caderno 05</div>
              <div className="font-display font-bold text-sm sm:text-base leading-tight mt-0.5">
                Primeiras Leituras
              </div>
              <div className="text-[10px] text-white/80 mt-1 line-clamp-1">Frases & Textinhos</div>
            </div>
            <div className="text-[9px] bg-black/15 rounded px-1.5 py-0.5 font-mono text-center">
              Fluência
            </div>
          </div>

          {/* Caderno 6 */}
          <div className="group relative bg-gradient-to-br from-[var(--color-cta)] to-[var(--color-cta-dark)] text-white p-3 sm:p-4 rounded-2xl shadow-md transform hover:-translate-y-1 transition-all flex flex-col justify-between aspect-[3/4] border border-white/30">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-extrabold/25 px-2 py-0.5 rounded-md backdrop-blur-xs">
                VOL. 06
              </span>
              <span className="text-lg">🏆</span>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold opacity-90">Caderno 06</div>
              <div className="font-display font-bold text-sm sm:text-base leading-tight mt-0.5">
                Jogos & Desafios
              </div>
              <div className="text-[10px] text-white/80 mt-1 line-clamp-1">Cruzadinhas & Caça</div>
            </div>
            <div className="text-[9px] bg-black/15 rounded px-1.5 py-0.5 font-mono text-center">
              Autonomia
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

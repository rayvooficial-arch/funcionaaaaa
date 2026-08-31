import React from "react";
import { ShieldCheck, Lock } from "lucide-react";
import { PRODUCT_INFO } from "../config";
import { BrandLogo } from "./BrandLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-bg-footer)] text-white/80 py-10 pb-24 sm:pb-12 text-xs border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10 text-center sm:text-left">
          
          <BrandLogo size="sm" />

          <div className="flex items-center gap-4 text-[11px] text-white/70">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-[var(--color-success)]" /> Compra Segura
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[var(--color-primary-light)]" /> 7 Dias de Garantia
            </span>
          </div>

        </div>

        <div className="pt-6 text-center space-y-2 text-[11px] text-white/60 max-w-2xl mx-auto">
          <p>
            Este produto não garante a obtenção de resultados específicos sem a prática regular das atividades sugeridas. O desenvolvimento de cada criança varia de acordo com seu ritmo individual e frequência de estímulos.
          </p>
          <p className="text-white/40 text-[10px] leading-relaxed">
            Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da META PLATFORMS, INC.
          </p>
          <p className="text-white/40 pt-1">
            © {new Date().getFullYear()} {PRODUCT_INFO.name} — Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

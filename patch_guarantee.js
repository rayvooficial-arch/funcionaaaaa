import fs from 'fs';
const newGuarantee = `import React from "react";
import { ShieldCheck } from "lucide-react";

export const Guarantee: React.FC = () => {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto bg-white text-slate-800 rounded-[40px] p-8 md:p-12 text-center shadow-2xl border-2 border-[var(--color-primary)] relative overflow-hidden group">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-[80px] pointer-events-none transition-transform group-hover:scale-110 duration-700" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 uppercase leading-tight tracking-normal text-slate-800">
              Garantia de <span className="text-[var(--color-primary)]">7 dias</span>
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium mb-8">
              Fique tranquilo! Você tem 7 dias para acessar o material, conhecer as atividades e avaliar se ele faz sentido para sua realidade. Se não gostar, devolvemos 100% do seu dinheiro.
            </p>
            
            <div className="max-w-md mx-auto bg-white border-2 border-[var(--color-primary)]/20 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <p className="text-slate-700 text-sm md:text-base font-bold leading-tight text-left">
                Risco Zero: Garantia incondicional de 7 dias
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
`;
fs.writeFileSync('src/components/Guarantee.tsx', newGuarantee);

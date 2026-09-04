import React from "react";
import { CheckCircle2, PlusCircle, Smartphone, Gamepad2, ShieldCheck, Infinity as InfinityIcon } from "lucide-react";

export const BenefitsSection: React.FC = () => {
  const benefits = [
    { icon: CheckCircle2, title: "+400 Atividades de Grafismo Fonético" },
    { icon: PlusCircle, title: "+200 Atividades Extras de Alfabetização" },
    { icon: Smartphone, title: "App de Apoio com Leitura Progressiva" },
    { icon: Gamepad2, title: "Jogo da Memória das Sílabas" },
    { icon: ShieldCheck, title: "Garantia Incondicional de 7 dias" },
    { icon: InfinityIcon, title: "Acesso Imediato e Vitalício" }
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-10 font-bold text-slate-800 tracking-tight uppercase">
            O QUE VOCÊ <span className="text-[var(--color-primary)]">RECEBE?</span>
          </h2>
          <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-3xl mx-auto">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3 md:gap-4">
                  <div className="bg-[var(--color-primary)]/10 p-3 rounded-xl">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-slate-800 leading-snug">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

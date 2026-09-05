import React from "react";
import { CheckCircle2, TrendingUp, Smile } from "lucide-react";

export const BenefitsSection: React.FC = () => {
  const benefits = [
    { icon: CheckCircle2, title: "+400 atividades de grafismo fonético organizadas" },
    { icon: TrendingUp, title: "Evolução passo a passo, do básico até a leitura" },
    { icon: Smile, title: "Método simples que a criança entende e aplica" }
  ];

  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-10 font-bold text-slate-800 tracking-tight">
            O que você vai <span className="text-[var(--color-primary)]">receber</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4">
                  <div className="bg-[var(--color-primary)]/10 p-3 rounded-xl">
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 leading-snug">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

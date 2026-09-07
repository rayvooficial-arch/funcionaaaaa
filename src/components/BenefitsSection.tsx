import React from "react";
import { CheckCircle2 } from "lucide-react";

export const BenefitsSection: React.FC = () => {
  const benefits = [
    "Mais familiaridade com letras e sons",
    "Desenvolvimento da consciência fonológica",
    "Formação de sílabas e palavras",
    "Coordenação motora e grafismo",
    "Mais confiança durante as atividades",
    "Mais interesse pelo aprendizado",
    "Atividades para aprender brincando"
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
              <CheckCircle2 className="w-8 h-8 text-[#4B9C49] flex-shrink-0" />
              <span className="text-slate-700 font-bold text-lg">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

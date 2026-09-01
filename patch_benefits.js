import fs from 'fs';
const newBenefits = `import React from "react";
import { PenTool, Brain, Sparkles, BookOpen, Smile, Star } from "lucide-react";

const benefits = [
  {
    icon: PenTool,
    title: "Coordenação Motora",
    desc: "Atividades que desenvolvem a firmeza e precisão no traço da criança."
  },
  {
    icon: Brain,
    title: "Desenvolvimento Cognitivo",
    desc: "Exercícios pensados para estimular o raciocínio e a atenção."
  },
  {
    icon: Smile,
    title: "Aprendizado Divertido",
    desc: "Método lúdico que prende a atenção e faz a criança gostar de aprender."
  },
  {
    icon: BookOpen,
    title: "Introdução à Leitura",
    desc: "Primeiros passos para o reconhecimento de letras e formação de palavras."
  },
  {
    icon: Star,
    title: "Autoestima",
    desc: "Pequenas vitórias diárias que geram confiança na criança."
  },
  {
    icon: Sparkles,
    title: "Criatividade",
    desc: "Espaço livre para expressar imaginação através do grafismo."
  }
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 font-bold text-slate-800 tracking-tight">
            Veja o que as crianças <span className="text-[var(--color-primary)]">vão aprender</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center gap-4 border-2 border-[var(--color-primary)]/20 hover:border-[var(--color-primary)] transition-all group">
                  <div className="bg-[var(--color-primary)]/10 p-3 rounded-xl group-hover:bg-[var(--color-primary)]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
`;
fs.writeFileSync('src/components/BenefitsSection.tsx', newBenefits);

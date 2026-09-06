import React from "react";
import { Eye, Puzzle, BookOpen } from "lucide-react";
import { scrollToOffer } from "../config";

export const SolutionSection: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "RECONHECER",
      desc: "Letras, imagens, padrões e sons.",
      icon: Eye,
      bgClass: "bg-indigo-50/70",
      iconBgClass: "bg-indigo-100",
      textClass: "text-indigo-500",
    },
    {
      id: "02",
      title: "CONSTRUIR",
      desc: "Sílabas, palavras e associações.",
      icon: Puzzle,
      bgClass: "bg-emerald-50/70",
      iconBgClass: "bg-emerald-100",
      textClass: "text-emerald-500",
    },
    {
      id: "03",
      title: "LER",
      desc: "Praticar a leitura gradualmente e ganhar confiança.",
      icon: BookOpen,
      bgClass: "bg-blue-50/70",
      iconBgClass: "bg-blue-100",
      textClass: "text-blue-500",
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 tracking-tight">
          Foi por isso que criamos o <span className="text-[#4B9C49]">Ler & Brincar.</span>
        </h2>
        
        <p className="text-slate-600 font-medium mb-12 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Um caminho de atividades progressivas para ajudar a criança a desenvolver as habilidades necessárias para começar a ler — de forma leve, visual e no ritmo dela.
        </p>

        <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`w-full flex items-center p-4 md:p-6 rounded-3xl ${step.bgClass} shadow-sm border border-slate-50`}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl flex flex-col items-center justify-center ${step.iconBgClass} mr-5 md:mr-6 shadow-sm`}>
                <span className={`text-xs font-black opacity-60 mb-1 ${step.textClass}`}>{step.id}</span>
                <step.icon className={`w-6 h-6 md:w-8 md:h-8 ${step.textClass}`} strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <h3 className={`font-black text-lg md:text-xl tracking-tight mb-1 ${step.textClass}`}>
                  {step.title}
                </h3>
                <p className="text-slate-700 text-base md:text-lg font-medium leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 mb-10 text-left space-y-4 shadow-sm max-w-2xl mx-auto">
          <p className="text-slate-700 font-medium text-lg leading-relaxed">
            Em vez de simplesmente entregar mais exercícios, o Ler & Brincar organiza a jornada de aprendizagem para que cada pequena conquista prepare a próxima.
          </p>
          <p className="text-slate-700 font-medium text-lg leading-relaxed">
            Assim, você não precisa ficar procurando atividades diferentes todos os dias. Você já tem um caminho organizado para acompanhar seu filho em casa.
          </p>
        </div>

        <button onClick={(e) => scrollToOffer(e)} className="bg-[var(--color-cta)] text-[var(--color-on-action)] hover:opacity-90 px-10 py-5 rounded-full text-xl md:text-2xl font-bold transition-all inline-flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-[var(--color-cta)]/30 animate-cta-pulse w-full md:w-auto">
          QUERO COMEÇAR AGORA
        </button>

      </div>
    </section>
  );
};

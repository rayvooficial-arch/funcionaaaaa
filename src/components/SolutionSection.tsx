import React from "react";
import { Eye, Link, Puzzle, BookOpen, ArrowDown } from "lucide-react";
import { scrollToOffer } from "../config";

export const SolutionSection: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "RECONHECER",
      icon: Eye,
      bgClass: "bg-indigo-50/70",
      iconBgClass: "bg-indigo-100",
      textClass: "text-indigo-500",
    },
    {
      id: "02",
      title: "ASSOCIAR",
      icon: Link,
      bgClass: "bg-amber-50/70",
      iconBgClass: "bg-amber-100",
      textClass: "text-amber-500",
    },
    {
      id: "03",
      title: "FORMAR",
      icon: Puzzle,
      bgClass: "bg-emerald-50/70",
      iconBgClass: "bg-emerald-100",
      textClass: "text-emerald-500",
    },
    {
      id: "04",
      title: "LER",
      icon: BookOpen,
      bgClass: "bg-blue-50/70",
      iconBgClass: "bg-blue-100",
      textClass: "text-blue-500",
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        {/* MECANISMO */}
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 tracking-tight leading-tight">
          A alfabetização não começa quando a criança começa a ler.
        </h2>
        
        <p className="text-slate-600 font-medium mb-12 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Antes de formar palavras, a criança precisa aprender a reconhecer, associar e organizar informações.
        </p>

        <div className="flex flex-col items-center mb-10">
          {steps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <div
                className={`w-full max-w-md flex items-center p-4 rounded-3xl ${step.bgClass} shadow-sm border border-slate-50`}
              >
                <div className={`w-14 h-14 shrink-0 rounded-2xl flex flex-col items-center justify-center ${step.iconBgClass} mr-4 shadow-sm`}>
                  <step.icon className={`w-6 h-6 ${step.textClass}`} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <h3 className={`font-black text-lg md:text-xl tracking-tight ${step.textClass}`}>
                    {step.title}
                  </h3>
                </div>
              </div>
              
              {/* Seta entre os passos */}
              {idx < steps.length - 1 && (
                <div className="py-3">
                  <ArrowDown className="w-6 h-6 text-slate-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 mb-16 text-center shadow-sm max-w-2xl mx-auto">
          <p className="text-slate-700 font-black text-xl md:text-2xl leading-snug">
            O problema não é simplesmente fazer a criança ler mais. É ajudá-la a construir o caminho até a leitura.
          </p>
        </div>

        {/* SOLUÇÃO */}
        <div className="pt-8 border-t border-slate-100">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 tracking-tight leading-tight">
            Foi para tornar esse caminho mais simples que nasceu o <span className="text-[#4B9C49]">Ler & Brincar.</span>
          </h2>
          
          <p className="text-slate-600 font-medium mb-10 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Em vez de transformar a alfabetização em uma obrigação, o Ler & Brincar transforma o aprendizado em uma experiência mais visual, prática e divertida.
          </p>

          <button onClick={(e) => scrollToOffer(e)} className="bg-[var(--color-cta)] text-[var(--color-on-action)] hover:opacity-90 px-10 py-5 rounded-full text-xl md:text-2xl font-bold transition-all inline-flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-[var(--color-cta)]/30 animate-cta-pulse w-full md:w-auto">
            QUERO CONHECER O MÉTODO
          </button>
        </div>

      </div>
    </section>
  );
};

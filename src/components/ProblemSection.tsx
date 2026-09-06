import React from "react";
import { AlertCircle } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const problems = [
    "A criança perde o interesse rapidamente.",
    "Confunde letras ou sons.",
    "Tem dificuldade para juntar sílabas.",
    "A hora da atividade vira uma briga.",
    "Fica frustrada quando não consegue acompanhar.",
    "Começa a se comparar com outras crianças."
  ];

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl mb-8 font-black text-slate-800 tracking-tight leading-tight">
          Quando aprender a ler começa a virar um <span className="text-pink-500">problema dentro de casa...</span>
        </h2>
        
        <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-slate-100 text-left mb-8">
          <ul className="space-y-4 mb-8">
            {problems.map((problem, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <AlertCircle className="w-5 h-5 text-pink-400" />
                </div>
                <span className="text-slate-700 font-medium text-lg md:text-xl leading-snug">
                  {problem}
                </span>
              </li>
            ))}
          </ul>

          <div className="space-y-6 text-slate-600 text-lg md:text-xl font-medium leading-relaxed border-t border-slate-100 pt-8">
            <p className="text-slate-700 font-bold text-xl md:text-2xl">
              E aos poucos, o que deveria ser uma descoberta começa a parecer uma obrigação.
            </p>
            <p className="font-medium">
              Mas isso não significa que seu filho não seja capaz de aprender.
            </p>
            <p className="font-medium">
              Muitas vezes, o que falta não é inteligência ou esforço. É uma forma de apresentar as primeiras etapas da leitura que <span className="text-[#4B9C49] font-bold">respeite o ritmo da criança</span> e transforme o aprendizado em pequenas descobertas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { AlertCircle } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const problems = [
    "A criança confunde letras;",
    "Troca sons;",
    "Tem dificuldade para juntar sílabas;",
    "Esquece o que acabou de aprender;",
    "Perde o interesse rapidamente;",
    "Não quer fazer atividades;",
    "Começa a ficar frustrada;",
    "Chora ou se irrita durante o momento da alfabetização;",
    "Evita livros e atividades;",
    "Enquanto outras crianças parecem avançar mais rápido."
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
            <p className="text-slate-700 font-bold text-xl md:text-2xl text-center">
              "Eu não consigo." <br className="hidden md:block"/> "Eu não sei." <br className="hidden md:block"/> "Eu não quero fazer."
            </p>
            <div className="bg-pink-50 rounded-2xl p-6 my-8 text-center border border-pink-100">
              <p className="text-pink-600 font-black text-2xl md:text-3xl tracking-tight leading-tight">
                Mas talvez o problema não seja falta de capacidade.
              </p>
            </div>
            <p className="font-medium text-center">
              Talvez a criança simplesmente ainda não tenha construído algumas das bases que tornam a leitura mais fácil de compreender.
            </p>
            <p className="font-bold text-center text-[#4B9C49] text-xl">
              E isso muda completamente a forma de ensinar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

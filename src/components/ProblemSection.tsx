import React from "react";
import { ChevronsDown, ThumbsDown } from "lucide-react";
import imgMaeFilho from "../assets/images/mae_filho_preocupados_1788777717163.jpg";

export const ProblemSection: React.FC = () => {
  const problems = [
    "As tarefas de leitura viram um sofrimento",
    "As notas baixas",
    "Ela se sente \"menos inteligente\" do que os coleguinhas"
  ];

  return (
    <section className="py-16 bg-[#FFF5F5] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        <ChevronsDown className="w-12 h-12 text-[#E91E63] mb-6 animate-bounce" strokeWidth={3} />

        <h2 className="text-2xl md:text-3xl mb-8 font-medium text-[#1C2938] tracking-tight leading-relaxed max-w-2xl">
          Muitos pais acham que <span className="bg-yellow-50 border border-yellow-400 px-1 text-[#8B6B15]">cada criança tem seu</span><br className="hidden md:block"/>
          <span className="bg-yellow-50 border border-yellow-400 px-1 text-[#8B6B15]">tempo pra ler.</span><br/>
          <span className="block mt-2 text-[#1C2938]">Até que...</span>
        </h2>
        
        <div className="w-full max-w-lg mx-auto mb-10 relative">
          {/* Faded bottom gradient over image */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFF5F5] to-transparent z-10" />
          <img 
            src={imgMaeFilho} 
            alt="Mãe e filho frustrados com as tarefas" 
            className="w-full h-auto object-cover rounded-xl"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>

        <div className="w-full max-w-xl mx-auto space-y-4 mb-12 text-left">
          {problems.map((problem, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-pink-100 flex items-center gap-4">
              <ThumbsDown className="w-6 h-6 text-red-500 flex-shrink-0" strokeWidth={2} />
              <span className="text-[#1C2938] font-bold text-sm md:text-base leading-snug">
                {problem}
              </span>
            </div>
          ))}
        </div>

        <div className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-xl mb-4">
          <span className="bg-yellow-50 border border-yellow-400 px-1 text-[#8B6B15]">E o pior:</span> Começa a achar que não é capaz,<br className="hidden md:block" /> sem entender o porquê..
        </div>
      </div>
    </section>
  );
};

import React from "react";
import bonus1 from "../assets/images/bonus_1_atividades_extras_1788305066634.jpg";
import bonus2 from "../assets/images/bonus_2_treino_leitura_1788305083257.jpg";
import bonus3 from "../assets/images/bonus_3_jogo_memoria_1788305092062.jpg";
import bonus4 from "../assets/images/bonus_4_guia_online_1788305102177.jpg";

export const BonusesSection: React.FC = () => {
  const bonuses = [
    { title: "+200 Atividades Extras de Alfabetização", desc: "Material complementar para reforçar ainda mais o aprendizado da criança com novas atividades práticas, simples e muito eficazes!", price: "R$ 47,00", img: bonus1 },
    { title: "Treino Progressivo de Leitura por Sílabas", desc: "Atividades progressivas por sílabas que ajudam a criança a evoluir na leitura de forma leve e natural!", price: "R$ 27,00", img: bonus2 },
    { title: "Jogo da Memória das Sílabas", desc: "Material pronto que transforma o aprendizado das sílabas em uma brincadeira educativa, ajudando a fixar sons e palavras!", price: "R$ 27,00", img: bonus3 },
    { title: "Guia Online de Aplicação Passo a Passo", desc: "Aprenda como aplicar corretamente todas as atividades, mesmo sem experiência, e evite qualquer dúvida durante o processo!", price: "R$ 19,90", img: bonus4 }
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-12">

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-slate-800 tracking-tight">
          E ainda você recebe <span className="text-[var(--color-primary)]">4 Bônus Grátis:</span>
        </h2>
        
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-white rounded-2xl md:rounded-[24px] border-2 border-[var(--color-primary)]/20 relative shadow-sm overflow-hidden flex flex-col group hover:border-[var(--color-primary)]/50 transition-colors">
              <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-[var(--color-primary)] text-white px-2 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase shadow-sm z-10">Bônus</div>
              
              <div className="w-full p-3 md:p-6 flex justify-center items-center relative overflow-hidden group-hover:bg-slate-50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={bonus.img} alt={bonus.title} className="h-24 md:h-56 object-contain drop-shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
              </div>
              <div className="p-4 md:p-8 md:pt-4 flex-grow flex flex-col">
                <div className="flex items-start gap-3 mb-2 md:mb-3">
                  <h3 className="text-sm md:text-xl font-bold text-slate-800 leading-snug">{bonus.title}</h3>
                </div>
                <p className="text-slate-600 mb-4 md:mb-6 text-xs md:text-[15px] font-medium leading-relaxed flex-grow line-clamp-3 md:line-clamp-none">{bonus.desc}</p>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-slate-100 pt-3 md:pt-4 mt-auto gap-1 md:gap-0">
                  <span className="text-slate-400 line-through text-[10px] md:text-sm font-bold">Valor: {bonus.price}</span>
                  <span className="text-[var(--color-primary)] font-black text-xs md:text-lg">Hoje: R$ 0,00</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

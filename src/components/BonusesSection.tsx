import React from "react";
import bonus1 from "../assets/images/mockup_box_v2_1_1788733653979.jpg";
import bonus2 from "../assets/images/mockup_box_v2_2_1788733664729.jpg";
import bonus3 from "../assets/images/mockup_box_v2_3_1788733674001.jpg";
import bonus4 from "../assets/images/mockup_box_v2_4_1788733683438.jpg";

export const BonusesSection: React.FC = () => {
  const bonuses = [
    { title: "Caderno Extra de Alfabetização", desc: "Material complementar para reforçar ainda mais o aprendizado da criança com novas atividades práticas, simples e muito eficazes!", price: "R$ 47,00", img: bonus1 },
    { title: "Caderno Progressivo de Leitura", desc: "Atividades progressivas por sílabas que ajudam a criança a evoluir na leitura de forma leve e natural!", price: "R$ 27,00", img: bonus2 },
    { title: "Caderno de Memória das Sílabas", desc: "Material pronto que transforma o aprendizado das sílabas em uma brincadeira educativa, ajudando a fixar sons e palavras!", price: "R$ 27,00", img: bonus3 },
    { title: "Guia Online de Aplicação", desc: "Aprenda como aplicar corretamente todas as atividades, mesmo sem experiência, e evite qualquer dúvida durante o processo!", price: "R$ 19,90", img: bonus4 }
  ];

  return (
    <section className="py-16 bg-[#FCE354]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-slate-800 font-medium mb-2 text-lg">e ainda não acabou...</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            Garantindo seu acesso hoje você leva <span className="text-pink-500">4 SUPER BÔNUS 🎁</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="w-full aspect-[3/4] mb-6 relative flex items-center justify-center">
                <img src={bonus.img} alt={bonus.title} loading="lazy" decoding="async" className="w-full h-full object-contain drop-shadow-md mix-blend-darken" />
              </div>
              
              <h3 className="text-[17px] font-bold text-slate-800 leading-snug mb-3">
                {bonus.title}
              </h3>
              
              <p className="text-slate-500 mb-6 text-[14px] leading-relaxed flex-grow">
                {bonus.desc}
              </p>
              
              <div className="text-yellow-600/80 font-bold line-through mb-3">
                De {bonus.price}
              </div>
              
              <div className="bg-[#FFF9E6] px-4 py-2.5 rounded-lg flex items-center justify-center font-bold text-pink-500 w-full relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FBD635]"></div>
                HOJE: GRÁTIS
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

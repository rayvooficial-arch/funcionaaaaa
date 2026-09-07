import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { handleCheckoutClick } from "../config";
import img11 from "../assets/images/11.jpg";
import img12 from "../assets/images/12.jpg";
import img13 from "../assets/images/13.jpg";
import img14 from "../assets/images/14.jpg";
import img15 from "../assets/images/15.jpg";
import img16 from "../assets/images/16.jpg";

export const ProductMockup: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [img11, img12, img13, img14, img15, img16];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const getIndex = (offset: number) => {
    return (activeIndex + offset + images.length) % images.length;
  };

  const checklist = [
    "Atividades Nível 01: Palavras com 02 Sílabas",
    "Atividades Nível 02: Palavras com 03 Sílabas",
    "Atividades Nível 03: Palavras com 04 Sílabas",
    "Atividades Nível 04: Frases Curtas",
    "Atividades Grafismo na letra Bastão"
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-12 font-bold text-[#1E293B] tracking-tight">
          Tudo o que você precisa para começar a trabalhar a alfabetização em casa.
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <div className="w-full md:w-1/3 opacity-60 scale-90 transition-all duration-500 hidden md:block">
            <img src={images[getIndex(-1)]} alt="Atividade Anterior" className="w-full rounded-2xl shadow-md border border-slate-100 object-cover aspect-[4/3]" />
          </div>
          <div className="w-full md:w-[45%] z-10 scale-100 transition-all duration-500">
            <img key={activeIndex} src={images[activeIndex]} alt="Atividade Atual" className="w-full rounded-2xl shadow-xl border border-slate-100 object-cover aspect-[4/3] animate-fade-in" />
          </div>
          <div className="w-full md:w-1/3 opacity-60 scale-90 transition-all duration-500 hidden md:block">
            <img src={images[getIndex(1)]} alt="Próxima Atividade" className="w-full rounded-2xl shadow-md border border-slate-100 object-cover aspect-[4/3]" />
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {images.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-[#D4A045] w-6' : 'bg-slate-200 hover:bg-slate-300'}`}
              aria-label={`Ver imagem ${i + 1}`}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto border-[3px] border-dashed border-[#D4A045]/40 bg-[#FDF9EA]/30 rounded-[32px] p-8 md:p-10">
          <h3 className="text-xl md:text-2xl font-bold text-pink-500 text-center mb-8">
            + de 130 Atividades de Grafismo Fonético
          </h3>
          
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 max-w-3xl mx-auto">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4B9C49] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
                <span className="text-slate-600 font-medium text-[15px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

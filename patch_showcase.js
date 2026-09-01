import fs from 'fs';
const newShowcase = `import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/images/foto_caderno_mesa_1_1788142711511.jpg";
import img2 from "../assets/images/mockup_livro_grafismo_fonetico_1788145969916.jpg";
import img3 from "../assets/images/9b00a708-b82d-4654-ac51-40dcbb85adcb.jpg";
import img4 from "../assets/images/bonus_colorir_1788146710718.jpg";

const images = [img1, img2, img3, img4];

export const MaterialShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto text-center px-2">
        <h2 className="text-3xl md:text-4xl mb-10 font-bold text-slate-800 tracking-tight">
          Por dentro do <span className="text-[var(--color-primary)]">Material</span>
        </h2>
        
        <div className="relative group max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-[32px] shadow-2xl border-4 border-slate-50">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: \`translateX(-\${currentIndex * 100}%)\` }}>
              {images.map((src, idx) => (
                <div key={idx} className="min-w-full h-[380px] md:h-[500px] bg-[var(--color-primary)]/10 flex items-center justify-center p-6 md:p-10">
                  <img
                    src={src}
                    alt={\`Amostra do material \${idx + 1}\`}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-lg bg-white"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-[var(--color-primary)] shadow-xl hover:bg-[var(--color-primary)] hover:text-white transition-all z-20 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          <button
            onClick={next}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-[var(--color-primary)] shadow-xl hover:bg-[var(--color-primary)] hover:text-white transition-all z-20 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={\`w-3 h-3 rounded-full transition-all \${currentIndex === idx ? 'bg-[var(--color-primary)] scale-110' : 'bg-slate-300'}\`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
`;
fs.writeFileSync('src/components/MaterialShowcase.tsx', newShowcase);

import React from "react";
import img11 from "../assets/images/11.jpg";
import img12 from "../assets/images/12.jpg";
import img13 from "../assets/images/13.jpg";
import img14 from "../assets/images/14.jpg";
import img15 from "../assets/images/15.jpg";
import img16 from "../assets/images/16.jpg";

export const SampleCarousel: React.FC = () => {
  const images = [
    { id: 11, src: img11 },
    { id: 12, src: img12 },
    { id: 13, src: img13 },
    { id: 14, src: img14 },
    { id: 15, src: img15 },
    { id: 16, src: img16 },
  ];

  // Duplicamos as imagens para criar o efeito infinito suave
  const duplicatedImages = [...images, ...images];

  return (
    <section className="relative overflow-hidden bg-white bg-gradient-to-b from-[#55F7DB]/5 from-60% to-[#F75571]/5 pt-12 pb-12 border-t border-slate-100">
      <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--color-yellow)]/5 rounded-full blur-[100px] pointer-events-none" />

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 8px)); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8 tracking-tight uppercase">
          POR DENTRO DO <span className="text-[var(--color-primary)]">MATERIAL:</span>
        </h2>
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden -mx-4 px-4">
          <div className="flex w-max gap-4 pb-6 pt-2 animate-scroll-left">
            {duplicatedImages.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="flex-none w-[280px] md:w-[320px] bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <img 
                  src={item.src} 
                  alt={`Amostra ${item.id}`} 
                  className="w-full h-auto block pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

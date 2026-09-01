import fs from 'fs';

let content = `import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/images/IMG-9547.jpg";
import img2 from "../assets/images/IMG-9642.jpg";
import img3 from "../assets/images/IMG-9643.jpg";
import img4 from "../assets/images/IMG-9644.jpg";
import img5 from "../assets/images/IMG-9645 (1).jpg";
import img6 from "../assets/images/IMG-9645.jpg";

export const Testimonials: React.FC = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-slate-800 tracking-tight">
          VEJA OQUE <span className="text-[var(--color-primary)]">ESTÃO DIZENDO</span>
        </h2>
        
        <div className="relative max-w-sm md:max-w-md mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl shadow-xl border-4 border-slate-50 relative aspect-[9/16] bg-slate-100 flex items-center justify-center">
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={\`Avaliação \${idx + 1}\`} 
                className={\`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 \${idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}\`}
              />
            ))}
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full md:-ml-4 bg-white/90 hover:bg-white text-[var(--color-primary)] p-3 rounded-full shadow-lg z-20 transition-transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full md:-mr-4 bg-white/90 hover:bg-white text-[var(--color-primary)] p-3 rounded-full shadow-lg z-20 transition-transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={\`w-2.5 h-2.5 rounded-full transition-colors \${idx === currentIndex ? "bg-[var(--color-primary)]" : "bg-slate-300"}\`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
`;

fs.writeFileSync('src/components/Testimonials.tsx', content);

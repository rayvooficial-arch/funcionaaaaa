import React, { useEffect, useState } from "react";

export const Hero3DBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          if (currentY <= 1000) {
            setScrollY(currentY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    setScrollY(window.scrollY);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none will-change-transform"
      aria-hidden="true"
    >
      {/* 1. Letra A (Top Left) - Azul */}
      <div
        className="absolute top-[10%] left-[2%] sm:left-[5%] animate-float-slow opacity-25 filter blur-[10px] transition-transform duration-100 ease-out"
        style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0) rotate(-15deg)` }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary-light, #818CF8)" />
              <stop offset="100%" stopColor="var(--color-primary, #4F46E5)" />
            </linearGradient>
          </defs>
          <path d="M50,10 L85,90 L65,90 L58,70 L42,70 L35,90 L15,90 Z M47,40 L44,60 L56,60 Z" fill="url(#gradA)" />
        </svg>
      </div>

      {/* 2. Estrela (Top Right) - Amarelo */}
      <div
        className="absolute top-[15%] right-[5%] sm:right-[10%] animate-float-slow opacity-30 filter blur-[12px] transition-transform duration-100 ease-out hidden sm:block"
        style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0) rotate(20deg)`, animationDelay: "1s" }}
      >
        <svg width="70" height="70" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradStar" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-yellow-light, #FEF08A)" />
              <stop offset="100%" stopColor="var(--color-yellow, #EAB308)" />
            </linearGradient>
          </defs>
          <polygon points="50,10 61,35 88,39 68,57 73,84 50,71 27,84 32,57 12,39 39,35" fill="url(#gradStar)" />
        </svg>
      </div>

      {/* 3. Bloco de Montar (Mid Right) - Rosa */}
      <div
        className="absolute top-[45%] right-[2%] sm:right-[6%] animate-float-slow opacity-20 filter blur-[8px] transition-transform duration-100 ease-out"
        style={{ transform: `translate3d(0, ${scrollY * 0.12}px, 0) rotate(-10deg)`, animationDelay: "2s" }}
      >
        <svg width="90" height="90" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradBlock" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-pink-light, #FBCFE8)" />
              <stop offset="100%" stopColor="var(--color-pink, #EC4899)" />
            </linearGradient>
          </defs>
          <rect x="20" y="30" width="60" height="60" rx="8" fill="url(#gradBlock)" />
          <rect x="30" y="15" width="15" height="20" rx="4" fill="url(#gradBlock)" />
          <rect x="55" y="15" width="15" height="20" rx="4" fill="url(#gradBlock)" />
        </svg>
      </div>

      {/* 4. Bolinha (Bottom Left) - Verde */}
      <div
        className="absolute top-[70%] left-[3%] sm:left-[8%] animate-float-slow opacity-25 filter blur-[10px] transition-transform duration-100 ease-out hidden sm:block"
        style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)`, animationDelay: "1.5s" }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="gradBall" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="var(--color-success-light, #6EE7B7)" />
              <stop offset="100%" stopColor="var(--color-success, #059669)" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#gradBall)" />
        </svg>
      </div>

      {/* 5. Letra B (Bottom Right) - Azul/Indigo */}
      <div
        className="absolute top-[80%] right-[8%] sm:right-[15%] animate-float-slow opacity-20 filter blur-[15px] transition-transform duration-100 ease-out"
        style={{ transform: `translate3d(0, ${scrollY * 0.14}px, 0) rotate(15deg)`, animationDelay: "0.5s" }}
      >
        <svg width="85" height="85" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradB" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary-light, #818CF8)" />
              <stop offset="100%" stopColor="var(--color-primary, #4F46E5)" />
            </linearGradient>
          </defs>
          <path d="M25,10 L55,10 C75,10 85,20 85,35 C85,45 78,50 70,52 C82,55 90,65 90,75 C90,90 75,95 50,95 L25,95 Z M45,45 C55,45 60,40 60,32 C60,25 55,25 45,25 L45,45 Z M45,78 C60,78 65,75 65,65 C65,55 60,55 45,55 L45,78 Z" fill="url(#gradB)" />
        </svg>
      </div>

    </div>
  );
};

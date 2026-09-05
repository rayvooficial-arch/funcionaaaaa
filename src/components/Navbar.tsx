import React, { useState, useEffect } from "react";

export const Navbar: React.FC = () => {
  const announcementItems = [
    {
      badge: "52% OFF",
      badgeColor: "bg-[var(--color-cta)] text-[var(--color-on-action)]",
      text: "Oferta de Lançamento: Método Completo + 6 Bônus Inclusos!",
    },
    {
      badge: "BÔNUS GRÁTIS",
      badgeColor: "bg-[var(--color-success)] text-[var(--color-on-action)]",
      text: "Economia de R$ 168,40 em cadernos de apoio hoje",
    },
    {
      badge: "ACESSO IMEDIATO",
      badgeColor: "bg-[var(--color-overlay-light)] text-[var(--color-on-brand)]",
      text: "Receba todos os arquivos no seu e-mail em menos de 2 minutos",
    },
    {
      badge: "RISCO ZERO",
      badgeColor: "bg-[var(--color-overlay-light)] text-[var(--color-on-brand)]",
      text: "7 Dias de Garantia Incondicional de Satisfação",
    },
    {
      badge: "APROVADO",
      badgeColor: "bg-[var(--color-overlay-light)] text-[var(--color-on-brand)]",
      text: "Mais de 1.200 crianças aprendendo com alegria e leveza",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcementItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [announcementItems.length]);

  const currentItem = announcementItems[currentIndex];

  return (
    <header className="relative w-full z-20">
      {/* Top Responsive Announcement Bar */}
      <div 
        id="announcement-bar"
        className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-primary-light)] text-[var(--color-on-brand)] border-b border-[var(--color-overlay-border)] shadow-xs relative overflow-hidden select-none"
      >
        <div className="py-2.5 text-[11px] sm:text-xs md:text-sm font-bold flex items-center justify-center min-h-[44px]">
          <div key={currentIndex} className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 animate-fade-in text-center flex-wrap justify-center">
            <span className="tracking-wide font-semibold text-[var(--color-on-brand)]/95">
              {currentItem.text}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

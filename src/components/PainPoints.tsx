import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PAIN_POINTS } from "../data";

export const PainPoints: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate active dot based on card width
    const cardElement = carouselRef.current.firstElementChild as HTMLElement;
    if (cardElement) {
      const cardWidth = cardElement.offsetWidth + 16; // width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), PAIN_POINTS.length - 1));
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollState, { passive: true });
      checkScrollState();
      return () => el.removeEventListener("scroll", checkScrollState);
    }
  }, []);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const cardElement = carouselRef.current.children[index] as HTMLElement;
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  const handlePrev = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -270, behavior: "smooth" });
  };

  const handleNext = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: 270, behavior: "smooth" });
  };

  return (
    <section id="identificacao" className="py-14 sm:py-20 relative overflow-hidden border-t border-[var(--color-border)]">
      
      {/* Soft Ambient Background Glows */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header Redesign */}
        <div className="text-center mb-10 sm:mb-16 relative pt-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--color-bg-card)] text-[var(--color-pink-dark)] text-xs font-black uppercase tracking-wider border border-[var(--color-pink-dark)]/20 shadow-2xs mb-6 relative z-10">
            <span>Você reconhece?</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[var(--color-text-title)] tracking-tight leading-[1.15] max-w-3xl mx-auto relative z-10">
            Toda mãe passa por isso e se sente{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-[var(--color-pink-dark)]">
                frustrada
              </span>
              <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-2.5 sm:h-3.5 bg-[var(--color-yellow)]/60 -rotate-1 rounded-sm -z-0"></span>
            </span>
          </h2>
          
          {/* Subtle Decorative Ambient Blur */}
        </div>

        {/* Carousel Header & Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-[var(--color-text-secondary)]">
              Principais Desafios Diários:
            </span>
          </div>

          {/* Prev / Next Carousel Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Card anterior"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                canScrollLeft
                  ? "bg-[var(--color-bg-card)] text-[var(--color-text-title)] border-[var(--color-border)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-brand)] hover:border-[var(--color-primary)] shadow-xs active:scale-95 cursor-pointer"
                  : "bg-[var(--color-surface-alt)]/60 text-[var(--color-text-muted)]/40 border-[var(--color-border)]/40 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Próximo card"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                canScrollRight
                  ? "bg-[var(--color-bg-card)] text-[var(--color-text-title)] border-[var(--color-border)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-brand)] hover:border-[var(--color-primary)] shadow-xs active:scale-95 cursor-pointer"
                  : "bg-[var(--color-surface-alt)]/60 text-[var(--color-text-muted)]/40 border-[var(--color-border)]/40 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pain Cards Horizontal Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-5 pt-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 justify-start md:justify-center items-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PAIN_POINTS.map((card, idx) => (
            <div
              key={card.id}
              className={`w-[72vw] max-w-[250px] sm:w-[240px] md:w-[250px] aspect-square shrink-0 snap-center bg-[var(--color-bg-card)] rounded-[22px] border-2 ${card.borderColor} shadow-sm hover:shadow-md p-4 sm:p-4.5 flex flex-col justify-start transition-all duration-300 hover:-translate-y-1 select-none relative overflow-hidden group`}
            >
              {/* Subtle Ambient Background Tint on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-40 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10 flex flex-col">
                {/* Header with Step Number & Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-black tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-[var(--color-bg-card)] ${card.textColor} border border-[var(--color-border)] shadow-2xs`}>
                    {card.badge}
                  </span>
                  <span className="text-[11px] font-black text-[var(--color-text-muted)] font-mono tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-[14.5px] sm:text-[15.5px] font-black text-[var(--color-text-title)] leading-snug mb-1.5 tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] sm:text-[12.5px] text-[var(--color-text-secondary)] font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



import React from "react";
import { StarSpark } from "./BrandDoodles";
import { 
  Sparkles, 
  Flame, 
  Gift, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

export const Navbar: React.FC = () => {
  const announcementItems = [
    {
      icon: <Flame className="w-3.5 h-3.5 fill-[var(--color-yellow)] text-[var(--color-yellow)]" />,
      badge: "52% OFF",
      badgeColor: "bg-[var(--color-cta)] text-[var(--color-on-action)]",
      text: "Oferta de Lançamento: Método Completo + 6 Bônus Inclusos!",
    },
    {
      icon: <Gift className="w-3.5 h-3.5 text-[var(--color-success)]" />,
      badge: "BÔNUS GRÁTIS",
      badgeColor: "bg-[var(--color-success)] text-[var(--color-on-action)]",
      text: "Economia de R$ 168,40 em cadernos de apoio hoje",
    },
    {
      icon: <Zap className="w-3.5 h-3.5 text-[var(--color-yellow)]" />,
      badge: "ACESSO IMEDIATO",
      badgeColor: "bg-[var(--color-overlay-light)] text-[var(--color-on-brand)]",
      text: "Receba todos os arquivos no seu e-mail em menos de 2 minutos",
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-primary-light)]" />,
      badge: "RISCO ZERO",
      badgeColor: "bg-[var(--color-overlay-light)] text-[var(--color-on-brand)]",
      text: "7 Dias de Garantia Incondicional de Satisfação",
    },
    {
      icon: <Sparkles className="w-3.5 h-3.5 text-[var(--color-yellow)]" />,
      badge: "APROVADO",
      badgeColor: "bg-[var(--color-overlay-light)] text-[var(--color-on-brand)]",
      text: "Mais de 1.200 crianças aprendendo com alegria e leveza",
    },
  ];

  return (
    <header className="relative w-full z-20">
      {/* Top Responsive Announcement Marquee Bar */}
      <div 
        id="announcement-bar"
        className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-primary-light)] text-[var(--color-on-brand)] border-b border-[var(--color-overlay-border)] shadow-xs relative overflow-hidden select-none"
      >
        {/* Left and Right Gradient Masks to ensure smooth fade-in/out on any screen */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[var(--color-primary)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[var(--color-primary-light)] to-transparent z-10" />

        <div className="py-2.5 text-[11px] sm:text-xs md:text-sm font-bold flex items-center">
          <div className="animate-marquee items-center whitespace-nowrap">
            {/* Loop Item Block 1 */}
            {announcementItems.map((item, idx) => (
              <div
                key={`ann-1-${idx}`}
                className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5"
              >
                <div className="flex items-center gap-1.5 bg-[var(--color-overlay-dark-subtle)] py-0.5 px-2 rounded-full backdrop-blur-xs border border-[var(--color-overlay-border)]">
                  {item.icon}
                  <span className={`text-[9px] sm:text-[10px] font-black uppercase px-1.5 py-0.2 rounded-md ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <span className="tracking-wide font-semibold text-[var(--color-on-brand)]/95">
                  {item.text}
                </span>
                <StarSpark color="var(--color-yellow)" size={13} className="opacity-90 ml-1.5 shrink-0" />
              </div>
            ))}

            {/* Loop Item Block 2 (Duplicate for continuous marquee) */}
            {announcementItems.map((item, idx) => (
              <div
                key={`ann-2-${idx}`}
                className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5"
              >
                <div className="flex items-center gap-1.5 bg-[var(--color-overlay-dark-subtle)] py-0.5 px-2 rounded-full backdrop-blur-xs border border-[var(--color-overlay-border)]">
                  {item.icon}
                  <span className={`text-[9px] sm:text-[10px] font-black uppercase px-1.5 py-0.2 rounded-md ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <span className="tracking-wide font-semibold text-[var(--color-on-brand)]/95">
                  {item.text}
                </span>
                <StarSpark color="var(--color-yellow)" size={13} className="opacity-90 ml-1.5 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

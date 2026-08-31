import React from "react";
import { BookOpen, Zap, Heart, Brain, Smile, GraduationCap } from "lucide-react";

interface BenefitCard {
  id: string;
  icon: React.ElementType;
  title: string;
  circleBg: string;
  iconColor: string;
}

const BENEFITS: BenefitCard[] = [
  {
    id: "leitura-fluente",
    icon: BookOpen,
    title: "Leitura fluente",
    circleBg: "bg-[var(--color-pink-badge)]",
    iconColor: "text-[var(--color-pink-dark)]",
  },
  {
    id: "cinco-vezes-mais-rapido",
    icon: Zap,
    title: "5x mais rápido",
    circleBg: "bg-[var(--color-yellow-badge)]",
    iconColor: "text-[var(--color-yellow-dark)]",
  },
  {
    id: "autoconfianca",
    icon: Heart,
    title: "Autoconfiança",
    circleBg: "bg-[var(--color-cta-bg)]",
    iconColor: "text-[var(--color-cta)]",
  },
  {
    id: "foco-e-atencao",
    icon: Brain,
    title: "Foco e atenção",
    circleBg: "bg-[var(--color-accent-purple-light)]",
    iconColor: "text-[var(--color-accent-purple)]",
  },
  {
    id: "amor-por-estudar",
    icon: Smile,
    title: "Amor por estudar",
    circleBg: "bg-[var(--color-success-bg)]",
    iconColor: "text-[var(--color-success-dark)]",
  },
  {
    id: "notas-melhores",
    icon: GraduationCap,
    title: "Notas melhores",
    circleBg: "bg-[var(--color-primary-bg)]",
    iconColor: "text-[var(--color-primary)]",
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section
      id="beneficios"
      className="py-14 sm:py-20 bg-[var(--color-bg-page)] relative overflow-hidden border-b border-[var(--color-border)]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-block px-5 py-1.5 rounded-full bg-[var(--color-yellow-badge)] text-[var(--color-text-title)] text-xs font-black uppercase tracking-wider mb-4 border border-[var(--color-yellow)]/30 shadow-2xs">
            BENEFÍCIOS
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-[36px] font-black text-[var(--color-text-title)] leading-tight tracking-tight">
            Em poucas semanas, seu filho terá:
          </h2>
        </div>

        {/* 2-Column Centered Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="bg-[var(--color-bg-card)] rounded-[26px] sm:rounded-[30px] p-6 sm:p-8 shadow-[0_4px_20px_var(--color-shadow-neutral)] border border-[var(--color-border)] flex flex-col items-center justify-center text-center transition-transform duration-200 hover:-translate-y-1 select-none"
              >
                {/* Circular Pastel Icon Container */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${benefit.circleBg} flex items-center justify-center mb-4 transition-transform duration-200 hover:scale-105`}
                >
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${benefit.iconColor} stroke-[2.2]`} />
                </div>

                {/* Card Title */}
                <h3 className="font-display font-extrabold text-[var(--color-text-title)] text-base sm:text-lg tracking-tight">
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


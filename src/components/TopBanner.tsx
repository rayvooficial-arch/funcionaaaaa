import React from "react";
export const TopBanner: React.FC = () => {
  return (
    <div className="bg-[var(--color-cta)] text-[var(--color-on-action)] py-2 px-2 text-center font-bold text-[11px] sm:text-sm md:text-base flex items-center justify-center gap-2 relative z-[100] whitespace-nowrap overflow-hidden">
      <span>⚡ Desconto só HOJE nessa página 1/9/2026</span>
    </div>
  );
};

import React from "react";
export const TopBanner: React.FC = () => {
  const today = new Date();
  const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  return (
    <div className="bg-[var(--color-action)] text-[var(--color-on-action)] py-2 px-2 text-center font-bold text-[11px] sm:text-sm md:text-base flex items-center justify-center gap-2 relative z-[100] whitespace-nowrap overflow-hidden">
      <span>⚡ Desconto só HOJE nessa página {formattedDate}</span>
    </div>
  );
};

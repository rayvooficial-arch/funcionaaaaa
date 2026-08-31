import React from "react";
import logoAsset from "../assets/images/transferir.png";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  className = "",
  showSubtitle = true,
}) => {
  const sizeClasses = {
    sm: "max-w-[110px]",
    md: "max-w-[150px]",
    lg: "max-w-[210px]",
    xl: "max-w-[280px]",
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      {showSubtitle && (
        <span className="text-[11px] sm:text-xs font-black tracking-[0.2em] text-[var(--color-primary)] uppercase mb-2 bg-[var(--color-primary-bg)] px-3 py-0.5 rounded-full border border-[var(--color-primary)]/20 shadow-2xs">
          KIT PEDAGÓGICO DE LEITURA
        </span>
      )}

      <div className="relative flex items-center justify-center">
        <img
          src={logoAsset}
          alt="Logo Ler & Brincar"
          width={200}
          height={200}
          className={`w-full h-auto ${sizeClasses[size]} rounded-2xl drop-shadow-md hover:scale-105 transition-transform duration-300`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

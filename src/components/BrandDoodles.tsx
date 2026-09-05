import React from "react";

interface DoodleProps {
  className?: string;
  color?: string;
  size?: number;
}

/**
 * 4-Point Star Sparkle Doodle (Playful geometric star)
 */
export const StarSpark: React.FC<DoodleProps> = ({
  className = "",
  color = "var(--color-highlight)",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
      fill={color}
    />
  </svg>
);

/**
 * Playful Wavy Underline / Swoosh
 */
export const WavyDoodle: React.FC<DoodleProps> = ({
  className = "",
  color = "var(--color-brand-light)",
}) => (
  <svg
    viewBox="0 0 120 16"
    fill="none"
    className={`w-28 sm:w-36 h-3 sm:h-4 inline-block ${className}`}
    aria-hidden="true"
  >
    <path
      d="M2 8 C 20 2, 40 14, 60 8 C 80 2, 100 14, 118 8"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Spiral / Loop Doodle
 */
export const SpiralDoodle: React.FC<DoodleProps> = ({
  className = "",
  color = "var(--color-accent)",
  size = 28,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <path
      d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 11 24.5 7.5 20 7.5C15.5 7.5 12 11 12 15.5C12 19 14.5 21.5 17.5 21.5C20.5 21.5 22 19.5 22 17"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Curved Arrow Doodle (pointing downwards or right)
 */
export const HandDrawnArrow: React.FC<DoodleProps> = ({
  className = "",
  color = "var(--color-highlight)",
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    className={`w-10 h-10 inline-block ${className}`}
    aria-hidden="true"
  >
    <path
      d="M10 12 C 16 28, 30 36, 38 36"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M28 32 L38 36 L34 26"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * ABC Pill Badge (Playful learning icon)
 */
export const ABCBadge: React.FC<DoodleProps> = ({
  className = "",
  color = "var(--color-brand)",
}) => (
  <span
    className={`inline-flex items-center justify-center font-display font-black text-xs px-2 py-0.5 rounded-md shadow-2xs border ${className}`}
    style={{
      backgroundColor: "var(--color-brand-bg)",
      color: color,
      borderColor: "var(--color-brand-border)",
    }}
  >
    A B C
  </span>
);

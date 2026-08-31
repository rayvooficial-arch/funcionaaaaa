import React from "react";

export interface CharacterProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-11 h-11",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

/**
 * Character 1: Theo (Curious Explorer Kid)
 * Theme-Ready: All fills/strokes reference illustration & brand CSS variables
 */
export const CharacterTheo: React.FC<CharacterProps> = ({ size = "md", className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={`${sizeMap[size]} ${className} drop-shadow-sm`}
    aria-label="Personagem Theo"
  >
    {/* Body / Shirt */}
    <circle cx="50" cy="50" r="46" fill="var(--color-brand-bg)" stroke="var(--color-brand)" strokeWidth="3" />
    
    {/* Shoulders */}
    <path d="M22 88 C26 70 40 68 50 68 C60 68 74 70 78 88 Z" fill="var(--color-illustration-primary)" />
    
    {/* Collar */}
    <path d="M42 68 L50 76 L58 68 Z" fill="var(--color-text-white)" />
    
    {/* Head & Ears */}
    <circle cx="28" cy="46" r="7" fill="var(--color-illustration-skin-fair)" />
    <circle cx="72" cy="46" r="7" fill="var(--color-illustration-skin-fair)" />
    <circle cx="50" cy="46" r="22" fill="var(--color-illustration-skin-fair)" />
    
    {/* Hair */}
    <path
      d="M28 42 C28 26 40 22 50 22 C60 22 72 26 72 42 C68 32 60 30 50 32 C40 30 32 32 28 42 Z"
      fill="var(--color-illustration-hair-brown)"
    />
    <path d="M48 22 C50 16 54 18 52 24 Z" fill="var(--color-illustration-hair-brown)" />

    {/* Big Expressive Eyes */}
    <circle cx="42" cy="46" r="4.5" fill="var(--color-illustration-outline)" />
    <circle cx="58" cy="46" r="4.5" fill="var(--color-illustration-outline)" />
    <circle cx="44" cy="44.5" r="1.5" fill="var(--color-text-white)" />
    <circle cx="60" cy="44.5" r="1.5" fill="var(--color-text-white)" />

    {/* Rosy Cheeks */}
    <circle cx="36" cy="52" r="3.5" fill="var(--color-illustration-accent)" opacity="0.35" />
    <circle cx="64" cy="52" r="3.5" fill="var(--color-illustration-accent)" opacity="0.35" />

    {/* Happy Smile */}
    <path d="M44 54 Q50 60 56 54" stroke="var(--color-illustration-mouth)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

    {/* Star Cap / Badge */}
    <circle cx="50" cy="20" r="4" fill="var(--color-highlight)" />
  </svg>
);

/**
 * Character 2: Nina (Creative & Cheerful Kid)
 * Theme-Ready: All fills/strokes reference illustration & accent CSS variables
 */
export const CharacterNina: React.FC<CharacterProps> = ({ size = "md", className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={`${sizeMap[size]} ${className} drop-shadow-sm`}
    aria-label="Personagem Nina"
  >
    {/* Background Circle */}
    <circle cx="50" cy="50" r="46" fill="var(--color-accent-light)" stroke="var(--color-accent)" strokeWidth="3" />

    {/* Pigtails */}
    <circle cx="22" cy="38" r="9" fill="var(--color-illustration-hair-copper)" />
    <circle cx="78" cy="38" r="9" fill="var(--color-illustration-hair-copper)" />
    <circle cx="27" cy="44" r="3.5" fill="var(--color-action)" />
    <circle cx="73" cy="44" r="3.5" fill="var(--color-action)" />

    {/* Shoulders */}
    <path d="M22 88 C26 70 40 68 50 68 C60 68 74 70 78 88 Z" fill="var(--color-illustration-secondary)" />

    {/* Head & Ears */}
    <circle cx="29" cy="48" r="6" fill="var(--color-illustration-skin-warm)" />
    <circle cx="71" cy="48" r="6" fill="var(--color-illustration-skin-warm)" />
    <circle cx="50" cy="48" r="22" fill="var(--color-illustration-skin-warm)" />

    {/* Front Hair Bangs */}
    <path
      d="M28 44 C30 26 42 24 50 24 C58 24 70 26 72 44 C66 36 58 34 50 36 C42 34 34 36 28 44 Z"
      fill="var(--color-illustration-hair-copper)"
    />

    {/* Big Bright Eyes */}
    <circle cx="42" cy="48" r="4" fill="var(--color-illustration-outline)" />
    <circle cx="58" cy="48" r="4" fill="var(--color-illustration-outline)" />
    <circle cx="43.5" cy="46.5" r="1.5" fill="var(--color-text-white)" />
    <circle cx="59.5" cy="46.5" r="1.5" fill="var(--color-text-white)" />

    {/* Cheeks */}
    <circle cx="35" cy="54" r="3.5" fill="var(--color-action)" opacity="0.35" />
    <circle cx="65" cy="54" r="3.5" fill="var(--color-action)" opacity="0.35" />

    {/* Wide Grin */}
    <path d="M43 54 Q50 62 57 54" stroke="var(--color-illustration-mouth)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

/**
 * Character 3: Leo (Brave & Curious Boy)
 * Theme-Ready: All fills/strokes reference illustration & highlight CSS variables
 */
export const CharacterLeo: React.FC<CharacterProps> = ({ size = "md", className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={`${sizeMap[size]} ${className} drop-shadow-sm`}
    aria-label="Personagem Leo"
  >
    {/* Background Circle */}
    <circle cx="50" cy="50" r="46" fill="var(--color-highlight-light)" stroke="var(--color-highlight)" strokeWidth="3" />

    {/* Shirt */}
    <path d="M22 88 C26 70 40 68 50 68 C60 68 74 70 78 88 Z" fill="var(--color-highlight-strong)" />

    {/* Head & Ears */}
    <circle cx="28" cy="46" r="6.5" fill="var(--color-illustration-skin-rich)" />
    <circle cx="72" cy="46" r="6.5" fill="var(--color-illustration-skin-rich)" />
    <circle cx="50" cy="46" r="22" fill="var(--color-illustration-skin-rich)" />

    {/* Curly Hair Puff */}
    <path
      d="M26 40 C22 28 32 20 50 20 C68 20 78 28 74 40 C70 30 62 26 50 28 C38 26 30 30 26 40 Z"
      fill="var(--color-illustration-hair-dark)"
    />
    <circle cx="34" cy="24" r="6" fill="var(--color-illustration-hair-dark)" />
    <circle cx="50" cy="19" r="7" fill="var(--color-illustration-hair-dark)" />
    <circle cx="66" cy="24" r="6" fill="var(--color-illustration-hair-dark)" />

    {/* Eyes */}
    <circle cx="42" cy="46" r="4.2" fill="var(--color-illustration-outline)" />
    <circle cx="58" cy="46" r="4.2" fill="var(--color-illustration-outline)" />
    <circle cx="43.5" cy="44.5" r="1.5" fill="var(--color-text-white)" />
    <circle cx="59.5" cy="44.5" r="1.5" fill="var(--color-text-white)" />

    {/* Warm Smile */}
    <path d="M43 54 Q50 60 57 54" stroke="var(--color-text-white)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

/**
 * Character 4: Pip (The Friendly Little Book Owl)
 * Theme-Ready: All fills/strokes reference illustration & success CSS variables
 */
export const CharacterPip: React.FC<CharacterProps> = ({ size = "md", className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={`${sizeMap[size]} ${className} drop-shadow-sm`}
    aria-label="Mascote Corujinha Pip"
  >
    {/* Background Circle */}
    <circle cx="50" cy="50" r="46" fill="var(--color-success-bg)" stroke="var(--color-success)" strokeWidth="3" />

    {/* Owl Body */}
    <ellipse cx="50" cy="54" rx="26" ry="28" fill="var(--color-illustration-success)" />
    <ellipse cx="50" cy="58" rx="17" ry="18" fill="var(--color-success-bg)" />

    {/* Owl Ear Tufts */}
    <polygon points="30,32 38,18 44,30" fill="var(--color-success-strong)" />
    <polygon points="70,32 62,18 56,30" fill="var(--color-success-strong)" />

    {/* Big Friendly Owl Glasses */}
    <circle cx="40" cy="46" r="11" fill="var(--color-text-white)" stroke="var(--color-highlight)" strokeWidth="3" />
    <circle cx="60" cy="46" r="11" fill="var(--color-text-white)" stroke="var(--color-highlight)" strokeWidth="3" />
    <line x1="51" y1="46" x2="49" y2="46" stroke="var(--color-highlight)" strokeWidth="3" />

    {/* Pupils */}
    <circle cx="42" cy="46" r="5" fill="var(--color-illustration-outline)" />
    <circle cx="58" cy="46" r="5" fill="var(--color-illustration-outline)" />
    <circle cx="44" cy="44" r="1.8" fill="var(--color-text-white)" />
    <circle cx="60" cy="44" r="1.8" fill="var(--color-text-white)" />

    {/* Little Beak */}
    <polygon points="50,52 46,58 54,58" fill="var(--color-highlight-strong)" />

    {/* Little Feet */}
    <ellipse cx="43" cy="82" rx="4" ry="2.5" fill="var(--color-highlight-strong)" />
    <ellipse cx="57" cy="82" rx="4" ry="2.5" fill="var(--color-highlight-strong)" />
  </svg>
);

/**
 * Squad of All 4 Characters grouped together in an overlapping avatar cluster
 */
export const CharactersSquad: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center -space-x-3 ${className}`}>
    <CharacterTheo size="sm" className="ring-2 ring-white rounded-full z-40" />
    <CharacterNina size="sm" className="ring-2 ring-white rounded-full z-30" />
    <CharacterLeo size="sm" className="ring-2 ring-white rounded-full z-20" />
    <CharacterPip size="sm" className="ring-2 ring-white rounded-full z-10" />
  </div>
);

const characterComponentMap = {
  theo: CharacterTheo,
  nina: CharacterNina,
  leo: CharacterLeo,
  pip: CharacterPip,
};

export interface CharacterAvatarProps {
  id: "theo" | "nina" | "leo" | "pip";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({ id, size = "md", className = "" }) => {
  const Component = characterComponentMap[id] || CharacterLeo;
  return <Component size={size} className={className} />;
};

import React, { useEffect, useState } from "react";

export const Hero3DBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          // Hero section is ~800-900px tall; only update parallax while in or near view
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
      {/* ========================================================
          1. 3D TOY DRUM (Top-Left Mobile & Desktop)
          ======================================================== */}
      <div
        className="absolute top-2 -left-1 sm:top-4 sm:left-[3%] md:left-[6%] animate-float-slow opacity-90 filter blur-[0.8px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.14}px, 0) rotate(-8deg)`,
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 120 120"
          className="w-13 h-13 sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-[0_16px_28px_rgba(239,68,68,0.3)]"
        >
          <defs>
            <linearGradient id="drumBody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
            <linearGradient id="drumTop" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="100%" stopColor="#FDE68A" />
            </linearGradient>
            <radialGradient id="drumShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(220,38,38,0.4)" />
              <stop offset="100%" stopColor="rgba(220,38,38,0)" />
            </radialGradient>
          </defs>

          {/* Shadow */}
          <ellipse cx="60" cy="105" rx="38" ry="6" fill="url(#drumShadow)" />

          {/* Drum Body */}
          <path d="M25,45 L25,85 C25,95 95,95 95,85 L95,45 Z" fill="url(#drumBody)" />
          
          {/* Zig-Zag Strings */}
          <polyline points="25,45 39,85 53,45 67,85 81,45 95,85" fill="none" stroke="#FBBF24" strokeWidth="2.5" opacity="0.9" strokeLinejoin="round" />
          
          {/* Bottom Rim */}
          <ellipse cx="60" cy="85" rx="35" ry="10" fill="none" stroke="#F59E0B" strokeWidth="4" />

          {/* Top Drum Head */}
          <ellipse cx="60" cy="45" rx="35" ry="10" fill="url(#drumTop)" stroke="#F59E0B" strokeWidth="4" />
          
          {/* Drum Sticks */}
          <g transform="translate(60, 35) rotate(25) translate(-60, -35)">
            <rect x="58" y="5" width="4" height="35" rx="2" fill="#B45309" />
            <circle cx="60" cy="5" r="5" fill="#38BDF8" />
          </g>
          <g transform="translate(45, 30) rotate(-20) translate(-45, -30)">
            <rect x="43" y="0" width="4" height="35" rx="2" fill="#B45309" />
            <circle cx="45" cy="0" r="5" fill="#38BDF8" />
          </g>
        </svg>
      </div>

      {/* ========================================================
          2. 3D FLOATING PENCIL (Top Left - Mid)
          ======================================================== */}
      <div
        className="absolute top-28 -left-3 sm:top-24 sm:left-[8%] lg:left-[10%] animate-wiggle opacity-85 sm:opacity-95 filter blur-[1px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.18}px, 0) rotate(32deg)`,
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 120 120"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-[0_16px_28px_rgba(245,158,11,0.28)]"
        >
          <defs>
            <linearGradient id="pencilWood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FED7AA" />
              <stop offset="100%" stopColor="#FDBA74" />
            </linearGradient>
            <linearGradient id="pencilEraser" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDA4AF" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
            <linearGradient id="pencilMetal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <radialGradient id="pencilShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(202,138,4,0.35)" />
              <stop offset="100%" stopColor="rgba(202,138,4,0)" />
            </radialGradient>
          </defs>

          {/* Shadow */}
          <ellipse cx="60" cy="110" rx="38" ry="7" fill="url(#pencilShadow)" />

          {/* Pencil Body 3D */}
          <g transform="translate(60,50) rotate(42) translate(-60,-50)">
            {/* Eraser */}
            <rect x="52" y="10" width="16" height="14" rx="4" fill="url(#pencilEraser)" />
            {/* Metal ferrule */}
            <rect x="51" y="24" width="18" height="8" rx="2" fill="url(#pencilMetal)" />
            {/* Main Hexagonal Body */}
            <rect x="52" y="32" width="6" height="50" fill="#FACC15" />
            <rect x="58" y="32" width="6" height="50" fill="#EAB308" />
            <rect x="64" y="32" width="4" height="50" fill="#CA8A04" />
            {/* Sharpened Wood Cone */}
            <polygon points="52,82 68,82 60,102" fill="url(#pencilWood)" />
            {/* Graphite Tip */}
            <polygon points="57,95 63,95 60,102" fill="#1E293B" />
          </g>
        </svg>
      </div>

      {/* ========================================================
          3. 3D SPINNING TOP (Top Right)
          ======================================================== */}
      <div
        className="absolute top-3 -right-2 sm:top-6 sm:right-[4%] lg:right-[7%] animate-float-reverse opacity-90 filter blur-[0.8px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.22}px, 0) rotate(14deg)`,
        }}
      >
        <svg
          width="115"
          height="115"
          viewBox="0 0 120 120"
          className="w-13 h-13 sm:w-17 sm:h-17 md:w-22 md:h-22 drop-shadow-[0_16px_28px_rgba(16,185,129,0.28)]"
        >
          <defs>
            <linearGradient id="topTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="topBottom" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <radialGradient id="topShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(5,150,105,0.35)" />
              <stop offset="100%" stopColor="rgba(5,150,105,0)" />
            </radialGradient>
          </defs>

          {/* Shadow */}
          <ellipse cx="60" cy="108" rx="34" ry="6" fill="url(#topShadow)" />

          {/* Peg (Bottom tip) */}
          <path d="M58,95 L62,95 L60,106 Z" fill="#94A3B8" />

          {/* Bottom Cone */}
          <path d="M22,50 C22,58 98,58 98,50 L60,95 Z" fill="url(#topBottom)" />
          
          {/* Top Dome */}
          <path d="M22,50 C22,25 98,25 98,50 Z" fill="url(#topTop)" />
          <ellipse cx="60" cy="50" rx="38" ry="8" fill="url(#topTop)" opacity="0.6" />

          {/* Yellow Stripes on Dome */}
          <path d="M30,35 C45,40 75,40 90,35" fill="none" stroke="#A7F3D0" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>

          {/* Handle */}
          <rect x="56" y="15" width="8" height="15" rx="3" fill="#EF4444" />
          <circle cx="60" cy="12" r="6" fill="#DC2626" />
          
          {/* Specular Highlight */}
          <path d="M32,45 C34,35 45,30 50,28" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      {/* ========================================================
          4. 3D MINI ROCKET / FOGUETINHO (Top-Right Mid)
          ======================================================== */}
      <div
        className="absolute top-28 -right-2 sm:top-28 sm:right-[8%] lg:right-[11%] animate-float-slow opacity-85 sm:opacity-95 filter blur-[1px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.16}px, 0) rotate(-22deg)`,
        }}
      >
        <svg
          width="105"
          height="105"
          viewBox="0 0 120 120"
          className="w-12 h-12 sm:w-15 sm:h-15 md:w-19 md:h-19 drop-shadow-[0_16px_28px_rgba(244,63,94,0.3)]"
        >
          <defs>
            <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient id="rocketNose" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FB7185" />
              <stop offset="100%" stopColor="#E11D48" />
            </linearGradient>
            <linearGradient id="rocketFlame" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="50%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>

          {/* Flame Tail */}
          <path d="M54,85 Q60,110 60,116 Q60,110 66,85 Z" fill="url(#rocketFlame)" opacity="0.9" />

          {/* Left & Right Wings */}
          <path d="M42,65 L28,82 L44,80 Z" fill="#E11D48" />
          <path d="M78,65 L92,82 L76,80 Z" fill="#BE123C" />

          {/* Main Fuselage */}
          <path d="M60,15 C46,35 46,75 60,88 C74,75 74,35 60,15 Z" fill="url(#rocketBody)" />

          {/* Nose Cone */}
          <path d="M60,15 C52,26 50,38 60,40 C70,38 68,26 60,15 Z" fill="url(#rocketNose)" />

          {/* Porthole Window 3D */}
          <circle cx="60" cy="54" r="10" fill="#0284C7" />
          <circle cx="60" cy="54" r="8" fill="#38BDF8" />
          <ellipse cx="58" cy="51" rx="4" ry="2" fill="#FFFFFF" opacity="0.8" />
        </svg>
      </div>

      {/* ========================================================
          5. 3D GOLDEN MAGIC STAR (Mid-Left)
          ======================================================== */}
      <div
        className="absolute top-[40%] -left-2 sm:top-[34%] sm:left-[2%] lg:left-[4%] animate-wiggle opacity-90 filter blur-[0.75px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.12}px, 0) rotate(-12deg)`,
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 120 120"
          className="w-12 h-12 sm:w-15 sm:h-15 md:w-19 md:h-19 drop-shadow-[0_16px_28px_rgba(245,158,11,0.32)]"
        >
          <defs>
            <linearGradient id="starFacet1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="100%" stopColor="#FACC15" />
            </linearGradient>
            <linearGradient id="starFacet2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FACC15" />
              <stop offset="100%" stopColor="#EAB308" />
            </linearGradient>
            <linearGradient id="starFacet3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>
            <radialGradient id="starShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(234,179,8,0.35)" />
              <stop offset="100%" stopColor="rgba(234,179,8,0)" />
            </radialGradient>
          </defs>

          {/* Shadow */}
          <ellipse cx="60" cy="108" rx="36" ry="6" fill="url(#starShadow)" />

          {/* 3D Star Facets */}
          <polygon points="60,18 60,55 72,42" fill="url(#starFacet1)" />
          <polygon points="60,18 60,55 48,42" fill="url(#starFacet2)" />
          <polygon points="102,48 60,55 78,65" fill="url(#starFacet2)" />
          <polygon points="102,48 60,55 72,42" fill="url(#starFacet1)" />
          <polygon points="86,94 60,55 60,78" fill="url(#starFacet3)" />
          <polygon points="86,94 60,55 78,65" fill="url(#starFacet2)" />
          <polygon points="34,94 60,55 42,65" fill="url(#starFacet3)" />
          <polygon points="34,94 60,55 60,78" fill="url(#starFacet2)" />
          <polygon points="18,48 60,55 48,42" fill="url(#starFacet1)" />
          <polygon points="18,48 60,55 42,65" fill="url(#starFacet2)" />

          {/* Sparkle Glint at Center */}
          <circle cx="60" cy="55" r="3.5" fill="#FFFFFF" opacity="0.95" />
        </svg>
      </div>

      {/* ========================================================
          6. 3D MAGNIFYING GLASS / LUPA DO SABER (Mid-Right)
          ======================================================== */}
      <div
        className="absolute top-[42%] -right-2 sm:top-[38%] sm:right-[3%] lg:right-[5%] animate-float-slow opacity-90 filter blur-[0.8px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.17}px, 0) rotate(18deg)`,
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 120 120"
          className="w-12 h-12 sm:w-15 sm:h-15 md:w-19 md:h-19 drop-shadow-[0_16px_28px_rgba(14,165,233,0.3)]"
        >
          <defs>
            <linearGradient id="glassRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="60%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
            <linearGradient id="glassLens" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
              <stop offset="50%" stopColor="rgba(224,242,254,0.4)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0.2)" />
            </linearGradient>
            <linearGradient id="handleWood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>

          {/* Wooden Handle */}
          <rect x="74" y="74" width="14" height="34" rx="6" transform="rotate(-45 74 74)" fill="url(#handleWood)" />
          {/* Metallic Joint */}
          <rect x="68" y="68" width="12" height="8" rx="2" transform="rotate(-45 68 68)" fill="#E2E8F0" />

          {/* Outer Ring */}
          <circle cx="48" cy="48" r="32" fill="url(#glassRing)" />
          {/* Inner Cutout with Glass Lens */}
          <circle cx="48" cy="48" r="23" fill="url(#glassLens)" />

          {/* Gloss Reflection Arc */}
          <path
            d="M32,36 C38,28 58,28 64,36"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* ========================================================
          7. 3D COLOR PALETTE (Lower Left Mobile & Desktop)
          ======================================================== */}
      <div
        className="absolute top-[68%] -left-1 sm:top-[60%] sm:left-[3%] lg:left-[5%] animate-float-slow opacity-85 filter blur-[1px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.15}px, 0) rotate(12deg)`,
        }}
      >
        <svg
          width="105"
          height="105"
          viewBox="0 0 120 120"
          className="w-12 h-12 sm:w-15 sm:h-15 md:w-18 md:h-18 drop-shadow-[0_16px_28px_rgba(16,185,129,0.25)]"
        >
          <defs>
            <linearGradient id="paletteBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FED7AA" />
              <stop offset="60%" stopColor="#FDBA74" />
              <stop offset="100%" stopColor="#FB923C" />
            </linearGradient>
            <radialGradient id="paletteShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(251,146,60,0.35)" />
              <stop offset="100%" stopColor="rgba(251,146,60,0)" />
            </radialGradient>
          </defs>

          {/* Shadow */}
          <ellipse cx="60" cy="108" rx="38" ry="7" fill="url(#paletteShadow)" />

          {/* 3D Palette Shape */}
          <path
            d="M30,30 C50,15 85,20 95,45 C102,62 90,85 75,88 C68,89 65,82 58,82 C52,82 48,88 40,88 C25,88 18,65 22,48 C24,40 26,34 30,30 Z"
            fill="url(#paletteBody)"
          />
          {/* Thumb Hole */}
          <ellipse cx="78" cy="70" rx="6" ry="8" fill="#FFFBEB" />

          {/* Color Paint Drops */}
          <circle cx="42" cy="35" r="5" fill="#F43F5E" />
          <circle cx="41" cy="33" r="1.5" fill="#FFFFFF" opacity="0.8" />
          <circle cx="60" cy="30" r="5" fill="#FACC15" />
          <circle cx="59" cy="28" r="1.5" fill="#FFFFFF" opacity="0.8" />
          <circle cx="78" cy="35" r="5" fill="#0EA5E9" />
          <circle cx="77" cy="33" r="1.5" fill="#FFFFFF" opacity="0.8" />
          <circle cx="85" cy="50" r="5" fill="#10B981" />
          <circle cx="84" cy="48" r="1.5" fill="#FFFFFF" opacity="0.8" />
        </svg>
      </div>

      {/* ========================================================
          8. 3D GOLDEN TROPHY OF ACHIEVEMENT (Lower Right Mobile & Desktop)
          ======================================================== */}
      <div
        className="absolute top-[72%] -right-1 sm:top-[64%] sm:right-[3%] lg:right-[6%] animate-wiggle opacity-85 filter blur-[1px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.16}px, 0) rotate(-10deg)`,
        }}
      >
        <svg
          width="105"
          height="105"
          viewBox="0 0 120 120"
          className="w-12 h-12 sm:w-15 sm:h-15 md:w-18 md:h-18 drop-shadow-[0_16px_28px_rgba(234,179,8,0.3)]"
        >
          <defs>
            <linearGradient id="trophyGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="40%" stopColor="#FACC15" />
              <stop offset="80%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>
            <linearGradient id="trophyBase" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>

          {/* Pedestal Base */}
          <rect x="42" y="92" width="36" height="12" rx="3" fill="url(#trophyBase)" />
          <rect x="52" y="80" width="16" height="14" fill="url(#trophyGold)" />

          {/* Left & Right Handles */}
          <path d="M40,38 C26,38 26,62 40,62" stroke="url(#trophyGold)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M80,38 C94,38 94,62 80,62" stroke="url(#trophyGold)" strokeWidth="6" fill="none" strokeLinecap="round" />

          {/* Cup Body */}
          <path d="M38,30 C38,68 82,68 82,30 Z" fill="url(#trophyGold)" />

          {/* Star Medal inside cup */}
          <polygon points="60,42 63,48 70,49 65,54 66,61 60,57 54,61 55,54 50,49 57,48" fill="#FFFFFF" opacity="0.9" />

          {/* Cup Rim */}
          <ellipse cx="60" cy="30" rx="22" ry="5" fill="#FEF08A" />
        </svg>
      </div>
    </div>
  );
};

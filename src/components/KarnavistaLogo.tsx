import React from "react";

interface KarnavistaLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export const KarnavistaLogo: React.FC<KarnavistaLogoProps> = ({
  variant = "light",
  size = "md",
  showTagline = true,
  className = ""
}) => {
  const isLight = variant === "light";

  const sizeStyles = {
    sm: { icon: 30, text: "text-lg", tag: "text-[8px] tracking-[0.2em]" },
    md: { icon: 38, text: "text-2xl", tag: "text-[9px] tracking-[0.22em]" },
    lg: { icon: 50, text: "text-3xl", tag: "text-[11px] tracking-[0.25em]" }
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official KARNAVISTA Heritage Emblem SVG */}
      <svg
        width={sizeStyles.icon}
        height={sizeStyles.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="kvGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D77F" />
            <stop offset="50%" stopColor="#D99A24" />
            <stop offset="100%" stopColor="#A87110" />
          </linearGradient>
          <linearGradient id="kvNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B5E8E" />
            <stop offset="50%" stopColor="#073B5C" />
            <stop offset="100%" stopColor="#032B43" />
          </linearGradient>
        </defs>

        {/* Outer Circular Compass Shield */}
        <circle cx="24" cy="24" r="22" fill="url(#kvNavyGrad)" stroke="url(#kvGoldGrad)" strokeWidth="1.5" />

        {/* Inner Subtle Ring */}
        <circle cx="24" cy="24" r="19" stroke="#EAF5FA" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 2" />

        {/* Royal Sun Rays / 8 Cardinal Directions */}
        <path d="M24 6V9M24 39V42M6 24H9M39 24H42" stroke="url(#kvGoldGrad)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M11.3 11.3L13.5 13.5M34.5 34.5L36.7 36.7M11.3 36.7L13.5 34.5M34.5 13.5L36.7 11.3" stroke="#D99A24" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.7" />

        {/* Karnataka Heritage Gopura / Arch Motif */}
        <path
          d="M24 12L31 23H17L24 12Z"
          fill="url(#kvGoldGrad)"
        />
        {/* Foundation Arch / Chariot Base */}
        <path
          d="M16 25C16 23.8954 16.8954 23 18 23H30C31.1046 23 32 23.8954 32 25V33C32 33.5523 31.5523 34 31 34H17C16.4477 34 16 33.5523 16 33V25Z"
          fill="#073B5C"
          stroke="url(#kvGoldGrad)"
          strokeWidth="1.2"
        />

        {/* Central Lotus Gate / Star */}
        <path
          d="M24 23V34M19 28H29M24 18L26 21H22L24 18Z"
          stroke="#F5D77F"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Diamond Centerpiece */}
        <circle cx="24" cy="28" r="1.8" fill="#F5D77F" />
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <div className={`font-serif font-black tracking-tight ${sizeStyles.text} flex items-center`}>
          <span className={isLight ? "text-white" : "text-brand-dark"}>
            KARNA
          </span>
          <span className="text-amber-400">
            VISTA
          </span>
        </div>
        {showTagline && (
          <span className={`font-sans font-bold uppercase ${sizeStyles.tag} ${
            isLight ? "text-amber-200/90" : "text-amber-600"
          }`}>
            SEE KARNATAKA. FEEL KARNATAKA.
          </span>
        )}
      </div>
    </div>
  );
};

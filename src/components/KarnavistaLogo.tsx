import React from "react";

interface KarnavistaLogoProps {
  variant?: "light" | "dark" | "full";
  size?: "sm" | "md" | "lg" | "xl";
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

  if (variant === "full") {
    const fullHeights = {
      sm: "h-14",
      md: "h-20",
      lg: "h-28",
      xl: "h-36"
    }[size];

    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        <img
          src="/images/karnavista-logo.png"
          alt="KARNAVISTA - See Karnataka. Feel Karnataka."
          className={`${fullHeights} w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105`}
        />
      </div>
    );
  }

  const sizeStyles = {
    sm: { imgH: "h-9 sm:h-10", text: "text-lg", tag: "text-[8px] tracking-[0.18em]" },
    md: { imgH: "h-11 sm:h-12", text: "text-2xl", tag: "text-[9px] tracking-[0.2em]" },
    lg: { imgH: "h-14 sm:h-16", text: "text-3xl", tag: "text-[11px] tracking-[0.22em]" },
    xl: { imgH: "h-20 sm:h-24", text: "text-4xl", tag: "text-[13px] tracking-[0.25em]" }
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Illustrated Emblem: 'K' Road with Karnataka Map, Mysore Palace, Hampi & Jog Falls */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/images/karnavista-emblem.png"
          alt="KARNAVISTA Official Karnataka Tourism Emblem"
          className={`${sizeStyles.imgH} w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105`}
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className={`font-serif font-black tracking-wider ${sizeStyles.text} flex items-center`}>
          <span className={isLight ? "text-white" : "text-[#032B43]"}>
            KARNA
          </span>
          <span className="text-[#D99A24]">
            VISTA
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-2 bg-[#D99A24]/60" />
            <span className={`font-sans font-bold uppercase ${sizeStyles.tag} ${
              isLight ? "text-amber-200/90" : "text-[#073B5C]"
            }`}>
              SEE KARNATAKA. FEEL KARNATAKA.
            </span>
            <span className="h-[1px] w-2 bg-[#D99A24]/60" />
          </div>
        )}
      </div>
    </div>
  );
};

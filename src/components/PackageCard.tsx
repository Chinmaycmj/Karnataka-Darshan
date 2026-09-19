import React from "react";
import { TourPackage } from "../data/types";
import { useApp } from "../context/AppContext";
import { Clock, MapPin, Bookmark, Check, ChevronRight, Sparkles } from "lucide-react";

interface PackageCardProps {
  pkg: TourPackage;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  const { language, navigateToPackage, savedPackages, toggleSavePackage } = useApp();
  const isSaved = savedPackages.includes(pkg.id);

  return (
    <div 
      onClick={() => navigateToPackage(pkg.id)}
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-amber-500/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      {/* Cover Image Container */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

        {/* Duration Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg bg-black/60 text-white backdrop-blur-md border border-white/20">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
        </div>

        {/* Bookmark Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleSavePackage(pkg.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md transition-all ${
            isSaved 
              ? "bg-amber-600 text-white shadow" 
              : "bg-black/40 text-white hover:bg-black/60"
          }`}
          title={isSaved ? "Saved in My Trips" : "Save Package"}
        >
          <Bookmark className="w-4 h-4 fill-current" />
        </button>

        {/* District Circuit Breadcrumbs */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-center gap-1 text-xs text-amber-300 font-medium mb-1">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{pkg.districtNames.join(" • ")}</span>
          </div>
          <h4 className="font-serif font-bold text-lg sm:text-xl text-white leading-tight">
            {pkg.name}
          </h4>
        </div>
      </div>

      {/* Package Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Theme Badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {pkg.themes.map((t, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Highlights List */}
          <ul className="space-y-1.5 mb-4 text-xs text-slate-600">
            {pkg.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{h}</span>
              </li>
            ))}
          </ul>

          {/* Inclusions summary */}
          <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-4 bg-slate-50 p-2 rounded-xl border border-slate-100">
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <Check className="w-3 h-3" /> Stay Included
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <Check className="w-3 h-3" /> AC Transport
            </span>
          </div>
        </div>

        {/* Price & CTA Button */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">
              Estimated From
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-price font-extrabold text-xl sm:text-2xl text-amber-950">
                ₹{pkg.startingPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">/ person</span>
            </div>
          </div>

          <button 
            onClick={() => navigateToPackage(pkg.id)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 shadow-md shadow-amber-700/20 transition-all group-hover:scale-105"
          >
            <span>{language === "kn" ? "ಪ್ಯಾಕೇಜ್ ನೋಡಿ" : "View Package"}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};

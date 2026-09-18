import React from "react";
import { District } from "../data/types";
import { useApp } from "../context/AppContext";
import { MapPin, Bookmark, ChevronRight, Calendar, Sparkles } from "lucide-react";

interface DistrictCardProps {
  district: District;
}

export const DistrictCard: React.FC<DistrictCardProps> = ({ district }) => {
  const { language, navigateToDistrict, savedDistricts, toggleSaveDistrict } = useApp();
  const isSaved = savedDistricts.includes(district.id);

  return (
    <div 
      onClick={() => navigateToDistrict(district.id)}
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-amber-400/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      {/* Top Image Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={district.heroImage}
          alt={district.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Region Tag */}
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-black/50 text-white backdrop-blur-md border border-white/20">
          {district.region}
        </span>

        {/* Save Bookmark Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleSaveDistrict(district.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md transition-all ${
            isSaved 
              ? "bg-amber-600 text-white shadow" 
              : "bg-black/40 text-white hover:bg-black/60"
          }`}
          title={isSaved ? "Saved to My Trips" : "Save District"}
        >
          <Bookmark className="w-4 h-4 fill-current" />
        </button>

        {/* Bottom Image Overlay Header */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="text-xs font-kannada text-amber-300 block font-medium">
            {district.kannadaName}
          </span>
          <h4 className="font-serif font-bold text-lg sm:text-xl text-white drop-shadow-sm leading-tight">
            {district.name}
          </h4>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
            {district.shortDescription}
          </p>

          {/* Highlights Chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {district.highlights.slice(0, 3).map((h, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[10px] font-medium bg-slate-50 text-slate-700 border border-slate-200 rounded-md"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-medium text-slate-700">{district.recommendedDuration}</span>
          </div>

          <div className="flex items-center gap-1 font-bold text-amber-700 group-hover:text-amber-800 transition-colors">
            <span>{language === "kn" ? "ವಿವರ ನೋಡಿ" : "Explore"}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

      </div>

    </div>
  );
};

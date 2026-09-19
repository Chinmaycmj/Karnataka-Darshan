import React, { useState } from "react";
import { YaatriNiwaasProperty } from "../data/types";
import { useApp } from "../context/AppContext";
import { Star, MapPin, Check, Hotel, ArrowRight } from "lucide-react";
import { StayBookingModal } from "./StayBookingModal";

interface StayCardProps {
  property: YaatriNiwaasProperty;
}

export const StayCard: React.FC<StayCardProps> = ({ property }) => {
  const { language } = useApp();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
        
        {/* Cover Image */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-black/60 text-white backdrop-blur-md">
            {property.districtName} District
          </span>

          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg bg-white/95 text-amber-900 shadow">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
            <span>{property.rating}</span>
            <span className="text-[10px] text-slate-400 font-normal">({property.reviewsCount})</span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 text-white">
            <span className="text-xs text-amber-300 font-kannada block font-medium">
              {property.kannadaName}
            </span>
            <h4 className="font-serif font-bold text-lg sm:text-xl text-white truncate leading-tight">
              {property.name}
            </h4>
          </div>
        </div>

        {/* Property Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="truncate">{property.address}</span>
            </div>

            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
              {property.tagline}
            </p>

            {/* Amenities Chips */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {property.amenities.slice(0, 4).map((a, i) => (
                <span key={i} className="text-[10px] bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-slate-700">
                  ✓ {a}
                </span>
              ))}
            </div>
          </div>

          {/* Price & Book Button */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">
                Starting From
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-price font-extrabold text-xl text-amber-950">
                  ₹{property.priceStarting.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] text-slate-500">/ night</span>
              </div>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 shadow-sm hover:shadow transition-all group-hover:scale-105"
            >
              <span>{language === "kn" ? "ರೂಮ್ ಬುಕ್ ಮಾಡಿ" : "Book Stay"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {isBookingOpen && (
        <StayBookingModal
          property={property}
          onClose={() => setIsBookingOpen(false)}
        />
      )}
    </>
  );
};

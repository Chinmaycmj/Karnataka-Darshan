import React from "react";
import { Destination } from "../data/types";
import { Star, MapPin, Clock, Tag } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-amber-400 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Image */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-black/60 text-white backdrop-blur-md">
          {destination.category}
        </span>

        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 text-[11px] font-bold rounded-md bg-white/90 text-amber-900 shadow-xs">
          <Star className="w-3 h-3 text-amber-500 fill-current" />
          <span>{destination.rating}</span>
        </div>

        <div className="absolute bottom-2.5 left-3 right-3 text-white">
          <span className="text-[11px] text-amber-300 font-kannada block leading-tight">
            {destination.kannadaName}
          </span>
          <h4 className="font-serif font-bold text-base text-white truncate leading-tight">
            {destination.name}
          </h4>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mb-2">
            <MapPin className="w-3 h-3 text-amber-600" />
            <span>{destination.districtName} District</span>
          </div>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
            {destination.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-3">
            {destination.tags.slice(0, 3).map((tag, idx) => (
              <span 
                key={idx} 
                className="text-[10px] px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Timings & Entry fee */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Fee: <strong className="text-slate-700">{destination.entryFee || "Free"}</strong></span>
          <span className="text-slate-400 truncate max-w-[120px]">{destination.timings}</span>
        </div>
      </div>

    </div>
  );
};

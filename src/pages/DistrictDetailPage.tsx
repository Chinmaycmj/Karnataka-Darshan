import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { getDistrictById, DISTRICTS_DATA } from "../data/districts";
import { getDestinationsByDistrict } from "../data/destinations";
import { getPackagesByDistrict } from "../data/packages";
import { getStayByDistrict } from "../data/stays";
import { getBusStandByDistrict } from "../data/busStandsData";
import { PackageCard } from "../components/PackageCard";
import { DestinationCard } from "../components/DestinationCard";
import { StayBookingModal } from "../components/StayBookingModal";
import { DistrictCard } from "../components/DistrictCard";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Plane, 
  Train, 
  Car, 
  Utensils, 
  Award, 
  Compass, 
  Bookmark, 
  ArrowLeft, 
  Hotel, 
  Sparkles, 
  CheckCircle,
  Lightbulb,
  Bus,
  Building2,
  PhoneCall
} from "lucide-react";

export const DistrictDetailPage: React.FC = () => {
  const { 
    selectedDistrictId, 
    setActiveView, 
    navigateToDistrict, 
    navigateToTransport,
    savedDistricts, 
    toggleSaveDistrict, 
    language 
  } = useApp();

  const district = getDistrictById(selectedDistrictId || "mysuru") || DISTRICTS_DATA[21]; // fallback Mysuru
  const destinations = getDestinationsByDistrict(district.id);
  const packages = getPackagesByDistrict(district.id);
  const stay = getStayByDistrict(district.id);
  const busStand = getBusStandByDistrict(district.id);

  const [isStayModalOpen, setIsStayModalOpen] = useState(false);
  const isSaved = savedDistricts.includes(district.id);

  // Group destinations by categories
  const heritageDests = destinations.filter(d => d.category === "Heritage");
  const natureDests = destinations.filter(d => ["Nature", "Hills", "Coast", "Wildlife"].includes(d.category));
  const spiritualDests = destinations.filter(d => d.category === "Spiritual");
  const adventureDests = destinations.filter(d => d.category === "Adventure");

  const otherDistricts = [
    ...DISTRICTS_DATA.filter(d => d.region === district.region && d.id !== district.id),
    ...DISTRICTS_DATA.filter(d => d.region !== district.region && d.id !== district.id)
  ].slice(0, 4);

  const nearbyDistrictsList = district.nearbyDistricts
    .map(id => getDistrictById(id))
    .filter(Boolean);

  return (
    <div className="pb-20 space-y-12 animate-fadeIn">
      
      {/* BREADCRUMB NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200 shadow-2xs w-fit">
          <button
            onClick={() => {
              setActiveView("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-[#0B5E8E] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span className="text-slate-300">/</span>
          <button
            onClick={() => {
              setActiveView("districts");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-[#0B5E8E] transition-colors cursor-pointer"
          >
            31 Districts
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-[#032B43] font-bold">{district.name} ({district.kannadaName})</span>
        </nav>
      </div>

      {/* 1. DISTRICT HERO */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-end justify-start bg-slate-900 overflow-hidden">
        <img
          src={district.heroImage}
          alt={district.name}
          className="absolute inset-0 w-full h-full object-cover opacity-65 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>

        {/* Back navigation button */}
        <div className="absolute top-6 left-4 sm:left-8 z-20">
          <button
            onClick={() => setActiveView("home")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 text-xs font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Karnataka</span>
          </button>
        </div>

        {/* Bookmark action */}
        <div className="absolute top-6 right-4 sm:right-8 z-20">
          <button
            onClick={() => toggleSaveDistrict(district.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl backdrop-blur-md text-xs font-bold transition-all ${
              isSaved 
                ? "bg-amber-600 text-white shadow-md" 
                : "bg-black/40 text-white hover:bg-black/60 border border-white/20"
            }`}
          >
            <Bookmark className="w-4 h-4 fill-current" />
            <span>{isSaved ? "Saved in My Trips" : "Save District"}</span>
          </button>
        </div>

        {/* Hero Title and Region */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
            <span>{district.region} Region</span>
          </div>

          <div>
            <span className="text-xl sm:text-2xl text-amber-300 font-kannada block font-medium">
              {district.kannadaName} ಜಿಲ್ಲೆ
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {district.name}
            </h1>
          </div>

          <p className="text-base sm:text-lg text-amber-100/90 font-medium max-w-3xl">
            {district.tagline}
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW & QUICK METRICS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm -mt-16 relative z-20">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Best Season</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">{district.bestSeason}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Recommended</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">{district.recommendedDuration}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Nearest Airport</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 truncate block max-w-[160px]">
                {district.howToReach.air.split("(")[0]}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Daily Budget</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                ₹{district.budgetEstimate.moderate.toLocaleString("en-IN")} / day
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTRODUCTION & HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            About {district.name}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {district.shortDescription}
          </p>

          <div className="pt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Must-Visit Highlights:
            </h4>
            <div className="flex flex-wrap gap-2">
              {district.highlights.map((h, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900"
                >
                  ✓ {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* How to Reach Card */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
          <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-600" />
            <span>How to Reach {district.name}</span>
          </h3>

          <div className="space-y-3 text-xs text-slate-600">
            <div className="flex items-start gap-2.5">
              <Plane className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block">By Air:</strong>
                <span>{district.howToReach.air}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Train className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block">By Rail:</strong>
                <span>{district.howToReach.rail}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Car className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block">By Road:</strong>
                <span>{district.howToReach.road}</span>
              </div>
            </div>

            {/* Official Bus Facility Card */}
            {busStand && (
              <div className="mt-4 pt-3.5 border-t border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5 text-xs">
                    <Bus className="w-4 h-4 text-red-600" />
                    <span>Official Bus Facility:</span>
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-100 text-red-800 border border-red-200">
                    {busStand.division} Division
                  </span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 text-xs space-y-2 shadow-sm">
                  <div className="font-semibold text-slate-900">{busStand.name}</div>
                  <div className="text-slate-500 text-[11px] flex items-center gap-1.5">
                    <PhoneCall className="w-3 h-3 text-slate-400" />
                    <span>Helpline: {busStand.helplinePhone}</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    Platforms: {busStand.totalPlatforms} • {busStand.dailyDepartures}
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => navigateToTransport({ toCity: district.name, tab: "booking" })}
                      className="flex-1 px-3 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                    >
                      <Bus className="w-3.5 h-3.5" />
                      <span>Book Bus to {district.name}</span>
                    </button>
                    <button
                      onClick={() => navigateToTransport({ standId: busStand.id, tab: "timetables" })}
                      className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Timetable Board</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. DISTRICT DESTINATIONS CATALOGUE (Dynamic by Theme) */}
      {destinations.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Famous Attractions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Top Destinations in {district.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map(d => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        </section>
      )}

      {/* 5. FOOD SPECIALTIES OF THIS DISTRICT */}
      {district.foodSpecialties && district.foodSpecialties.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
              <Utensils className="w-4 h-4" />
              <span>Authentic Flavors</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Local Cuisine & Food Specialties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {district.foodSpecialties.map((food, i) => (
              <div 
                key={i} 
                className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0">
                  {food.isVeg ? "🌱" : "🍖"}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">{food.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">{food.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. CULTURE & TRADITIONAL CRAFTS */}
      {district.cultureAndCrafts && district.cultureAndCrafts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Artisan Heritage</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Culture & Living Crafts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {district.cultureAndCrafts.map((craft, i) => (
              <div 
                key={i} 
                className="bg-gradient-to-br from-amber-50/70 to-white p-5 rounded-2xl border border-amber-200"
              >
                <h4 className="font-bold text-sm text-slate-900 mb-1">{craft.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{craft.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. YAATRI NIWAAS STAY IN THIS DISTRICT */}
      {stay && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
              <Hotel className="w-4 h-4" />
              <span>Official Tourism Stay</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Stay at Yaatri Niwaas {district.name}
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative h-64 lg:h-auto">
              <img src={stay.image} alt={stay.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-xs font-kannada text-amber-300 block">{stay.kannadaName}</span>
                <h4 className="font-serif font-bold text-xl text-white">{stay.name}</h4>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stay.tagline}. Managed under KSTDC tourism standards with clean sanitization, pure vegetarian dining, EV charging, and direct access to major sightseeing routes.
                </p>

                <div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Available Room Categories:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {stay.rooms.map(r => (
                      <div key={r.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-xs font-bold text-slate-800 block truncate">{r.name}</span>
                        <span className="text-xs text-amber-700 font-extrabold block">₹{r.pricePerNight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Prices From</span>
                  <span className="font-price font-extrabold text-2xl text-amber-950">
                    ₹{stay.priceStarting.toLocaleString("en-IN")}
                    <span className="text-xs font-normal text-slate-500"> / night</span>
                  </span>
                </div>

                <button
                  onClick={() => setIsStayModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-amber-700 hover:bg-amber-800 shadow-md transition-all cursor-pointer"
                >
                  Book Stay in {district.name}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. RECOMMENDED PACKAGES PASSING THROUGH THIS DISTRICT */}
      {packages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Curated Circuits
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Tour Packages Covering {district.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map(p => (
              <PackageCard key={p.id} pkg={p} />
            ))}
          </div>
        </section>
      )}

      {/* 9. TRAVEL TIPS & NEARBY DISTRICTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Insider Travel Tips */}
        <div className="bg-amber-50/60 p-6 sm:p-8 rounded-3xl border border-amber-200/80 space-y-4">
          <h3 className="font-serif font-bold text-lg text-amber-950 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            <span>Insider Travel Tips for {district.name}</span>
          </h3>

          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {district.travelTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nearby Districts */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
          <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-600" />
            <span>Explore Nearby Districts</span>
          </h3>

          <div className="space-y-2.5">
            {nearbyDistrictsList.map((nd) => nd && (
              <div
                key={nd.id}
                onClick={() => navigateToDistrict(nd.id)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-amber-50 cursor-pointer transition-colors group"
              >
                <div>
                  <h5 className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-amber-900">
                    {nd.name} <span className="font-kannada font-normal text-xs text-amber-700">({nd.kannadaName})</span>
                  </h5>
                  <span className="text-[11px] text-slate-500">{nd.highlights.slice(0, 2).join(", ")}</span>
                </div>
                <span className="text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
                  View →
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 10. EXPLORE ANOTHER DISTRICT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-10 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5E8E] flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              <span>Continue Your Karnataka Journey</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#032B43]">
              Explore Another District
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Discover other iconic districts across Karnataka's 7 diverse regions.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveView("districts");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xs font-bold text-[#0B5E8E] hover:text-[#073B5C] underline underline-offset-4 cursor-pointer"
          >
            View All 31 Districts →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherDistricts.map(d => (
            <DistrictCard key={d.id} district={d} />
          ))}
        </div>
      </section>

      {/* Stay Booking Modal */}
      {isStayModalOpen && stay && (
        <StayBookingModal
          property={stay}
          onClose={() => setIsStayModalOpen(false)}
        />
      )}

    </div>
  );
};

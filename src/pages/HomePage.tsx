import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { DISTRICTS_DATA } from "../data/districts";
import { DESTINATIONS_DATA } from "../data/destinations";
import { PACKAGES_DATA } from "../data/packages";
import { STAYS_DATA } from "../data/stays";
import { KarnatakaMap } from "../components/KarnatakaMap";
import { DistrictCard } from "../components/DistrictCard";
import { PackageCard } from "../components/PackageCard";
import { DestinationCard } from "../components/DestinationCard";
import { StayCard } from "../components/StayCard";
import { YaatriAIAssistant } from "../components/YaatriAIAssistant";
import { 
  Search, 
  Sparkles, 
  Compass, 
  MapPin, 
  Calendar, 
  Hotel, 
  Bus, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Award,
  Coffee,
  Waves,
  Mountain,
  Trees,
  Landmark,
  UtensilsCrossed,
  Flame,
  Camera
} from "lucide-react";

export const HomePage: React.FC = () => {
  const { 
    language, 
    t, 
    setActiveView, 
    setIsSearchOpen, 
    navigateToDistrict, 
    navigateToPackage,
    setSelectedRegionFilter 
  } = useApp();

  const [activeRegionTab, setActiveRegionTab] = useState<string>("All");
  const [districtSearch, setDistrictSearch] = useState<string>("");
  const [districtViewLimit, setDistrictViewLimit] = useState<number>(9);
  const [selectedExperience, setSelectedExperience] = useState<string>("Heritage");

  const regions = [
    "All",
    "Bengaluru",
    "Central Karnataka",
    "Coastal Karnataka",
    "Malnad",
    "North Karnataka",
    "Kalyana Karnataka",
    "South Karnataka"
  ];

  const experienceCategories = [
    { id: "Heritage", label: language === "kn" ? "ಪರಂಪರೆ" : "Heritage", icon: Landmark, color: "from-amber-600 to-amber-800", count: 24 },
    { id: "Nature", label: language === "kn" ? "ಪ್ರಕೃತಿ" : "Nature", icon: Trees, color: "from-emerald-600 to-emerald-800", count: 18 },
    { id: "Hills", label: language === "kn" ? "ಗಿರಿಧಾಮಗಳು" : "Hills", icon: Mountain, color: "from-teal-600 to-teal-800", count: 14 },
    { id: "Coast", label: language === "kn" ? "ಕರಾವಳಿ" : "Coast", icon: Waves, color: "from-blue-600 to-blue-800", count: 12 },
    { id: "Spiritual", label: language === "kn" ? "ಧಾರ್ಮಿಕ" : "Spiritual", icon: Sparkles, color: "from-orange-600 to-orange-800", count: 28 },
    { id: "Wildlife", label: language === "kn" ? "ವನ್ಯಜೀವಿ" : "Wildlife", icon: Compass, color: "from-green-700 to-green-900", count: 10 },
    { id: "Adventure", label: language === "kn" ? "ಸಾಹಸ" : "Adventure", icon: Flame, color: "from-red-600 to-red-800", count: 11 },
    { id: "Food", label: language === "kn" ? "ಆಹಾರ" : "Food", icon: UtensilsCrossed, color: "from-yellow-600 to-yellow-800", count: 31 },
    { id: "Culture", label: language === "kn" ? "ಸಂಸ್ಕೃತಿ" : "Culture", icon: Award, color: "from-purple-600 to-purple-800", count: 22 }
  ];

  const filteredDistricts = DISTRICTS_DATA.filter((d) => {
    const matchRegion = activeRegionTab === "All" || d.region === activeRegionTab;
    const matchSearch = d.name.toLowerCase().includes(districtSearch.toLowerCase()) || 
                        d.kannadaName.includes(districtSearch);
    return matchRegion && matchSearch;
  });

  const experienceDestinations = DESTINATIONS_DATA.filter((dest) => 
    dest.category.toLowerCase() === selectedExperience.toLowerCase()
  );

  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        
        {/* Background Hero Image with Deep Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600100397608-f010f44383a0?auto=format&fit=crop&w=2000&q=85"
            alt="Karnataka Heritage Tourism - Mysore Palace"
            className="w-full h-full object-cover scale-105 animate-subtleZoom opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-10 sm:pt-16">
          
          {/* Official Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide animate-fadeIn">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{language === "kn" ? "ಅಧಿಕೃತ ಕರ್ನಾಟಕ ಪ್ರವಾಸೋದ್ಯಮ ಪೋರ್ಟಲ್" : "Official 31-District Tourism Network"}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
            {language === "kn" ? "ಕರ್ನಾಟಕ ದರ್ಶನ" : "DISCOVER KARNATAKA"}
          </h1>

          {/* Subheading */}
          <p className="font-serif text-lg sm:text-2xl text-amber-200/90 font-medium max-w-2xl mx-auto tracking-wide">
            {t.heroSubheadline}
          </p>

          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {language === "kn"
              ? "ಹಂಪಿಯ ಶಿಲಾರಥದಿಂದ ಕರಾವಳಿಯ ರಮಣೀಯ ತೀರಗಳವರೆಗೆ, ಮಲೆನಾಡಿನ ಮಂಜುಗವಿದ ಕಾಫಿ ತೋಟಗಳಿಂದ ಬಾದಾಮಿಯ ಶಿಲಾ ಗುಹೆಗಳವರೆಗೆ — ಎಲ್ಲಾ 31 ಜಿಲ್ಲೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ."
              : "From the UNESCO wonders of Hampi to the golden beaches of Gokarna, mist-clad peaks of Coorg, and magnificent Chalukyan caves of Badami — explore all 31 districts with ease."}
          </p>

          {/* 3. HERO OMNI SEARCH BAR */}
          <div className="max-w-2xl mx-auto pt-4">
            <div 
              onClick={() => setIsSearchOpen(true)}
              className="glass-card p-2 sm:p-2.5 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-3 cursor-pointer hover:border-amber-400 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <Search className="w-5 h-5" />
              </div>
              <div className="text-left flex-1">
                <span className="block text-xs font-semibold text-slate-800">
                  {language === "kn" ? "ಕರ್ನಾಟಕದಲ್ಲಿ ಎಲ್ಲಿಗೆ ಹೋಗಲು ಬಯಸುತ್ತೀರಿ?" : "Where in Karnataka do you want to explore?"}
                </span>
                <span className="block text-[11px] text-slate-500 truncate">
                  {t.searchPlaceholder}
                </span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSearchOpen(true);
                }}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-amber-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                <span>Search</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
            <button
              onClick={() => {
                const el = document.getElementById("all-districts-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-amber-600" />
              <span>{t.exploreKarnataka}</span>
            </button>

            <button
              onClick={() => {
                setActiveView("planner");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{t.planMyTrip}</span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-center border-t border-white/15">
            <div>
              <span className="font-price font-bold text-xl sm:text-2xl text-amber-400">31</span>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider">Districts Covered</p>
            </div>
            <div>
              <span className="font-price font-bold text-xl sm:text-2xl text-amber-400">100+</span>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider">Official Attractions</p>
            </div>
            <div>
              <span className="font-price font-bold text-xl sm:text-2xl text-amber-400">31</span>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider">Yaatri Niwaas Stays</p>
            </div>
            <div>
              <span className="font-price font-bold text-xl sm:text-2xl text-amber-400">50+</span>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider">KSRTC Bus Circuits</p>
            </div>
          </div>

        </div>

      </section>

      {/* AI ASSISTANT CONCIERGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <YaatriAIAssistant isEmbedded={true} />
      </section>

      {/* 4. EXPLORE KARNATAKA INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-900/5 via-amber-600/5 to-transparent rounded-3xl p-8 sm:p-12 border border-amber-900/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Unified Tourism Architecture</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              {language === "kn" ? "ಒಂದು ರಾಜ್ಯ. ಹಲವು ಜಗತ್ತುಗಳು." : "One State. Many Worlds."}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Karnataka is a land of vibrant contrasts. Ancient stone temples of Badami and Hampi whisper tales of empires past, misty green peaks of Coorg and Chikkamagaluru cradle aromatic coffee, while pristine Arabian Sea shores at Gokarna and Udupi offer coastal serenity. Yaatri Niwaas brings all 31 districts into one cohesive journey.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 shrink-0 w-full md:w-auto">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-xs">
              <Landmark className="w-6 h-6 text-amber-600 mx-auto mb-1" />
              <span className="font-bold text-sm text-slate-800 block">UNESCO Heritage</span>
              <span className="text-[11px] text-slate-500">Hampi & Pattadakal</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-xs">
              <Waves className="w-6 h-6 text-sky-600 mx-auto mb-1" />
              <span className="font-bold text-sm text-slate-800 block">320 km Coastline</span>
              <span className="text-[11px] text-slate-500">Arabian Sea Beaches</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-xs">
              <Trees className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
              <span className="font-bold text-sm text-slate-800 block">Western Ghats</span>
              <span className="text-[11px] text-slate-500">Global Biodiversity</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-xs">
              <Hotel className="w-6 h-6 text-amber-700 mx-auto mb-1" />
              <span className="font-bold text-sm text-slate-800 block">Yaatri Niwaas</span>
              <span className="text-[11px] text-slate-500">31 District Stays</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ALL 31 DISTRICTS SECTION */}
      <section id="all-districts-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            {language === "kn" ? "ಸಮಗ್ರ ಕರ್ನಾಟಕ ದತ್ತಸಂಚಯ" : "Comprehensive 31-District Directory"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            {t.all31Districts}
          </h2>
          <p className="text-sm text-slate-600">
            {language === "kn" 
              ? "ವಿಜಯನಗರ ಸೇರಿದಂತೆ ಕರ್ನಾಟಕದ ಎಲ್ಲಾ 31 ಜಿಲ್ಲೆಗಳ ದತ್ತಾಂಶ, ಪ್ರಮುಖ ಆಕರ್ಷಣೆಗಳು ಮತ್ತು ವಸತಿ ಆಯ್ಕೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ."
              : "Every single district has its own dedicated page with genuine Karnataka destinations, local food specialties, and Yaatri Niwaas accommodations."}
          </p>
        </div>

        {/* Interactive Karnataka SVG Map */}
        <KarnatakaMap />

        {/* District Filtering Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          
          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 scrollbar-none">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegionTab(region)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all ${
                  activeRegionTab === region
                    ? "bg-amber-700 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Search within 31 Districts */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder={language === "kn" ? "31 ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಹುಡುಕಿ..." : "Filter 31 districts..."}
              value={districtSearch}
              onChange={(e) => setDistrictSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-amber-500 shadow-2xs"
            />
          </div>

        </div>

        {/* 31 District Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDistricts.slice(0, districtViewLimit).map((d) => (
            <DistrictCard key={d.id} district={d} />
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredDistricts.length > 9 && (
          <div className="text-center pt-4">
            <button
              onClick={() => setDistrictViewLimit(prev => prev >= filteredDistricts.length ? 9 : prev + 9)}
              className="px-6 py-3 rounded-xl text-xs font-bold text-amber-900 bg-amber-100/70 hover:bg-amber-200 border border-amber-300 transition-all shadow-xs"
            >
              {districtViewLimit >= filteredDistricts.length
                ? (language === "kn" ? "ಕಡಿಮೆ ತೋರಿಸಿ (Show Less)" : "Show Less Districts")
                : (language === "kn" ? `ಇನ್ನಷ್ಟು ಜಿಲ್ಲೆಗಳನ್ನು ನೋಡಿ (${filteredDistricts.length - districtViewLimit} More)` : `View All 31 Districts (${filteredDistricts.length - districtViewLimit} more)`)}
            </button>
          </div>
        )}

      </section>

      {/* 6. POPULAR EXPERIENCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            {language === "kn" ? "ಅನುಭವಗಳ ವರ್ಗೀಕರಣ" : "Curated Tourism Themes"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            {t.popularExperiences}
          </h2>
          <p className="text-sm text-slate-600">
            Discover destinations across all 31 districts organized by official Karnataka Tourism interest themes.
          </p>
        </div>

        {/* 9 Category Grid Chips */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
          {experienceCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedExperience === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedExperience(cat.id)}
                className={`p-3.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all border ${
                  isSelected
                    ? "bg-amber-600 text-white border-amber-700 shadow-md scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                }`}
              >
                <Icon className={`w-6 h-6 mb-2 ${isSelected ? "text-white" : "text-amber-600"}`} />
                <span className="text-xs font-bold block">{cat.label}</span>
                <span className={`text-[10px] ${isSelected ? "text-amber-200" : "text-slate-400"}`}>
                  {cat.count}+ Spots
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamically Filtered Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {experienceDestinations.slice(0, 6).map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>


      {/* 7. FEATURED PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              {language === "kn" ? "ವಿಶೇಷ ಪ್ರವಾಸ ಪ್ಯಾಕೇಜ್‌ಗಳು" : "Multi-District Circuits"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              {t.tourPackages}
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Authentic multi-district and regional itineraries designed with scheduled KSRTC transport, certified guides, and Yaatri Niwaas accommodations.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveView("packages");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 underline underline-offset-4"
          >
            <span>{language === "kn" ? "ಎಲ್ಲಾ ಪ್ಯಾಕೇಜ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ" : "View All Packages"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES_DATA.slice(0, 3).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* 8. EXPLORE BY REGION (Visual Regional Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            {language === "kn" ? "ಪ್ರಾಂತ್ಯವಾರು ಪರಿಚಯ" : "Geographic Diversity"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Explore Karnataka by Region
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Coastal Karnataka",
              kannada: "ಕರಾವಳಿ ಕರ್ನಾಟಕ",
              districts: "Udupi, Dakshina Kannada, Uttara Kannada",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
              desc: "320 km of Arabian Sea beaches, seafood ghee roast, and sacred temples."
            },
            {
              name: "Malnad & Ghats",
              kannada: "ಮಲೆನಾಡು ಗಿರಿಧಾಮಗಳು",
              districts: "Kodagu, Chikkamagaluru, Shivamogga, Hassan",
              img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
              desc: "Highest peaks, misty coffee plantations, shola forests, and Jog Falls."
            },
            {
              name: "North Karnataka Heritage",
              kannada: "ಉತ್ತರ ಕರ್ನಾಟಕ ಪರಂಪರೆ",
              districts: "Bagalkote, Belagavi, Dharwad, Gadag, Vijayapura, Vijayanagara",
              img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
              desc: "UNESCO Hampi & Pattadakal, Badami caves, Gol Gumbaz, and stepwells."
            },
            {
              name: "Kalyana Karnataka",
              kannada: "ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ",
              districts: "Bidar, Kalaburagi, Raichur, Koppal, Yadgir, Ballari",
              img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
              desc: "Bahmani fortresses, Bidriware, Itagi Emperor of Temples, and Sufi shrines."
            }
          ].map((reg, idx) => (
            <div 
              key={idx}
              onClick={() => {
                setActiveRegionTab(reg.name.split(" ")[0]);
                const el = document.getElementById("all-districts-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative h-72 rounded-3xl overflow-hidden border border-slate-200 cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <img src={reg.img} alt={reg.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs text-amber-300 font-kannada block">{reg.kannada}</span>
                <h4 className="font-serif font-bold text-lg text-white mb-1">{reg.name}</h4>
                <p className="text-[11px] text-slate-300 line-clamp-2 mb-2">{reg.desc}</p>
                <span className="text-[10px] text-amber-200 uppercase tracking-wider font-semibold">
                  Districts: {reg.districts}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. WEEKEND GETAWAYS & 10. KARNATAKA HERITAGE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden relative">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-amber-600 text-white rounded-full inline-block">
              UNESCO World Heritage Spotlight
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold leading-tight text-white">
              The Golden Stones of Vijayanagara & Chalukyas
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Step back into the 14th to 16th centuries when Vijayanagara was the second largest city in the medieval world. Marvel at Hampi Vittala Stone Chariot, musical granite pillars, and Virupaksha Temple. In Bagalkote, wander through the rock-cut cave temples of Badami and Pattadakal masterpieces.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => navigateToDistrict("vijayanagara")}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
              >
                Explore Hampi & Vijayanagara
              </button>
              <button
                onClick={() => navigateToDistrict("bagalkote")}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              >
                Explore Badami & Pattadakal
              </button>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-35 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80" 
              alt="Hampi Stone Chariot" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* 11. NATURE & WILDLIFE + 12. COASTAL KARNATAKA HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Nature & Wildlife */}
        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Trees className="w-4 h-4" />
              <span>Wild Karnataka</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Bandipur, Nagarhole & Dandeli
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Home to the highest tiger population in Southern India. Witness herds of Asian elephants along the Kabini river, leopards in Bandipur, and grade-3 whitewater rapids in the deep Kali forests of Dandeli.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={() => navigateToPackage("wild-karnataka-tiger-safari")}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors flex items-center gap-2"
            >
              <span>View Wildlife Safaris</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Coastal Trail */}
        <div className="bg-gradient-to-br from-sky-900 to-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Waves className="w-4 h-4" />
              <span>Coastal Karnataka Trail</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Sun, Sand & Sacred Shrines
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Journey along the scenic Konkan coast. Marvel at the 123-foot Murudeshwara Shiva statue rising from the sea, kayak along Gokarna Om Beach, ferry to St. Mary columnar basalt islands, and taste authentic Mangalorean ghee roast.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={() => navigateToPackage("coastal-karnataka-odyssey")}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-sky-400 hover:bg-sky-300 text-slate-950 transition-colors flex items-center gap-2"
            >
              <span>Explore Coastal Odyssey</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </section>

      {/* 13. FOOD & CULTURE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Authentic Culinary Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            The Flavors of Karnataka
          </h2>
          <p className="text-sm text-slate-600">
            From GI-tagged Dharwad Peda to melting Davanagere Benne Dosa, royal Mysore Pak and aromatic Coorg spices.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { name: "Dharwad Peda", district: "Dharwad", desc: "GI-tagged caramelized milk fudge" },
            { name: "Benne Dosa", district: "Davanagere", desc: "Crisp butter dosa with aloo palya" },
            { name: "Mysore Pak", district: "Mysuru", desc: "Ghee & gram flour melt-in-mouth sweet" },
            { name: "Mangalore Ghee Roast", district: "Dakshina Kannada", desc: "Fiery red Byadagi spiced roast" },
            { name: "Coorg Pandi Curry", district: "Kodagu", desc: "Kachampuli vinegar flavored delicacy" },
            { name: "Jolada Rotti Oota", district: "Bagalkote / Vijayapura", desc: "Sorghum flatbread with stuffed brinjal" }
          ].map((dish, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-2xs hover:border-amber-400 transition-colors">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mx-auto mb-2">
                🍛
              </span>
              <h5 className="font-bold text-xs sm:text-sm text-slate-800">{dish.name}</h5>
              <span className="text-[10px] text-amber-700 font-semibold block mb-1">{dish.district}</span>
              <p className="text-[10px] text-slate-500 leading-tight">{dish.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 14. PLAN YOUR TRIP (SMART PLANNER TEASER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-amber-500/30 text-amber-200 rounded-full inline-block border border-amber-400/30">
              Rule-Based Intelligent Routing
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold leading-tight">
              Build Your Own Karnataka Journey
            </h2>
            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-light">
              Select your starting hub, number of days, budget level, and interests (Heritage, Beaches, Wildlife, Coffee, Food). Our smart algorithm synthesizes an itinerary with authentic destinations from all 31 districts.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveView("planner");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-950 bg-amber-400 hover:bg-amber-300 shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-sans cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Custom Trip Planner</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 15. YAATRI NIWAAS STAYS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
              <Hotel className="w-4 h-4" />
              <span>Official Tourism Accommodation</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Yaatri Niwaas in Every District
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Reliable, clean, and culturally authentic stays positioned directly beside major tourism landmarks across all 31 districts.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveView("stays");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 underline underline-offset-4"
          >
            <span>View All 31 Yaatri Stays</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STAYS_DATA.slice(0, 3).map((stay) => (
            <StayCard key={stay.id} property={stay} />
          ))}
        </div>
      </section>

    </div>
  );
};

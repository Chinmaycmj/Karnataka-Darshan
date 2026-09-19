import React from "react";
import { useApp } from "../context/AppContext";
import { MapPin, Phone, Mail, Globe, Heart, ShieldCheck } from "lucide-react";
import { DISTRICTS_DATA } from "../data/districts";
import { KarnavistaLogo } from "./KarnavistaLogo";

export const Footer: React.FC = () => {
  const { language, setLanguage, setActiveView, navigateToDistrict } = useApp();

  return (
    <footer className="bg-[#032B43] text-slate-300 pt-16 pb-12 border-t border-[#073B5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <KarnavistaLogo variant="light" size="lg" showTagline={true} />
            
            <p className="text-sm text-slate-300/90 leading-relaxed pr-6 pt-2">
              {language === "kn"
                ? "ಕರ್ನಾಟಕದ ಎಲ್ಲಾ 31 ಜಿಲ್ಲೆಗಳ ಪ್ರವಾಸೋದ್ಯಮ, ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆ, ಪ್ರಕೃತಿ ಸೌಂದರ್ಯ, ಅಧಿಕೃತ ಯಾತ್ರಿ ನಿವಾಸ ವಸತಿ ಹಾಗೂ ಸಾರಿಗೆಯನ್ನು ಒಟ್ಟುಗೂಡಿಸುವ ಅಧಿಕೃತ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್."
                : "The official Karnataka tourism discovery platform. Explore heritage sanctuaries, misty hill stations, pristine Arabian Sea beaches, and authentic culinary trails across all 31 districts."}
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Karnataka Tourism Platform • All 31 Districts Connected</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              {language === "kn" ? "ವಿಭಾಗಗಳು" : "Explore"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => { setActiveView("districts"); window.scrollTo({top:0, behavior:'smooth'}); }} 
                  className="hover:text-amber-400 transition-colors"
                >
                  {language === "kn" ? "31 ಜಿಲ್ಲೆಗಳು" : "All 31 Districts"}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView("packages"); window.scrollTo({top:0, behavior:'smooth'}); }} 
                  className="hover:text-amber-400 transition-colors"
                >
                  {language === "kn" ? "ಟೂರ್ ಪ್ಯಾಕೇಜ್‌ಗಳು" : "Tour Packages"}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView("planner"); window.scrollTo({top:0, behavior:'smooth'}); }} 
                  className="hover:text-amber-400 transition-colors"
                >
                  {language === "kn" ? "ಸ್ಮಾರ್ಟ್ ಟ್ರಿಪ್ ಪ್ಲಾನರ್" : "Custom Trip Planner"}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView("stays"); window.scrollTo({top:0, behavior:'smooth'}); }} 
                  className="hover:text-amber-400 transition-colors"
                >
                  {language === "kn" ? "ಯಾತ್ರಿ ನಿವಾಸ ವಸತಿ" : "Yaatri Niwaas Stays"}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView("transport"); window.scrollTo({top:0, behavior:'smooth'}); }} 
                  className="hover:text-amber-400 transition-colors"
                >
                  {language === "kn" ? "ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್ ಬುಕಿಂಗ್" : "KSRTC Bus Booking"}
                </button>
              </li>
            </ul>
          </div>

          {/* Major Regions */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              {language === "kn" ? "ಪ್ರಮುಖ ಪ್ರಾಂತ್ಯಗಳು" : "Regions"}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Coastal Karnataka (ಕರಾವಳಿ)</li>
              <li>Malnad & Western Ghats (ಮಲೆನಾಡು)</li>
              <li>North Karnataka (ಉತ್ತರ ಕರ್ನಾಟಕ)</li>
              <li>Kalyana Karnataka (ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ)</li>
              <li>South Karnataka (ದಕ್ಷಿಣ ಕರ್ನಾಟಕ)</li>
              <li>Central Karnataka (ಮಧ್ಯ ಕರ್ನಾಟಕ)</li>
              <li>Bengaluru & Around (ಬೆಂಗಳೂರು)</li>
            </ul>
          </div>

          {/* Contact & Language */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              {language === "kn" ? "ಭಾಷೆ & ಸಹಾಯ" : "Language & Support"}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-500" />
                <button 
                  onClick={() => setLanguage(language === "en" ? "kn" : "en")}
                  className="text-amber-400 hover:underline font-semibold"
                >
                  {language === "en" ? "ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ (Kannada)" : "Switch to English"}
                </button>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>info@yaatriniwaas.karnataka.gov.in</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-slate-500" />
                <span>1800-425-2425 (Toll Free)</span>
              </div>
            </div>
          </div>

        </div>

        {/* 31 Districts Directory Link Chips */}
        <div className="py-8 border-b border-slate-800">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            {language === "kn" ? "ಎಲ್ಲಾ 31 ಕರ್ನಾಟಕ ಜಿಲ್ಲೆಗಳು:" : "Explore All 31 Districts of Karnataka:"}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {DISTRICTS_DATA.map((d) => (
              <button
                key={d.id}
                onClick={() => navigateToDistrict(d.id)}
                className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-amber-900/40 text-slate-300 hover:text-amber-300 border border-slate-700/60 transition-colors"
              >
                {language === "kn" ? d.kannadaName : d.name}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">KARNAVISTA</strong> • Department of Tourism, Government of Karnataka.
          </p>
          <p className="flex items-center gap-1 text-slate-300">
            Official Brand: <span className="text-amber-400 font-bold tracking-wider">SEE KARNATAKA. FEEL KARNATAKA.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

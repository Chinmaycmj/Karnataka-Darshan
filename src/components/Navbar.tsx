import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { 
  Compass, 
  MapPin, 
  Package, 
  Hotel, 
  Bus, 
  Sparkles, 
  Search, 
  Bookmark, 
  Globe, 
  Menu, 
  X 
} from "lucide-react";

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    t, 
    activeView, 
    setActiveView, 
    setIsSearchOpen, 
    savedPackages, 
    savedDistricts 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalSaved = savedPackages.length + savedDistricts.length;

  const navItems = [
    { id: "home", label: language === "kn" ? "ಮುಖಪುಟ" : "Home", icon: Compass },
    { id: "districts", label: language === "kn" ? "31 ಜಿಲ್ಲೆಗಳು" : "31 Districts", icon: MapPin },
    { id: "packages", label: language === "kn" ? "ಪ್ಯಾಕೇಜ್‌ಗಳು" : "Tour Packages", icon: Package },
    { id: "planner", label: language === "kn" ? "ಸ್ಮಾರ್ಟ್ ಪ್ಲಾನರ್" : "Trip Planner", icon: Sparkles },
    { id: "stays", label: language === "kn" ? "ಯಾತ್ರಿ ನಿವಾಸ" : "Yaatri Stays", icon: Hotel },
    { id: "transport", label: language === "kn" ? "ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್" : "Transport", icon: Bus },
    { id: "mytrips", label: language === "kn" ? "ನನ್ನ ಪ್ರವಾಸಗಳು" : "My Trips", icon: Bookmark, badge: totalSaved }
  ];

  const handleNavClick = (viewId: string) => {
    setActiveView(viewId as any);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 glass-nav border-b border-amber-900/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-600/30 group-hover:scale-105 transition-transform">
              <span className="font-serif text-2xl font-bold tracking-tight">ಯಾ</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-extrabold text-xl sm:text-2xl tracking-tight text-amber-950">
                  YAATRI NIWAAS
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-semibold tracking-wider text-amber-800 bg-amber-100 rounded-full border border-amber-200">
                  KARNATAKA
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide">
                {language === "kn" ? "ಕರ್ನಾಟಕ ಪ್ರವಾಸೋದ್ಯಮ ವೇದಿಕೆ" : "Official 31-District Tourism Platform"}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                    isActive
                      ? "text-amber-800 bg-amber-50 shadow-sm"
                      : "text-slate-700 hover:text-amber-900 hover:bg-slate-100/70"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-amber-600" : "text-slate-500"}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 text-[10px] font-bold bg-amber-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Language Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 shadow-sm transition-all hover:border-amber-400 group"
              title="Search Karnataka Tourism"
            >
              <Search className="w-4 h-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
              <span className="hidden md:inline text-xs font-medium text-slate-500">
                {language === "kn" ? "ಹುಡುಕಿ..." : "Search..."}
              </span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 border border-slate-200 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Language Toggle */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                  language === "en"
                    ? "bg-white text-amber-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("kn")}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg font-kannada transition-all ${
                  language === "kn"
                    ? "bg-white text-amber-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                ಕನ್ನಡ
              </button>
            </div>

            {/* CTA: Plan Trip */}
            <button
              onClick={() => handleNavClick("planner")}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.planMyTrip}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-1 shadow-xl animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "text-amber-900 bg-amber-50"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? "text-amber-600" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-amber-600 text-white rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Select Language:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  language === "en" ? "bg-amber-600 text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("kn")}
                className={`px-3 py-1 rounded-lg text-xs font-bold font-kannada ${
                  language === "kn" ? "bg-amber-600 text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                ಕನ್ನಡ
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

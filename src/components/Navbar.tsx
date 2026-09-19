import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { KarnavistaLogo } from "./KarnavistaLogo";
import { 
  Compass, 
  MapPin, 
  Package, 
  Sparkles, 
  Search, 
  Bookmark, 
  Globe, 
  Menu, 
  X,
  Bot,
  Calendar,
  Bus,
  ArrowRight
} from "lucide-react";

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    activeView, 
    setActiveView, 
    setIsSearchOpen, 
    savedPackages, 
    savedDistricts 
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalSaved = savedPackages.length + savedDistricts.length;

  const handleNavClick = (viewId: string) => {
    setMobileMenuOpen(false);
    if (viewId === "explore") {
      if (activeView !== "home") {
        setActiveView("home");
        setTimeout(() => {
          document.getElementById("explore-karnataka-section")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById("explore-karnataka-section")?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    setActiveView(viewId as any);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: language === "kn" ? "ಮುಖಪುಟ" : "HOME" },
    { id: "explore", label: language === "kn" ? "ಅನ್ವೇಷಿಸಿ" : "EXPLORE" },
    { id: "districts", label: language === "kn" ? "31 ಜಿಲ್ಲೆಗಳು" : "31 DISTRICTS" },
    { id: "planner", label: language === "kn" ? "ಪ್ರವಾಸ ಯೋಜನೆ" : "ITINERARIES" },
    { id: "packages", label: language === "kn" ? "ಪ್ಯಾಕೇಜ್‌ಗಳು" : "PACKAGES" },
    { id: "transport", label: language === "kn" ? "ಸಾರಿಗೆ & ಬಸ್" : "BUS & TRANSIT" }
  ];

  const toggleAIAssistant = () => {
    setActiveView("ai-assistant");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#032B43]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#073B5C]"
          : "bg-[#032B43] border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: KARNAVISTA Brand Logo */}
          <div 
            onClick={() => handleNavClick("home")}
            className="cursor-pointer group flex items-center py-1"
          >
            <KarnavistaLogo variant="light" size="md" showTagline={true} />
          </div>

          {/* Center: Clean Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    isActive
                      ? "text-amber-400 bg-white/10 shadow-sm"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: AI Travel Assistant & Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Search Karnataka 31 districts & destinations"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "en" ? "kn" : "en")}
              className="px-2.5 py-1.5 rounded-xl border border-white/20 text-xs font-bold text-slate-200 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === "en" ? "ಕನ್ನಡ" : "ENG"}</span>
            </button>

            {/* AI TRAVEL ASSISTANT Button */}
            <button
              onClick={toggleAIAssistant}
              className="px-3.5 py-2 rounded-xl bg-sky-950/80 hover:bg-sky-900 border border-sky-400/40 text-amber-300 text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm hover:shadow-sky-500/20 cursor-pointer"
            >
              <Bot className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>AI ASSISTANT</span>
            </button>

            {/* CTA Button: PLAN YOUR TRIP */}
            <button
              onClick={() => handleNavClick("planner")}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs tracking-wider uppercase shadow-md shadow-amber-500/25 transition-all duration-200 transform hover:scale-[1.02] flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>PLAN YOUR TRIP</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-xl text-slate-300 hover:text-white"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleAIAssistant}
              className="p-2 rounded-xl text-amber-400 bg-white/10"
              title="AI Assistant"
            >
              <Bot className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#032B43] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-between ${
                  isActive
                    ? "bg-amber-500 text-slate-950"
                    : "text-slate-200 hover:bg-white/10"
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            );
          })}

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick("planner");
              }}
              className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>PLAN YOUR TRIP</span>
            </button>

            <button
              onClick={() => {
                setLanguage(language === "en" ? "kn" : "en");
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl border border-white/20 text-slate-200 text-xs font-bold flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4 text-amber-400" />
              <span>{language === "en" ? "ಸ್ವಿಚ್ ಟು ಕನ್ನಡ (Kannada)" : "Switch to English"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

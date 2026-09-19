import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TRANSLATIONS, TranslationDict } from "../data/translations";
import { UserTripBooking } from "../data/types";

export type ActiveView = 
  | "home" 
  | "districts" 
  | "district-detail" 
  | "packages" 
  | "package-detail" 
  | "stays" 
  | "transport" 
  | "planner" 
  | "mytrips" 
  | "confirmation";

export interface TransportNavigationOptions {
  fromCity?: string;
  toCity?: string;
  standId?: string;
  tab?: "booking" | "timetables";
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  selectedDistrictId: string | null;
  setSelectedDistrictId: (id: string | null) => void;
  selectedPackageId: string | null;
  setSelectedPackageId: (id: string | null) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  selectedRegionFilter: string;
  setSelectedRegionFilter: (region: string) => void;
  savedPackages: string[];
  toggleSavePackage: (id: string) => void;
  savedDistricts: string[];
  toggleSaveDistrict: (id: string) => void;
  bookings: UserTripBooking[];
  addBooking: (booking: UserTripBooking) => void;
  latestBooking: UserTripBooking | null;
  navigateToDistrict: (districtId: string) => void;
  navigateToPackage: (packageId: string) => void;
  transportFilter: TransportNavigationOptions | null;
  setTransportFilter: (opts: TransportNavigationOptions | null) => void;
  navigateToTransport: (opts?: TransportNavigationOptions) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("yn_lang") as Language) || "en";
  });

  const [activeView, setActiveView] = useState<ActiveView>("home");
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>(null);
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>("All");

  const [savedPackages, setSavedPackages] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("yn_saved_pkgs") || "[]");
    } catch {
      return [];
    }
  });

  const [savedDistricts, setSavedDistricts] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("yn_saved_districts") || "[]");
    } catch {
      return [];
    }
  });

  const [bookings, setBookings] = useState<UserTripBooking[]>(() => {
    try {
      const saved = localStorage.getItem("yn_bookings");
      if (saved) return JSON.parse(saved);
    } catch {}
    // Initial sample confirmed booking
    return [
      {
        id: "YN-KA-2026-8812",
        bookingDate: "2026-09-18",
        travelDate: "2026-10-15",
        type: "package",
        title: "Coastal Karnataka Odyssey (5 Days / 4 Nights)",
        packageId: "coastal-karnataka-odyssey",
        totalCost: 14999,
        status: "Confirmed",
        travelDetails: {
          busOperator: "KSRTC Airavat Club Class",
          serviceType: "Airavat Club Class",
          from: "Bengaluru",
          to: "Mangaluru",
          departureTime: "06:00 AM",
          seats: ["L12", "L14"]
        },
        stayDetails: {
          hotelName: "Yaatri Niwaas Udupi Temple Gateway",
          roomType: "Deluxe AC",
          nights: 4,
          guests: 2
        },
        itinerarySummary: ["Panambur Beach", "Udupi Krishna Matha", "St. Mary's Island", "Murudeshwara", "Gokarna Om Beach"]
      }
    ];
  });

  const [latestBooking, setLatestBooking] = useState<UserTripBooking | null>(bookings[0] || null);

  useEffect(() => {
    localStorage.setItem("yn_lang", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("yn_saved_pkgs", JSON.stringify(savedPackages));
  }, [savedPackages]);

  useEffect(() => {
    localStorage.setItem("yn_saved_districts", JSON.stringify(savedDistricts));
  }, [savedDistricts]);

  useEffect(() => {
    localStorage.setItem("yn_bookings", JSON.stringify(bookings));
  }, [bookings]);

  const toggleSavePackage = (id: string) => {
    setSavedPackages(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleSaveDistrict = (id: string) => {
    setSavedDistricts(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const addBooking = (booking: UserTripBooking) => {
    setBookings(prev => [booking, ...prev]);
    setLatestBooking(booking);
    setActiveView("confirmation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToDistrict = (districtId: string) => {
    setSelectedDistrictId(districtId);
    setActiveView("district-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToPackage = (packageId: string) => {
    setSelectedPackageId(packageId);
    setActiveView("package-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [transportFilter, setTransportFilter] = useState<TransportNavigationOptions | null>(null);

  const navigateToTransport = (opts?: TransportNavigationOptions) => {
    if (opts) {
      setTransportFilter(opts);
    }
    setActiveView("transport");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const t = TRANSLATIONS[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        activeView,
        setActiveView,
        selectedDistrictId,
        setSelectedDistrictId,
        selectedPackageId,
        setSelectedPackageId,
        isSearchOpen,
        setIsSearchOpen,
        selectedRegionFilter,
        setSelectedRegionFilter,
        savedPackages,
        toggleSavePackage,
        savedDistricts,
        toggleSaveDistrict,
        bookings,
        addBooking,
        latestBooking,
        navigateToDistrict,
        navigateToPackage,
        transportFilter,
        setTransportFilter,
        navigateToTransport
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

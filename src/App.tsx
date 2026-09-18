import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SearchModal } from "./components/SearchModal";
import { HomePage } from "./pages/HomePage";
import { DistrictsPage } from "./pages/DistrictsPage";
import { DistrictDetailPage } from "./pages/DistrictDetailPage";
import { PackagesPage } from "./pages/PackagesPage";
import { PackageDetailPage } from "./pages/PackageDetailPage";
import { StaysPage } from "./pages/StaysPage";
import { TransportPage } from "./pages/TransportPage";
import { CustomTripPlannerPage } from "./pages/CustomTripPlannerPage";
import { MyTripsPage } from "./pages/MyTripsPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";

const AppContent: React.FC = () => {
  const { activeView } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 font-sans">
      <Navbar />
      
      <main className="flex-1">
        {activeView === "home" && <HomePage />}
        {activeView === "districts" && <DistrictsPage />}
        {activeView === "district-detail" && <DistrictDetailPage />}
        {activeView === "packages" && <PackagesPage />}
        {activeView === "package-detail" && <PackageDetailPage />}
        {activeView === "stays" && <StaysPage />}
        {activeView === "transport" && <TransportPage />}
        {activeView === "planner" && <CustomTripPlannerPage />}
        {activeView === "mytrips" && <MyTripsPage />}
        {activeView === "confirmation" && <ConfirmationPage />}
      </main>

      <Footer />
      <SearchModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

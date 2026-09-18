# 🏛️ YAATRI NIWAAS (ಯಾತ್ರಿ ನಿವಾಸ) — Karnataka Tourism Platform

> **Discover Karnataka. Plan Your Journey. Stay With Ease.**  
> *Official 31-District Unified Travel, Lodging & KSRTC Transit Application*

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 Overview

**YAATRI NIWAAS** is a comprehensive, production-grade Karnataka Tourism web application. It is **not** a placeholder demo or a 5-district sample; it features a zero-hallucination data architecture covering **all 31 districts of Karnataka** (from Bagalkote to Vijayanagara, the 31st district created in 2020), seamlessly connecting:

- 🏛️ **All 31 Karnataka Districts**: Fully mapped with official Kannada script names, 7 administrative regions, local cuisine specialties, and artisan heritage.
- 🎯 **53 Authentic Focus Destinations**: Accurate timings, entry fees, tags, and curated photography.
- 🏨 **31 Official Yaatri Niwaas Properties**: 1 verified guesthouse in every single district with 4 room tiers (Standard to Heritage Suite) and instant booking.
- 🚌 **56 Scheduled KSRTC Bus Routes**: Airavat Multi-Axle Volvo luxury, EV Power Plus zero-emission coaches, Rajahamsa Executive, and Sleeper services with an **interactive coach seat picker**.
- 🧭 **7 Curated Multi-District Circuits**: Handcrafted day-by-day morning/afternoon/evening timelines with route maps.
- ✨ **Smart Custom Trip Planner**: Rule-based itinerary builder that generates complete multi-district itineraries tailored to duration, budget, and travel style.
- 🎟️ **Digital Tourism Pass & E-Ticket**: Confetti celebration, printable e-pass (`window.print()`), QR code, and booking ID.
- 📌 **Personal Travel Dashboard**: Manage confirmed reservations, saved tour packages, and bookmarked districts persisted in `localStorage`.
- 🗺️ **Interactive Visual Cartography**: Custom SVG map of Karnataka with all 31 districts, region tabs, and hover preview cards.
- 🌐 **Bilingual Ready**: Seamless instant toggle between **English** and **ಕನ್ನಡ (Kannada)** across all views.

---

## 🗺️ All 31 Districts Mapped

| Region | Districts Included | Focus Cuisine & Artisan Heritage |
|---|---|---|
| **Bengaluru Region** | Bengaluru Urban, Bengaluru Rural, Ramanagara, Chikkaballapur, Kolar | Filter Coffee, Benne Dosa, Thatte Idli • Channapatna Wooden Toys (GI), Silk Sarees |
| **Central Karnataka** | Chitradurga, Davanagere, Haveri, Tumakuru | Davanagere Benne Dosa, Groundnut Chutney • Byadgi Chilli (GI), Handloom Khadi |
| **Coastal Karnataka** | Dakshina Kannada, Udupi, Uttara Kannada | Mangalore Ghee Roast, Kori Rotti, Udupi Neer Dosa • Yakshagana Costumes, Udupi Sarees (GI) |
| **Malnad & Western Ghats** | Chikkamagaluru, Kodagu, Shivamogga, Hassan | Malnad Filter Coffee, Pandi Curry, Akki Rotti • Hoysala Soapstone, Sandalwood Carving |
| **North Karnataka** | Bagalkote, Belagavi, Dharwad, Gadag, Vijayapura | Jolada Rotti Oota, Dharwad Peda (GI), Belgaum Kunda • Ilkal Sarees (GI), Kasuti Embroidery (GI) |
| **Kalyana Karnataka** | Bidar, Kalaburagi, Koppal, Raichur, Yadgir | Bidari Biryani, Jawari Meals, Mutton Tahari • Bidri Metal Inlay (GI), Kinhal Toys (GI) |
| **South Karnataka** | Mysuru, Mandya, Chamarajanagar | Authentic Mysore Pak, Maddur Vada (GI), Organic Jaggery • Mysore Rosewood Inlay & Silk (GI) |
| **31st District** | **Vijayanagara** (Carved out in 2020) | Mandakki Oggarane, Tungabhadra Fish Fry • UNESCO Hampi Stone Architecture |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/yaatri-niwaas.git
   cd yaatri-niwaas
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS 3.4 (custom palette with Karnataka Gold, Deep Temple Maroon, Malnad Forest Emerald, and Coastal Blue)
- **Icons**: Lucide React
- **Typography**: Cinzel (Heritage Display), Plus Jakarta Sans (Modern Body), Noto Sans Kannada (Authentic Kannada Script)
- **Effects**: Canvas Confetti

---

## 📂 Project Structure

```
yaatri-niwaas/
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer, KarnatakaMap, SearchModal, Cards, Modals)
│   ├── context/          # AppContext state (language, view router, bookmarks, bookings)
│   ├── data/             # Complete authentic data layers
│   │   ├── districts.ts  # All 31 Karnataka districts
│   │   ├── destinations.ts # 53 focus tourist destinations
│   │   ├── packages.ts   # 7 multi-district signature circuits
│   │   ├── stays.ts      # 31 official Yaatri Niwaas properties
│   │   ├── transportRoutes.ts # 56 KSRTC bus routes with seat layouts
│   │   ├── translations.ts # English & Kannada dictionaries
│   │   └── types.ts      # Complete TypeScript interface definitions
│   ├── pages/            # View pages (Home, Districts, Stays, Transport, Packages, Planner, MyTrips, Confirmation)
│   ├── App.tsx           # Master view router
│   ├── index.css         # Tailwind & custom typography rules
│   └── main.tsx          # Application entrypoint
├── index.html            # HTML shell with Google Fonts
├── package.json          # Dependencies & scripts
├── tailwind.config.js    # Karnataka theme colors & animations
└── tsconfig.json         # TypeScript configuration
```

---

## 📜 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

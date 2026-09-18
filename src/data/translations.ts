export type Language = "en" | "kn";

export interface TranslationDict {
  brandName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  searchPlaceholder: string;
  exploreKarnataka: string;
  planMyTrip: string;
  all31Districts: string;
  popularExperiences: string;
  tourPackages: string;
  yaatriNiwaasStays: string;
  getThereTransport: string;
  myTrips: string;
  bookNow: string;
  viewDetails: string;
  exploreDistrict: string;
  viewPackage: string;
  bookStay: string;
  from: string;
  to: string;
  selectSeat: string;
  totalCost: string;
  confirmBooking: string;
  bestSeason: string;
  recommendedDuration: string;
  howToReach: string;
  localFood: string;
  cultureCrafts: string;
  travelTips: string;
  allRegions: string;
  heritage: string;
  nature: string;
  hills: string;
  coast: string;
  spiritual: string;
  wildlife: string;
  adventure: string;
  food: string;
  culture: string;
}

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  en: {
    brandName: "YAATRI NIWAAS",
    tagline: "Discover Karnataka. Plan Your Journey. Stay With Ease.",
    heroHeadline: "DISCOVER KARNATAKA",
    heroSubheadline: "One state. Many worlds. One journey.",
    searchPlaceholder: "Search districts, destinations, temples, beaches, waterfalls, food...",
    exploreKarnataka: "Explore Karnataka",
    planMyTrip: "Plan My Trip",
    all31Districts: "Explore All 31 Districts",
    popularExperiences: "Popular Experiences",
    tourPackages: "Karnataka Tour Packages",
    yaatriNiwaasStays: "Yaatri Niwaas Stays",
    getThereTransport: "Get There — KSRTC Bus & Travel",
    myTrips: "My Trips",
    bookNow: "Book Now",
    viewDetails: "View Details",
    exploreDistrict: "Explore District",
    viewPackage: "View Package",
    bookStay: "Book Stay",
    from: "From City",
    to: "To City",
    selectSeat: "Select Bus Seat",
    totalCost: "Total Estimated Cost",
    confirmBooking: "Confirm Booking",
    bestSeason: "Best Season to Visit",
    recommendedDuration: "Recommended Duration",
    howToReach: "How to Reach",
    localFood: "Local Food & Cuisine",
    cultureCrafts: "Culture & Traditional Crafts",
    travelTips: "Insider Travel Tips",
    allRegions: "All Regions",
    heritage: "Heritage",
    nature: "Nature",
    hills: "Hills",
    coast: "Coast",
    spiritual: "Spiritual",
    wildlife: "Wildlife",
    adventure: "Adventure",
    food: "Food & Cuisine",
    culture: "Art & Culture"
  },
  kn: {
    brandName: "ಯಾತ್ರಿ ನಿವಾಸ",
    tagline: "ಕರ್ನಾಟಕವನ್ನು ಅನ್ವೇಷಿಸಿ. ಪ್ರವಾಸ ಯೋಜಿಸಿ. ಸುಖವಾಗಿ ತಂಗಿರಿ.",
    heroHeadline: "ಕರ್ನಾಟಕ ದರ್ಶನ",
    heroSubheadline: "ಒಂದು ರಾಜ್ಯ. ಹಲವು ಜಗತ್ತುಗಳು. ಒಂದೇ ಪಯಣ.",
    searchPlaceholder: "ಜಿಲ್ಲೆಗಳು, ತಾಣಗಳು, ದೇವಾಲಯಗಳು, ಬೀಚ್‌ಗಳು, ಜಲಪಾತಗಳನ್ನು ಹುಡುಕಿ...",
    exploreKarnataka: "ಕರ್ನಾಟಕ ಪರಿಚಯ",
    planMyTrip: "ಪ್ರವಾಸ ಯೋಜನೆ",
    all31Districts: "ಎಲ್ಲಾ 31 ಜಿಲ್ಲೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    popularExperiences: "ಜನಪ್ರಿಯ ಅನುಭವಗಳು",
    tourPackages: "ಕರ್ನಾಟಕ ಪ್ರವಾಸ ಪ್ಯಾಕೇಜ್‌ಗಳು",
    yaatriNiwaasStays: "ಯಾತ್ರಿ ನಿವಾಸ ವಸತಿ",
    getThereTransport: "ಸಾರಿಗೆ — ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್ ಪ್ರಯಾಣ",
    myTrips: "ನನ್ನ ಪ್ರವಾಸಗಳು",
    bookNow: "ಈಗಲೇ ಕಾಯ್ದಿರಿಸಿ",
    viewDetails: "ವಿವರ ನೋಡಿ",
    exploreDistrict: "ಜಿಲ್ಲೆಯನ್ನು ನೋಡಿ",
    viewPackage: "ಪ್ಯಾಕೇಜ್ ನೋಡಿ",
    bookStay: "ರೂಮ್ ಕಾಯ್ದಿರಿಸಿ",
    from: "ಪ್ರಾರಂಭಿಕ ಊರು",
    to: "ತಲುಪಬೇಕಾದ ಊರು",
    selectSeat: "ಸೀಟು ಆಯ್ಕೆಮಾಡಿ",
    totalCost: "ಒಟ್ಟು ಅಂದಾಜು ವೆಚ್ಚ",
    confirmBooking: "ಖಚಿತಪಡಿಸಿ",
    bestSeason: "ಭೇಟಿಗೆ ಸೂಕ್ತ ಕಾಲ",
    recommendedDuration: "ಶಿಫಾರಸು ಮಾಡಿದ ಅವಧಿ",
    howToReach: "ತಲುಪುವುದು ಹೇಗೆ",
    localFood: "ಪ್ರಸಿದ್ಧ ಸ್ಥಳೀಯ ತಿನಿಸುಗಳು",
    cultureCrafts: "ಸಂಸ್ಕೃತಿ ಮತ್ತು ಕರಕುಶಲ ಕಲೆ",
    travelTips: "ಪ್ರಯಾಣ ಸಲಹೆಗಳು",
    allRegions: "ಎಲ್ಲಾ ಭಾಗಗಳು",
    heritage: "ಪರಂಪರೆ",
    nature: "ಪ್ರಕೃತಿ",
    hills: "ಗಿರಿಧಾಮಗಳು",
    coast: "ಕರಾವಳಿ",
    spiritual: "ಧಾರ್ಮಿಕ ಕ್ಷೇತ್ರಗಳು",
    wildlife: "ವನ್ಯಜೀವಿ",
    adventure: "ಸಾಹಸ",
    food: "ಆಹಾರ ಸಂಸ್ಕೃತಿ",
    culture: "ಕಲೆ ಮತ್ತು ಸಂಸ್ಕೃತಿ"
  }
};

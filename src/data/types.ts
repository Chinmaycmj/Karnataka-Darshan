export type RegionType = 
  | 'Bengaluru'
  | 'Central Karnataka'
  | 'Coastal Karnataka'
  | 'Malnad'
  | 'North Karnataka'
  | 'Kalyana Karnataka'
  | 'South Karnataka';

export type ExperienceTheme = 
  | 'Heritage'
  | 'Nature'
  | 'Hills'
  | 'Coast'
  | 'Spiritual'
  | 'Wildlife'
  | 'Adventure'
  | 'Food'
  | 'Culture'
  | 'Photography';

export interface District {
  id: string;
  name: string;
  kannadaName: string;
  region: RegionType;
  tagline: string;
  shortDescription: string;
  heroImage: string;
  highlights: string[];
  themes: ExperienceTheme[];
  recommendedDuration: string;
  bestSeason: string;
  nearbyDistricts: string[];
  howToReach: {
    air: string;
    rail: string;
    road: string;
  };
  foodSpecialties: {
    name: string;
    description: string;
    isVeg: boolean;
  }[];
  cultureAndCrafts: {
    title: string;
    description: string;
  }[];
  travelTips: string[];
  budgetEstimate: {
    budget: number;
    moderate: number;
    luxury: number;
  };
  coordinates: {
    lat: number;
    lng: number;
    mapX: number; // percentage X 0-100 on Karnataka state map
    mapY: number; // percentage Y 0-100 on Karnataka state map
  };
}

export interface Destination {
  id: string;
  name: string;
  kannadaName: string;
  districtId: string;
  districtName: string;
  region: RegionType;
  category: ExperienceTheme;
  subCategories: string[];
  description: string;
  image: string;
  rating: number;
  entryFee?: string;
  timings?: string;
  bestTime: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface ItineraryActivity {
  timeOfDay: 'Morning' | 'Afternoon' | 'Evening' | 'Night';
  title: string;
  description: string;
  location: string;
  destinationId?: string;
}

export interface PackageDay {
  dayNumber: number;
  title: string;
  districtId: string;
  districtName: string;
  activities: ItineraryActivity[];
  stayLocation: string;
}

export interface TourPackage {
  id: string;
  name: string;
  kannadaName?: string;
  districtsCovered: string[];
  districtNames: string[];
  region: RegionType | 'Multi-Region';
  themes: ExperienceTheme[];
  durationDays: number;
  durationNights: number;
  destinationsCount: number;
  startingPrice: number;
  travelStyle: 'Budget' | 'Standard' | 'Premium' | 'Luxury Heritage';
  highlights: string[];
  image: string;
  stayIncluded: boolean;
  transportIncluded: boolean;
  routeMapPoints: {
    name: string;
    type: 'start' | 'stop' | 'attraction' | 'stay' | 'end';
  }[];
  itinerary: PackageDay[];
  inclusions: string[];
  exclusions: string[];
}

export interface YaatriNiwaasRoom {
  id: string;
  name: string;
  type: 'Standard Non-AC' | 'Deluxe AC' | 'Heritage Suite' | 'Family Cottage';
  capacity: number;
  pricePerNight: number;
  amenities: string[];
  image: string;
  available: boolean;
}

export interface YaatriNiwaasProperty {
  id: string;
  districtId: string;
  districtName: string;
  name: string;
  kannadaName: string;
  tagline: string;
  address: string;
  rating: number;
  reviewsCount: number;
  priceStarting: number;
  image: string;
  amenities: string[];
  rooms: YaatriNiwaasRoom[];
  nearbyLandmarks: string[];
}

export interface BusSeat {
  id: string;
  number: string;
  type: 'seater' | 'sleeper-lower' | 'sleeper-upper';
  status: 'available' | 'selected' | 'booked';
  isFemaleReserved?: boolean;
  price: number;
}

export interface BusRoute {
  id: string;
  operator: string;
  serviceType: 'Airavat Club Class' | 'Rajahamsa Executive' | 'Non-AC Sleeper' | 'EV Power Plus';
  fromCity: string;
  toCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  seatsAvailable: number;
  amenities: string[];
  seats: BusSeat[];
}

export interface UserTripBooking {
  id: string;
  bookingDate: string;
  travelDate: string;
  type: 'package' | 'custom' | 'stay' | 'transport';
  title: string;
  packageId?: string;
  districtId?: string;
  totalCost: number;
  status: 'Confirmed' | 'Completed';
  travelDetails?: {
    busOperator: string;
    serviceType: string;
    from: string;
    to: string;
    departureTime: string;
    seats: string[];
  };
  stayDetails?: {
    hotelName: string;
    roomType: string;
    nights: number;
    guests: number;
  };
  itinerarySummary?: string[];
}

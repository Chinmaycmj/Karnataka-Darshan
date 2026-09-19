// Official KSRTC, NWKRTC, and KKRTC Bus Stand Profiles and Departure Timetable Boards
// Covering all 31 Districts of Karnataka

export interface BusStandScheduleEntry {
  serviceNumber: string;
  destination: string;
  serviceType: string;
  operator: 'KSRTC' | 'NWKRTC' | 'KKRTC';
  departureTime: string;
  viaRoute: string;
  platform: string;
  frequency: string;
  fare: number;
}

export interface BusStandInfo {
  id: string;
  city: string;
  districtId: string;
  districtName: string;
  region: string;
  kannadaCity: string;
  name: string;
  kannadaName: string;
  division: 'KSRTC' | 'NWKRTC' | 'KKRTC';
  divisionFullName: string;
  address: string;
  helplinePhone: string;
  enquiryCounter: string;
  operatingHours: string;
  totalPlatforms: number;
  dailyDepartures: string;
  facilities: string[];
  platformBays: {
    platforms: string;
    destinations: string;
    serviceTypes: string;
  }[];
  schedules: BusStandScheduleEntry[];
}

export const BUS_STANDS_DIRECTORY: BusStandInfo[] = [
  {
    "id": "koppal-cbs",
    "city": "Koppal",
    "districtId": "koppal",
    "districtName": "Koppal",
    "region": "Kalyana Karnataka",
    "kannadaCity": "ಕೊಪ್ಪಳ",
    "name": "Koppal New Central Bus Stand (KKRTC)",
    "kannadaName": "ಕೊಪ್ಪಳ ಹೊಸ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ ರಸ್ತೆ ಸಾರಿಗೆ)",
    "division": "KKRTC",
    "divisionFullName": "Kalyana Karnataka Road Transport Corporation (ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ ರಸ್ತೆ ಸಾರಿಗೆ ಸಂಸ್ಥೆ)",
    "address": "NH 67 Highway Road, Near DC Office, Koppal, Karnataka - 583231",
    "helplinePhone": "08539-220144 / 08539-220555",
    "enquiryCounter": "9448375620 (Koppal Division Control Room)",
    "operatingHours": "24 Hours Open (Continuous Transit)",
    "totalPlatforms": 16,
    "dailyDepartures": "420+ Express & Inter-District Services",
    "facilities": [
      "KKRTC Computerized Reservation & Pass Counter",
      "Deluxe Passenger Waiting Hall",
      "Janatha Canteen & Pure Veg Refreshments",
      "Cloak Room & Luggage Locker Facility",
      "Drinking Water & Clean Sanitation",
      "Auto & Taxi Stand with Prepaid Booth"
    ],
    "platformBays": [
      {
        "platforms": "Platform 1 - 3",
        "destinations": "Hosapete, Hampi, Ballari, Vijayanagara",
        "serviceTypes": "Kalyana Ratha, Express"
      },
      {
        "platforms": "Platform 4 - 6",
        "destinations": "Hubballi, Dharwad, Gadag",
        "serviceTypes": "Kalyana Sarige, Rajahamsa"
      },
      {
        "platforms": "Platform 7 - 9",
        "destinations": "Bengaluru (Majestic & Satellite), Tumakuru",
        "serviceTypes": "Airavat, Non-AC Sleeper, Rajahamsa"
      },
      {
        "platforms": "Platform 10 - 12",
        "destinations": "Gangavathi, Raichur, Kalaburagi, Yadgir",
        "serviceTypes": "Express, Kalyana Sarige"
      },
      {
        "platforms": "Platform 13 - 16",
        "destinations": "Bagalkote, Badami, Belagavi, Vijayapura",
        "serviceTypes": "Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KK-KPL-01",
        "destination": "Hosapete (Vijayanagara/Hampi)",
        "serviceType": "Kalyana Ratha AC",
        "operator": "KKRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Munirabad Dam, Tungabhadra",
        "platform": "Platform 1",
        "frequency": "Every 30 Mins",
        "fare": 85
      },
      {
        "serviceNumber": "KK-KPL-02",
        "destination": "Hubballi",
        "serviceType": "Rajahamsa Executive",
        "operator": "KKRTC",
        "departureTime": "07:15 AM",
        "viaRoute": "Bhanapur, Gadag, Annigeri",
        "platform": "Platform 4",
        "frequency": "Daily 8 Trips",
        "fare": 210
      },
      {
        "serviceNumber": "KK-KPL-03",
        "destination": "Bengaluru",
        "serviceType": "Non-AC Sleeper",
        "operator": "KKRTC",
        "departureTime": "09:30 PM",
        "viaRoute": "Kudligi, Chitradurga, Tumakuru",
        "platform": "Platform 8",
        "frequency": "Daily Night Express",
        "fare": 690
      },
      {
        "serviceNumber": "KK-KPL-04",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KKRTC",
        "departureTime": "10:15 PM",
        "viaRoute": "Hosapete Bypass, Chitradurga",
        "platform": "Platform 7",
        "frequency": "Daily Superfast",
        "fare": 840
      },
      {
        "serviceNumber": "KK-KPL-05",
        "destination": "Raichur",
        "serviceType": "Kalyana Sarige",
        "operator": "KKRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Gangavathi, Sindhanur, Manvi",
        "platform": "Platform 10",
        "frequency": "Hourly",
        "fare": 230
      },
      {
        "serviceNumber": "KK-KPL-06",
        "destination": "Bagalkote (Badami)",
        "serviceType": "Express",
        "operator": "KKRTC",
        "departureTime": "08:45 AM",
        "viaRoute": "Kushtagi, Ilkal, Guledgudda",
        "platform": "Platform 13",
        "frequency": "Daily 6 Trips",
        "fare": 185
      },
      {
        "serviceNumber": "KK-KPL-07",
        "destination": "Kalaburagi",
        "serviceType": "Rajahamsa Executive",
        "operator": "KKRTC",
        "departureTime": "01:30 PM",
        "viaRoute": "Kushtagi, Lingsugur, Shahapur",
        "platform": "Platform 11",
        "frequency": "Daily 4 Trips",
        "fare": 360
      },
      {
        "serviceNumber": "KK-KPL-08",
        "destination": "Ballari",
        "serviceType": "Express",
        "operator": "KKRTC",
        "departureTime": "10:00 AM",
        "viaRoute": "Hosapete, Toranagallu",
        "platform": "Platform 2",
        "frequency": "Every 45 Mins",
        "fare": 140
      }
    ]
  },
  {
    "id": "hubballi-cbs",
    "city": "Hubballi",
    "districtId": "dharwad",
    "districtName": "Dharwad",
    "region": "North Karnataka",
    "kannadaCity": "ಹುಬ್ಬಳ್ಳಿ",
    "name": "Hubballi New Central Bus Stand (Gokul Road & Hosur CBS)",
    "kannadaName": "ಹುಬ್ಬಳ್ಳಿ ಹೊಸ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಗೋಕುಲ್ ರಸ್ತೆ ಮತ್ತು ಹೊಸೂರು)",
    "division": "NWKRTC",
    "divisionFullName": "North Western Karnataka Road Transport Corporation (ವಾಯವ್ಯ ಕರ್ನಾಟಕ ರಸ್ತೆ ಸಾರಿಗೆ)",
    "address": "Gokul Road & Hosur Circle, Hubballi, Dharwad Dist - 580030",
    "helplinePhone": "0836-2237300 / 0836-2330554",
    "enquiryCounter": "7760991684 (24x7 Control Room)",
    "operatingHours": "24 Hours Open (Continuous Operations)",
    "totalPlatforms": 24,
    "dailyDepartures": "950+ Express & Inter-District Services",
    "facilities": [
      "24x7 Deluxe AC Waiting Lounge",
      "Electric Vehicle (EV) Fast Charging Hub",
      "Canteen & KSTDC Janatha Aahar",
      "Cloakroom & Luggage Depot",
      "Automated KSRTC/NWKRTC E-Booking Kiosks",
      "Braille Signage & Wheelchair Ramps"
    ],
    "platformBays": [
      {
        "platforms": "Platform 1 - 4",
        "destinations": "Bengaluru (Express & Non-Stop), Tumakuru, Chitradurga",
        "serviceTypes": "Airavat Club Class, EV Power Plus, Rajahamsa"
      },
      {
        "platforms": "Platform 5 - 8",
        "destinations": "Belagavi CBT, Kolhapur, Pune, Mumbai",
        "serviceTypes": "Airavat, Rajahamsa, Sleeper"
      },
      {
        "platforms": "Platform 9 - 12",
        "destinations": "Gokarna, Karwar, Sirsi, Kumta, Ankola",
        "serviceTypes": "Rajahamsa, Vayavya Sarige"
      },
      {
        "platforms": "Platform 13 - 16",
        "destinations": "Mangaluru, Udupi, Kundapura, Murudeshwara",
        "serviceTypes": "Airavat Club Class, Non-AC Sleeper"
      },
      {
        "platforms": "Platform 17 - 20",
        "destinations": "Koppal, Hosapete (Hampi), Ballari, Gadag",
        "serviceTypes": "Kalyana Sarige, Rajahamsa"
      },
      {
        "platforms": "Platform 21 - 24",
        "destinations": "Vijayapura, Bagalkote (Badami), Kalaburagi, Bidar",
        "serviceTypes": "Vayavya Sarige, Rajahamsa"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "NW-HBL-01",
        "destination": "Bengaluru",
        "serviceType": "EV Power Plus",
        "operator": "NWKRTC",
        "departureTime": "06:00 AM",
        "viaRoute": "Davanagere, Chitradurga, Tumakuru",
        "platform": "Platform 2",
        "frequency": "Daily",
        "fare": 790
      },
      {
        "serviceNumber": "NW-HBL-02",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Haveri, Davanagere, Tumakuru",
        "platform": "Platform 1",
        "frequency": "Daily Express",
        "fare": 840
      },
      {
        "serviceNumber": "NW-HBL-03",
        "destination": "Koppal",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Gadag, Bhanapur",
        "platform": "Platform 17",
        "frequency": "Daily 6 Trips",
        "fare": 210
      },
      {
        "serviceNumber": "NW-HBL-04",
        "destination": "Hosapete (Vijayanagara/Hampi)",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "09:00 AM",
        "viaRoute": "Gadag, Koppal, Munirabad",
        "platform": "Platform 18",
        "frequency": "Hourly",
        "fare": 260
      },
      {
        "serviceNumber": "NW-HBL-05",
        "destination": "Belagavi",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "08:30 AM",
        "viaRoute": "Dharwad Bypass, Kittur",
        "platform": "Platform 5",
        "frequency": "Every 30 Mins",
        "fare": 240
      },
      {
        "serviceNumber": "NW-HBL-06",
        "destination": "Mangaluru",
        "serviceType": "Non-AC Sleeper",
        "operator": "NWKRTC",
        "departureTime": "09:45 PM",
        "viaRoute": "Yellapur, Ankola, Udupi",
        "platform": "Platform 13",
        "frequency": "Daily Night Express",
        "fare": 710
      },
      {
        "serviceNumber": "NW-HBL-07",
        "destination": "Gokarna",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Yellapur, Ankola",
        "platform": "Platform 9",
        "frequency": "Daily 4 Trips",
        "fare": 320
      },
      {
        "serviceNumber": "NW-HBL-08",
        "destination": "Bagalkote (Badami)",
        "serviceType": "Express",
        "operator": "NWKRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Navalgund, Nargund, Kerur",
        "platform": "Platform 21",
        "frequency": "Hourly",
        "fare": 190
      }
    ]
  },
  {
    "id": "bengaluru-kbs",
    "city": "Bengaluru",
    "districtId": "bengaluru-urban",
    "districtName": "Bengaluru Urban",
    "region": "South Karnataka",
    "kannadaCity": "ಬೆಂಗಳೂರು",
    "name": "Kempegowda Bus Station (Majestic KBS & Satellite MCTC)",
    "kannadaName": "ಕೆಂಪೇಗೌಡ ಬಸ್ ನಿಲ್ದಾಣ (ಮೆಜೆಸ್ಟಿಕ್ ಮತ್ತು ಸ್ಯಾಟಲೈಟ್)",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಕರ್ನಾಟಕ ರಾಜ್ಯ ರಸ್ತೆ ಸಾರಿಗೆ ಸಂಸ್ಥೆ)",
    "address": "Gubbi Thotadappa Road, Majestic, Bengaluru - 560009",
    "helplinePhone": "080-22220386 / 080-49596666",
    "enquiryCounter": "7760990034 / 7760990035 (24/7 Helpline)",
    "operatingHours": "24 Hours Open (Over 2400 Daily Departures)",
    "totalPlatforms": 30,
    "dailyDepartures": "2,400+ Services Across All 31 Districts",
    "facilities": [
      "Airavat Premium AC Lounge & Wi-Fi",
      "Namma Metro Direct Skywalk Concourse",
      "Automated Ticket Kiosks & Online Counter",
      "KSTDC Tourism Information Counter",
      "Mother Care Pods & Escalators",
      "Multi-Level Parking Facility"
    ],
    "platformBays": [
      {
        "platforms": "Terminal 1 (Bays 1-6)",
        "destinations": "Mysuru, Mandya, Ramanagara, Chamarajanagar",
        "serviceTypes": "EV Power Plus, Flybus, Airavat Club Class"
      },
      {
        "platforms": "Terminal 2 (Bays 7-12)",
        "destinations": "Mangaluru, Udupi, Dharmasthala, Madikeri",
        "serviceTypes": "Airavat Club Class, Sleeper"
      },
      {
        "platforms": "Terminal 3 (Bays 13-18)",
        "destinations": "Tumakuru, Chitradurga, Davanagere, Shivamogga",
        "serviceTypes": "Rajahamsa, Karnataka Sarige"
      },
      {
        "platforms": "Terminal 4 (Bays 19-24)",
        "destinations": "Hubballi, Belagavi, Koppal, Hosapete (Hampi)",
        "serviceTypes": "Airavat, EV Power Plus, Sleeper"
      },
      {
        "platforms": "Terminal 5 (Bays 25-30)",
        "destinations": "Kalaburagi, Bidar, Raichur, Vijayapura, Bagalkote",
        "serviceTypes": "Airavat, Non-AC Sleeper"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-BLR-01",
        "destination": "Mysuru",
        "serviceType": "EV Power Plus",
        "operator": "KSRTC",
        "departureTime": "06:00 AM",
        "viaRoute": "Expressway, Mandya",
        "platform": "Bay 1",
        "frequency": "Every 15 Mins",
        "fare": 320
      },
      {
        "serviceNumber": "KS-BLR-02",
        "destination": "Koppal",
        "serviceType": "Airavat Club Class",
        "operator": "KKRTC",
        "departureTime": "10:30 PM",
        "viaRoute": "Tumakuru, Chitradurga, Hosapete",
        "platform": "Bay 20",
        "frequency": "Daily Night Express",
        "fare": 840
      },
      {
        "serviceNumber": "KS-BLR-03",
        "destination": "Hubballi",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Tumakuru, Davanagere",
        "platform": "Bay 19",
        "frequency": "Every 30 Mins",
        "fare": 840
      },
      {
        "serviceNumber": "KS-BLR-04",
        "destination": "Mangaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "10:00 PM",
        "viaRoute": "Hassan, Sakleshpur, Shiradi",
        "platform": "Bay 7",
        "frequency": "Every 20 Mins",
        "fare": 750
      },
      {
        "serviceNumber": "KS-BLR-05",
        "destination": "Vijayanagara (Hosapete/Hampi)",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "10:45 PM",
        "viaRoute": "Chitradurga, Kudligi",
        "platform": "Bay 21",
        "frequency": "Daily 6 Trips",
        "fare": 780
      },
      {
        "serviceNumber": "KS-BLR-06",
        "destination": "Madikeri (Kodagu)",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Mysuru, Kushalnagar",
        "platform": "Bay 9",
        "frequency": "Hourly",
        "fare": 540
      },
      {
        "serviceNumber": "KS-BLR-07",
        "destination": "Shivamogga",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Tumakuru, Arsikere, Bhadravathi",
        "platform": "Bay 15",
        "frequency": "Every 30 Mins",
        "fare": 460
      },
      {
        "serviceNumber": "KS-BLR-08",
        "destination": "Kalaburagi",
        "serviceType": "Non-AC Sleeper",
        "operator": "KKRTC",
        "departureTime": "09:00 PM",
        "viaRoute": "Anantapur, Guntakal, Raichur",
        "platform": "Bay 25",
        "frequency": "Daily 4 Trips",
        "fare": 890
      }
    ]
  },
  {
    "id": "mysuru-cbs",
    "city": "Mysuru",
    "districtId": "mysuru",
    "districtName": "Mysuru",
    "region": "South Karnataka",
    "kannadaCity": "ಮೈಸೂರು",
    "name": "Mysuru Suburb Central Bus Stand (CBS)",
    "kannadaName": "ಮೈಸೂರು ಉಪನಗರ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಮೈಸೂರು ಗ್ರಾಮಾಂತರ ವಿಭಾಗ)",
    "address": "Bangalore-Nilgiri Road, Suburb, Mysuru - 570001",
    "helplinePhone": "0821-2520853 / 0821-2443602",
    "enquiryCounter": "7760990820 (Central Suburb Stand)",
    "operatingHours": "24 Hours Continuous Service",
    "totalPlatforms": 22,
    "dailyDepartures": "1,100+ Scheduled Trips",
    "facilities": [
      "Mysuru-Bengaluru Expressway EV Charging Hub",
      "Tourist Information Counter",
      "AC Waiting Hall & Deluxe Restrooms",
      "Chamundi Hills & KRS City Link Terminus",
      "Food Court & Regional Coffee Outlets"
    ],
    "platformBays": [
      {
        "platforms": "Bays 1 - 5",
        "destinations": "Bengaluru (Expressway Non-Stop), Mandya, Ramanagara",
        "serviceTypes": "EV Power Plus, Flybus, Airavat"
      },
      {
        "platforms": "Bays 6 - 9",
        "destinations": "Madikeri (Kodagu), Kushalnagar, Virajpet",
        "serviceTypes": "Rajahamsa, Sarige"
      },
      {
        "platforms": "Bays 10 - 13",
        "destinations": "Hassan, Chikkamagaluru, Shivamogga, Belur",
        "serviceTypes": "Rajahamsa, Sarige"
      },
      {
        "platforms": "Bays 14 - 17",
        "destinations": "Mangaluru, Udupi, Sullya, Puttur",
        "serviceTypes": "Airavat, Rajahamsa"
      },
      {
        "platforms": "Bays 18 - 22",
        "destinations": "Chamarajanagar, Gundlupet, Bandipur, Hubballi",
        "serviceTypes": "Sarige, Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-MYS-01",
        "destination": "Bengaluru",
        "serviceType": "EV Power Plus",
        "operator": "KSRTC",
        "departureTime": "06:00 AM",
        "viaRoute": "Expressway, Mandya",
        "platform": "Bay 1",
        "frequency": "Every 15 Mins",
        "fare": 320
      },
      {
        "serviceNumber": "KS-MYS-02",
        "destination": "Madikeri (Kodagu)",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Hunsur, Kushalnagar",
        "platform": "Bay 6",
        "frequency": "Every 30 Mins",
        "fare": 210
      },
      {
        "serviceNumber": "KS-MYS-03",
        "destination": "Mangaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Madikeri, Mani, Bantwal",
        "platform": "Bay 14",
        "frequency": "Daily 6 Trips",
        "fare": 460
      },
      {
        "serviceNumber": "KS-MYS-04",
        "destination": "Chamarajanagar",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Nanjangud",
        "platform": "Bay 18",
        "frequency": "Every 20 Mins",
        "fare": 95
      },
      {
        "serviceNumber": "KS-MYS-05",
        "destination": "Hassan",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "08:45 AM",
        "viaRoute": "Holenarasipura",
        "platform": "Bay 10",
        "frequency": "Hourly",
        "fare": 180
      },
      {
        "serviceNumber": "KS-MYS-06",
        "destination": "Hubballi",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "09:30 PM",
        "viaRoute": "Hassan, Shivamogga, Haveri",
        "platform": "Bay 20",
        "frequency": "Daily Night Express",
        "fare": 750
      }
    ]
  },
  {
    "id": "mandya-cbs",
    "city": "Mandya",
    "districtId": "mandya",
    "districtName": "Mandya",
    "region": "South Karnataka",
    "kannadaCity": "ಮಂಡ್ಯ",
    "name": "Mandya KSRTC Bus Stand",
    "kannadaName": "ಮಂಡ್ಯ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಮಂಡ್ಯ ವಿಭಾಗ)",
    "address": "Bengaluru-Mysuru Main Road, Mandya - 571401",
    "helplinePhone": "08232-224484 / 08232-222624",
    "enquiryCounter": "7760990830 (Mandya Depot)",
    "operatingHours": "24 Hours Continuous Transit",
    "totalPlatforms": 14,
    "dailyDepartures": "650+ Scheduled Services",
    "facilities": [
      "Expressway Inter-City Transit Terminal",
      "Srirangapatna & Shivanasamudra Tourist Bus Kiosk",
      "Waiting Hall & Refreshment Stalls",
      "Drinking Water & Sanitary Amenities"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Bengaluru (Expressway Non-Stop), Ramanagara, Bidadi",
        "serviceTypes": "EV Power Plus, Express"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Mysuru, Srirangapatna, Nanjangud",
        "serviceTypes": "EV Power Plus, Sarige"
      },
      {
        "platforms": "Platforms 9 - 11",
        "destinations": "Shivanasamudra Falls, Malavalli, Kollegal",
        "serviceTypes": "Express, Sarige"
      },
      {
        "platforms": "Platforms 12 - 14",
        "destinations": "Melukote, Nagamangala, Bellur Cross",
        "serviceTypes": "Sarige"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-MDY-01",
        "destination": "Bengaluru",
        "serviceType": "EV Power Plus",
        "operator": "KSRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Expressway, Ramanagara",
        "platform": "Platform 1",
        "frequency": "Every 15 Mins",
        "fare": 190
      },
      {
        "serviceNumber": "KS-MDY-02",
        "destination": "Mysuru",
        "serviceType": "EV Power Plus",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Srirangapatna",
        "platform": "Platform 5",
        "frequency": "Every 15 Mins",
        "fare": 130
      },
      {
        "serviceNumber": "KS-MDY-03",
        "destination": "Shivanasamudra Falls",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Malavalli",
        "platform": "Platform 9",
        "frequency": "Hourly",
        "fare": 90
      },
      {
        "serviceNumber": "KS-MDY-04",
        "destination": "Tumakuru",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "08:30 AM",
        "viaRoute": "Nagamangala, Bellur Cross",
        "platform": "Platform 12",
        "frequency": "Daily 6 Trips",
        "fare": 175
      }
    ]
  },
  {
    "id": "chitradurga-cbs",
    "city": "Chitradurga",
    "districtId": "chitradurga",
    "districtName": "Chitradurga",
    "region": "Central Karnataka",
    "kannadaCity": "ಚಿತ್ರದುರ್ಗ",
    "name": "Chitradurga Central Bus Stand (KSRTC)",
    "kannadaName": "ಚಿತ್ರದುರ್ಗ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಕಲ್ಲಿನ ಕೋಟೆ ನಿಲ್ದಾಣ)",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಚಿತ್ರದುರ್ಗ ವಿಭಾಗ)",
    "address": "NH 48 Bypass Junction, Chitradurga - 577501",
    "helplinePhone": "08194-222402 / 08194-222403",
    "enquiryCounter": "7760990420 (Chitradurga Control Room)",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 18,
    "dailyDepartures": "720+ Services",
    "facilities": [
      "NH-48 Golden Quadrilateral 24x7 Junction",
      "Waiting Hall & Food Canteen",
      "Cloakroom & Kiosk Ticketing",
      "Fort Sightseeing Tourist Counter"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Bengaluru, Tumakuru, Sira",
        "serviceTypes": "Airavat, Rajahamsa, Express"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Davanagere, Hubballi, Haveri, Belagavi",
        "serviceTypes": "Airavat, Rajahamsa, Express"
      },
      {
        "platforms": "Platforms 9 - 12",
        "destinations": "Hosapete (Hampi), Ballari, Koppal",
        "serviceTypes": "Rajahamsa, Express"
      },
      {
        "platforms": "Platforms 13 - 18",
        "destinations": "Shivamogga, Bhadravathi, Challakere",
        "serviceTypes": "Sarige"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-CTA-01",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "06:15 AM",
        "viaRoute": "Sira, Tumakuru",
        "platform": "Platform 1",
        "frequency": "Every 30 Mins",
        "fare": 460
      },
      {
        "serviceNumber": "KS-CTA-02",
        "destination": "Hubballi",
        "serviceType": "EV Power Plus",
        "operator": "NWKRTC",
        "departureTime": "08:30 AM",
        "viaRoute": "Davanagere, Haveri",
        "platform": "Platform 5",
        "frequency": "Hourly",
        "fare": 390
      },
      {
        "serviceNumber": "KS-CTA-03",
        "destination": "Koppal",
        "serviceType": "Rajahamsa Executive",
        "operator": "KKRTC",
        "departureTime": "09:45 AM",
        "viaRoute": "Kudligi, Hosapete",
        "platform": "Platform 10",
        "frequency": "Daily 4 Trips",
        "fare": 290
      },
      {
        "serviceNumber": "KS-CTA-04",
        "destination": "Shivamogga",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Holalkere, Channagiri",
        "platform": "Platform 13",
        "frequency": "Hourly",
        "fare": 180
      }
    ]
  },
  {
    "id": "tumakuru-cbs",
    "city": "Tumakuru",
    "districtId": "tumakuru",
    "districtName": "Tumakuru",
    "region": "South Karnataka",
    "kannadaCity": "ತುಮಕೂರು",
    "name": "Tumakuru KSRTC Central Bus Stand",
    "kannadaName": "ತುಮಕೂರು ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ತುಮಕೂರು ವಿಭಾಗ)",
    "address": "B.H. Road, Near Town Hall, Tumakuru - 572101",
    "helplinePhone": "0816-2278272 / 0816-2278273",
    "enquiryCounter": "7760990320 (Tumakuru Division)",
    "operatingHours": "24 Hours Continuous Transit",
    "totalPlatforms": 20,
    "dailyDepartures": "980+ Express & Ordinary Services",
    "facilities": [
      "Gateway to Central/North Karnataka Transit Hub",
      "Computerized Ticket Counters",
      "AC Waiting Lounge & Nursing Room",
      "Canteen & Drinking Water"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 5",
        "destinations": "Bengaluru (Majestic & Nelamangala)",
        "serviceTypes": "Express, Non-Stop (Every 10 mins)"
      },
      {
        "platforms": "Platforms 6 - 10",
        "destinations": "Sira, Chitradurga, Davanagere, Hubballi",
        "serviceTypes": "Airavat, Rajahamsa, Express"
      },
      {
        "platforms": "Platforms 11 - 15",
        "destinations": "Koppal, Hosapete, Ballari",
        "serviceTypes": "Express, Rajahamsa"
      },
      {
        "platforms": "Platforms 16 - 20",
        "destinations": "Tiptur, Arsikere, Shivamogga, Hassan",
        "serviceTypes": "Sarige"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-TMK-01",
        "destination": "Bengaluru",
        "serviceType": "Express Non-Stop",
        "operator": "KSRTC",
        "departureTime": "06:00 AM",
        "viaRoute": "Nelamangala, Peenya",
        "platform": "Platform 1",
        "frequency": "Every 10 Mins",
        "fare": 115
      },
      {
        "serviceNumber": "KS-TMK-02",
        "destination": "Hubballi",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Chitradurga, Davanagere",
        "platform": "Platform 6",
        "frequency": "Every 30 Mins",
        "fare": 740
      },
      {
        "serviceNumber": "KS-TMK-03",
        "destination": "Koppal",
        "serviceType": "Non-AC Sleeper",
        "operator": "KKRTC",
        "departureTime": "11:15 PM",
        "viaRoute": "Chitradurga, Kudligi, Hosapete",
        "platform": "Platform 11",
        "frequency": "Daily Night Express",
        "fare": 620
      },
      {
        "serviceNumber": "KS-TMK-04",
        "destination": "Shivamogga",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "07:45 AM",
        "viaRoute": "Gubbi, Tiptur, Arsikere",
        "platform": "Platform 16",
        "frequency": "Hourly",
        "fare": 360
      }
    ]
  },
  {
    "id": "mangaluru-cbs",
    "city": "Mangaluru",
    "districtId": "dakshina-kannada",
    "districtName": "Dakshina Kannada",
    "region": "Coastal Karnataka",
    "kannadaCity": "ಮಂಗಳೂರು",
    "name": "Mangaluru KSRTC Central Bus Terminal (Bejai)",
    "kannadaName": "ಮಂಗಳೂರು ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಬಿಜೈ)",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಮಂಗಳೂರು ವಿಭಾಗ)",
    "address": "Bejai Main Road, Mangaluru, Dakshina Kannada - 575004",
    "helplinePhone": "0824-2220577 / 0824-2220578",
    "enquiryCounter": "7760990720 (Bejai Terminal Control)",
    "operatingHours": "24 Hours Continuous Service",
    "totalPlatforms": 22,
    "dailyDepartures": "780+ Coastal & Inter-District Departures",
    "facilities": [
      "Airavat Premium AC Lounge & Wi-Fi",
      "Coastal Transit Information Kiosk",
      "Shiradi Ghat Road Advisory Desk",
      "Multi-Cuisine Vegetarian Food Court"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 5",
        "destinations": "Bengaluru (Shiradi & Charmadi Ghats)",
        "serviceTypes": "Airavat Club Class, Sleeper"
      },
      {
        "platforms": "Platforms 6 - 9",
        "destinations": "Udupi, Kundapura, Bhatkal, Gokarna, Karwar",
        "serviceTypes": "Express, Rajahamsa"
      },
      {
        "platforms": "Platforms 10 - 13",
        "destinations": "Madikeri, Mysuru, Mandya, Chamarajanagar",
        "serviceTypes": "Rajahamsa, Sarige"
      },
      {
        "platforms": "Platforms 14 - 17",
        "destinations": "Hassan, Chikkamagaluru, Shivamogga",
        "serviceTypes": "Sarige, Express"
      },
      {
        "platforms": "Platforms 18 - 22",
        "destinations": "Hubballi, Belagavi, Bagalkote, Vijayapura",
        "serviceTypes": "Airavat, Sleeper"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-MNG-01",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "09:30 PM",
        "viaRoute": "BC Road, Hassan, Nelamangala",
        "platform": "Platform 1",
        "frequency": "Every 30 Mins",
        "fare": 750
      },
      {
        "serviceNumber": "KS-MNG-02",
        "destination": "Udupi",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Surathkal, Mulki",
        "platform": "Platform 6",
        "frequency": "Every 15 Mins",
        "fare": 85
      },
      {
        "serviceNumber": "KS-MNG-03",
        "destination": "Gokarna",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "07:15 AM",
        "viaRoute": "Udupi, Kundapura, Kumta",
        "platform": "Platform 7",
        "frequency": "Daily 4 Trips",
        "fare": 380
      },
      {
        "serviceNumber": "KS-MNG-04",
        "destination": "Mysuru",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Mani, Puttur, Madikeri",
        "platform": "Platform 10",
        "frequency": "Hourly",
        "fare": 440
      },
      {
        "serviceNumber": "KS-MNG-05",
        "destination": "Hubballi",
        "serviceType": "Non-AC Sleeper",
        "operator": "NWKRTC",
        "departureTime": "09:00 PM",
        "viaRoute": "Udupi, Ankola, Yellapur",
        "platform": "Platform 18",
        "frequency": "Daily Night Express",
        "fare": 710
      }
    ]
  },
  {
    "id": "belagavi-cbs",
    "city": "Belagavi",
    "districtId": "belagavi",
    "districtName": "Belagavi",
    "region": "North Karnataka",
    "kannadaCity": "ಬೆಳಗಾವಿ",
    "name": "Belagavi Central Bus Stand (CBT Fort Road)",
    "kannadaName": "ಬೆಳಗಾವಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಕೋಟೆ ರಸ್ತೆ)",
    "division": "NWKRTC",
    "divisionFullName": "North Western Karnataka Road Transport Corporation (ಬೆಳಗಾವಿ ವಿಭಾಗ)",
    "address": "Fort Road, Opp Old Civil Hospital, Belagavi - 590016",
    "helplinePhone": "0831-2422201 / 0831-2405233",
    "enquiryCounter": "7760991520 (Belagavi CBT)",
    "operatingHours": "24 Hours Continuous Service",
    "totalPlatforms": 20,
    "dailyDepartures": "850+ Scheduled Services",
    "facilities": [
      "Maharashtra Border Transit Desk",
      "Computerized E-Booking Center",
      "Deluxe Waiting Hall & Food Stalls",
      "KSTDC Tourism Assistance"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 5",
        "destinations": "Hubballi, Dharwad, Haveri, Bengaluru",
        "serviceTypes": "Airavat, Rajahamsa, Express"
      },
      {
        "platforms": "Platforms 6 - 9",
        "destinations": "Bagalkote (Badami), Vijayapura, Koppal",
        "serviceTypes": "Vayavya Sarige, Express"
      },
      {
        "platforms": "Platforms 10 - 13",
        "destinations": "Gokarna, Karwar, Goa, Dandeli",
        "serviceTypes": "Rajahamsa, Sarige"
      },
      {
        "platforms": "Platforms 14 - 20",
        "destinations": "Kolhapur, Pune, Mumbai, Solapur",
        "serviceTypes": "Inter-State Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "NW-BGM-01",
        "destination": "Hubballi",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Kittur, Dharwad Bypass",
        "platform": "Platform 1",
        "frequency": "Every 30 Mins",
        "fare": 240
      },
      {
        "serviceNumber": "NW-BGM-02",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "08:30 PM",
        "viaRoute": "Hubballi, Davanagere, Tumakuru",
        "platform": "Platform 3",
        "frequency": "Daily 6 Trips",
        "fare": 950
      },
      {
        "serviceNumber": "NW-BGM-03",
        "destination": "Koppal",
        "serviceType": "Express",
        "operator": "NWKRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Bailhongal, Saundatti, Gadag",
        "platform": "Platform 8",
        "frequency": "Daily 3 Trips",
        "fare": 310
      },
      {
        "serviceNumber": "NW-BGM-04",
        "destination": "Bagalkote (Badami)",
        "serviceType": "Express",
        "operator": "NWKRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Yaragatti, Lokapur",
        "platform": "Platform 6",
        "frequency": "Hourly",
        "fare": 220
      }
    ]
  },
  {
    "id": "kalaburagi-cbs",
    "city": "Kalaburagi",
    "districtId": "kalaburagi",
    "districtName": "Kalaburagi",
    "region": "Kalyana Karnataka",
    "kannadaCity": "ಕಲಬುರಗಿ",
    "name": "Kalaburagi Central Bus Terminal (KKRTC HQ)",
    "kannadaName": "ಕಲಬುರಗಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ ಮುಖ್ಯ ಕಚೇರಿ)",
    "division": "KKRTC",
    "divisionFullName": "Kalyana Karnataka Road Transport Corporation (ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ ಕೇಂದ್ರ ಕಚೇರಿ)",
    "address": "MSK Mill Road, Station Area, Kalaburagi - 585102",
    "helplinePhone": "08472-220050 / 08472-220051",
    "enquiryCounter": "7760992020 (KKRTC HQ 24x7 Helpline)",
    "operatingHours": "24 Hours Continuous Service",
    "totalPlatforms": 24,
    "dailyDepartures": "920+ Scheduled Trips",
    "facilities": [
      "KKRTC Corporate Headquarters Central Lounge",
      "Express Automated Ticketing Terminus",
      "Pure Veg Janatha Restaurant & Milk Parlor",
      "Cloakroom & Dormitory Facilities"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 5",
        "destinations": "Bengaluru (Majestic & Satellite)",
        "serviceTypes": "Airavat, Non-AC Sleeper, Rajahamsa"
      },
      {
        "platforms": "Platforms 6 - 9",
        "destinations": "Bidar, Humnabad, Basavakalyan",
        "serviceTypes": "Kalyana Sarige (Every 20 mins)"
      },
      {
        "platforms": "Platforms 10 - 13",
        "destinations": "Yadgir, Raichur, Ballari, Koppal",
        "serviceTypes": "Kalyana Sarige, Rajahamsa"
      },
      {
        "platforms": "Platforms 14 - 17",
        "destinations": "Vijayapura, Bagalkote, Hubballi",
        "serviceTypes": "Express, Rajahamsa"
      },
      {
        "platforms": "Platforms 18 - 24",
        "destinations": "Hyderabad, Solapur, Latur",
        "serviceTypes": "Inter-State Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KK-KLB-01",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KKRTC",
        "departureTime": "08:30 PM",
        "viaRoute": "Yadgir, Raichur, Anantapur",
        "platform": "Platform 1",
        "frequency": "Daily Night Express",
        "fare": 990
      },
      {
        "serviceNumber": "KK-KLB-02",
        "destination": "Bidar",
        "serviceType": "Kalyana Sarige",
        "operator": "KKRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Humnabad",
        "platform": "Platform 6",
        "frequency": "Every 20 Mins",
        "fare": 180
      },
      {
        "serviceNumber": "KK-KLB-03",
        "destination": "Koppal",
        "serviceType": "Rajahamsa Executive",
        "operator": "KKRTC",
        "departureTime": "07:45 AM",
        "viaRoute": "Shahapur, Lingsugur, Kushtagi",
        "platform": "Platform 12",
        "frequency": "Daily 4 Trips",
        "fare": 360
      },
      {
        "serviceNumber": "KK-KLB-04",
        "destination": "Vijayapura",
        "serviceType": "Express",
        "operator": "KKRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Jewargi, Sindagi",
        "platform": "Platform 14",
        "frequency": "Hourly",
        "fare": 240
      }
    ]
  },
  {
    "id": "hospet-cbs",
    "city": "Vijayanagara (Hosapete)",
    "districtId": "vijayanagara",
    "districtName": "Vijayanagara",
    "region": "Kalyana Karnataka",
    "kannadaCity": "ಹೊಸಪೇಟೆ (ವಿಜಯನಗರ)",
    "name": "Hosapete Central Bus Terminal (Hampi Heritage Gateway)",
    "kannadaName": "ಹೊಸಪೇಟೆ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಹಂಪಿ ಪಾರಂಪರಿಕ ಹೆಬ್ಬಾಗಿಲು)",
    "division": "KKRTC",
    "divisionFullName": "Kalyana Karnataka Road Transport Corporation (ವಿಜಯನಗರ ವಿಭಾಗ)",
    "address": "Station Road, Hosapete, Vijayanagara Dist - 583201",
    "helplinePhone": "08394-228468 / 08394-228469",
    "enquiryCounter": "7760991820 (Hosapete CBS)",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 16,
    "dailyDepartures": "540+ Daily Departures",
    "facilities": [
      "Hampi World Heritage Shuttle Kiosk",
      "KSTDC Official Tour Desk & Guide Center",
      "Tourist AC Lounge & Baggage Cloakroom"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 3",
        "destinations": "Hampi Historical Complex (Every 20 Mins)",
        "serviceTypes": "Hampi Heritage City Bus"
      },
      {
        "platforms": "Platforms 4 - 7",
        "destinations": "Koppal, Gadag, Hubballi, Belagavi",
        "serviceTypes": "Rajahamsa, Express"
      },
      {
        "platforms": "Platforms 8 - 11",
        "destinations": "Ballari, Bengaluru, Chitradurga",
        "serviceTypes": "Airavat, Sleeper"
      },
      {
        "platforms": "Platforms 12 - 16",
        "destinations": "Bagalkote (Badami), Vijayapura, Raichur",
        "serviceTypes": "Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KK-HPT-01",
        "destination": "Koppal",
        "serviceType": "Express",
        "operator": "KKRTC",
        "departureTime": "06:45 AM",
        "viaRoute": "Munirabad Dam",
        "platform": "Platform 4",
        "frequency": "Every 30 Mins",
        "fare": 85
      },
      {
        "serviceNumber": "KK-HPT-02",
        "destination": "Hubballi",
        "serviceType": "Rajahamsa Executive",
        "operator": "KKRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Koppal, Gadag",
        "platform": "Platform 5",
        "frequency": "Hourly",
        "fare": 260
      },
      {
        "serviceNumber": "KK-HPT-03",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "10:15 PM",
        "viaRoute": "Kudligi, Chitradurga",
        "platform": "Platform 8",
        "frequency": "Daily 6 Trips",
        "fare": 780
      },
      {
        "serviceNumber": "KK-HPT-04",
        "destination": "Ballari",
        "serviceType": "Express",
        "operator": "KKRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Toranagallu, Jindal City",
        "platform": "Platform 9",
        "frequency": "Every 20 Mins",
        "fare": 95
      }
    ]
  },
  {
    "id": "ballari-cbs",
    "city": "Ballari",
    "districtId": "ballari",
    "districtName": "Ballari",
    "region": "Kalyana Karnataka",
    "kannadaCity": "ಬಳ್ಳಾರಿ",
    "name": "Ballari Central Bus Stand (KKRTC)",
    "kannadaName": "ಬಳ್ಳಾರಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "KKRTC",
    "divisionFullName": "Kalyana Karnataka Road Transport Corporation (ಬಳ್ಳಾರಿ ವಿಭಾಗ)",
    "address": "Infantry Road, Near Royal Circle, Ballari - 583101",
    "helplinePhone": "08392-272020",
    "enquiryCounter": "7760991920",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 18,
    "dailyDepartures": "620+ Services",
    "facilities": [
      "Reservation Counters",
      "Waiting Hall",
      "Canteen",
      "Cloakroom"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Bengaluru, Chitradurga",
        "serviceTypes": "Airavat, Rajahamsa"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Hosapete, Koppal, Hubballi",
        "serviceTypes": "Express, Rajahamsa"
      },
      {
        "platforms": "Platforms 9 - 13",
        "destinations": "Raichur, Kalaburagi, Siruguppa",
        "serviceTypes": "Sarige"
      },
      {
        "platforms": "Platforms 14 - 18",
        "destinations": "Anantapur, Kurnool, Mantralayam",
        "serviceTypes": "Inter-State"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KK-BLR-01",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KKRTC",
        "departureTime": "10:00 PM",
        "viaRoute": "Challakere, Chitradurga",
        "platform": "Platform 1",
        "frequency": "Daily Night Express",
        "fare": 720
      },
      {
        "serviceNumber": "KK-BLR-02",
        "destination": "Koppal",
        "serviceType": "Express",
        "operator": "KKRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Toranagallu, Hosapete",
        "platform": "Platform 6",
        "frequency": "Hourly",
        "fare": 140
      },
      {
        "serviceNumber": "KK-BLR-03",
        "destination": "Hubballi",
        "serviceType": "Rajahamsa Executive",
        "operator": "KKRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Hosapete, Gadag",
        "platform": "Platform 7",
        "frequency": "Daily 6 Trips",
        "fare": 320
      }
    ]
  },
  {
    "id": "bagalkote-cbs",
    "city": "Bagalkote",
    "districtId": "bagalkote",
    "districtName": "Bagalkote",
    "region": "North Karnataka",
    "kannadaCity": "ಬಾಗಲಕೋಟೆ",
    "name": "Bagalkote Central Bus Stand (NWKRTC)",
    "kannadaName": "ಬಾಗಲಕೋಟೆ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ನವನಗರ)",
    "division": "NWKRTC",
    "divisionFullName": "North Western Karnataka Road Transport Corporation (ಬಾಗಲಕೋಟೆ ವಿಭಾಗ)",
    "address": "Navanagar Sector 23, Bagalkote - 587103",
    "helplinePhone": "08354-235122",
    "enquiryCounter": "7760991420",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 16,
    "dailyDepartures": "510+ Departures",
    "facilities": [
      "Badami & Pattadakal Tourist Bus Desk",
      "Waiting Hall",
      "Janatha Canteen"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Badami, Pattadakal, Aihole, Ilkal",
        "serviceTypes": "Heritage Express"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Hubballi, Belagavi, Dharwad",
        "serviceTypes": "Express, Rajahamsa"
      },
      {
        "platforms": "Platforms 9 - 12",
        "destinations": "Vijayapura, Koppal, Hosapete",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 13 - 16",
        "destinations": "Bengaluru, Tumakuru",
        "serviceTypes": "Non-AC Sleeper, Rajahamsa"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "NW-BGK-01",
        "destination": "Badami",
        "serviceType": "Heritage Shuttle",
        "operator": "NWKRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Kerur",
        "platform": "Platform 1",
        "frequency": "Every 20 Mins",
        "fare": 55
      },
      {
        "serviceNumber": "NW-BGK-02",
        "destination": "Hubballi",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Nargund, Navalgund",
        "platform": "Platform 5",
        "frequency": "Hourly",
        "fare": 190
      },
      {
        "serviceNumber": "NW-BGK-03",
        "destination": "Koppal",
        "serviceType": "Express",
        "operator": "NWKRTC",
        "departureTime": "09:30 AM",
        "viaRoute": "Ilkal, Kushtagi",
        "platform": "Platform 10",
        "frequency": "Daily 4 Trips",
        "fare": 185
      },
      {
        "serviceNumber": "NW-BGK-04",
        "destination": "Bengaluru",
        "serviceType": "Non-AC Sleeper",
        "operator": "NWKRTC",
        "departureTime": "09:00 PM",
        "viaRoute": "Chitradurga, Tumakuru",
        "platform": "Platform 13",
        "frequency": "Daily Night Express",
        "fare": 760
      }
    ]
  },
  {
    "id": "vijayapura-cbs",
    "city": "Vijayapura",
    "districtId": "vijayapura",
    "districtName": "Vijayapura",
    "region": "North Karnataka",
    "kannadaCity": "ವಿಜಯಪುರ",
    "name": "Vijayapura Central Bus Stand (NWKRTC)",
    "kannadaName": "ವಿಜಯಪುರ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಗೋಲ್ ಗುಂಬಜ್ ನಿಲ್ದಾಣ)",
    "division": "NWKRTC",
    "divisionFullName": "North Western Karnataka Road Transport Corporation (ವಿಜಯಪುರ ವಿಭಾಗ)",
    "address": "Station Road, Near Gol Gumbaz, Vijayapura - 586101",
    "helplinePhone": "08352-251344",
    "enquiryCounter": "7760991320",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 18,
    "dailyDepartures": "650+ Services",
    "facilities": [
      "Gol Gumbaz Tourist Information Desk",
      "Automated Reservation",
      "AC Waiting Hall"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Hubballi, Belagavi, Bagalkote",
        "serviceTypes": "Express, Rajahamsa"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Kalaburagi, Bidar, Solapur",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 9 - 13",
        "destinations": "Koppal, Hosapete, Ballari",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 14 - 18",
        "destinations": "Bengaluru, Pune, Mumbai",
        "serviceTypes": "Sleeper, Airavat"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "NW-BJP-01",
        "destination": "Hubballi",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Bagalkote, Nargund",
        "platform": "Platform 1",
        "frequency": "Hourly",
        "fare": 270
      },
      {
        "serviceNumber": "NW-BJP-02",
        "destination": "Koppal",
        "serviceType": "Express",
        "operator": "NWKRTC",
        "departureTime": "08:45 AM",
        "viaRoute": "Hungund, Kushtagi",
        "platform": "Platform 9",
        "frequency": "Daily 4 Trips",
        "fare": 220
      },
      {
        "serviceNumber": "NW-BJP-03",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "08:30 PM",
        "viaRoute": "Hosapete, Chitradurga",
        "platform": "Platform 14",
        "frequency": "Daily Night Express",
        "fare": 980
      }
    ]
  },
  {
    "id": "shivamogga-cbs",
    "city": "Shivamogga",
    "districtId": "shivamogga",
    "districtName": "Shivamogga",
    "region": "Malnad",
    "kannadaCity": "ಶಿವಮೊಗ್ಗ",
    "name": "Shivamogga KSRTC Central Bus Terminal",
    "kannadaName": "ಶಿವಮೊಗ್ಗ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಕುವೆಂಪು ನಿಲ್ದಾಣ)",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಶಿವಮೊಗ್ಗ ವಿಭಾಗ)",
    "address": "B.H. Road, Shivamogga - 577201",
    "helplinePhone": "08182-222078",
    "enquiryCounter": "7760990620",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 20,
    "dailyDepartures": "750+ Scheduled Trips",
    "facilities": [
      "Jog Falls Special Bus Counter",
      "Agumbe Rainforest Bus Desk",
      "Waiting Lounge"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Bengaluru (Express & Non-Stop)",
        "serviceTypes": "Rajahamsa, Airavat"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Jog Falls, Sagara, Sirsi, Karwar",
        "serviceTypes": "Malnad Express"
      },
      {
        "platforms": "Platforms 9 - 13",
        "destinations": "Udupi, Mangaluru, Agumbe, Thirthahalli",
        "serviceTypes": "Express, Sarige"
      },
      {
        "platforms": "Platforms 14 - 20",
        "destinations": "Chikkamagaluru, Hassan, Mysuru, Hubballi",
        "serviceTypes": "Sarige"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-SHV-01",
        "destination": "Bengaluru",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Bhadravathi, Arsikere, Tumakuru",
        "platform": "Platform 1",
        "frequency": "Every 30 Mins",
        "fare": 460
      },
      {
        "serviceNumber": "KS-SHV-02",
        "destination": "Jog Falls",
        "serviceType": "Malnad Express",
        "operator": "KSRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Sagara, Talaguppa",
        "platform": "Platform 5",
        "frequency": "Hourly",
        "fare": 135
      },
      {
        "serviceNumber": "KS-SHV-03",
        "destination": "Udupi",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "07:15 AM",
        "viaRoute": "Thirthahalli, Agumbe, Someshwara",
        "platform": "Platform 9",
        "frequency": "Daily 6 Trips",
        "fare": 210
      },
      {
        "serviceNumber": "KS-SHV-04",
        "destination": "Hubballi",
        "serviceType": "Express",
        "operator": "NWKRTC",
        "departureTime": "08:30 AM",
        "viaRoute": "Shikaripura, Hirekerur, Haveri",
        "platform": "Platform 18",
        "frequency": "Daily 4 Trips",
        "fare": 280
      }
    ]
  },
  {
    "id": "chikkamagaluru-cbs",
    "city": "Chikkamagaluru",
    "districtId": "chikkamagaluru",
    "districtName": "Chikkamagaluru",
    "region": "Malnad",
    "kannadaCity": "ಚಿಕ್ಕಮಗಳೂರು",
    "name": "Chikkamagaluru KSRTC Central Bus Stand",
    "kannadaName": "ಚಿಕ್ಕಮಗಳೂರು ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಚಿಕ್ಕಮಗಳೂರು ವಿಭಾಗ)",
    "address": "IG Road, Chikkamagaluru - 577101",
    "helplinePhone": "08262-235480",
    "enquiryCounter": "7760990920",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 16,
    "dailyDepartures": "480+ Services",
    "facilities": [
      "Mullayanagiri & Hill Sightseeing Desk",
      "Coffee Board Canteen",
      "Waiting Hall"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Bengaluru, Hassan",
        "serviceTypes": "Rajahamsa, Airavat"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Mangaluru, Udupi, Mudigere, Dharmasthala",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 9 - 12",
        "destinations": "Shivamogga, Tarikere, Kadur",
        "serviceTypes": "Sarige"
      },
      {
        "platforms": "Platforms 13 - 16",
        "destinations": "Mullayanagiri, Baba Budangiri, Kemmangundi",
        "serviceTypes": "Hill Mini Buses"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-CKM-01",
        "destination": "Bengaluru",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "06:45 AM",
        "viaRoute": "Hassan, Bellur Cross, Kunigal",
        "platform": "Platform 1",
        "frequency": "Every 45 Mins",
        "fare": 430
      },
      {
        "serviceNumber": "KS-CKM-02",
        "destination": "Mangaluru",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Mudigere, Charmadi Ghat, Belthangady",
        "platform": "Platform 5",
        "frequency": "Hourly",
        "fare": 210
      },
      {
        "serviceNumber": "KS-CKM-03",
        "destination": "Hassan",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "06:15 AM",
        "viaRoute": "Belur",
        "platform": "Platform 2",
        "frequency": "Every 20 Mins",
        "fare": 65
      }
    ]
  },
  {
    "id": "hassan-cbs",
    "city": "Hassan",
    "districtId": "hassan",
    "districtName": "Hassan",
    "region": "South Karnataka",
    "kannadaCity": "ಹಾಸನ",
    "name": "Hassan KSRTC Central Bus Stand",
    "kannadaName": "ಹಾಸನ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಹಾಸನ ವಿಭಾಗ)",
    "address": "B.M. Road, Near Hemavathi Statue, Hassan - 573201",
    "helplinePhone": "08172-268045",
    "enquiryCounter": "7760991020",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 18,
    "dailyDepartures": "720+ Scheduled Trips",
    "facilities": [
      "Belur & Halebeedu UNESCO Tourist Desk",
      "Waiting Hall",
      "Canteen"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Bengaluru (Non-Stop NH 75)",
        "serviceTypes": "Airavat, Rajahamsa, Express"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Belur, Halebeedu, Chikkamagaluru",
        "serviceTypes": "Hoysala Tourist Express"
      },
      {
        "platforms": "Platforms 9 - 13",
        "destinations": "Mangaluru, Dharmasthala, Sakleshpur",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 14 - 18",
        "destinations": "Mysuru, Shravanabelagola, Channarayapatna",
        "serviceTypes": "Sarige"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-HSN-01",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Channarayapatna, Kunigal",
        "platform": "Platform 1",
        "frequency": "Every 20 Mins",
        "fare": 380
      },
      {
        "serviceNumber": "KS-HSN-02",
        "destination": "Belur (Chennakeshava)",
        "serviceType": "Tourist Express",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Direct NH",
        "platform": "Platform 5",
        "frequency": "Every 15 Mins",
        "fare": 45
      },
      {
        "serviceNumber": "KS-HSN-03",
        "destination": "Shravanabelagola",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "07:45 AM",
        "viaRoute": "Channarayapatna",
        "platform": "Platform 14",
        "frequency": "Every 30 Mins",
        "fare": 75
      },
      {
        "serviceNumber": "KS-HSN-04",
        "destination": "Mangaluru",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Sakleshpur, Shiradi Ghat",
        "platform": "Platform 9",
        "frequency": "Hourly",
        "fare": 310
      }
    ]
  },
  {
    "id": "kodagu-cbs",
    "city": "Madikeri (Kodagu)",
    "districtId": "kodagu",
    "districtName": "Kodagu",
    "region": "Malnad",
    "kannadaCity": "ಮಡಿಕೇರಿ (ಕೊಡಗು)",
    "name": "Madikeri KSRTC Bus Stand",
    "kannadaName": "ಮಡಿಕೇರಿ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಪುತ್ತೂರು/ಮಡಿಕೇರಿ ವಿಭಾಗ)",
    "address": "College Road, Madikeri, Kodagu - 571201",
    "helplinePhone": "08272-228328",
    "enquiryCounter": "7760991120",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 14,
    "dailyDepartures": "380+ Services",
    "facilities": [
      "Talakaveri & Abbey Falls Sightseeing Kiosk",
      "Waiting Hall",
      "Tourist Guide Desk"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Mysuru, Bengaluru (Via Kushalnagar)",
        "serviceTypes": "Rajahamsa, Airavat"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Mangaluru, Sullya, Puttur",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 9 - 11",
        "destinations": "Talakaveri, Bhagamandala",
        "serviceTypes": "Cauvery Pilgrimage Shuttle"
      },
      {
        "platforms": "Platforms 12 - 14",
        "destinations": "Hassan, Chikkamagaluru, Virajpet",
        "serviceTypes": "Sarige"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-KDG-01",
        "destination": "Bengaluru",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Kushalnagar, Mysuru, Mandya",
        "platform": "Platform 1",
        "frequency": "Hourly",
        "fare": 540
      },
      {
        "serviceNumber": "KS-KDG-02",
        "destination": "Mysuru",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Kushalnagar, Hunsur",
        "platform": "Platform 2",
        "frequency": "Every 20 Mins",
        "fare": 210
      },
      {
        "serviceNumber": "KS-KDG-03",
        "destination": "Talakaveri",
        "serviceType": "Pilgrimage Shuttle",
        "operator": "KSRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Bhagamandala",
        "platform": "Platform 9",
        "frequency": "Hourly",
        "fare": 65
      },
      {
        "serviceNumber": "KS-KDG-04",
        "destination": "Mangaluru",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Sampaje Ghat, Sullya",
        "platform": "Platform 5",
        "frequency": "Hourly",
        "fare": 230
      }
    ]
  },
  {
    "id": "udupi-cbs",
    "city": "Udupi",
    "districtId": "udupi",
    "districtName": "Udupi",
    "region": "Coastal Karnataka",
    "kannadaCity": "ಉಡುಪಿ",
    "name": "Udupi KSRTC Bus Stand",
    "kannadaName": "ಉಡುಪಿ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಮಂಗಳೂರು/ಉಡುಪಿ ವಿಭಾಗ)",
    "address": "Service Bus Stand Road, Near City Bus Stand, Udupi - 576101",
    "helplinePhone": "0820-2520442",
    "enquiryCounter": "7760990730",
    "operatingHours": "24 Hours Continuous Service",
    "totalPlatforms": 14,
    "dailyDepartures": "490+ Services",
    "facilities": [
      "Sri Krishna Matha Pilgrimage Transit Counter",
      "Waiting Hall",
      "Coastal Tourism Desk"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Bengaluru (Airavat Club Class)",
        "serviceTypes": "Airavat, Sleeper"
      },
      {
        "platforms": "Platforms 5 - 7",
        "destinations": "Mangaluru, Surathkal",
        "serviceTypes": "Express (Every 15 Mins)"
      },
      {
        "platforms": "Platforms 8 - 10",
        "destinations": "Murudeshwara, Gokarna, Karwar",
        "serviceTypes": "Rajahamsa, Express"
      },
      {
        "platforms": "Platforms 11 - 14",
        "destinations": "Shivamogga, Hubballi, Belagavi",
        "serviceTypes": "Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-UDP-01",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "09:45 PM",
        "viaRoute": "Mangaluru, Hassan",
        "platform": "Platform 1",
        "frequency": "Daily Night Express",
        "fare": 790
      },
      {
        "serviceNumber": "KS-UDP-02",
        "destination": "Mangaluru",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "06:15 AM",
        "viaRoute": "Mulki, Surathkal",
        "platform": "Platform 5",
        "frequency": "Every 15 Mins",
        "fare": 85
      },
      {
        "serviceNumber": "KS-UDP-03",
        "destination": "Gokarna",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Kundapura, Bhatkal, Kumta",
        "platform": "Platform 8",
        "frequency": "Daily 4 Trips",
        "fare": 290
      }
    ]
  },
  {
    "id": "gadag-cbs",
    "city": "Gadag",
    "districtId": "gadag",
    "districtName": "Gadag",
    "region": "North Karnataka",
    "kannadaCity": "ಗದಗ",
    "name": "Gadag New Central Bus Stand (NWKRTC)",
    "kannadaName": "ಗದಗ ಹೊಸ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಲಕ್ಕುಂಡಿ ಹೆಬ್ಬಾಗಿಲು)",
    "division": "NWKRTC",
    "divisionFullName": "North Western Karnataka Road Transport Corporation (ಗದಗ ವಿಭಾಗ)",
    "address": "Pala-Badami Road, Near Mulgund Naka, Gadag - 582101",
    "helplinePhone": "08372-238422",
    "enquiryCounter": "7760991720",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 16,
    "dailyDepartures": "460+ Departures",
    "facilities": [
      "Lakkundi Temple Tourist Desk",
      "Waiting Hall",
      "Computerized Reservation"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Hubballi, Dharwad",
        "serviceTypes": "Express (Every 15 Mins)"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Koppal, Hosapete, Ballari",
        "serviceTypes": "Express, Rajahamsa"
      },
      {
        "platforms": "Platforms 9 - 12",
        "destinations": "Bagalkote, Badami, Gajendragad",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 13 - 16",
        "destinations": "Bengaluru, Davanagere",
        "serviceTypes": "Non-AC Sleeper, Rajahamsa"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "NW-GDG-01",
        "destination": "Hubballi",
        "serviceType": "Express",
        "operator": "NWKRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Annigeri",
        "platform": "Platform 1",
        "frequency": "Every 15 Mins",
        "fare": 85
      },
      {
        "serviceNumber": "NW-GDG-02",
        "destination": "Koppal",
        "serviceType": "Express",
        "operator": "NWKRTC",
        "departureTime": "07:15 AM",
        "viaRoute": "Bhanapur",
        "platform": "Platform 5",
        "frequency": "Hourly",
        "fare": 95
      },
      {
        "serviceNumber": "NW-GDG-03",
        "destination": "Bengaluru",
        "serviceType": "Non-AC Sleeper",
        "operator": "NWKRTC",
        "departureTime": "09:30 PM",
        "viaRoute": "Davanagere, Chitradurga",
        "platform": "Platform 13",
        "frequency": "Daily Night Express",
        "fare": 680
      }
    ]
  },
  {
    "id": "haveri-cbs",
    "city": "Haveri",
    "districtId": "haveri",
    "districtName": "Haveri",
    "region": "North Karnataka",
    "kannadaCity": "ಹಾವೇರಿ",
    "name": "Haveri NWKRTC Central Bus Stand",
    "kannadaName": "ಹಾವೇರಿ ವಾಯವ್ಯ ಕರ್ನಾಟಕ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "NWKRTC",
    "divisionFullName": "North Western Karnataka Road Transport Corporation (ಹಾವೇರಿ ವಿಭಾಗ)",
    "address": "PB Road, Near Railway Station, Haveri - 581110",
    "helplinePhone": "08375-232422",
    "enquiryCounter": "7760991620",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 14,
    "dailyDepartures": "480+ Services",
    "facilities": [
      "Waiting Hall",
      "Computerized Reservation",
      "Refreshment Kiosks"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Hubballi, Dharwad, Belagavi",
        "serviceTypes": "Express (Every 20 Mins)"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Davanagere, Chitradurga, Bengaluru",
        "serviceTypes": "Express, Rajahamsa"
      },
      {
        "platforms": "Platforms 9 - 11",
        "destinations": "Ranebennur, Byadgi",
        "serviceTypes": "Sarige"
      },
      {
        "platforms": "Platforms 12 - 14",
        "destinations": "Sirsi, Shivamogga, Koppal",
        "serviceTypes": "Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "NW-HVR-01",
        "destination": "Hubballi",
        "serviceType": "Express",
        "operator": "NWKRTC",
        "departureTime": "06:45 AM",
        "viaRoute": "Bankapur, Shiggaon",
        "platform": "Platform 1",
        "frequency": "Every 20 Mins",
        "fare": 115
      },
      {
        "serviceNumber": "NW-HVR-02",
        "destination": "Bengaluru",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Davanagere, Tumakuru",
        "platform": "Platform 5",
        "frequency": "Daily 6 Trips",
        "fare": 620
      },
      {
        "serviceNumber": "NW-HVR-03",
        "destination": "Koppal",
        "serviceType": "Express",
        "operator": "NWKRTC",
        "departureTime": "09:15 AM",
        "viaRoute": "Gadag, Bhanapur",
        "platform": "Platform 12",
        "frequency": "Daily 3 Trips",
        "fare": 190
      }
    ]
  },
  {
    "id": "davanagere-cbs",
    "city": "Davanagere",
    "districtId": "davanagere",
    "districtName": "Davanagere",
    "region": "Central Karnataka",
    "kannadaCity": "ದಾವಣಗೆರೆ",
    "name": "Davanagere Central Bus Stand (KSRTC & NWKRTC)",
    "kannadaName": "ದಾವಣಗೆರೆ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಬೆಣ್ಣೆ ದೋಸೆ ನಗರ)",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ದಾವಣಗೆರೆ ವಿಭಾಗ)",
    "address": "PB Road, Near City Railway Station, Davanagere - 577002",
    "helplinePhone": "08192-272222",
    "enquiryCounter": "7760990520",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 20,
    "dailyDepartures": "820+ Departures",
    "facilities": [
      "24x7 Transit Lounge",
      "Benne Dosa Food Court",
      "Cloak Room",
      "EV Charging Station"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 5",
        "destinations": "Bengaluru, Tumakuru, Chitradurga",
        "serviceTypes": "EV Power Plus, Airavat, Rajahamsa"
      },
      {
        "platforms": "Platforms 6 - 10",
        "destinations": "Hubballi, Belagavi, Haveri",
        "serviceTypes": "Airavat, Rajahamsa, Express"
      },
      {
        "platforms": "Platforms 11 - 15",
        "destinations": "Hosapete, Koppal, Ballari",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 16 - 20",
        "destinations": "Shivamogga, Harihara, Honnali",
        "serviceTypes": "Sarige"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-DVG-01",
        "destination": "Bengaluru",
        "serviceType": "EV Power Plus",
        "operator": "KSRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Chitradurga, Tumakuru",
        "platform": "Platform 1",
        "frequency": "Hourly",
        "fare": 540
      },
      {
        "serviceNumber": "KS-DVG-02",
        "destination": "Hubballi",
        "serviceType": "EV Power Plus",
        "operator": "NWKRTC",
        "departureTime": "07:15 AM",
        "viaRoute": "Haveri",
        "platform": "Platform 6",
        "frequency": "Hourly",
        "fare": 230
      },
      {
        "serviceNumber": "KS-DVG-03",
        "destination": "Koppal",
        "serviceType": "Express",
        "operator": "KKRTC",
        "departureTime": "08:30 AM",
        "viaRoute": "Harapanahalli, Hosapete",
        "platform": "Platform 11",
        "frequency": "Daily 4 Trips",
        "fare": 210
      }
    ]
  },
  {
    "id": "raichur-cbs",
    "city": "Raichur",
    "districtId": "raichur",
    "districtName": "Raichur",
    "region": "Kalyana Karnataka",
    "kannadaCity": "ರಾಯಚೂರು",
    "name": "Raichur KKRTC Central Bus Stand",
    "kannadaName": "ರಾಯಚೂರು ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "KKRTC",
    "divisionFullName": "Kalyana Karnataka Road Transport Corporation (ರಾಯಚೂರು ವಿಭಾಗ)",
    "address": "Station Road, Raichur - 584101",
    "helplinePhone": "08532-235422",
    "enquiryCounter": "7760992120",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 16,
    "dailyDepartures": "530+ Services",
    "facilities": [
      "Waiting Hall",
      "Computerized Reservation",
      "Canteen",
      "Drinking Water"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Bengaluru, Mantralayam",
        "serviceTypes": "Airavat, Rajahamsa"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Kalaburagi, Yadgir, Shahapur",
        "serviceTypes": "Kalyana Sarige"
      },
      {
        "platforms": "Platforms 9 - 12",
        "destinations": "Koppal, Gangavathi, Sindhanur",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 13 - 16",
        "destinations": "Ballari, Hosapete, Hyderabad",
        "serviceTypes": "Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KK-RCH-01",
        "destination": "Koppal",
        "serviceType": "Express",
        "operator": "KKRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Manvi, Sindhanur, Gangavathi",
        "platform": "Platform 9",
        "frequency": "Hourly",
        "fare": 230
      },
      {
        "serviceNumber": "KK-RCH-02",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KKRTC",
        "departureTime": "09:30 PM",
        "viaRoute": "Mantralayam Road, Anantapur",
        "platform": "Platform 1",
        "frequency": "Daily Night Express",
        "fare": 850
      },
      {
        "serviceNumber": "KK-RCH-03",
        "destination": "Kalaburagi",
        "serviceType": "Kalyana Sarige",
        "operator": "KKRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Yadgir, Shahapur",
        "platform": "Platform 5",
        "frequency": "Every 30 Mins",
        "fare": 240
      }
    ]
  },
  {
    "id": "bidar-cbs",
    "city": "Bidar",
    "districtId": "bidar",
    "districtName": "Bidar",
    "region": "Kalyana Karnataka",
    "kannadaCity": "ಬೀದರ್",
    "name": "Bidar Central Bus Stand (KKRTC)",
    "kannadaName": "ಬೀದರ್ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಗುರುದ್ವಾರ ಮತ್ತು ಕೋಟೆ ಹೆಬ್ಬಾಗಿಲು)",
    "division": "KKRTC",
    "divisionFullName": "Kalyana Karnataka Road Transport Corporation (ಬೀದರ್ ವಿಭಾಗ)",
    "address": "Udgir Road, Near Ambedkar Circle, Bidar - 585401",
    "helplinePhone": "08482-226422",
    "enquiryCounter": "7760992220",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 14,
    "dailyDepartures": "420+ Services",
    "facilities": [
      "Bidar Fort & Gurdwara Desk",
      "Waiting Hall",
      "Computerized Reservation"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Kalaburagi, Humnabad",
        "serviceTypes": "Kalyana Sarige (Every 20 mins)"
      },
      {
        "platforms": "Platforms 5 - 7",
        "destinations": "Bengaluru (Airavat, Sleeper)",
        "serviceTypes": "Night Express"
      },
      {
        "platforms": "Platforms 8 - 10",
        "destinations": "Hyderabad, Basavakalyan",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 11 - 14",
        "destinations": "Koppal, Raichur, Vijayapura",
        "serviceTypes": "Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KK-BDR-01",
        "destination": "Kalaburagi",
        "serviceType": "Kalyana Sarige",
        "operator": "KKRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Humnabad",
        "platform": "Platform 1",
        "frequency": "Every 20 Mins",
        "fare": 180
      },
      {
        "serviceNumber": "KK-BDR-02",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KKRTC",
        "departureTime": "07:30 PM",
        "viaRoute": "Kalaburagi, Anantapur",
        "platform": "Platform 5",
        "frequency": "Daily Night Express",
        "fare": 1050
      },
      {
        "serviceNumber": "KK-BDR-03",
        "destination": "Koppal",
        "serviceType": "Express",
        "operator": "KKRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Humnabad, Kalaburagi, Kushtagi",
        "platform": "Platform 11",
        "frequency": "Daily 2 Trips",
        "fare": 490
      }
    ]
  },
  {
    "id": "yadgir-cbs",
    "city": "Yadgir",
    "districtId": "yadgir",
    "districtName": "Yadgir",
    "region": "Kalyana Karnataka",
    "kannadaCity": "ಯಾದಗಿರಿ",
    "name": "Yadgir KKRTC Bus Stand",
    "kannadaName": "ಯಾದಗಿರಿ ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "KKRTC",
    "divisionFullName": "Kalyana Karnataka Road Transport Corporation (ಯಾದಗಿರಿ ವಿಭಾಗ)",
    "address": "Chittapur Road, Yadgir - 585202",
    "helplinePhone": "08473-252422",
    "enquiryCounter": "7760992320",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 12,
    "dailyDepartures": "360+ Services",
    "facilities": [
      "Waiting Hall",
      "Reservation Counter",
      "Canteen"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Kalaburagi, Shahapur, Surpur",
        "serviceTypes": "Kalyana Sarige"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Raichur, Mantralayam",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 9 - 12",
        "destinations": "Bengaluru, Koppal",
        "serviceTypes": "Express, Sleeper"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KK-YDG-01",
        "destination": "Kalaburagi",
        "serviceType": "Kalyana Sarige",
        "operator": "KKRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Shahapur",
        "platform": "Platform 1",
        "frequency": "Every 30 Mins",
        "fare": 115
      },
      {
        "serviceNumber": "KK-YDG-02",
        "destination": "Koppal",
        "serviceType": "Express",
        "operator": "KKRTC",
        "departureTime": "08:30 AM",
        "viaRoute": "Surpur, Lingsugur, Kushtagi",
        "platform": "Platform 9",
        "frequency": "Daily 3 Trips",
        "fare": 280
      },
      {
        "serviceNumber": "KK-YDG-03",
        "destination": "Bengaluru",
        "serviceType": "Non-AC Sleeper",
        "operator": "KKRTC",
        "departureTime": "09:00 PM",
        "viaRoute": "Raichur, Guntakal",
        "platform": "Platform 10",
        "frequency": "Daily Night Express",
        "fare": 790
      }
    ]
  },
  {
    "id": "chamarajanagar-cbs",
    "city": "Chamarajanagar",
    "districtId": "chamarajanagar",
    "districtName": "Chamarajanagar",
    "region": "South Karnataka",
    "kannadaCity": "ಚಾಮರಾಜನಗರ",
    "name": "Chamarajanagar KSRTC Central Stand",
    "kannadaName": "ಚಾಮರಾಜನಗರ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಕೇಂದ್ರ ನಿಲ್ದಾಣ (ಬಂಡೀಪುರ ಹೆಬ್ಬಾಗಿಲು)",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಚಾಮರಾಜನಗರ ವಿಭಾಗ)",
    "address": "B.H. Road, Chamarajanagar - 571313",
    "helplinePhone": "08226-222224",
    "enquiryCounter": "7760991220",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 14,
    "dailyDepartures": "410+ Services",
    "facilities": [
      "Bandipur Safari & BR Hills Kiosk",
      "Waiting Hall",
      "Canteen"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Mysuru, Nanjangud",
        "serviceTypes": "Express (Every 15 Mins)"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Bengaluru (Via Kollegal & Kanakapura)",
        "serviceTypes": "Express, Rajahamsa"
      },
      {
        "platforms": "Platforms 9 - 11",
        "destinations": "Bandipur, Gundlupet, Ooty",
        "serviceTypes": "Wildlife Corridor Express"
      },
      {
        "platforms": "Platforms 12 - 14",
        "destinations": "BR Hills, Kollegal, Male Mahadeshwara Hills",
        "serviceTypes": "Sarige"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-CMN-01",
        "destination": "Mysuru",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "06:15 AM",
        "viaRoute": "Nanjangud",
        "platform": "Platform 1",
        "frequency": "Every 15 Mins",
        "fare": 95
      },
      {
        "serviceNumber": "KS-CMN-02",
        "destination": "Bengaluru",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Kollegal, Malavalli, Kanakapura",
        "platform": "Platform 5",
        "frequency": "Hourly",
        "fare": 340
      },
      {
        "serviceNumber": "KS-CMN-03",
        "destination": "Bandipur Tiger Reserve",
        "serviceType": "Wildlife Express",
        "operator": "KSRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Gundlupet",
        "platform": "Platform 9",
        "frequency": "Hourly",
        "fare": 85
      }
    ]
  },
  {
    "id": "ramanagara-cbs",
    "city": "Ramanagara",
    "districtId": "ramanagara",
    "districtName": "Ramanagara",
    "region": "South Karnataka",
    "kannadaCity": "ರಾಮನಗರ",
    "name": "Ramanagara KSRTC Bus Stand",
    "kannadaName": "ರಾಮನಗರ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ನಿಲ್ದಾಣ (ರೇಷ್ಮೆ ನಗರಿ)",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ರಾಮನಗರ ವಿಭಾಗ)",
    "address": "Old Bangalore-Mysore Road, Ramanagara - 562159",
    "helplinePhone": "080-27271224",
    "enquiryCounter": "7760990220",
    "operatingHours": "24 Hours Continuous Transit",
    "totalPlatforms": 12,
    "dailyDepartures": "590+ Services",
    "facilities": [
      "Silk Cocoon Market Transit Desk",
      "Waiting Hall",
      "Expressway Feeder"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Bengaluru (Majestic & Kengeri)",
        "serviceTypes": "EV Power Plus, Express"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Channapatna, Maddur, Mandya, Mysuru",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 9 - 12",
        "destinations": "Kanakapura, Magadi, Ramadevara Betta",
        "serviceTypes": "Sarige"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-RMN-01",
        "destination": "Bengaluru",
        "serviceType": "EV Power Plus",
        "operator": "KSRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Bidadi, Kengeri",
        "platform": "Platform 1",
        "frequency": "Every 15 Mins",
        "fare": 95
      },
      {
        "serviceNumber": "KS-RMN-02",
        "destination": "Mysuru",
        "serviceType": "EV Power Plus",
        "operator": "KSRTC",
        "departureTime": "07:15 AM",
        "viaRoute": "Channapatna, Mandya",
        "platform": "Platform 5",
        "frequency": "Every 15 Mins",
        "fare": 220
      }
    ]
  },
  {
    "id": "kolar-cbs",
    "city": "Kolar",
    "districtId": "kolar",
    "districtName": "Kolar",
    "region": "South Karnataka",
    "kannadaCity": "ಕೋಲಾರ",
    "name": "Kolar KSRTC Central Bus Stand",
    "kannadaName": "ಕೋಲಾರ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ (ಚಿನ್ನದ ನಾಡು)",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಕೋಲಾರ ವಿಭಾಗ)",
    "address": "MB Road, Near Clock Tower, Kolar - 563101",
    "helplinePhone": "08152-222422",
    "enquiryCounter": "7760990120",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 14,
    "dailyDepartures": "620+ Departures",
    "facilities": [
      "Kotilingeshwara Pilgrimage Counter",
      "Waiting Hall",
      "Express Kiosk"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Bengaluru (Majestic & KR Puram)",
        "serviceTypes": "Express (Every 10 Mins)"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Kotilingeshwara, Bangarapet, KGF",
        "serviceTypes": "Pilgrimage Shuttle"
      },
      {
        "platforms": "Platforms 9 - 11",
        "destinations": "Chikkaballapur, Srinivaspur, Mulbagal",
        "serviceTypes": "Sarige"
      },
      {
        "platforms": "Platforms 12 - 14",
        "destinations": "Tirupati, Chittoor, Chennai",
        "serviceTypes": "Inter-State Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-KLR-01",
        "destination": "Bengaluru",
        "serviceType": "Express Non-Stop",
        "operator": "KSRTC",
        "departureTime": "06:00 AM",
        "viaRoute": "Hosakote, KR Puram",
        "platform": "Platform 1",
        "frequency": "Every 10 Mins",
        "fare": 110
      },
      {
        "serviceNumber": "KS-KLR-02",
        "destination": "Kotilingeshwara",
        "serviceType": "Pilgrimage Shuttle",
        "operator": "KSRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Bangarapet",
        "platform": "Platform 5",
        "frequency": "Every 20 Mins",
        "fare": 45
      }
    ]
  },
  {
    "id": "chikkaballapur-cbs",
    "city": "Chikkaballapur",
    "districtId": "chikkaballapur",
    "districtName": "Chikkaballapur",
    "region": "South Karnataka",
    "kannadaCity": "ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
    "name": "Chikkaballapur KSRTC Bus Stand",
    "kannadaName": "ಚಿಕ್ಕಬಳ್ಳಾಪುರ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಚಿಕ್ಕಬಳ್ಳಾಪುರ ವಿಭಾಗ)",
    "address": "BB Road, Near DC Office, Chikkaballapur - 562101",
    "helplinePhone": "08156-272422",
    "enquiryCounter": "7760990140",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 12,
    "dailyDepartures": "450+ Services",
    "facilities": [
      "Nandi Hills Special Bus Counter",
      "Waiting Hall",
      "Snacks Kiosk"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Bengaluru (Majestic & Hebbal)",
        "serviceTypes": "Express (Every 15 Mins)"
      },
      {
        "platforms": "Platforms 5 - 7",
        "destinations": "Nandi Hills, Muddenahalli, Bhoga Nandeeshwara",
        "serviceTypes": "Tourist Shuttle"
      },
      {
        "platforms": "Platforms 8 - 12",
        "destinations": "Bagepalli, Gowribidanur, Kolar",
        "serviceTypes": "Sarige"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-CKB-01",
        "destination": "Bengaluru",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "06:15 AM",
        "viaRoute": "Devanahalli, Hebbal",
        "platform": "Platform 1",
        "frequency": "Every 15 Mins",
        "fare": 95
      },
      {
        "serviceNumber": "KS-CKB-02",
        "destination": "Nandi Hills",
        "serviceType": "Tourist Shuttle",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Nandi Cross",
        "platform": "Platform 5",
        "frequency": "Hourly",
        "fare": 50
      }
    ]
  },
  {
    "id": "karwar-cbs",
    "city": "Uttara Kannada (Karwar)",
    "districtId": "uttara-kannada",
    "districtName": "Uttara Kannada",
    "region": "Coastal Karnataka",
    "kannadaCity": "ಕಾರವಾರ (ಉತ್ತರ ಕನ್ನಡ)",
    "name": "Karwar Central Bus Stand & Sirsi Bus Stand (NWKRTC)",
    "kannadaName": "ಕಾರವಾರ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ ಮತ್ತು ಶಿರಸಿ ನಿಲ್ದಾಣ",
    "division": "NWKRTC",
    "divisionFullName": "North Western Karnataka Road Transport Corporation (ಉತ್ತರ ಕನ್ನಡ ವಿಭಾಗ)",
    "address": "NH 66 Coastal Road, Near London Bridge, Karwar - 581301",
    "helplinePhone": "08382-226322 / 08384-226244",
    "enquiryCounter": "7760991660 (NWKRTC Karwar Division)",
    "operatingHours": "24 Hours Open",
    "totalPlatforms": 16,
    "dailyDepartures": "490+ Services",
    "facilities": [
      "Gokarna & Murudeshwara Coastal Tour Desk",
      "Waiting Hall",
      "Canteen"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Gokarna, Kumta, Honnavar, Murudeshwara",
        "serviceTypes": "Coastal Express"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Hubballi, Dharwad, Belagavi",
        "serviceTypes": "Ghat Express, Rajahamsa"
      },
      {
        "platforms": "Platforms 9 - 12",
        "destinations": "Mangaluru, Udupi (NH 66)",
        "serviceTypes": "Express"
      },
      {
        "platforms": "Platforms 13 - 16",
        "destinations": "Bengaluru (Airavat, Sleeper)",
        "serviceTypes": "Night Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "NW-KRW-01",
        "destination": "Gokarna",
        "serviceType": "Coastal Express",
        "operator": "NWKRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Ankola",
        "platform": "Platform 1",
        "frequency": "Every 30 Mins",
        "fare": 85
      },
      {
        "serviceNumber": "NW-KRW-02",
        "destination": "Hubballi",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "07:15 AM",
        "viaRoute": "Ankola, Yellapur",
        "platform": "Platform 5",
        "frequency": "Hourly",
        "fare": 270
      },
      {
        "serviceNumber": "NW-KRW-03",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "08:30 PM",
        "viaRoute": "Sirsi, Haveri, Tumakuru",
        "platform": "Platform 13",
        "frequency": "Daily Night Express",
        "fare": 920
      }
    ]
  },
  {
    "id": "bengaluru-rural-cbs",
    "city": "Bengaluru Rural",
    "districtId": "bengaluru-rural",
    "districtName": "Bengaluru Rural",
    "region": "South Karnataka",
    "kannadaCity": "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ",
    "name": "Devanahalli / Doddaballapur KSRTC Bus Stand",
    "kannadaName": "ದೇವನಹಳ್ಳಿ ಮತ್ತು ದೊಡ್ಡಬಳ್ಳಾಪುರ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ನಿಲ್ದಾಣ",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ ವಿಭಾಗ)",
    "address": "NH 44 Airport Corridor, Devanahalli - 562110",
    "helplinePhone": "080-27682224",
    "enquiryCounter": "7760990150",
    "operatingHours": "24 Hours Continuous Service",
    "totalPlatforms": 12,
    "dailyDepartures": "420+ Services",
    "facilities": [
      "KIA Airport Vayu Vajra Shuttle Desk",
      "Devanahalli Fort Kiosk",
      "Waiting Hall"
    ],
    "platformBays": [
      {
        "platforms": "Platforms 1 - 4",
        "destinations": "Bengaluru City (Majestic, Hebbal)",
        "serviceTypes": "Flybus, Express"
      },
      {
        "platforms": "Platforms 5 - 8",
        "destinations": "Chikkaballapur, Kolar, Doddaballapur",
        "serviceTypes": "Sarige"
      },
      {
        "platforms": "Platforms 9 - 12",
        "destinations": "Tumakuru, Dobbaspet",
        "serviceTypes": "Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-BLR-R1",
        "destination": "Bengaluru (Majestic)",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "06:15 AM",
        "viaRoute": "Hebbal",
        "platform": "Platform 1",
        "frequency": "Every 15 Mins",
        "fare": 65
      },
      {
        "serviceNumber": "KS-BLR-R2",
        "destination": "Chikkaballapur",
        "serviceType": "Express",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "NH 44",
        "platform": "Platform 5",
        "frequency": "Every 20 Mins",
        "fare": 45
      }
    ]
  }
];

export const getBusStandByCity = (city: string): BusStandInfo | undefined => {
  return BUS_STANDS_DIRECTORY.find(bs => 
    bs.city.toLowerCase() === city.toLowerCase() || 
    city.toLowerCase().includes(bs.city.toLowerCase()) ||
    bs.city.toLowerCase().includes(city.toLowerCase())
  );
};

export const getBusStandByDistrict = (districtId: string): BusStandInfo | undefined => {
  return BUS_STANDS_DIRECTORY.find(bs => 
    bs.districtId.toLowerCase() === districtId.toLowerCase()
  );
};

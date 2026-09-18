import type { TourPackage } from './types';

export const PACKAGES_DATA: TourPackage[] = [
  {
    "id": "coastal-karnataka-odyssey",
    "name": "Coastal Karnataka Odyssey",
    "kannadaName": "ಕರಾವಳಿ ಕರ್ನಾಟಕ ಪ್ರವಾಸ",
    "districtsCovered": [
      "udupi",
      "dakshina-kannada",
      "uttara-kannada"
    ],
    "districtNames": [
      "Dakshina Kannada",
      "Udupi",
      "Uttara Kannada"
    ],
    "region": "Coastal Karnataka",
    "themes": [
      "Coast",
      "Spiritual",
      "Food",
      "Nature"
    ],
    "durationDays": 5,
    "durationNights": 4,
    "destinationsCount": 9,
    "startingPrice": 14999,
    "travelStyle": "Standard",
    "highlights": [
      "St. Mary's Basalt Islands",
      "Gokarna Om Beach",
      "Murudeshwara Giant Shiva",
      "Mangalore Ghee Roast Trail",
      "Kaup Lighthouse"
    ],
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "stayIncluded": true,
    "transportIncluded": true,
    "routeMapPoints": [
      {
        "name": "Mangaluru",
        "type": "start"
      },
      {
        "name": "Panambur Beach",
        "type": "attraction"
      },
      {
        "name": "Udupi Sri Krishna Matha",
        "type": "stay"
      },
      {
        "name": "St. Mary's Island",
        "type": "attraction"
      },
      {
        "name": "Murudeshwara",
        "type": "attraction"
      },
      {
        "name": "Gokarna Om Beach",
        "type": "stay"
      },
      {
        "name": "Karwar",
        "type": "end"
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Mangaluru Arrival, Temples & Coastal Sunset",
        "districtId": "dakshina-kannada",
        "districtName": "Dakshina Kannada",
        "stayLocation": "Yaatri Niwaas Mangaluru Port View",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Kudroli Temple",
            "description": "Darshan at ornate temple and breakfast.",
            "location": "Mangaluru",
            "destinationId": "dakshina-kannada"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Moodabidri 1000 Pillar Basadi",
            "description": "Explore carved Jain monolith pillars.",
            "location": "Moodabidri",
            "destinationId": "moodabidri-1000-pillar"
          },
          {
            "timeOfDay": "Evening",
            "title": "Panambur Beach Sunset",
            "description": "Sunset walk and Ghee Roast dinner.",
            "location": "Panambur",
            "destinationId": "panambur-beach"
          },
          {
            "timeOfDay": "Night",
            "title": "Coastal Rest",
            "description": "Overnight stay at Yaatri Niwaas.",
            "location": "Mangaluru"
          }
        ]
      },
      {
        "dayNumber": 2,
        "title": "Sacred Udupi, Krishna Matha & Kaup Lighthouse",
        "districtId": "udupi",
        "districtName": "Udupi",
        "stayLocation": "Yaatri Niwaas Udupi Temple Gateway",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Sri Krishna Matha Darshan",
            "description": "Witness deity through Kanakana Kindi window.",
            "location": "Udupi",
            "destinationId": "udupi-sri-krishna-matha"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Udupi Banana Leaf Lunch",
            "description": "Traditional satvik feast in temple courtyard.",
            "location": "Udupi"
          },
          {
            "timeOfDay": "Evening",
            "title": "Kaup Lighthouse Sunset",
            "description": "Climb 1901 stone lighthouse stairs for Arabian Sea view.",
            "location": "Kaup",
            "destinationId": "kaup-beach-lighthouse"
          },
          {
            "timeOfDay": "Night",
            "title": "Yakshagana Show",
            "description": "Traditional theatrical performance.",
            "location": "Udupi"
          }
        ]
      },
      {
        "dayNumber": 3,
        "title": "St. Mary's Basalt Islands & Murudeshwara",
        "districtId": "udupi",
        "districtName": "Udupi",
        "stayLocation": "Yaatri Niwaas Murudeshwara Sea Breeze",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "St. Mary's Island Ferry",
            "description": "Walk among hexagonal columnar basalt rocks.",
            "location": "Malpe",
            "destinationId": "st-mary-island"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Scenic NH 66 Coastal Highway",
            "description": "Drive past Maravanthe where sea meets river.",
            "location": "Maravanthe"
          },
          {
            "timeOfDay": "Evening",
            "title": "Murudeshwara Peninsula Temple",
            "description": "Marvel at 123-foot Shiva statue and Gopuram.",
            "location": "Murudeshwara",
            "destinationId": "murudeshwara-temple"
          },
          {
            "timeOfDay": "Night",
            "title": "Seaside Dinner",
            "description": "Overnight stay beside the Arabian Sea.",
            "location": "Murudeshwara"
          }
        ]
      },
      {
        "dayNumber": 4,
        "title": "Gokarna Pilgrimage & Om Beach Trail",
        "districtId": "uttara-kannada",
        "districtName": "Uttara Kannada",
        "stayLocation": "Yaatri Niwaas Gokarna Cliff Haven",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Mahabaleshwar Atmalinga",
            "description": "Holy darshan at Gokarna shrine.",
            "location": "Gokarna",
            "destinationId": "gokarna-om-beach"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Om Beach Cafe Lunch",
            "description": "Relax overlooking the natural Om-shaped bay.",
            "location": "Om Beach"
          },
          {
            "timeOfDay": "Evening",
            "title": "Kudle Beach Sunset Trek",
            "description": "Walk across rocky coastal trails.",
            "location": "Gokarna",
            "destinationId": "gokarna-om-beach"
          },
          {
            "timeOfDay": "Night",
            "title": "Campfire Dinner",
            "description": "Coastal hospitality at Yaatri Niwaas.",
            "location": "Gokarna"
          }
        ]
      },
      {
        "dayNumber": 5,
        "title": "Mirjan Fort & Departure",
        "districtId": "uttara-kannada",
        "districtName": "Uttara Kannada",
        "stayLocation": "Tour Concludes",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Mirjan Laterite Fortress",
            "description": "Explore historical battlements of Queen Chennabhairadevi.",
            "location": "Mirjan"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Karwar Shopping & Departure",
            "description": "Spices and cashew shopping before transfer.",
            "location": "Karwar"
          }
        ]
      }
    ],
    "inclusions": [
      "4 Nights AC Accommodation at Yaatri Niwaas",
      "Dedicated AC Transport throughout circuit",
      "All Breakfasts & 2 Traditional Feasts",
      "Ferry tickets for St. Mary's Island",
      "Local Guides"
    ],
    "exclusions": [
      "Airfare/Train tickets",
      "Personal shopping"
    ]
  },
  {
    "id": "great-hoysala-royal-mysore",
    "name": "Great Hoysala & Royal Mysore Circuit",
    "kannadaName": "ಹೊಯ್ಸಳ ವೈಭವ ಮತ್ತು ರಾಜಮನೆತನ ಮೈಸೂರು ಪ್ರವಾಸ",
    "districtsCovered": [
      "hassan",
      "mysuru",
      "mandya"
    ],
    "districtNames": [
      "Hassan",
      "Mysuru",
      "Mandya"
    ],
    "region": "South Karnataka",
    "themes": [
      "Heritage",
      "Culture",
      "Spiritual",
      "Food"
    ],
    "durationDays": 4,
    "durationNights": 3,
    "destinationsCount": 8,
    "startingPrice": 12999,
    "travelStyle": "Premium",
    "highlights": [
      "UNESCO Belur & Halebeedu",
      "Shravanabelagola 57ft Monolith",
      "Mysuru Palace Illumination",
      "Somanathapura Hoysala Temple",
      "Srirangapatna Daria Daulat"
    ],
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    "stayIncluded": true,
    "transportIncluded": true,
    "routeMapPoints": [
      {
        "name": "Bengaluru",
        "type": "start"
      },
      {
        "name": "Shravanabelagola",
        "type": "attraction"
      },
      {
        "name": "Hassan",
        "type": "stay"
      },
      {
        "name": "Belur & Halebeedu",
        "type": "attraction"
      },
      {
        "name": "Mysuru",
        "type": "stay"
      },
      {
        "name": "Somanathapura",
        "type": "attraction"
      },
      {
        "name": "Srirangapatna",
        "type": "attraction"
      },
      {
        "name": "Bengaluru",
        "type": "end"
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Ascent of Vindhyagiri Monolith & Hassan Arrival",
        "districtId": "hassan",
        "districtName": "Hassan",
        "stayLocation": "Yaatri Niwaas Heritage Hassan",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Drive from Bengaluru to Shravanabelagola",
            "description": "Expressway travel on NH 75 with breakfast stop.",
            "location": "Channarayapatna"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Shravanabelagola Gommateshwara Climb",
            "description": "Climb stone steps to behold 57-foot Bahubali monolith.",
            "location": "Shravanabelagola",
            "destinationId": "shravanabelagola-gommateshwara"
          },
          {
            "timeOfDay": "Evening",
            "title": "Shettihalli Church Sunset",
            "description": "Gothic church ruins reflected in the Hemavathi reservoir.",
            "location": "Shettihalli",
            "destinationId": "shettihalli-rosary-church"
          },
          {
            "timeOfDay": "Night",
            "title": "Hassan Dinner",
            "description": "Traditional Akki Rotti feast at Yaatri Niwaas.",
            "location": "Hassan"
          }
        ]
      },
      {
        "dayNumber": 2,
        "title": "UNESCO Masterpieces of Belur & Halebeedu",
        "districtId": "hassan",
        "districtName": "Hassan",
        "stayLocation": "Yaatri Niwaas Royal Mysuru",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Belur Chennakeshava Temple",
            "description": "Guided exploration of 42 Madanika dancing figures.",
            "location": "Belur",
            "destinationId": "belur-chennakeshava"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Halebeedu Hoysaleshwara Temple",
            "description": "Continuous animal friezes carved on outer temple plinth.",
            "location": "Halebeedu",
            "destinationId": "halebeedu-hoysaleshwara"
          },
          {
            "timeOfDay": "Evening",
            "title": "Scenic Transit to Royal Mysuru",
            "description": "Check-in at Yaatri Niwaas Mysuru near Palace grounds.",
            "location": "Mysuru"
          },
          {
            "timeOfDay": "Night",
            "title": "Mysuru Masala Dosa Feast",
            "description": "Dine at heritage restaurants in Mysuru.",
            "location": "Mysuru"
          }
        ]
      },
      {
        "dayNumber": 3,
        "title": "Grand Mysuru Palace & Chamundi Hills",
        "districtId": "mysuru",
        "districtName": "Mysuru",
        "stayLocation": "Yaatri Niwaas Royal Mysuru",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Chamundi Hills & Nandi Bull",
            "description": "Hilltop drive and temple darshan overlooking city.",
            "location": "Chamundi Hills",
            "destinationId": "chamundi-hills"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Mysuru Royal Palace Tour",
            "description": "Explore stained-glass durbar halls and royal armory.",
            "location": "Mysuru Palace",
            "destinationId": "mysuru-palace"
          },
          {
            "timeOfDay": "Evening",
            "title": "Devaraja Market Walk",
            "description": "Stroll through spice and jasmine market corridors.",
            "location": "Devaraja Market"
          },
          {
            "timeOfDay": "Night",
            "title": "Grand Palace Illumination",
            "description": "Witness 97,000 glowing bulbs illuminating palace facade.",
            "location": "Mysuru Palace",
            "destinationId": "mysuru-palace"
          }
        ]
      },
      {
        "dayNumber": 4,
        "title": "Somanathapura Hoysala Gem & Srirangapatna",
        "districtId": "mandya",
        "districtName": "Mandya",
        "stayLocation": "Tour Concludes in Bengaluru",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Somanathapura Keshava Temple",
            "description": "Star-shaped trikuta UNESCO Hoysala temple.",
            "location": "Somanathapura",
            "destinationId": "somanathapura-temple"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Srirangapatna Daria Daulat",
            "description": "Visit Tipu Sultan teak summer palace.",
            "location": "Srirangapatna"
          },
          {
            "timeOfDay": "Evening",
            "title": "Maddur Vada Stop & Return to Bengaluru",
            "description": "Enjoy hot Maddur Vadas before reaching Bengaluru.",
            "location": "Maddur"
          }
        ]
      }
    ],
    "inclusions": [
      "3 Nights Premium Stay at Yaatri Niwaas properties",
      "All inter-city transfers in AC Sedan",
      "Daily Breakfasts & Dinners",
      "Historian Guides at Belur and Halebeedu",
      "Monument entrance tickets"
    ],
    "exclusions": [
      "Personal shopping",
      "Optional activities"
    ]
  },
  {
    "id": "chalukya-vijayanagara-heritage",
    "name": "Chalukya & Vijayanagara Golden Heritage",
    "kannadaName": "ಚಾಲುಕ್ಯ ಮತ್ತು ವಿಜಯನಗರ ಪರಂಪರೆ ಯಾತ್ರೆ",
    "districtsCovered": [
      "bagalkote",
      "vijayanagara",
      "gadag",
      "vijayapura"
    ],
    "districtNames": [
      "Bagalkote",
      "Vijayanagara",
      "Gadag",
      "Vijayapura"
    ],
    "region": "North Karnataka",
    "themes": [
      "Heritage",
      "Culture",
      "Spiritual",
      "Photography"
    ],
    "durationDays": 5,
    "durationNights": 4,
    "destinationsCount": 10,
    "startingPrice": 16999,
    "travelStyle": "Luxury Heritage",
    "highlights": [
      "Hampi UNESCO World Heritage",
      "Vittala Musical Stone Chariot",
      "Badami Cave Temples",
      "Pattadakal UNESCO Temples",
      "Gol Gumbaz Whispering Gallery"
    ],
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    "stayIncluded": true,
    "transportIncluded": true,
    "routeMapPoints": [
      {
        "name": "Hubballi",
        "type": "start"
      },
      {
        "name": "Lakkundi",
        "type": "attraction"
      },
      {
        "name": "Badami Caves",
        "type": "stay"
      },
      {
        "name": "Pattadakal & Aihole",
        "type": "attraction"
      },
      {
        "name": "Vijayapura Gol Gumbaz",
        "type": "stay"
      },
      {
        "name": "Hampi",
        "type": "stay"
      },
      {
        "name": "Hosapete / Hubballi",
        "type": "end"
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Hubballi Arrival, Lakkundi & Badami Caves",
        "districtId": "bagalkote",
        "districtName": "Bagalkote",
        "stayLocation": "Yaatri Niwaas Badami Heritage Oasis",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Hubballi Pickup & Transit",
            "description": "Departure towards the Chalukyan heartland.",
            "location": "Hubballi"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Lakkundi Stepwells",
            "description": "Inspect ancient stepped wells in Gadag.",
            "location": "Lakkundi",
            "destinationId": "lakkundi-stepwells"
          },
          {
            "timeOfDay": "Evening",
            "title": "Badami Agastya Lake Sunset",
            "description": "Sunset views across red sandstone cliffs.",
            "location": "Badami",
            "destinationId": "badami-caves"
          },
          {
            "timeOfDay": "Night",
            "title": "Jolada Rotti Feast",
            "description": "Jowar rotti with yennegai and shenga chutney.",
            "location": "Badami"
          }
        ]
      },
      {
        "dayNumber": 2,
        "title": "Badami Caves, Pattadakal & Aihole",
        "districtId": "bagalkote",
        "districtName": "Bagalkote",
        "stayLocation": "Yaatri Niwaas Badami Heritage Oasis",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Rock-Cut Badami Caves",
            "description": "Caves 1-4 dedicated to Nataraja, Vishnu and Jain Tirthankaras.",
            "location": "Badami",
            "destinationId": "badami-caves"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Pattadakal UNESCO Temples",
            "description": "8th-century Virupaksha and Mallikarjuna shrines.",
            "location": "Pattadakal",
            "destinationId": "pattadakal-monuments"
          },
          {
            "timeOfDay": "Evening",
            "title": "Aihole Durga Temple",
            "description": "Walk through cradle of temple architecture.",
            "location": "Aihole",
            "destinationId": "aihole-complex"
          },
          {
            "timeOfDay": "Night",
            "title": "Rest & Relaxation",
            "description": "Cultural evening at Yaatri Niwaas.",
            "location": "Badami"
          }
        ]
      },
      {
        "dayNumber": 3,
        "title": "Vijayapura Gol Gumbaz Whispering Gallery",
        "districtId": "vijayapura",
        "districtName": "Vijayapura",
        "stayLocation": "Yaatri Niwaas Vijayapura Citadel",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Gol Gumbaz Whispering Dome",
            "description": "Experience 11-time acoustic echo in second largest dome.",
            "location": "Vijayapura",
            "destinationId": "gol-gumbaz"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Ibrahim Rouza Mausoleum",
            "description": "Admire delicate stone jaalis of Taj of the South.",
            "location": "Vijayapura"
          },
          {
            "timeOfDay": "Evening",
            "title": "Bara Kaman & Cannon",
            "description": "Inspect 55-ton bronze cannon.",
            "location": "Vijayapura"
          },
          {
            "timeOfDay": "Night",
            "title": "Shenga Holige Dinner",
            "description": "Traditional cuisine at Yaatri Niwaas.",
            "location": "Vijayapura"
          }
        ]
      },
      {
        "dayNumber": 4,
        "title": "Hampi UNESCO World Heritage & Virupaksha",
        "districtId": "vijayanagara",
        "districtName": "Vijayanagara",
        "stayLocation": "Yaatri Niwaas Hampi UNESCO Village",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Transit to Hampi",
            "description": "Scenic drive into Vijayanagara district.",
            "location": "Hosapete"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Virupaksha Temple",
            "description": "Ancient active 7th-century temple and elephant blessings.",
            "location": "Hampi",
            "destinationId": "virupaksha-temple"
          },
          {
            "timeOfDay": "Evening",
            "title": "Hemakuta Hill Sunset",
            "description": "Sunset views over boulder valley.",
            "location": "Hampi"
          },
          {
            "timeOfDay": "Night",
            "title": "Vijayanagara Thali",
            "description": "Royal dinner at Yaatri Niwaas.",
            "location": "Hampi"
          }
        ]
      },
      {
        "dayNumber": 5,
        "title": "Vittala Temple Stone Chariot & Departure",
        "districtId": "vijayanagara",
        "districtName": "Vijayanagara",
        "stayLocation": "Tour Concludes",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Vittala Temple Stone Chariot",
            "description": "Behold the iconic Stone Chariot and musical pillars.",
            "location": "Hampi",
            "destinationId": "vittala-stone-chariot"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Tungabhadra Dam & Transfer",
            "description": "Drop at Hosapete / Hubballi.",
            "location": "Hosapete",
            "destinationId": "tungabhadra-dam"
          }
        ]
      }
    ],
    "inclusions": [
      "4 Nights Heritage Stay at Yaatri Niwaas",
      "AC Transport throughout",
      "All Meals",
      "ASI Passes",
      "Guides"
    ],
    "exclusions": [
      "Airfare/Train tickets"
    ]
  },
  {
    "id": "mysuru-royal-heritage-escape",
    "name": "Mysuru Royal Heritage Escape",
    "kannadaName": "ಮೈಸೂರು ಅರಮನೆ ನಗರಿ ಪ್ರವಾಸ",
    "districtsCovered": [
      "mysuru"
    ],
    "districtNames": [
      "Mysuru"
    ],
    "region": "South Karnataka",
    "themes": [
      "Heritage",
      "Culture",
      "Food"
    ],
    "durationDays": 2,
    "durationNights": 1,
    "destinationsCount": 5,
    "startingPrice": 5999,
    "travelStyle": "Standard",
    "highlights": [
      "Mysuru Palace Audio Tour",
      "Chamundi Hills Sunrise",
      "Somanathapura UNESCO Temple",
      "Devaraja Market Walk",
      "Authentic Mysore Pak"
    ],
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "stayIncluded": true,
    "transportIncluded": true,
    "routeMapPoints": [
      {
        "name": "Bengaluru / Mysuru",
        "type": "start"
      },
      {
        "name": "Chamundi Hills",
        "type": "attraction"
      },
      {
        "name": "Mysuru Palace",
        "type": "stay"
      },
      {
        "name": "Somanathapura",
        "type": "attraction"
      },
      {
        "name": "Mysuru / Bengaluru",
        "type": "end"
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Palace Splendor & Evening Illumination",
        "districtId": "mysuru",
        "districtName": "Mysuru",
        "stayLocation": "Yaatri Niwaas Royal Mysuru",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Chamundi Hills Darshan",
            "description": "Summit views and monolithic Nandi bull.",
            "location": "Chamundi Hills",
            "destinationId": "chamundi-hills"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Mysuru Palace Tour",
            "description": "Explore golden durbar hall and armory.",
            "location": "Mysuru Palace",
            "destinationId": "mysuru-palace"
          },
          {
            "timeOfDay": "Evening",
            "title": "Devaraja Market Walk",
            "description": "Sample original Mysore Pak.",
            "location": "Devaraja Market"
          },
          {
            "timeOfDay": "Night",
            "title": "Palace Illumination",
            "description": "Behold 97,000 glowing bulbs.",
            "location": "Mysuru"
          }
        ]
      },
      {
        "dayNumber": 2,
        "title": "Somanathapura Hoysala Wonder & Return",
        "districtId": "mysuru",
        "districtName": "Mysuru",
        "stayLocation": "Tour Concludes",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Somanathapura Keshava Temple",
            "description": "Star-shaped trikuta UNESCO Hoysala temple.",
            "location": "Somanathapura",
            "destinationId": "somanathapura-temple"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Silk Shopping & Return",
            "description": "Mysore silk emporium visit before departure.",
            "location": "Mysuru"
          }
        ]
      }
    ],
    "inclusions": [
      "1 Night stay at Yaatri Niwaas Mysuru",
      "AC Transport",
      "Breakfast & Dinner",
      "Entry tickets"
    ],
    "exclusions": [
      "Shopping & tips"
    ]
  },
  {
    "id": "hampi-time-travel-journey",
    "name": "Hampi Vijayanagara Time Travel",
    "kannadaName": "ಹಂಪಿ ವಿಜಯನಗರ ಕಾಲಯಾತ್ರೆ",
    "districtsCovered": [
      "vijayanagara"
    ],
    "districtNames": [
      "Vijayanagara"
    ],
    "region": "North Karnataka",
    "themes": [
      "Heritage",
      "Spiritual",
      "Photography"
    ],
    "durationDays": 3,
    "durationNights": 2,
    "destinationsCount": 6,
    "startingPrice": 8999,
    "travelStyle": "Standard",
    "highlights": [
      "Stone Chariot & Musical Pillars",
      "Virupaksha 7th-Century Temple",
      "Matanga Hill Sunrise",
      "Tungabhadra Coracle Ride",
      "Royal Enclave"
    ],
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    "stayIncluded": true,
    "transportIncluded": true,
    "routeMapPoints": [
      {
        "name": "Hosapete Junction",
        "type": "start"
      },
      {
        "name": "Virupaksha Temple",
        "type": "attraction"
      },
      {
        "name": "Hampi UNESCO Village",
        "type": "stay"
      },
      {
        "name": "Vittala Stone Chariot",
        "type": "attraction"
      },
      {
        "name": "Tungabhadra Dam",
        "type": "attraction"
      },
      {
        "name": "Hosapete",
        "type": "end"
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Sacred Hampi & Hemakuta Sunset",
        "districtId": "vijayanagara",
        "districtName": "Vijayanagara",
        "stayLocation": "Yaatri Niwaas Hampi UNESCO Village",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Hosapete Pickup & Check-in",
            "description": "Arrival at Yaatri Niwaas with welcome drink.",
            "location": "Hampi"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Virupaksha Temple",
            "description": "Unbroken worship shrine and elephant blessings.",
            "location": "Virupaksha",
            "destinationId": "virupaksha-temple"
          },
          {
            "timeOfDay": "Evening",
            "title": "Hemakuta Hill Sunset",
            "description": "Golden sunset views over rock temples.",
            "location": "Hemakuta Hill"
          },
          {
            "timeOfDay": "Night",
            "title": "Jolada Rotti Feast",
            "description": "Dinner at Yaatri Niwaas.",
            "location": "Hampi"
          }
        ]
      },
      {
        "dayNumber": 2,
        "title": "Vittala Temple, Stone Chariot & Royal Center",
        "districtId": "vijayanagara",
        "districtName": "Vijayanagara",
        "stayLocation": "Yaatri Niwaas Hampi UNESCO Village",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Vittala Temple & Iconic Stone Chariot",
            "description": "Marvel at monolithic chariot and musical pillars.",
            "location": "Vittala Temple",
            "destinationId": "vittala-stone-chariot"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Royal Enclave & Stepped Tank",
            "description": "Queen Bath, Lotus Mahal, and Pushkarini.",
            "location": "Royal Center"
          },
          {
            "timeOfDay": "Evening",
            "title": "Tungabhadra Coracle Ride",
            "description": "Boat ride along boulder canyon waterways.",
            "location": "Tungabhadra"
          },
          {
            "timeOfDay": "Night",
            "title": "Campfire & Stargazing",
            "description": "Storytelling session.",
            "location": "Hampi"
          }
        ]
      },
      {
        "dayNumber": 3,
        "title": "Matanga Hill Sunrise & Tungabhadra Dam",
        "districtId": "vijayanagara",
        "districtName": "Vijayanagara",
        "stayLocation": "Tour Concludes",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Matanga Hill Dawn Trek",
            "description": "360-degree panorama of archaeological valley.",
            "location": "Matanga Hill"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Tungabhadra Dam & Departure",
            "description": "Garden visit and drop at Hosapete station.",
            "location": "Hosapete",
            "destinationId": "tungabhadra-dam"
          }
        ]
      }
    ],
    "inclusions": [
      "2 Nights Stay at Yaatri Niwaas Hampi",
      "Sightseeing Vehicle",
      "Daily Breakfasts & Dinners",
      "ASI Passes",
      "Hampi Guide"
    ],
    "exclusions": [
      "Coracle boat ride",
      "Personal shopping"
    ]
  },
  {
    "id": "bengaluru-heritage-silk-trail",
    "name": "Bengaluru Heritage & Silk Trail",
    "kannadaName": "ಬೆಂಗಳೂರು ರೇಷ್ಮೆ ಮತ್ತು ಪರಂಪರೆ ಪ್ರವಾಸ",
    "districtsCovered": [
      "bengaluru-urban",
      "bengaluru-rural",
      "ramanagara",
      "chikkaballapur",
      "kolar"
    ],
    "districtNames": [
      "Bengaluru Urban",
      "Bengaluru Rural",
      "Ramanagara",
      "Chikkaballapur",
      "Kolar"
    ],
    "region": "Bengaluru",
    "themes": [
      "Heritage",
      "Culture",
      "Adventure",
      "Food"
    ],
    "durationDays": 3,
    "durationNights": 2,
    "destinationsCount": 7,
    "startingPrice": 7999,
    "travelStyle": "Standard",
    "highlights": [
      "Bengaluru Palace",
      "Lalbagh Glass House",
      "Ramadevara Betta Sholay Rocks",
      "Channapatna Wooden Toy Village",
      "Nandi Hills Sunrise",
      "Kotilingeshwara Temple"
    ],
    "image": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    "stayIncluded": true,
    "transportIncluded": true,
    "routeMapPoints": [
      {
        "name": "Bengaluru MG Road",
        "type": "start"
      },
      {
        "name": "Lalbagh & Palace",
        "type": "attraction"
      },
      {
        "name": "Ramanagara Janapada Loka",
        "type": "stay"
      },
      {
        "name": "Channapatna Toys",
        "type": "attraction"
      },
      {
        "name": "Nandi Hills",
        "type": "stay"
      },
      {
        "name": "Kotilingeshwara Kolar",
        "type": "attraction"
      },
      {
        "name": "Bengaluru",
        "type": "end"
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Garden City Palaces & Folk Art",
        "districtId": "bengaluru-urban",
        "districtName": "Bengaluru Urban",
        "stayLocation": "Yaatri Niwaas Ramanagara Silk Valley",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Lalbagh Botanical Garden",
            "description": "Morning walk among century-old trees and Glass House.",
            "location": "Lalbagh",
            "destinationId": "lalbagh-botanical-garden"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Bengaluru Royal Palace",
            "description": "Tudor-style royal halls and art galleries.",
            "location": "Palace Grounds",
            "destinationId": "bangalore-palace"
          },
          {
            "timeOfDay": "Evening",
            "title": "Janapada Loka Folk Museum",
            "description": "Rural Karnataka folk art and music demonstration.",
            "location": "Ramanagara",
            "destinationId": "janapada-loka"
          },
          {
            "timeOfDay": "Night",
            "title": "Thatte Idli & Ragi Mudde Dinner",
            "description": "Authentic regional dinner.",
            "location": "Ramanagara"
          }
        ]
      },
      {
        "dayNumber": 2,
        "title": "Sholay Granite Boulders & Nandi Hills Mist",
        "districtId": "chikkaballapur",
        "districtName": "Chikkaballapur",
        "stayLocation": "Yaatri Niwaas Nandi Cloud Heights",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Ramadevara Betta Hike",
            "description": "Explore the Sholay movie rocks and vulture sanctuary.",
            "location": "Ramanagara",
            "destinationId": "ramadevara-betta"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Channapatna Toy Making Workshop",
            "description": "Watch master craftsmen turn ivory-wood into non-toxic toys.",
            "location": "Channapatna"
          },
          {
            "timeOfDay": "Evening",
            "title": "Bhoga Nandeeshwara Temple",
            "description": "Thousand-year-old stepped pushkarini and Dravidian mandapas.",
            "location": "Nandi Village",
            "destinationId": "bhoga-nandeeshwara"
          },
          {
            "timeOfDay": "Night",
            "title": "Misty Dinner at Nandi Foothills",
            "description": "Relax in the cool highland breeze.",
            "location": "Nandi Hills"
          }
        ]
      },
      {
        "dayNumber": 3,
        "title": "Nandi Sunrise & Kotilingeshwara Million Lingas",
        "districtId": "kolar",
        "districtName": "Kolar",
        "stayLocation": "Tour Concludes in Bengaluru",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Nandi Hills Cloud Sunrise",
            "description": "Witness the spectacular sea-of-clouds phenomenon.",
            "location": "Nandi Hills",
            "destinationId": "nandi-hills"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Kotilingeshwara Temple",
            "description": "Walk among millions of consecrated Shiva lingas and 108ft Maha Linga.",
            "location": "Kolar",
            "destinationId": "kotilingeshwara-temple"
          },
          {
            "timeOfDay": "Evening",
            "title": "Return to Bengaluru Hub",
            "description": "Transfer to Kempegowda Airport or City railway station.",
            "location": "Bengaluru"
          }
        ]
      }
    ],
    "inclusions": [
      "2 Nights Stay at Yaatri Niwaas",
      "AC Transport throughout",
      "Daily Breakfasts & Dinners",
      "All entry permits"
    ],
    "exclusions": [
      "Toy purchases",
      "Personal expenses"
    ]
  },
  {
    "id": "wild-karnataka-tiger-safari",
    "name": "Wild Karnataka Tiger & River Safari",
    "kannadaName": "ವನ್ಯ ಕರ್ನಾಟಕ ಹುಲಿ ಮತ್ತು ನದಿ ಸಫಾರಿ",
    "districtsCovered": [
      "chamarajanagar",
      "mysuru",
      "kodagu",
      "uttara-kannada"
    ],
    "districtNames": [
      "Chamarajanagar",
      "Mysuru",
      "Kodagu",
      "Uttara Kannada"
    ],
    "region": "Multi-Region",
    "themes": [
      "Wildlife",
      "Nature",
      "Adventure"
    ],
    "durationDays": 6,
    "durationNights": 5,
    "destinationsCount": 8,
    "startingPrice": 22499,
    "travelStyle": "Premium",
    "highlights": [
      "Bandipur Open Jeep Tiger Safari",
      "Dubare Elephant Care",
      "Dandeli Whitewater Rafting",
      "Ranganathittu Croc & Bird Boat Safari",
      "BR Hills Tiger Sanctuary"
    ],
    "image": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    "stayIncluded": true,
    "transportIncluded": true,
    "routeMapPoints": [
      {
        "name": "Bengaluru",
        "type": "start"
      },
      {
        "name": "Ranganathittu Bird Sanctuary",
        "type": "attraction"
      },
      {
        "name": "Bandipur National Park",
        "type": "stay"
      },
      {
        "name": "Dubare Elephant Camp",
        "type": "stay"
      },
      {
        "name": "Dandeli Jungle Reserve",
        "type": "stay"
      },
      {
        "name": "Hubballi / Bengaluru",
        "type": "end"
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Ranganathittu Boat Safari & Bandipur Forest Check-in",
        "districtId": "chamarajanagar",
        "districtName": "Chamarajanagar",
        "stayLocation": "Yaatri Niwaas Bandipur Wild Sanctuary",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Depart Bengaluru for Mandya",
            "description": "Expressway drive to the bird haven.",
            "location": "Mandya"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Ranganathittu Bird Sanctuary",
            "description": "Rowboat safari among nesting colonies and muggers.",
            "location": "Ranganathittu",
            "destinationId": "ranganathittu-bird-sanctuary"
          },
          {
            "timeOfDay": "Evening",
            "title": "Bandipur Forest Edge Arrival",
            "description": "Check-in at Yaatri Niwaas Bandipur amidst deer and peacocks.",
            "location": "Bandipur"
          },
          {
            "timeOfDay": "Night",
            "title": "Wilderness Dinner & Wildlife Movie",
            "description": "Jungle sounds and campfire.",
            "location": "Bandipur"
          }
        ]
      },
      {
        "dayNumber": 2,
        "title": "Bandipur Dawn Safari & Gopalaswamy Betta",
        "districtId": "chamarajanagar",
        "districtName": "Chamarajanagar",
        "stayLocation": "Yaatri Niwaas Bandipur Wild Sanctuary",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Bandipur Project Tiger 4x4 Safari",
            "description": "Track tigers, leopards, and wild elephant herds at dawn.",
            "location": "Bandipur",
            "destinationId": "bandipur-tiger-reserve"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Himavad Gopalaswamy Betta",
            "description": "Misty peak inside national park boundaries.",
            "location": "Gundlupet"
          },
          {
            "timeOfDay": "Evening",
            "title": "Evening Forest Trail",
            "description": "Sunset wildlife spotting from watchtower.",
            "location": "Bandipur"
          },
          {
            "timeOfDay": "Night",
            "title": "Traditional Soliga Stew Dinner",
            "description": "Organic tribal forest herbs and dinner.",
            "location": "Bandipur"
          }
        ]
      },
      {
        "dayNumber": 3,
        "title": "Coorg Cauvery Elephants at Dubare",
        "districtId": "kodagu",
        "districtName": "Kodagu",
        "stayLocation": "Yaatri Niwaas Coorg Mist Haven",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Transit through Nagarhole corridor",
            "description": "Drive past teak plantations into Kodagu.",
            "location": "Kodagu"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Dubare Elephant Camp",
            "description": "Observe elephant washing and feeding by the Cauvery.",
            "location": "Dubare",
            "destinationId": "dubare-elephant-camp"
          },
          {
            "timeOfDay": "Evening",
            "title": "Abbey Falls & Coffee Estate Walk",
            "description": "Nature trail through spice shrubs.",
            "location": "Madikeri",
            "destinationId": "abbey-falls"
          },
          {
            "timeOfDay": "Night",
            "title": "Coorg Campfire Dinner",
            "description": "Overnight stay in Madikeri.",
            "location": "Madikeri"
          }
        ]
      },
      {
        "dayNumber": 4,
        "title": "Western Ghats Transit to Dandeli Rainforest",
        "districtId": "uttara-kannada",
        "districtName": "Uttara Kannada",
        "stayLocation": "Yaatri Niwaas Dandeli Jungle Camp",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Drive North along Sahyadri Ridge",
            "description": "Panoramic mountain pass views.",
            "location": "Western Ghats"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Arrival in Dandeli Hornbill Reserve",
            "description": "Check-in at wooden eco-cottages.",
            "location": "Dandeli"
          },
          {
            "timeOfDay": "Evening",
            "title": "Kali River Sunset Coracle Cruise",
            "description": "Spot river otters and hornbills returning to roost.",
            "location": "Dandeli"
          },
          {
            "timeOfDay": "Night",
            "title": "Barbecue & Night Jungle Walk",
            "description": "Guided night walk for bioluminescent fungi and owls.",
            "location": "Dandeli"
          }
        ]
      },
      {
        "dayNumber": 5,
        "title": "Thrilling Whitewater Rafting & Syntheri Rocks",
        "districtId": "uttara-kannada",
        "districtName": "Uttara Kannada",
        "stayLocation": "Yaatri Niwaas Dandeli Jungle Camp",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Kali River Grade 3 Rafting",
            "description": "Tackle rapids like Stanley Squeeze and Smugglers Cove.",
            "location": "Kali River",
            "destinationId": "dandeli-kali-river"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Syntheri Rocks Monolithic Ravine",
            "description": "Explore the 300-foot hollow granite rock hollowed by the Kaneri river.",
            "location": "Syntheri Rocks"
          },
          {
            "timeOfDay": "Evening",
            "title": "Timber Depot & Tribal Village Visit",
            "description": "Meet local craftspeople and naturalists.",
            "location": "Dandeli"
          },
          {
            "timeOfDay": "Night",
            "title": "Jungle Farewell Feast",
            "description": "Celebration dinner under forest canopy.",
            "location": "Dandeli"
          }
        ]
      },
      {
        "dayNumber": 6,
        "title": "Morning Birding & Tour Conclusion",
        "districtId": "uttara-kannada",
        "districtName": "Uttara Kannada",
        "stayLocation": "Tour Concludes",
        "activities": [
          {
            "timeOfDay": "Morning",
            "title": "Hornbill Watch at Dawn",
            "description": "Spot Great Indian, Malabar Pied, and Grey Hornbills.",
            "location": "Dandeli"
          },
          {
            "timeOfDay": "Afternoon",
            "title": "Transfer to Hubballi Airport/Station",
            "description": "Departure with lifetime memories of wild Karnataka.",
            "location": "Hubballi"
          }
        ]
      }
    ],
    "inclusions": [
      "5 Nights Wildlife Lodge Accommodation at Yaatri Niwaas",
      "Dedicated AC 4WD/Innova vehicle",
      "Bandipur Jungle Jeep Safari charges",
      "Full 9km Whitewater Rafting course fee with gear and guides",
      "All meals during safari stays"
    ],
    "exclusions": [
      "Airfare/Train to Bengaluru/Hubballi",
      "Personal insurance"
    ]
  }
];

export const getPackageById = (id: string): TourPackage | undefined => {
  return PACKAGES_DATA.find(p => p.id.toLowerCase() === id.toLowerCase());
};

export const getPackagesByRegion = (region: string): TourPackage[] => {
  return PACKAGES_DATA.filter(p => p.region.toLowerCase() === region.toLowerCase());
};

export const getPackagesByDistrict = (districtId: string): TourPackage[] => {
  return PACKAGES_DATA.filter(p => p.districtsCovered.includes(districtId.toLowerCase()));
};

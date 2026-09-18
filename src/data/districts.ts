import type { District, RegionType } from './types';

export const DISTRICTS_DATA: District[] = [
  {
    "id": "bagalkote",
    "name": "Bagalkote",
    "kannadaName": "ಬಾಗಲಕೋಟೆ",
    "region": "North Karnataka",
    "tagline": "Cradle of Temple Architecture & Chalukyan Majesty",
    "shortDescription": "Bagalkote is a treasure trove of ancient Indian architecture, housing the rock-cut cave temples of Badami, the UNESCO World Heritage monuments of Pattadakal, and the historic temples of Aihole.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Badami Cave Temples",
      "Pattadakal UNESCO Monuments",
      "Aihole Temple Complex",
      "Mahakuta Temples",
      "Almatti Dam & Gardens"
    ],
    "themes": [
      "Heritage",
      "Culture",
      "Spiritual",
      "Photography"
    ],
    "recommendedDuration": "2-3 Days",
    "bestSeason": "October to March",
    "nearbyDistricts": [
      "belagavi",
      "vijayapura",
      "gadag",
      "koppal"
    ],
    "howToReach": {
      "air": "Hubballi Airport (130 km) or Belagavi Airport (145 km)",
      "rail": "Bagalkote and Badami Railway Stations connected to Bengaluru and Mumbai",
      "road": "NH 52 and SH 57 provide seamless access from Bengaluru (480 km)"
    },
    "foodSpecialties": [
      {
        "name": "Jolada Rotti Oota",
        "description": "Sorghum flatbread served with Yennegai (stuffed brinjal), sprouts curry and shenga chutney.",
        "isVeg": true
      },
      {
        "name": "Shenga Chutney Pudi",
        "description": "Spicy roasted peanut powder mixed with curd or cold-pressed oil.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Ilkal Sarees",
        "description": "GI-tagged handwoven sarees known for their signature Kasuti embroidery and Tope Teni pallu."
      },
      {
        "title": "Chalukyan Stone Art",
        "description": "Master stonemasons continuing 6th-century Badami sculpture traditions."
      }
    ],
    "travelTips": [
      "Climb Badami North Fort early in the morning for sunrise views over Agastya Lake.",
      "Hire an ASI guide in Pattadakal to understand Nagara and Dravida temple styles."
    ],
    "budgetEstimate": {
      "budget": 1800,
      "moderate": 3800,
      "luxury": 8500
    },
    "coordinates": {
      "lat": 16.18,
      "lng": 75.7,
      "mapX": 44,
      "mapY": 24
    }
  },
  {
    "id": "ballari",
    "name": "Ballari",
    "kannadaName": "ಬಳ್ಳಾರಿ",
    "region": "Kalyana Karnataka",
    "tagline": "Forts of Monolithic Granite & Rugged History",
    "shortDescription": "Dominated by the formidable Ballari Gudda monolith crowned with Hyder Ali fortifications, Ballari is a historic crossroads rich in craft traditions and vibrant culture.",
    "heroImage": "https://images.unsplash.com/photo-1596405344148-2d0df3365f5a?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Ballari Rock Fort",
      "Sandur Kumaraswamy Temple",
      "Kuntegadda Park",
      "Kalyana Karnataka Heritage Centers"
    ],
    "themes": [
      "Heritage",
      "Adventure",
      "Spiritual",
      "Culture"
    ],
    "recommendedDuration": "1-2 Days",
    "bestSeason": "November to February",
    "nearbyDistricts": [
      "vijayanagara",
      "raichur",
      "koppal",
      "chitradurga"
    ],
    "howToReach": {
      "air": "Jindal Vidyanagar Airport, Toranagallu (40 km) or Hubballi Airport (200 km)",
      "rail": "Ballari Junction is a major railway transit point across South Western Railway",
      "road": "NH 67 connecting Bengaluru (310 km) and Hyderabad (360 km)"
    },
    "foodSpecialties": [
      {
        "name": "Ballari Borugulu & Bajji",
        "description": "Spicy puffed rice snack seasoned with garlic oil, served with crisp green chilli bajji.",
        "isVeg": true
      },
      {
        "name": "Gongura Mutton",
        "description": "Fiery rustic meat curry enriched with sour sorrel leaves.",
        "isVeg": false
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Ballari Garment & Denim Hub",
        "description": "Pioneering cluster for high-quality garment manufacturing."
      },
      {
        "title": "Lambani Beadwork",
        "description": "Vibrant mirror-work embroidery crafted by local Banjara artisan communities."
      }
    ],
    "travelTips": [
      "Visit Ballari Fort at sunset when the granite rocks glow golden.",
      "Explore Sandur valley during winter when green hills contrast with red soil."
    ],
    "budgetEstimate": {
      "budget": 1600,
      "moderate": 3400,
      "luxury": 7500
    },
    "coordinates": {
      "lat": 15.14,
      "lng": 76.92,
      "mapX": 60,
      "mapY": 42
    }
  },
  {
    "id": "bengaluru-rural",
    "name": "Bengaluru Rural",
    "kannadaName": "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ",
    "region": "Bengaluru",
    "tagline": "Silk Weaving Corridors & Ancient Fortified Towns",
    "shortDescription": "Surrounding the metropolis, Bengaluru Rural is steeped in craft heritage with Doddaballapura silk looms, Tipu Sultan birthplace at Devanahalli Fort, and sacred Ghati Subramanya.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Devanahalli Fort",
      "Ghati Subramanya Temple",
      "Doddaballapura Silk Weaving Village",
      "Nelamangala Green Belts"
    ],
    "themes": [
      "Heritage",
      "Spiritual",
      "Culture",
      "Food"
    ],
    "recommendedDuration": "1-2 Days",
    "bestSeason": "All Year Round (October to March ideal)",
    "nearbyDistricts": [
      "bengaluru-urban",
      "chikkaballapur",
      "tumakuru",
      "ramanagara",
      "kolar"
    ],
    "howToReach": {
      "air": "Kempegowda International Airport Bengaluru is situated in Devanahalli itself",
      "rail": "Yelahanka and Doddaballapura stations with suburban rail links",
      "road": "NH 44 (Bellary Road) and NH 75 provide wide multi-lane highways"
    },
    "foodSpecialties": [
      {
        "name": "Thatte Idli & Filter Coffee",
        "description": "Steamed plate-sized fluffy idlis drenched in spiced ghee and coconut chutney.",
        "isVeg": true
      },
      {
        "name": "Ragi Mudde with Nati Koli Saaru",
        "description": "Nutritious finger-millet balls served with country chicken gravy.",
        "isVeg": false
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Doddaballapura Silk Weaving",
        "description": "Centuries-old jacquard handloom weavers creating wedding sarees."
      },
      {
        "title": "Terracotta Earthenware",
        "description": "Handcrafted clay pots and garden earthenware along Nelamangala."
      }
    ],
    "travelTips": [
      "Devanahalli Fort is just 10 minutes from Bengaluru Airport, ideal for a heritage stopover.",
      "Early mornings at Ghati Subramanya temple offer peaceful darshan."
    ],
    "budgetEstimate": {
      "budget": 2000,
      "moderate": 4200,
      "luxury": 9500
    },
    "coordinates": {
      "lat": 13.25,
      "lng": 77.55,
      "mapX": 66,
      "mapY": 78
    }
  },
  {
    "id": "bengaluru-urban",
    "name": "Bengaluru Urban",
    "kannadaName": "ಬೆಂಗಳೂರು ನಗರ",
    "region": "Bengaluru",
    "tagline": "The Garden City of Palaces, Tech & Vibrant Culture",
    "shortDescription": "Karnataka cosmopolitan heart blends majestic royal palaces, expansive 240-acre botanical gardens at Lalbagh, neo-Dravidian Vidhana Soudha, and world-class culinary avenues.",
    "heroImage": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Lalbagh Botanical Garden",
      "Bengaluru Palace",
      "Vidhana Soudha & Cubbon Park",
      "Bannerghatta National Park",
      "Tipu Sultan Summer Palace"
    ],
    "themes": [
      "Heritage",
      "Nature",
      "Food",
      "Culture",
      "Wildlife"
    ],
    "recommendedDuration": "2-3 Days",
    "bestSeason": "All Year Round (September to March best)",
    "nearbyDistricts": [
      "bengaluru-rural",
      "ramanagara",
      "chikkaballapur"
    ],
    "howToReach": {
      "air": "Kempegowda International Airport (BLR) with flights across the globe",
      "rail": "KSR Bengaluru City (SBC) and Yesvantpur (YPR) connect all corners of India",
      "road": "Hub of KSRTC network with automated bus terminals at Majestic and Shantinagar"
    },
    "foodSpecialties": [
      {
        "name": "Crispy Benne Masala Dosa",
        "description": "Golden butter dosa filled with spiced mashed potatoes, eaten with mint and coconut chutney.",
        "isVeg": true
      },
      {
        "name": "Mysore Pak & Filter Kaapi",
        "description": "Rich melt-in-mouth gram flour confection paired with decoction coffee in brass dabarah.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Mysore Silk Emporiums",
        "description": "Government silk emporiums on MG Road and Gandhinagar."
      },
      {
        "title": "Bangalore Pete Walks",
        "description": "Guided trails through Pete colonial quarters and flower markets."
      }
    ],
    "travelTips": [
      "Take Namma Metro green and purple lines to effortlessly bypass road traffic.",
      "Visit Lalbagh during early morning (6-9 AM) for serene walking among century-old trees."
    ],
    "budgetEstimate": {
      "budget": 2200,
      "moderate": 5500,
      "luxury": 14000
    },
    "coordinates": {
      "lat": 12.97,
      "lng": 77.59,
      "mapX": 68,
      "mapY": 82
    }
  },
  {
    "id": "belagavi",
    "name": "Belagavi",
    "kannadaName": "ಬೆಳಗಾವಿ",
    "region": "North Karnataka",
    "tagline": "Frontier Fortresses, Waterfalls & Heritage Confluence",
    "shortDescription": "Nestled along Western Ghats foothills, Belagavi boasts the massive Belagavi Fort with Kamal Basti Jain temple, roaring Gokak Falls, and Kittur heroic history of Rani Chennamma.",
    "heroImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Belagavi Fort & Kamal Basti",
      "Gokak Waterfalls & Suspension Bridge",
      "Kittur Rani Chennamma Fort",
      "Jamboti Mist Hills",
      "Military Mahadeva Temple"
    ],
    "themes": [
      "Heritage",
      "Nature",
      "Culture",
      "Food"
    ],
    "recommendedDuration": "2-3 Days",
    "bestSeason": "September to February",
    "nearbyDistricts": [
      "bagalkote",
      "dharwad",
      "uttara-kannada"
    ],
    "howToReach": {
      "air": "Sambre Belagavi Airport (IXG) connects Mumbai, Bengaluru, Hyderabad, and Delhi",
      "rail": "Belagavi Railway Station on the Pune-Bengaluru mainline",
      "road": "NH 48 golden quadrilateral provides expressway connectivity"
    },
    "foodSpecialties": [
      {
        "name": "Belagavi Kunda",
        "description": "Slow-simmered caramelized khoya sweet infused with aromatic cardamom.",
        "isVeg": true
      },
      {
        "name": "Mandige",
        "description": "Crepe-like sweet delicacy baked over an inverted clay pot, stuffed with sugar and dry fruits.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Kittur Utsav Celebrations",
        "description": "Annual cultural carnival honoring freedom fighter Rani Chennamma."
      },
      {
        "title": "Brass & Bell Metal Ware",
        "description": "Traditional utensil crafting in Belagavi artisan streets."
      }
    ],
    "travelTips": [
      "Visit Gokak Falls post-monsoon (August-October) when water plunges 170 feet across red sandstone.",
      "Cross the 1907 pedestrian suspension bridge over Gokak falls."
    ],
    "budgetEstimate": {
      "budget": 1700,
      "moderate": 3600,
      "luxury": 8000
    },
    "coordinates": {
      "lat": 15.85,
      "lng": 74.5,
      "mapX": 33,
      "mapY": 32
    }
  },
  {
    "id": "bidar",
    "name": "Bidar",
    "kannadaName": "ಬೀದರ್",
    "region": "Kalyana Karnataka",
    "tagline": "City of Whispering Monuments & Regal Bidriware",
    "shortDescription": "Crowning Karnataka northern tip, Bidar displays Bahmani and Barid Shahi architecture, sprawling Bidar Fort with triple moats, Mahmud Gawan Madrasa, and holy Gurudwara Nanak Jhira.",
    "heroImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Bidar Fort & Rangeen Mahal",
      "Mahmud Gawan Madrasa",
      "Bahmani Royal Tombs (Ashtur)",
      "Gurudwara Nanak Jhira Sahib",
      "Chaukhandi"
    ],
    "themes": [
      "Heritage",
      "Spiritual",
      "Culture",
      "Photography"
    ],
    "recommendedDuration": "2 Days",
    "bestSeason": "October to March",
    "nearbyDistricts": [
      "kalaburagi"
    ],
    "howToReach": {
      "air": "Bidar Airport or Hyderabad International Airport (140 km)",
      "rail": "Bidar Railway Station connected via Bidar-Kalaburagi and Hyderabad lines",
      "road": "NH 50 and NH 65 ensure smooth transit from Hyderabad and Kalaburagi"
    },
    "foodSpecialties": [
      {
        "name": "Bidari Biryani",
        "description": "Fragrant spiced basmati rice layered with tender meat, cooked on slow dum.",
        "isVeg": false
      },
      {
        "name": "Naan Qalia",
        "description": "Clay-oven baked leavened flatbread paired with rich bone-marrow gravy.",
        "isVeg": false
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "GI-Tagged Bidriware",
        "description": "Exquisite black zinc-copper alloy metalwork inlaid with pure silver threads."
      },
      {
        "title": "Karez Underground Aquifer",
        "description": "Fascinating medieval Persian subterranean water engineering."
      }
    ],
    "travelTips": [
      "Buy authentic GI-certified Bidriware direct from artisan workshops at Chaubara.",
      "Spend a tranquil evening by the perennial spring of Gurudwara Nanak Jhira Sahib."
    ],
    "budgetEstimate": {
      "budget": 1500,
      "moderate": 3200,
      "luxury": 7200
    },
    "coordinates": {
      "lat": 17.91,
      "lng": 77.52,
      "mapX": 66,
      "mapY": 8
    }
  },
  {
    "id": "chamarajanagar",
    "name": "Chamarajanagar",
    "kannadaName": "ಚಾಮರಾಜನಗರ",
    "region": "South Karnataka",
    "tagline": "Untamed Tiger Reserves & Sacred Mist-Clad Hills",
    "shortDescription": "Bordering the Nilgiris, Chamarajanagar is Karnataka prime wilderness sanctuary, hosting the famous Bandipur Tiger Reserve, bio-diverse BR Hills, and roaring Bharachukki Falls.",
    "heroImage": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Bandipur National Park Tiger Reserve",
      "Biligirirangana Hills (BR Hills)",
      "Male Mahadeshwara Hills (MM Hills)",
      "Bharachukki Waterfalls",
      "Himavad Gopalaswamy Betta"
    ],
    "themes": [
      "Wildlife",
      "Nature",
      "Hills",
      "Spiritual"
    ],
    "recommendedDuration": "2-3 Days",
    "bestSeason": "October to May for safaris; monsoon for waterfalls",
    "nearbyDistricts": [
      "mysuru",
      "mandya"
    ],
    "howToReach": {
      "air": "Mysuru Airport (60 km) or Coimbatore Airport (125 km)",
      "rail": "Chamarajanagar Railway Station connects to Mysuru Junction",
      "road": "NH 766 connects Mysuru through Gundlupet into Bandipur and Ooty"
    },
    "foodSpecialties": [
      {
        "name": "Ragi Mudde with Soppina Saaru",
        "description": "Steamed ragi dumpling served with wild forest greens stew and ghee.",
        "isVeg": true
      },
      {
        "name": "Nanjangud Rasabale & Forest Honey",
        "description": "Sweet GI-tagged heirloom bananas drizzled with wild Soliga forest honey.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Soliga Tribal Bamboo Craft",
        "description": "Eco-friendly handicrafts and furniture woven by indigenous Soligas."
      },
      {
        "title": "MM Hills Temple Folk Music",
        "description": "Vibrant folk temple music and Bedagu singing."
      }
    ],
    "travelTips": [
      "Book forest safari jeeps 45 days ahead on Karnataka Forest Department portal.",
      "Drive slowly on NH 766 through Bandipur — night travel restrictions apply."
    ],
    "budgetEstimate": {
      "budget": 2200,
      "moderate": 4800,
      "luxury": 11000
    },
    "coordinates": {
      "lat": 11.92,
      "lng": 76.94,
      "mapX": 60,
      "mapY": 94
    }
  },
  {
    "id": "chikkaballapur",
    "name": "Chikkaballapur",
    "kannadaName": "ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
    "region": "Bengaluru",
    "tagline": "Majestic Nandi Hills & Ancient Dravidian Temples",
    "shortDescription": "Famous for the cloud-kissed peaks of Nandi Hills, Chikkaballapur houses the thousand-year-old Bhoga Nandeeshwara temple, Sir M. Visvesvaraya memorial at Muddenahalli, and Skandagiri sunrise peak.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Nandi Hills & Tipu Drop",
      "Bhoga Nandeeshwara Temple (Nandi Village)",
      "Muddenahalli (Sir MV Birthplace & Museum)",
      "Skandagiri Sunrise Trek",
      "Kaurava Kunda Peak"
    ],
    "themes": [
      "Hills",
      "Heritage",
      "Adventure",
      "Spiritual"
    ],
    "recommendedDuration": "1-2 Days",
    "bestSeason": "September to March",
    "nearbyDistricts": [
      "bengaluru-rural",
      "bengaluru-urban",
      "kolar",
      "tumakuru"
    ],
    "howToReach": {
      "air": "Bengaluru Kempegowda Airport is just 35 km away",
      "rail": "Chikkaballapur Railway Station on Kolar-Devanahalli heritage branch line",
      "road": "NH 44 6-lane highway connects Bengaluru in under 60 minutes"
    },
    "foodSpecialties": [
      {
        "name": "Chikkaballapur Ghee Roast Dosa",
        "description": "Crisp rice crepe roasted in aromatic ghee with spicy red garlic spread.",
        "isVeg": true
      },
      {
        "name": "Fresh Grape Wine & Fruit Juices",
        "description": "Farm-fresh local grape juice and wines from local vineyards.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Sericulture & Silk Cocoons",
        "description": "Major market for raw mulberry silk cocoons."
      },
      {
        "title": "Dravidian Temple Carvings",
        "description": "Master sculptors restoring historic temple mandapas."
      }
    ],
    "travelTips": [
      "Reach Nandi Hills gate by 5:30 AM to catch the sea-of-clouds sunrise.",
      "Do not miss the twin pushkarini ponds at Bhoga Nandeeshwara at the base of the hill."
    ],
    "budgetEstimate": {
      "budget": 1800,
      "moderate": 3900,
      "luxury": 8500
    },
    "coordinates": {
      "lat": 13.43,
      "lng": 77.72,
      "mapX": 72,
      "mapY": 75
    }
  },
  {
    "id": "chikkamagaluru",
    "name": "Chikkamagaluru",
    "kannadaName": "ಚಿಕ್ಕಮಗಳೂರು",
    "region": "Malnad",
    "tagline": "The Coffee Cradle & Highest Peaks of Karnataka",
    "shortDescription": "Where coffee was first planted in India on Baba Budangiri hills, Chikkamagaluru is a paradise of mist-covered mountain summits including Mullayanagiri (highest peak in Karnataka), rolling coffee estates, and waterfalls.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Mullayanagiri Peak",
      "Baba Budangiri & Datta Peeta",
      "Kudremukh National Park",
      "Hebbe Falls",
      "Kemmanagundi Hill Station",
      "Coffee Estate Trails"
    ],
    "themes": [
      "Hills",
      "Nature",
      "Adventure",
      "Food"
    ],
    "recommendedDuration": "3 Days",
    "bestSeason": "September to April",
    "nearbyDistricts": [
      "hassan",
      "shivamogga",
      "udupi",
      "dakshina-kannada"
    ],
    "howToReach": {
      "air": "Mangaluru International Airport (150 km) or Bengaluru Airport (245 km)",
      "rail": "Kadur Junction (40 km) and Chikkamagaluru Station on South Western Railway",
      "road": "Scenic NH 73 connects Bengaluru via Hassan and Belur"
    },
    "foodSpecialties": [
      {
        "name": "Malnad Akki Rotti with Kaayi Chutney",
        "description": "Thin rice flour flatbread tempered with dill leaves, onions and fresh coconut.",
        "isVeg": true
      },
      {
        "name": "Artisanal Arabica Coffee",
        "description": "Single-origin estate brewed coffee with notes of chocolate and spice.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Coffee Tasting Sessions",
        "description": "Heritage estate workshops showcasing bean-to-cup processes."
      },
      {
        "title": "Malnad Spices & Honey",
        "description": "Freshly harvested green cardamom and forest pepper."
      }
    ],
    "travelTips": [
      "Start the Mullayanagiri climb early before 7 AM for clear horizon views.",
      "Stay in an authentic coffee plantation homestay for campfires and estate walks."
    ],
    "budgetEstimate": {
      "budget": 2400,
      "moderate": 5200,
      "luxury": 12500
    },
    "coordinates": {
      "lat": 13.31,
      "lng": 75.77,
      "mapX": 46,
      "mapY": 72
    }
  },
  {
    "id": "chitradurga",
    "name": "Chitradurga",
    "kannadaName": "ಚಿತ್ರದುರ್ಗ",
    "region": "Central Karnataka",
    "tagline": "The Seven-Ringed Granite Fortress of Valor",
    "shortDescription": "Synonymous with courage and the immortal legend of Onake Obavva, Chitradurga is crowned by the gigantic Kallina Kote of seven concentric stone ramparts, prehistoric Chandravalli caves, and windswept hills.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Chitradurga Kallina Kote (Fort)",
      "Chandravalli Caves & Ancient Lake",
      "Vanivilasa Sagara (Marikanive Dam)",
      "Jogimatti Hill Station & Forest"
    ],
    "themes": [
      "Heritage",
      "Adventure",
      "Nature",
      "Culture"
    ],
    "recommendedDuration": "1-2 Days",
    "bestSeason": "October to February",
    "nearbyDistricts": [
      "davanagere",
      "tumakuru",
      "ballari",
      "shivamogga"
    ],
    "howToReach": {
      "air": "Hubballi Airport (190 km) or Bengaluru Airport (210 km)",
      "rail": "Chitradurga Railway Station connected to Bengaluru and Hubballi",
      "road": "NH 48 expressway passes directly beside Chitradurga town"
    },
    "foodSpecialties": [
      {
        "name": "Chitradurga Kadabu & Chutney",
        "description": "Steamed cylindrical rice rolls accompanied by piquant coconut and lentil dips.",
        "isVeg": true
      },
      {
        "name": "Benne Dosa",
        "description": "Spongy, butter-soaked dosas served with spicy potato mash.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Chitradurga Fort Masonry",
        "description": "Legendary stone-locking engineering that required no mortar."
      },
      {
        "title": "Nayaka Era Folk Theatre",
        "description": "Performance arts commemorating Palegar chieftains and Onake Obavva."
      }
    ],
    "travelTips": [
      "Wear sturdy trekking shoes; exploring all seven levels of Chitradurga Fort requires 3-4 hours.",
      "Visit Chandravalli caves with a certified local guide carrying torches."
    ],
    "budgetEstimate": {
      "budget": 1600,
      "moderate": 3500,
      "luxury": 7500
    },
    "coordinates": {
      "lat": 14.23,
      "lng": 76.4,
      "mapX": 54,
      "mapY": 56
    }
  },
  {
    "id": "dakshina-kannada",
    "name": "Dakshina Kannada",
    "kannadaName": "ದಕ್ಷಿಣ ಕನ್ನಡ",
    "region": "Coastal Karnataka",
    "tagline": "Coastal Temples, Golden Beaches & Culinary Glory",
    "shortDescription": "Centred around the port city of Mangaluru, Dakshina Kannada harmonizes sacred shrines like Kudroli and Dharmasthala, pristine beaches at Panambur, the thousand-pillar Jain basadi of Moodabidri, and world-famed coastal gastronomy.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Mangaladevi & Kudroli Temples",
      "Panambur Beach & Tannirbhavi",
      "Moodabidri 1000 Pillar Jain Basadi",
      "Dharmasthala Manjunatha Swamy Temple",
      "Kateel Durgaparameshwari"
    ],
    "themes": [
      "Coast",
      "Spiritual",
      "Food",
      "Culture",
      "Heritage"
    ],
    "recommendedDuration": "3 Days",
    "bestSeason": "October to March",
    "nearbyDistricts": [
      "udupi",
      "kodagu",
      "hassan",
      "chikkamagaluru"
    ],
    "howToReach": {
      "air": "Mangaluru International Airport (IXE) connects Gulf hubs and Indian metros",
      "rail": "Mangaluru Central and Mangaluru Junction on the scenic Konkan Railway",
      "road": "NH 66 coastal expressway and NH 75 connecting to Bengaluru via Shiradi Ghat"
    },
    "foodSpecialties": [
      {
        "name": "Mangalorean Ghee Roast",
        "description": "Succulent chicken, paneer or mushrooms roasted in pure cow ghee with fiery Byadagi chilli paste.",
        "isVeg": false
      },
      {
        "name": "Kori Rotti & Neer Dosa",
        "description": "Crisp wafer-thin rice rotis soaked in spiced coconut chicken curry.",
        "isVeg": false
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Yakshagana Dance-Drama",
        "description": "Theatrical art form with vibrant costumes, thunderous drums, and mythological enactments."
      },
      {
        "title": "Kambala Buffalo Races",
        "description": "Thumping traditional winter paddy field sprint races."
      }
    ],
    "travelTips": [
      "Attend a nighttime Yakshagana performance for an authentic coastal Karnataka cultural immersion.",
      "Take the scenic ferry from Sultan Battery to Tannirbhavi beach."
    ],
    "budgetEstimate": {
      "budget": 2200,
      "moderate": 4800,
      "luxury": 11500
    },
    "coordinates": {
      "lat": 12.87,
      "lng": 75.0,
      "mapX": 38,
      "mapY": 80
    }
  },
  {
    "id": "davanagere",
    "name": "Davanagere",
    "kannadaName": "ದಾವಣಗೆರೆ",
    "region": "Central Karnataka",
    "tagline": "Textile Heart & Home of the Legendary Benne Dosa",
    "shortDescription": "Situated in the heart of Karnataka, Davanagere is famous for its crisp Benne Dosa, the ancient pushkarini stepwell of Santhebennur, Kunduvada scenic reservoir, and lush cotton tracts.",
    "heroImage": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Santhebennur Pushkarini Stepwell",
      "Kunduvada Lake & Promenade",
      "Bathi Gudda & Dargah",
      "Davanagere Benne Dosa Trail"
    ],
    "themes": [
      "Food",
      "Heritage",
      "Culture",
      "Nature"
    ],
    "recommendedDuration": "1-2 Days",
    "bestSeason": "October to March",
    "nearbyDistricts": [
      "chitradurga",
      "haveri",
      "shivamogga",
      "ballari"
    ],
    "howToReach": {
      "air": "Hubballi Airport (140 km) or Bengaluru Airport (260 km)",
      "rail": "Davanagere Railway Station on Bengaluru-Hubballi mainline",
      "road": "Directly on NH 48 with smooth 6-lane highway driving"
    },
    "foodSpecialties": [
      {
        "name": "Authentic Davanagere Benne Dosa",
        "description": "Crispy butter dosa roasted on woodfire griddles with aloo palya and coconut paste.",
        "isVeg": true
      },
      {
        "name": "Mandakki Oggarne & Menasinakayi",
        "description": "Tempered puffed rice spiced with onions and coriander, served with crunchy chilli fritters.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Cotton Ginning Heritage",
        "description": "Historic Manchester of Karnataka textile tradition."
      },
      {
        "title": "Santhebennur Vasantha Mantapa",
        "description": "16th-century Indo-Saracenic pavilion in the middle of a stepped tank."
      }
    ],
    "travelTips": [
      "Taste Benne Dosa at heritage joints like Sri Guru Kottureshwara Hotel.",
      "Santhebennur Pushkarini is ideal for heritage photography during golden hour."
    ],
    "budgetEstimate": {
      "budget": 1500,
      "moderate": 3200,
      "luxury": 6800
    },
    "coordinates": {
      "lat": 14.46,
      "lng": 75.92,
      "mapX": 48,
      "mapY": 52
    }
  },
  {
    "id": "dharwad",
    "name": "Dharwad",
    "kannadaName": "ಧಾರವಾಡ",
    "region": "North Karnataka",
    "tagline": "Gateway to Classical Music, Literature & Peda",
    "shortDescription": "The cultural and intellectual soul of North Karnataka, Dharwad is renowned for Hindustani classical musical masters, pristine Chandramouleshwara 11th-century temple at Unkal, Hubballi heritage railway museum, and the iconic Dharwad Peda.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Chandramouleshwara Temple (Unkal)",
      "Hubballi Heritage Railway Museum",
      "Siddharoodha Math",
      "Unkal Lake & Nrupatunga Betta",
      "Karnatak University Campus"
    ],
    "themes": [
      "Culture",
      "Heritage",
      "Food",
      "Spiritual"
    ],
    "recommendedDuration": "2 Days",
    "bestSeason": "October to March",
    "nearbyDistricts": [
      "belagavi",
      "gadag",
      "haveri",
      "uttara-kannada"
    ],
    "howToReach": {
      "air": "Hubballi Airport (HBX) connects Bengaluru, Mumbai, Chennai, Delhi and Hyderabad",
      "rail": "Hubballi Junction (world longest platform) & Dharwad Station",
      "road": "NH 48 connects Mumbai and Bengaluru with expressways"
    },
    "foodSpecialties": [
      {
        "name": "GI-Tagged Dharwad Peda",
        "description": "Mouth-melting fudge prepared by caramelizing Dharwadi buffalo milk, rolled in castor sugar.",
        "isVeg": true
      },
      {
        "name": "Jolada Rotti Meals with Yennegai",
        "description": "North Karnataka thali with jowar rotti, spicy curries, and pitla.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Kasuti Embroidery",
        "description": "Intricate hand embroidery using four historic stitches depicting chariots and peacocks."
      },
      {
        "title": "Navalgund Jamakalam Rugs",
        "description": "GI-tagged geometric patterned hand-woven cotton durries."
      }
    ],
    "travelTips": [
      "Buy original Dharwad Peda from Babu Singh Thakur Peda shop near Line Bazaar.",
      "Visit the Hubballi Railway Museum for an engaging walk through vintage steam locomotives."
    ],
    "budgetEstimate": {
      "budget": 1700,
      "moderate": 3700,
      "luxury": 8200
    },
    "coordinates": {
      "lat": 15.45,
      "lng": 75.0,
      "mapX": 40,
      "mapY": 38
    }
  },
  {
    "id": "gadag",
    "name": "Gadag",
    "kannadaName": "ಗದಗ",
    "region": "North Karnataka",
    "tagline": "Stepwells, Kalyana Chalukya Marvels & Bird Sanctuaries",
    "shortDescription": "An open-air museum of Kalyana Chalukyan architecture, Gadag contains famed Lakkundi stepped wells and temples, Trikuteshwara temple with Saraswati shrine, and winter haven for Bar-headed geese at Magadi.",
    "heroImage": "https://images.unsplash.com/photo-1596405344148-2d0df3365f5a?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Lakkundi Temple & Stepwell Complex",
      "Trikuteshwara Temple Complex",
      "Veera Narayana Temple",
      "Magadi Bird Sanctuary",
      "Dambal Doddabasappa Temple"
    ],
    "themes": [
      "Heritage",
      "Spiritual",
      "Nature",
      "Culture"
    ],
    "recommendedDuration": "1-2 Days",
    "bestSeason": "November to March",
    "nearbyDistricts": [
      "dharwad",
      "bagalkote",
      "koppal",
      "haveri"
    ],
    "howToReach": {
      "air": "Hubballi Airport (55 km)",
      "rail": "Gadag Junction connects to Hubballi, Solapur, Guntakal and Bengaluru",
      "road": "NH 67 connects Hubballi and Ballari via Gadag"
    },
    "foodSpecialties": [
      {
        "name": "Girmit with Mirchi Bajji",
        "description": "Tangy-spiced puffed rice preparation with roasted peanut garnishing and green chilli fritters.",
        "isVeg": true
      },
      {
        "name": "Kadak Jolada Rotti",
        "description": "Crispy sorghum rotti eaten with curd and spicy flaxseed powder.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Betageri Handloom Khadi",
        "description": "Handspun khadi fabric and traditional cotton sarees from local weaver co-operatives."
      },
      {
        "title": "Kalyana Chalukya Filigree Stonework",
        "description": "Intricate lathe-turned soapstone pillars that resemble polished metal."
      }
    ],
    "travelTips": [
      "Lakkundi has more than 50 historic temples and stepwells (Kalyanis); explore by auto or cycle.",
      "Visit Magadi lake between December and February to watch thousands of Bar-headed geese."
    ],
    "budgetEstimate": {
      "budget": 1500,
      "moderate": 3100,
      "luxury": 6900
    },
    "coordinates": {
      "lat": 15.42,
      "lng": 75.63,
      "mapX": 48,
      "mapY": 39
    }
  },
  {
    "id": "hassan",
    "name": "Hassan",
    "kannadaName": "ಹಾಸನ",
    "region": "Malnad",
    "tagline": "Masterpieces of Hoysala Architecture & Monolithic Jain Splendor",
    "shortDescription": "Home to the pinnacle of Hoysala temple craftsmanship at Belur and Halebeedu, Hassan features the 57-foot Gommateshwara statue at Shravanabelagola and the Gothic ruins of Shettihalli Church submerged in Hemavathi waters.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Belur Chennakeshava Temple",
      "Halebeedu Hoysaleshwara Temple",
      "Shravanabelagola Gommateshwara Monolith",
      "Shettihalli Submerged Rosary Church",
      "Gorur Hemavathi Dam"
    ],
    "themes": [
      "Heritage",
      "Spiritual",
      "Culture",
      "Photography"
    ],
    "recommendedDuration": "2-3 Days",
    "bestSeason": "September to March",
    "nearbyDistricts": [
      "chikkamagaluru",
      "mandya",
      "mysuru",
      "kodagu",
      "tumakuru"
    ],
    "howToReach": {
      "air": "Bengaluru Kempegowda Airport (185 km) or Mangaluru Airport (165 km)",
      "rail": "Hassan Junction is well connected to Bengaluru, Mysuru and Mangaluru",
      "road": "4-lane NH 75 connects directly from Bengaluru in 3.5 hours"
    },
    "foodSpecialties": [
      {
        "name": "Akki Rotti with Kaalu Saaru",
        "description": "Fragrant rice bread served with sprouted mixed beans curry.",
        "isVeg": true
      },
      {
        "name": "Halbai",
        "description": "Traditional steamed sweet fudge made from rice milk, jaggery and coconut milk.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Hoysala Soapstone Sculpting",
        "description": "Living art traditions recreating Madanika bracket figures."
      },
      {
        "title": "Shravanabelagola Mahamastakabhisheka",
        "description": "Sacred Jain head-anointing festival conducted once every 12 years."
      }
    ],
    "travelTips": [
      "Visit Shettihalli Church during monsoon for its hauntingly beautiful half-submerged reflection in water.",
      "Carry a magnifying torch in Belur to admire the microscopic details carved on bracket figures."
    ],
    "budgetEstimate": {
      "budget": 1900,
      "moderate": 4100,
      "luxury": 9200
    },
    "coordinates": {
      "lat": 13.0,
      "lng": 76.1,
      "mapX": 50,
      "mapY": 78
    }
  },
  {
    "id": "haveri",
    "name": "Haveri",
    "kannadaName": "ಹಾವೇರಿ",
    "region": "Central Karnataka",
    "tagline": "Land of Saints, Temples & Byadagi Red Chillies",
    "shortDescription": "Cradled by the Tungabhadra river, Haveri is the land of mystic saint Kanakadasa and poet Sarvajna, boasting ancient Chalukyan shrines at Hangal, the Ranebennur Blackbuck Sanctuary, and Byadagi spice markets.",
    "heroImage": "https://images.unsplash.com/photo-1596405344148-2d0df3365f5a?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Ranebennur Blackbuck Sanctuary",
      "Tarakeshwara Temple (Hangal)",
      "Siddheshwara Temple (Haveri)",
      "Utsav Rock Garden",
      "Kaginele Kanakadasa Memorial"
    ],
    "themes": [
      "Heritage",
      "Wildlife",
      "Culture",
      "Spiritual"
    ],
    "recommendedDuration": "1-2 Days",
    "bestSeason": "October to March",
    "nearbyDistricts": [
      "davanagere",
      "gadag",
      "dharwad",
      "shivamogga"
    ],
    "howToReach": {
      "air": "Hubballi Airport (70 km)",
      "rail": "Haveri Railway Station on Bengaluru-Hubballi mainline",
      "road": "NH 48 expressway passes through Haveri"
    },
    "foodSpecialties": [
      {
        "name": "Byadagi Chilli Masala Curries",
        "description": "Dishes seasoned with deep-red, mildly pungent GI-tagged Byadagi chillies.",
        "isVeg": true
      },
      {
        "name": "Haveri Menasinakayi Bajji",
        "description": "Long green chillies stuffed with seasoned gram flour and deep-fried.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Utsav Rock Garden Sculptures",
        "description": "Innovative folk sculpture park showcasing rural Karnataka life."
      },
      {
        "title": "Kanakadasa Keerthane Traditions",
        "description": "Musical Bhakti traditions celebrated across Haveri shrines."
      }
    ],
    "travelTips": [
      "Take an open morning jeep drive in Ranebennur Sanctuary to spot blackbucks and Great Indian Bustards.",
      "Utsav Rock Garden is highly engaging for families and cultural enthusiasts."
    ],
    "budgetEstimate": {
      "budget": 1400,
      "moderate": 3000,
      "luxury": 6500
    },
    "coordinates": {
      "lat": 14.8,
      "lng": 75.4,
      "mapX": 44,
      "mapY": 48
    }
  },
  {
    "id": "kalaburagi",
    "name": "Kalaburagi",
    "kannadaName": "ಕಲಬುರಗಿ",
    "region": "Kalyana Karnataka",
    "tagline": "Sufi Shrines, Bahmani Citadels & Ancient Ashokan Edicts",
    "shortDescription": "Formerly Gulbarga, Kalaburagi is the medieval capital of the Bahmani Sultanate, boasting the massive Gulbarga Fort with its unique domed Great Jami Masjid, sacred Sufi shrine of Khwaja Bande Nawaz, and Ashokan Buddhist site at Sannati.",
    "heroImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Gulbarga Fort & Great Jami Masjid",
      "Khwaja Bande Nawaz Dargah",
      "Sharana Basaveshwara Temple",
      "Sannati Buddhist Archaeological Complex",
      "Haft Gumbaz (Seven Tombs)"
    ],
    "themes": [
      "Heritage",
      "Spiritual",
      "Culture",
      "Food"
    ],
    "recommendedDuration": "2 Days",
    "bestSeason": "October to February",
    "nearbyDistricts": [
      "bidar",
      "yadgir",
      "vijayapura"
    ],
    "howToReach": {
      "air": "Kalaburagi Airport (GBI) operates direct flights to Bengaluru and Tirupati",
      "rail": "Kalaburagi Junction on Mumbai-Chennai and Bengaluru trunk route",
      "road": "NH 50 connecting Solapur, Hyderabad and Bengaluru"
    },
    "foodSpecialties": [
      {
        "name": "Kalaburagi Malpuri",
        "description": "Crispy deep-fried sweet disc dipped in sugar syrup with khoya topping.",
        "isVeg": true
      },
      {
        "name": "Tahari",
        "description": "Aromatic rice dish prepared with meat, curd, mint and whole spices.",
        "isVeg": false
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Shahabad Limestone Tiles",
        "description": "World-famous blue and grey polished flooring stones."
      },
      {
        "title": "Sufi Qawwali Evenings",
        "description": "Soulful musical evenings organized at the historic Dargah."
      }
    ],
    "travelTips": [
      "The Jami Masjid inside Gulbarga Fort is covered with small domes over the entire courtyard.",
      "Visit Sannati on the Bhima river to see the inscribed stone slab depicting Emperor Ashoka."
    ],
    "budgetEstimate": {
      "budget": 1600,
      "moderate": 3300,
      "luxury": 7500
    },
    "coordinates": {
      "lat": 17.33,
      "lng": 76.83,
      "mapX": 60,
      "mapY": 16
    }
  },
  {
    "id": "kodagu",
    "name": "Kodagu",
    "kannadaName": "ಕೊಡಗು",
    "region": "Malnad",
    "tagline": "Scotland of India: Mist, Coffee & Brave Warriors",
    "shortDescription": "Cradled in the Western Ghats, Kodagu (Coorg) is celebrated for coffee and spice estates, roaring Abbey Falls, birth of river Cauvery at Talakaveri, Dubare elephant camp, and the unique martial culture of the Kodavas.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Abbey Falls",
      "Raja Seat (Madikeri)",
      "Talakaveri & Bhagamandala",
      "Dubare Elephant Camp",
      "Madikeri Fort & Omkareshwara Temple",
      "Mandalpatti 4x4 Viewpoint"
    ],
    "themes": [
      "Hills",
      "Nature",
      "Culture",
      "Food",
      "Wildlife"
    ],
    "recommendedDuration": "3 Days",
    "bestSeason": "October to April",
    "nearbyDistricts": [
      "mysuru",
      "hassan",
      "dakshina-kannada"
    ],
    "howToReach": {
      "air": "Kannur Airport (90 km) or Mangaluru Airport (140 km) or Bengaluru (250 km)",
      "rail": "Mysuru Junction (120 km) is the nearest major railway hub",
      "road": "NH 275 connects Bengaluru to Madikeri via Mysuru and Kushalnagar"
    },
    "foodSpecialties": [
      {
        "name": "Coorg Pandi Curry & Kadambuttu",
        "description": "Signature dark pork curry cooked with Kachampuli vinegar, eaten with steamed rice balls.",
        "isVeg": false
      },
      {
        "name": "Nooputtu & Koli Curry",
        "description": "Delicate string hoppers served with spicy Kodava chicken curry.",
        "isVeg": false
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Kodava Traditional Regalia",
        "description": "Knee-length wrap tunic worn with gilded daggers (Peeche Kathi)."
      },
      {
        "title": "Coorg Spices & Honey",
        "description": "Freshly harvested black pepper, vanilla beans, and pure wild honey."
      }
    ],
    "travelTips": [
      "Rent a 4x4 jeep to reach Mandalpatti peak early for sunrise above the swirling clouds.",
      "Reach Dubare Elephant Camp by 8:30 AM to participate in elephant bathing."
    ],
    "budgetEstimate": {
      "budget": 2500,
      "moderate": 5500,
      "luxury": 13500
    },
    "coordinates": {
      "lat": 12.42,
      "lng": 75.74,
      "mapX": 46,
      "mapY": 87
    }
  },
  {
    "id": "kolar",
    "name": "Kolar",
    "kannadaName": "ಕೋಲಾರ",
    "region": "Bengaluru",
    "tagline": "Land of Gold Mines, Million Lingas & Volcanic Caves",
    "shortDescription": "Steeped in history, Kolar is globally famous for the Kolar Gold Fields (KGF), Kotilingeshwara temple housing millions of Shiva lingas, Anthargange rocky cave formations, and fertile dairy farming.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Kotilingeshwara Temple (Million Lingas)",
      "Kolar Gold Fields (KGF Heritage Zone)",
      "Anthargange Caves & Night Trek",
      "Kurudumale Ganesha Temple",
      "Someshwara Temple (Kolar Town)"
    ],
    "themes": [
      "Heritage",
      "Spiritual",
      "Adventure",
      "Culture"
    ],
    "recommendedDuration": "1-2 Days",
    "bestSeason": "October to March",
    "nearbyDistricts": [
      "bengaluru-rural",
      "bengaluru-urban",
      "chikkaballapur"
    ],
    "howToReach": {
      "air": "Bengaluru Kempegowda Airport (75 km)",
      "rail": "Bangarapet Junction and Kolar Railway Stations",
      "road": "NH 75 expressway connects Bengaluru to Kolar in 1.5 hours"
    },
    "foodSpecialties": [
      {
        "name": "Kolar Milk Sweets & Peda",
        "description": "Rich dairy sweets made from fresh milk from Kolar dairy co-operatives.",
        "isVeg": true
      },
      {
        "name": "Mulbagal Dosa",
        "description": "Crispy golden dosa cooked in generous ghee with signature red chutney.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "KGF Colonial Mining Relics",
        "description": "Victorian bungalows, clubhouses, and mining shafts dating back a century."
      },
      {
        "title": "Silk Handloom Weaving",
        "description": "Mulberry silk fabric crafted in rural artisan clusters."
      }
    ],
    "travelTips": [
      "The 108-foot Shiva Linga at Kotilingeshwara is among the tallest in the world.",
      "Anthargange night trek requires crawling through narrow volcanic rock labyrinths."
    ],
    "budgetEstimate": {
      "budget": 1600,
      "moderate": 3500,
      "luxury": 7500
    },
    "coordinates": {
      "lat": 13.13,
      "lng": 78.13,
      "mapX": 78,
      "mapY": 80
    }
  },
  {
    "id": "koppal",
    "name": "Koppal",
    "kannadaName": "ಕೊಪ್ಪಳ",
    "region": "Kalyana Karnataka",
    "tagline": "Epic Kishkindha, Kinnal Toys & Emperor of Temples",
    "shortDescription": "Bordering the Tungabhadra, Koppal is steeped in Ramayana lore with Anegundi (Kishkindha), the architectural marvel of Itagi Mahadeva Temple (Emperor of Temples), and the GI-tagged Kinnal wooden craft village.",
    "heroImage": "https://images.unsplash.com/photo-1596405344148-2d0df3365f5a?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Anegundi Kishkindha Heritage",
      "Mahadeva Temple (Itagi)",
      "Kinnal Wooden Toy Village",
      "Koppal Fort",
      "Huligi Virupapur Gaddi"
    ],
    "themes": [
      "Heritage",
      "Culture",
      "Spiritual",
      "Photography"
    ],
    "recommendedDuration": "2 Days",
    "bestSeason": "October to March",
    "nearbyDistricts": [
      "gadag",
      "bagalkote",
      "raichur",
      "ballari",
      "vijayanagara"
    ],
    "howToReach": {
      "air": "Jindal Vidyanagar Airport (65 km) or Hubballi Airport (120 km)",
      "rail": "Koppal Railway Station connects to Bengaluru, Hubballi, and Hyderabad",
      "road": "NH 67 passes through Koppal"
    },
    "foodSpecialties": [
      {
        "name": "Susla with Mirchi Bajji",
        "description": "Tempered beaten rice seasoned with onions and roasted dal powder.",
        "isVeg": true
      },
      {
        "name": "Sorghum Rotti Oota",
        "description": "Soft jowar rotti with spiced country vegetable gravy and garlic chutney.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "GI-Tagged Kinnal Toys",
        "description": "Centuries-old wooden toys finished with tamarind seed paste and liquid gold paint."
      },
      {
        "title": "Kalyana Chalukya Inscriptions",
        "description": "Literary epigraphs praising temple builders at Itagi."
      }
    ],
    "travelTips": [
      "Visit Kinnal village directly to meet master artisan families crafting traditional wooden sculptures.",
      "Combine Anegundi with Hampi by crossing the Tungabhadra river on a ferry."
    ],
    "budgetEstimate": {
      "budget": 1600,
      "moderate": 3300,
      "luxury": 7200
    },
    "coordinates": {
      "lat": 15.35,
      "lng": 76.15,
      "mapX": 52,
      "mapY": 41
    }
  },
  {
    "id": "mandya",
    "name": "Mandya",
    "kannadaName": "ಮಂಡ್ಯ",
    "region": "South Karnataka",
    "tagline": "Sugar Capital, Island Fortresses & Roaring Waterfalls",
    "shortDescription": "Fed by the Cauvery, Mandya is Karnataka sugar belt, home to Tipu Sultan island capital at Srirangapatna, twin waterfalls of Shivanasamudra (Gaganachukki), Ranganathittu Bird Sanctuary, and sacred Melukote.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Shivanasamudra Falls (Gaganachukki)",
      "Srirangapatna (Daria Daulat & Ranganathaswamy)",
      "Ranganathittu Bird Sanctuary",
      "Melukote Cheluvanarayana Swamy Temple",
      "KRS Dam & Brindavan Gardens"
    ],
    "themes": [
      "Heritage",
      "Nature",
      "Spiritual",
      "Food",
      "Wildlife"
    ],
    "recommendedDuration": "2 Days",
    "bestSeason": "August to March",
    "nearbyDistricts": [
      "mysuru",
      "ramanagara",
      "hassan",
      "tumakuru",
      "chamarajanagar"
    ],
    "howToReach": {
      "air": "Mysuru Airport (45 km) or Bengaluru Airport (130 km)",
      "rail": "Mandya and Srirangapatna Railway Stations on Bengaluru-Mysuru mainline",
      "road": "Bengaluru-Mysuru 10-lane Expressway connects from Bengaluru in 75 minutes"
    },
    "foodSpecialties": [
      {
        "name": "Authentic Maddur Vada",
        "description": "Crispy golden fried snack made from semolina, rice flour, sliced onions and curry leaves.",
        "isVeg": true
      },
      {
        "name": "Melukote Puliyogare & Pongal",
        "description": "Temple-style tangy tamarind rice infused with heirloom spices.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Organic Jaggery Making",
        "description": "Traditional sugarcane crushing units producing golden jaggery blocks."
      },
      {
        "title": "Melukote Handloom Dhotis",
        "description": "Pavitra Vastra handwoven pure cotton garments."
      }
    ],
    "travelTips": [
      "Stop at Maddur on the highway for freshly made hot Maddur Vadas.",
      "Take a rowing boat safari at Ranganathittu to spot painted storks and marsh crocodiles."
    ],
    "budgetEstimate": {
      "budget": 1700,
      "moderate": 3800,
      "luxury": 8500
    },
    "coordinates": {
      "lat": 12.52,
      "lng": 76.9,
      "mapX": 60,
      "mapY": 84
    }
  },
  {
    "id": "mysuru",
    "name": "Mysuru",
    "kannadaName": "ಮೈಸೂರು",
    "region": "South Karnataka",
    "tagline": "The Royal Heritage City of Palaces & Silk",
    "shortDescription": "Karnataka cultural capital, Mysuru is world-famous for the illuminated Mysuru Palace, Chamundi Hills, vibrant Dasara festivities, Somanathapura Hoysala temple, Devaraja Market, and Mysore Silk.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Mysuru Palace (Amba Vilas)",
      "Chamundi Hills & Nandi Bull",
      "Mysuru Zoo",
      "Somanathapura Keshava Temple",
      "Devaraja Market",
      "Bylakuppe Golden Temple"
    ],
    "themes": [
      "Heritage",
      "Culture",
      "Spiritual",
      "Food",
      "Wildlife"
    ],
    "recommendedDuration": "3 Days",
    "bestSeason": "October to March (October for Dasara celebrations)",
    "nearbyDistricts": [
      "mandya",
      "chamarajanagar",
      "kodagu",
      "hassan"
    ],
    "howToReach": {
      "air": "Mysuru Airport (MYQ) connects to Bengaluru, Chennai, Hyderabad and Kochi",
      "rail": "Mysuru Junction (MYS) with Vande Bharat Express to Bengaluru and Chennai",
      "road": "Bengaluru-Mysuru 10-lane Expressway connects in under 90 minutes"
    },
    "foodSpecialties": [
      {
        "name": "Mysore Pak",
        "description": "World-famous melt-in-mouth confection made of gram flour, sugar syrup and pure ghee.",
        "isVeg": true
      },
      {
        "name": "Mysore Masala Dosa",
        "description": "Crispy red-paste coated dosa stuffed with potato palya and coconut chutney.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Mysore Pure Silk Sarees",
        "description": "GI-tagged pure mulberry silk sarees with authentic gold zari borders."
      },
      {
        "title": "Rosewood Inlay Craft",
        "description": "Intricate furniture and wall panels inlaid with colored acrylic and wood."
      }
    ],
    "travelTips": [
      "Witness the Mysuru Palace illumination on Sunday evenings (7:00 to 8:00 PM).",
      "Explore Devaraja Market on foot for fragrances, flowers, and sandalwood extracts."
    ],
    "budgetEstimate": {
      "budget": 2200,
      "moderate": 5000,
      "luxury": 13000
    },
    "coordinates": {
      "lat": 12.3,
      "lng": 76.65,
      "mapX": 56,
      "mapY": 87
    }
  },
  {
    "id": "raichur",
    "name": "Raichur",
    "kannadaName": "ರಾಯಚೂರು",
    "region": "Kalyana Karnataka",
    "tagline": "The Doab Citadel Between Krishna & Tungabhadra",
    "shortDescription": "Occupying the fertile doab between Krishna and Tungabhadra rivers, Raichur boasts a colossal hilltop fort with Persian and Sanskrit inscriptions, medieval Mudgal Fort, and ancient temple city of Gabbur.",
    "heroImage": "https://images.unsplash.com/photo-1596405344148-2d0df3365f5a?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Raichur Hill Fort & Persian Gate",
      "Mudgal Medieval Fort",
      "Gabbur Temple Complex",
      "Krishna-Tungabhadra Confluence",
      "Maliabad Fort ruins"
    ],
    "themes": [
      "Heritage",
      "Culture",
      "Spiritual"
    ],
    "recommendedDuration": "1-2 Days",
    "bestSeason": "October to February",
    "nearbyDistricts": [
      "yadgir",
      "koppal",
      "ballari",
      "kalaburagi"
    ],
    "howToReach": {
      "air": "Kalaburagi Airport (140 km) or Hyderabad Airport (200 km)",
      "rail": "Raichur Railway Station on Mumbai-Chennai and Bengaluru lines",
      "road": "SH 19 and NH 167 connect Raichur to Hyderabad and Ballari"
    },
    "foodSpecialties": [
      {
        "name": "Raichur Jowar Thali",
        "description": "Warm jowar rotis served with black gram dal, roasted groundnut chutney and curd.",
        "isVeg": true
      },
      {
        "name": "Shenga Holige",
        "description": "Sweet flatbread stuffed with roasted peanut flour, jaggery and cardamom.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Cotton Trading Heritage",
        "description": "Extensive cotton trading mandi traditions."
      },
      {
        "title": "Medieval Stone Inscriptions",
        "description": "Multilingual rock edicts and defensive bastion architecture."
      }
    ],
    "travelTips": [
      "Climb Raichur Fort early in the morning to inspect the massive stone cannon.",
      "Gabbur has over 30 Chalukyan stone temples within walking distance."
    ],
    "budgetEstimate": {
      "budget": 1400,
      "moderate": 3000,
      "luxury": 6800
    },
    "coordinates": {
      "lat": 16.2,
      "lng": 77.36,
      "mapX": 66,
      "mapY": 28
    }
  },
  {
    "id": "ramanagara",
    "name": "Ramanagara",
    "kannadaName": "ರಾಮನಗರ",
    "region": "Bengaluru",
    "tagline": "Land of Silk, Sholay Boulders & Channapatna Toys",
    "shortDescription": "Famous as the dramatic boulder location for the film Sholay at Ramadevara Betta, Ramanagara is India largest silk cocoon market, home to Asia largest monolith hill at Savandurga, and wooden toy craft of Channapatna.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Ramadevara Betta (Vulture Sanctuary & Sholay Rocks)",
      "Channapatna Wooden Toys Craft Village",
      "Janapada Loka Folk Art Museum",
      "Savandurga Monolith Hill",
      "Mekedatu Gorge"
    ],
    "themes": [
      "Adventure",
      "Culture",
      "Nature",
      "Heritage"
    ],
    "recommendedDuration": "1-2 Days",
    "bestSeason": "September to March",
    "nearbyDistricts": [
      "bengaluru-urban",
      "bengaluru-rural",
      "mandya",
      "tumakuru"
    ],
    "howToReach": {
      "air": "Bengaluru Kempegowda Airport (85 km)",
      "rail": "Ramanagara and Channapatna Stations on Bengaluru-Mysuru rail route",
      "road": "Bengaluru-Mysuru 10-Lane Expressway passes through Ramanagara (50 km from Bengaluru)"
    },
    "foodSpecialties": [
      {
        "name": "Bidadi Thatte Idli",
        "description": "Plump plate-idlis smeared with butter and served with fiery red coconut chutney.",
        "isVeg": true
      },
      {
        "name": "Ragi Mudde Oota",
        "description": "Traditional village millet balls served with spicy mutton or bassaru greens broth.",
        "isVeg": false
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "GI-Tagged Channapatna Toys",
        "description": "Non-toxic ivory-wood toys colored with natural vegetable and turmeric dyes."
      },
      {
        "title": "Janapada Loka Folk Heritage",
        "description": "Living folk museum preserving Yakshagana, Dollu Kunitha and rural arts."
      }
    ],
    "travelTips": [
      "Visit Janapada Loka along the highway for rural Karnataka folk traditions.",
      "Climb Savandurga early in the morning before the granite rock heats up."
    ],
    "budgetEstimate": {
      "budget": 1700,
      "moderate": 3800,
      "luxury": 8200
    },
    "coordinates": {
      "lat": 12.72,
      "lng": 77.28,
      "mapX": 64,
      "mapY": 82
    }
  },
  {
    "id": "shivamogga",
    "name": "Shivamogga",
    "kannadaName": "ಶಿವಮೊಗ್ಗ",
    "region": "Malnad",
    "tagline": "Gateway to Malnad: Cascading Falls & Rainforests",
    "shortDescription": "Cradled in emerald Western Ghats rainforests, Shivamogga is home to India most magnificent untiered cascade — Jog Falls, sacred peak of Kodachadri, Sakrebyle Elephant Camp, King Cobra sanctuary at Agumbe, and ancient Keladi palaces.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Jog Falls (Raja, Roarer, Rocket, Rani)",
      "Kodachadri Peak & Trek",
      "Agumbe Rainforest & Sunset Viewpoint",
      "Sakrebyle Elephant Sanctuary",
      "Sigandur Chowdeshwari Temple",
      "Keladi & Ikkeri Nayaka Temples"
    ],
    "themes": [
      "Nature",
      "Hills",
      "Spiritual",
      "Wildlife",
      "Adventure"
    ],
    "recommendedDuration": "3 Days",
    "bestSeason": "July to March",
    "nearbyDistricts": [
      "chikkamagaluru",
      "davanagere",
      "haveri",
      "uttara-kannada",
      "udupi"
    ],
    "howToReach": {
      "air": "Kuvempu Airport Shivamogga (RQY) with flights to Bengaluru and Goa",
      "rail": "Shivamogga Town and Talaguppa (for Jog Falls) stations",
      "road": "NH 69 connects directly from Bengaluru (280 km)"
    },
    "foodSpecialties": [
      {
        "name": "Thuppa Dosa & Chutney",
        "description": "Crisp dosa generously basted in pure desi ghee.",
        "isVeg": true
      },
      {
        "name": "Halasina Hannina Kadabu",
        "description": "Steamed sweet dumplings made with ripe jackfruit and wrapped in aromatic leaves.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Sandalwood Carving",
        "description": "Gudigars artisan guild carving delicate sandalwood deities."
      },
      {
        "title": "Yakshagana Badagutittu",
        "description": "Traditional coastal-Malnad theatrical performances."
      }
    ],
    "travelTips": [
      "Visit Jog Falls in August or September when all four channels thunder down 830 feet in full monsoon majesty.",
      "Take the ferry across Sharavathi backwaters to visit Sigandur Chowdeshwari temple."
    ],
    "budgetEstimate": {
      "budget": 2000,
      "moderate": 4500,
      "luxury": 10500
    },
    "coordinates": {
      "lat": 13.93,
      "lng": 75.57,
      "mapX": 44,
      "mapY": 62
    }
  },
  {
    "id": "tumakuru",
    "name": "Tumakuru",
    "kannadaName": "ತುಮಕೂರು",
    "region": "Central Karnataka",
    "tagline": "Sacred Hills, Hillock Springs & Industrial Prowess",
    "shortDescription": "Crowned by picturesque hill chains, Tumakuru offers sacred pilgrimage at Devarayanadurga with its Yoga Narasimha temple, mystical perennial spring of Namada Chilume, massive Pavagada rock fort, and Siddaganga Math.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Devarayanadurga Hill Station & Narasimha Temple",
      "Namada Chilume Natural Spring",
      "Pavagada Fort",
      "Goravanahalli Mahalakshmi Temple",
      "Siddaganga Math"
    ],
    "themes": [
      "Hills",
      "Spiritual",
      "Heritage",
      "Nature"
    ],
    "recommendedDuration": "1-2 Days",
    "bestSeason": "October to March",
    "nearbyDistricts": [
      "bengaluru-rural",
      "chikkaballapur",
      "chitradurga",
      "hassan",
      "mandya"
    ],
    "howToReach": {
      "air": "Bengaluru Kempegowda Airport (80 km)",
      "rail": "Tumakuru Railway Station with frequent trains to Bengaluru",
      "road": "NH 48 connects Bengaluru in 1 hour via multi-lane expressway"
    },
    "foodSpecialties": [
      {
        "name": "Tumakuru Thatte Idli",
        "description": "Soft plate-sized idlis served with spicy potato saagu and aromatic coconut chutney.",
        "isVeg": true
      },
      {
        "name": "Shenga Chutney & Dosa",
        "description": "Groundnut chutney paired with open butter dosas.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Siddaganga Dasoha Tradition",
        "description": "Centuries-old educational and free food offering traditions."
      },
      {
        "title": "Coconut Shell Handicrafts",
        "description": "Artisan home decor crafted from local coconut shells and fibers."
      }
    ],
    "travelTips": [
      "Visit Namada Chilume spring, where legend holds Lord Rama shot an arrow to create water.",
      "Drive up to Devarayanadurga top shrine early for misty views."
    ],
    "budgetEstimate": {
      "budget": 1600,
      "moderate": 3400,
      "luxury": 7500
    },
    "coordinates": {
      "lat": 13.34,
      "lng": 77.1,
      "mapX": 60,
      "mapY": 74
    }
  },
  {
    "id": "udupi",
    "name": "Udupi",
    "kannadaName": "ಉಡುಪಿ",
    "region": "Coastal Karnataka",
    "tagline": "Sacred Krishna Shrine, Basalt Isles & Beach Delights",
    "shortDescription": "World-celebrated for its 13th-century Sri Krishna Matha founded by Saint Madhvacharya, Udupi offers hexagonal basalt rock columns at St. Mary Island, sunset walks at Malpe and Kaup lighthouse beaches, and the famous Udupi vegetarian cuisine.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Sri Krishna Matha & Kanakana Kindi",
      "Malpe Beach & St. Mary Island",
      "Kaup Beach & Historic Lighthouse",
      "Maravanthe Beach",
      "Barkur Heritage Town"
    ],
    "themes": [
      "Spiritual",
      "Coast",
      "Food",
      "Culture",
      "Nature"
    ],
    "recommendedDuration": "3 Days",
    "bestSeason": "October to March",
    "nearbyDistricts": [
      "dakshina-kannada",
      "uttara-kannada",
      "shivamogga",
      "chikkamagaluru"
    ],
    "howToReach": {
      "air": "Mangaluru International Airport (55 km)",
      "rail": "Udupi Railway Station on the Konkan Railway network",
      "road": "NH 66 4-lane coastal highway connects Mumbai, Goa, and Kerala"
    },
    "foodSpecialties": [
      {
        "name": "Authentic Udupi Sambar & Rasam",
        "description": "Sweet-tangy-spiced lentil soup flavored with freshly roasted spices and jaggery.",
        "isVeg": true
      },
      {
        "name": "Goli Baje & Mangalore Buns",
        "description": "Fluffy deep-fried curd fritters and sweet banana puris paired with coconut chutney.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Paryaya Festival Celebrations",
        "description": "Biennial grand religious festival marking the transfer of Krishna puja worship."
      },
      {
        "title": "Yakshagana Costumes & Puppetry",
        "description": "Heritage traditional theatrical masks and puppets."
      }
    ],
    "travelTips": [
      "Take the boat from Malpe Sea Walk to St. Mary Island to marvel at geological hexagonal basalt formations.",
      "Climb Kaup lighthouse during sunset for panoramic Arabian Sea vistas."
    ],
    "budgetEstimate": {
      "budget": 2100,
      "moderate": 4600,
      "luxury": 11000
    },
    "coordinates": {
      "lat": 13.34,
      "lng": 74.75,
      "mapX": 36,
      "mapY": 70
    }
  },
  {
    "id": "uttara-kannada",
    "name": "Uttara Kannada",
    "kannadaName": "ಉತ್ತರ ಕನ್ನಡ",
    "region": "Coastal Karnataka",
    "tagline": "Gokarna Beaches, Giant Shiva & Dense Kali Jungles",
    "shortDescription": "Karnataka most forested district blends the sacred pilgrim shores of Gokarna (Om Beach), towering 123-foot Shiva statue at Murudeshwara, black crystalline karst monoliths at Yana, and whitewater rafting in Dandeli.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Gokarna (Om Beach, Kudle Beach, Mahabaleshwar)",
      "Murudeshwara Temple & Giant Shiva Statue",
      "Yana Rock Formations",
      "Dandeli Kali River Rafting",
      "Mirjan Fort",
      "Karwar Rabindranath Tagore Beach"
    ],
    "themes": [
      "Coast",
      "Nature",
      "Spiritual",
      "Adventure",
      "Heritage"
    ],
    "recommendedDuration": "4 Days",
    "bestSeason": "October to April",
    "nearbyDistricts": [
      "udupi",
      "shivamogga",
      "belagavi",
      "dharwad"
    ],
    "howToReach": {
      "air": "Goa Airport (130 km) or Hubballi Airport (140 km)",
      "rail": "Gokarna Road, Murudeshwara, Karwar stations on Konkan Railway",
      "road": "NH 66 along the coastline and scenic Western Ghat pass roads"
    },
    "foodSpecialties": [
      {
        "name": "Karwar Fish Curry & Rice",
        "description": "Fresh fish cooked with coconut paste, triphal spice, and sour kokum.",
        "isVeg": false
      },
      {
        "name": "Todadevu",
        "description": "Paper-thin sweet crepe prepared from sugarcane juice and rice batter.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Sandalwood & Seashell Crafts",
        "description": "Hand-carved figurines and shell souvenirs in Karwar."
      },
      {
        "title": "Dandeli Hornbill Sanctuary",
        "description": "Wildlife sanctuary protecting four species of hornbills."
      }
    ],
    "travelTips": [
      "Undertake the scenic Gokarna Beach Trek from Belekan beach to Kudle beach.",
      "Wear trekking shoes to explore the colossal rock monoliths at Yana."
    ],
    "budgetEstimate": {
      "budget": 2200,
      "moderate": 4800,
      "luxury": 11500
    },
    "coordinates": {
      "lat": 14.65,
      "lng": 74.35,
      "mapX": 32,
      "mapY": 52
    }
  },
  {
    "id": "vijayapura",
    "name": "Vijayapura",
    "kannadaName": "ವಿಜಯಪುರ",
    "region": "North Karnataka",
    "tagline": "City of Whispering Domes & Adil Shahi Elegance",
    "shortDescription": "Formerly Bijapur, this historic capital of the Adil Shahi dynasty is world-famous for Gol Gumbaz (second largest dome in the world with its Whispering Gallery), palatial Ibrahim Rouza, and majestic Bara Kaman.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Gol Gumbaz & Whispering Gallery",
      "Ibrahim Rouza (Taj of the South)",
      "Bara Kaman (Twelve Arches)",
      "Jamia Masjid",
      "Malik-e-Maidan Monolithic Cannon",
      "Shivagiri 85ft Shiva Statue"
    ],
    "themes": [
      "Heritage",
      "Culture",
      "Photography",
      "Food"
    ],
    "recommendedDuration": "2 Days",
    "bestSeason": "October to March",
    "nearbyDistricts": [
      "bagalkote",
      "kalaburagi",
      "belagavi"
    ],
    "howToReach": {
      "air": "Vijayapura Airport or Belagavi Airport (200 km)",
      "rail": "Vijayapura Railway Station connects directly to Mumbai, Bengaluru, Hyderabad",
      "road": "NH 50 and NH 52 intersect at Vijayapura"
    },
    "foodSpecialties": [
      {
        "name": "Jolada Rotti with Yennegai",
        "description": "Thin unleavened sorghum rottis served with stuffed brinjal and dry peanut chutney.",
        "isVeg": true
      },
      {
        "name": "Shenga Holige",
        "description": "Sweet stuffed flatbread made with crushed roasted peanuts and jaggery.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Ilkal & Guledgudd Weaving",
        "description": "Handloom textiles with distinctive Kasuti borders."
      },
      {
        "title": "Adil Shahi Acoustic Architecture",
        "description": "Marvels where whispers echo 11 times across a 44-meter dome."
      }
    ],
    "travelTips": [
      "Visit the Whispering Gallery at Gol Gumbaz right at opening time (6:00 AM) to experience the echo.",
      "Ibrahim Rouza looks breathtaking during late afternoon golden hour."
    ],
    "budgetEstimate": {
      "budget": 1600,
      "moderate": 3500,
      "luxury": 8000
    },
    "coordinates": {
      "lat": 16.83,
      "lng": 75.71,
      "mapX": 46,
      "mapY": 14
    }
  },
  {
    "id": "yadgir",
    "name": "Yadgir",
    "kannadaName": "ಯಾದಗಿರಿ",
    "region": "Kalyana Karnataka",
    "tagline": "Fortresses of Monolithic Stone & Bhima River Valley",
    "shortDescription": "Carved from monolithic stone outcrops, Yadgir boasts a hilltop fort with three layers of fortification, scenic Sleeping Buddha hill formations of Shahapur, Mailapur shrine, and fertile banks of Bhima and Krishna rivers.",
    "heroImage": "https://images.unsplash.com/photo-1596405344148-2d0df3365f5a?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Yadgir Hilltop Fort",
      "Sleeping Buddha Hills (Shahapur)",
      "Mailapur Mailaralingeshwara Temple",
      "Narayanpur Dam on Krishna River",
      "Bonal Bird Sanctuary"
    ],
    "themes": [
      "Heritage",
      "Nature",
      "Spiritual"
    ],
    "recommendedDuration": "1-2 Days",
    "bestSeason": "October to February",
    "nearbyDistricts": [
      "kalaburagi",
      "raichur"
    ],
    "howToReach": {
      "air": "Kalaburagi Airport (75 km) or Hyderabad Airport (170 km)",
      "rail": "Yadgir Railway Station on Mumbai-Chennai and Bengaluru main line",
      "road": "NH 150 connects Yadgir to Kalaburagi and Raichur"
    },
    "foodSpecialties": [
      {
        "name": "Jolada Rotti Oota",
        "description": "Crisp jowar rottis with spiced country curries and chutney powder.",
        "isVeg": true
      },
      {
        "name": "Bellam Pongal",
        "description": "Traditional sweet rice cooked with new jaggery and roasted cashew nuts.",
        "isVeg": true
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Lambani Banjara Embroidery",
        "description": "Traditional tribal mirror-work tapestry and clothing."
      },
      {
        "title": "Natural Hill Silhouettes",
        "description": "Geological rock formation resembling a resting Buddha in Shahapur."
      }
    ],
    "travelTips": [
      "Visit Shahapur hill to view the famous Sleeping Buddha profile visible from the highway.",
      "Yadgir fort hike rewards visitors with commanding 360-degree views."
    ],
    "budgetEstimate": {
      "budget": 1400,
      "moderate": 2900,
      "luxury": 6200
    },
    "coordinates": {
      "lat": 16.76,
      "lng": 77.13,
      "mapX": 62,
      "mapY": 22
    }
  },
  {
    "id": "vijayanagara",
    "name": "Vijayanagara",
    "kannadaName": "ವಿಜಯನಗರ",
    "region": "North Karnataka",
    "tagline": "Capital of the Forgotten Empire & UNESCO Wonder Hampi",
    "shortDescription": "Karnataka 31st district, created in 2020 with Hosapete as headquarters, encompasses the glorious UNESCO World Heritage site of Hampi — capital of the mighty Vijayanagara Empire with the iconic Stone Chariot, Virupaksha temple, and Tungabhadra waters.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    "highlights": [
      "Hampi UNESCO World Heritage Monuments",
      "Virupaksha Temple",
      "Vittala Temple & Stone Chariot",
      "Hampi Bazaar & Hemakuta Hill",
      "Tungabhadra Dam & Japanese Garden",
      "Daroji Sloth Bear Sanctuary"
    ],
    "themes": [
      "Heritage",
      "Culture",
      "Spiritual",
      "Wildlife",
      "Photography"
    ],
    "recommendedDuration": "3-4 Days",
    "bestSeason": "October to March (Hampi Utsav in winter)",
    "nearbyDistricts": [
      "ballari",
      "koppal",
      "gadag",
      "bagalkote",
      "davanagere"
    ],
    "howToReach": {
      "air": "Jindal Vidyanagar Airport, Toranagallu (35 km) or Hubballi Airport (145 km)",
      "rail": "Hosapete Junction (HPT) is the primary rail gateway to Hampi with direct trains from Bengaluru, Goa and Hyderabad",
      "road": "NH 50 and NH 67 connect Hosapete with expressways across Karnataka"
    },
    "foodSpecialties": [
      {
        "name": "Vijayanagara Royal Thali",
        "description": "Platter of jowar and wheat rotis, lentils, kosambari salad, and coconut poli.",
        "isVeg": true
      },
      {
        "name": "Tungabhadra River Fish Fry",
        "description": "Fresh river fish coated in local spice marinade and shallow fried.",
        "isVeg": false
      }
    ],
    "cultureAndCrafts": [
      {
        "title": "Hampi Stone Carving & Banana Fibre Crafts",
        "description": "Handcrafted stone miniature chariots and eco-friendly banana stem bags."
      },
      {
        "title": "Hampi Utsav Mega Cultural Festival",
        "description": "Vibrant annual cultural celebration of classical music, dance, and illumination."
      }
    ],
    "travelTips": [
      "Rent a bicycle or electric scooter to leisurely explore the vast 4,100-hectare archaeological park.",
      "Climb Matanga Hill or Hemakuta Hill for unforgettable sunrise and sunset views."
    ],
    "budgetEstimate": {
      "budget": 2000,
      "moderate": 4600,
      "luxury": 11500
    },
    "coordinates": {
      "lat": 15.33,
      "lng": 76.46,
      "mapX": 54,
      "mapY": 44
    }
  }
];

export const REGIONS: RegionType[] = [
  'Bengaluru',
  'Central Karnataka',
  'Coastal Karnataka',
  'Malnad',
  'North Karnataka',
  'Kalyana Karnataka',
  'South Karnataka'
];

export const getDistrictById = (id: string): District | undefined => {
  return DISTRICTS_DATA.find((d) => d.id.toLowerCase() === id.toLowerCase());
};

export const getDistrictsByRegion = (region: string): District[] => {
  return DISTRICTS_DATA.filter((d) => d.region.toLowerCase() === region.toLowerCase());
};

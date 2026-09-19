import { DISTRICTS_DATA, getDistrictById } from "../data/districts";
import { DESTINATIONS_DATA, getDestinationsByDistrict } from "../data/destinations";
import { STAYS_DATA, getStayByDistrict } from "../data/stays";
import { BUS_ROUTES_DATA } from "../data/transportRoutes";
import type { District, Destination, YaatriNiwaasProperty } from "../data/types";

export interface AIAction {
  label: string;
  actionType: "district" | "package" | "transport" | "stays" | "planner";
  targetId?: string;
}

export interface AIResponse {
  reply: string;
  actions: AIAction[];
}

export interface ConversationState {
  lastDistrictId?: string;
  lastDistrictName?: string;
  lastDays?: number;
  lastBudget?: number;
  lastIntent?: "itinerary" | "budget" | "food" | "transport" | "nearby" | "stays" | "general";
  fromCity?: string;
  toCity?: string;
}

// Global session memory
let sessionState: ConversationState = {};

export const getSessionState = (): ConversationState => ({ ...sessionState });
export const resetSessionState = (): void => {
  sessionState = {};
};

// District alias mapping for all 31 districts of Karnataka
const DISTRICT_ALIASES: Record<string, string> = {
  // Bengaluru
  "bengaluru": "bengaluru-urban",
  "bangalore": "bengaluru-urban",
  "blore": "bengaluru-urban",
  "bengaluru urban": "bengaluru-urban",
  "bangalore urban": "bengaluru-urban",
  "bengaluru rural": "bengaluru-rural",
  "bangalore rural": "bengaluru-rural",
  "devenahalli": "bengaluru-rural",

  // Heritage & Central
  "mysore": "mysuru",
  "mysuru": "mysuru",
  "srirangapatna": "mandya",
  "mandya": "mandya",
  "shivanasamudra": "mandya",
  "hassan": "hassan",
  "belur": "hassan",
  "halebidu": "hassan",
  "halebeedu": "hassan",
  "shravanabelagola": "hassan",
  "chamarajanagar": "chamarajanagara",
  "chamarajanagara": "chamarajanagara",
  "bandipur": "chamarajanagara",
  "br hills": "chamarajanagara",
  "ramanagara": "ramanagara",
  "ramananagara": "ramanagara",
  "chikkaballapur": "chikkaballapura",
  "chikkaballapura": "chikkaballapura",
  "nandi hills": "chikkaballapura",
  "kolar": "kolar",
  "kgf": "kolar",
  "tumkur": "tumakuru",
  "tumakuru": "tumakuru",
  "chitradurga": "chitradurga",
  "davanagere": "davanagere",
  "davangere": "davanagere",

  // Western Ghats & Malnad
  "coorg": "kodagu",
  "kodagu": "kodagu",
  "madikeri": "kodagu",
  "kushalnagar": "kodagu",
  "chikkamagaluru": "chikkamagaluru",
  "chikmagalur": "chikkamagaluru",
  "chikmagaluru": "chikkamagaluru",
  "mullayanagiri": "chikkamagaluru",
  "kudremukh": "chikkamagaluru",
  "baba budan": "chikkamagaluru",
  "shivamogga": "shivamogga",
  "shimoga": "shivamogga",
  "jog falls": "shivamogga",
  "thirthahalli": "shivamogga",

  // Coastal
  "udupi": "udupi",
  "malpe": "udupi",
  "st mary": "udupi",
  "mangalore": "dakshina-kannada",
  "mangaluru": "dakshina-kannada",
  "dakshina kannada": "dakshina-kannada",
  "panambur": "dakshina-kannada",
  "gokarna": "uttara-kannada",
  "karwar": "uttara-kannada",
  "murudeshwara": "uttara-kannada",
  "murudeshwar": "uttara-kannada",
  "dandeli": "uttara-kannada",
  "uttara kannada": "uttara-kannada",

  // North Karnataka & Chalukya
  "badami": "bagalkote",
  "pattadakal": "bagalkote",
  "aihole": "bagalkote",
  "bagalkote": "bagalkote",
  "bagalkot": "bagalkote",
  "hubli": "dharwad",
  "hubballi": "dharwad",
  "dharwad": "dharwad",
  "belgaum": "belagavi",
  "belagavi": "belagavi",
  "gokak": "belagavi",
  "gadag": "gadag",
  "lakkundi": "gadag",
  "haveri": "haveri",
  "byadgi": "haveri",
  "bijapur": "vijayapura",
  "vijayapura": "vijayapura",
  "gol gumbaz": "vijayapura",

  // Kalyana Karnataka & Vijayanagara
  "hampi": "vijayanagara",
  "vijayanagara": "vijayanagara",
  "hosapete": "vijayanagara",
  "hospet": "vijayanagara",
  "bellary": "ballari",
  "ballari": "ballari",
  "sandur": "ballari",
  "koppal": "koppal",
  "itagi": "koppal",
  "raichur": "raichur",
  "kalaburagi": "kalaburagi",
  "gulbarga": "kalaburagi",
  "bidar": "bidar",
  "yadgir": "yadgir"
};

// Identify district from user text
function detectDistrict(query: string): District | null {
  const lower = query.toLowerCase();

  // 1. Check direct aliases
  for (const [alias, districtId] of Object.entries(DISTRICT_ALIASES)) {
    const regex = new RegExp(`\\b${alias}\\b`, "i");
    if (regex.test(lower)) {
      const d = getDistrictById(districtId);
      if (d) return d;
    }
  }

  // 2. Check full district names in DISTRICTS_DATA
  for (const d of DISTRICTS_DATA) {
    if (lower.includes(d.name.toLowerCase()) || lower.includes(d.id.toLowerCase())) {
      return d;
    }
  }

  // 3. Check destinations in DESTINATIONS_DATA
  for (const dest of DESTINATIONS_DATA) {
    if (lower.includes(dest.name.toLowerCase())) {
      const d = getDistrictById(dest.districtId);
      if (d) return d;
    }
  }

  return null;
}

// Extract number of days from query
function extractDays(query: string): number | null {
  const lower = query.toLowerCase();
  if (lower.includes("1 day") || lower.includes("one day") || lower.includes("single day")) return 1;
  if (lower.includes("2 day") || lower.includes("two day") || lower.includes("weekend")) return 2;
  if (lower.includes("3 day") || lower.includes("three day")) return 3;
  if (lower.includes("4 day") || lower.includes("four day")) return 4;
  if (lower.includes("5 day") || lower.includes("five day")) return 5;

  const match = lower.match(/(\d+)\s*(?:day|days|d\b)/);
  if (match) {
    const n = parseInt(match[1], 10);
    if (n > 0 && n <= 14) return n;
  }
  return null;
}

// Extract budget amount from query
function extractBudget(query: string): number | null {
  const match = query.match(/(?:₹|rs\.?|inr|under|below|budget of)?\s*(\d{1,2},?\d{3,4}|\d{4,6})/i);
  if (match) {
    const cleanNum = match[1].replace(/,/g, "");
    const val = parseInt(cleanNum, 10);
    if (val >= 500 && val <= 500000) return val;
  }
  return null;
}

// Format currency
function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export async function processKarnavistaAIQuery(
  userInput: string,
  history: { role: "user" | "ai"; content: string }[] = []
): Promise<AIResponse> {
  const query = userInput.trim();
  const lower = query.toLowerCase();

  // Update context with detected district or retain last
  let detected = detectDistrict(query);
  if (detected) {
    sessionState.lastDistrictId = detected.id;
    sessionState.lastDistrictName = detected.name;
  } else if (sessionState.lastDistrictId) {
    detected = getDistrictById(sessionState.lastDistrictId) || null;
  }

  // Detect days & budget
  const daysDetected = extractDays(query);
  if (daysDetected) sessionState.lastDays = daysDetected;

  const budgetDetected = extractBudget(query);
  if (budgetDetected) sessionState.lastBudget = budgetDetected;

  // 1. SPECIFIC BUDGET TRIP QUERY (e.g. "budget trip to Hubli under ₹5000")
  const isBudgetQuery =
    (budgetDetected !== null || lower.includes("budget") || lower.includes("under") || lower.includes("cost") || lower.includes("affordable") || lower.includes("cheap")) &&
    (detected !== null || sessionState.lastDistrictId !== undefined);

  if (isBudgetQuery && detected) {
    sessionState.lastIntent = "budget";
    const budget = budgetDetected || sessionState.lastBudget || 5000;
    const stay = getStayByDistrict(detected.id);
    const stayPrice = stay ? stay.priceStarting : 1200;

    // Search bus route from Bengaluru or Hubballi
    const busRoute = BUS_ROUTES_DATA.find(
      r => r.toCity.toLowerCase().includes(detected!.name.toLowerCase()) ||
           r.fromCity.toLowerCase().includes(detected!.name.toLowerCase())
    );
    const busFareOneWay = busRoute ? busRoute.price : 650;
    const busFareRoundTrip = busFareOneWay * 2;
    const days = sessionState.lastDays || 2;
    const nights = Math.max(1, days - 1);
    const totalStay = stayPrice * nights;
    const foodCost = 400 * days;
    const localTravel = 350 * days;
    const totalEstimated = busFareRoundTrip + totalStay + foodCost + localTravel;
    const bufferRemaining = Math.max(0, budget - totalEstimated);

    const reply = `### 💰 Budget Trip Breakdown: ${detected.name} (${days} Days / ${nights} Night)
**Total Target Budget:** ${formatINR(budget)}

Here is a realistic, itemized breakdown for exploring **${detected.name}** while staying comfortable:

1. 🚌 **Round-Trip KSRTC/NWKRTC Bus:**
   • Typical fare: ~${formatINR(busFareOneWay)} one-way (${formatINR(busFareRoundTrip)} round-trip)
   • Services: KSRTC Rajahamsa / NWKRTC Sleeper / Airavat

2. 🏨 **Official Yaatri Niwaas Stay (${nights} Night):**
   • ${stay ? stay.name : `Yaatri Niwaas ${detected.name}`}: **${formatINR(totalStay)}** (${formatINR(stayPrice)}/night)
   • Includes sanitized linen, attached bath, 24/7 hot water, and complimentary breakfast.

3. 🍛 **Authentic Local Food & Refreshments (${days} Days):**
   • ~**${formatINR(foodCost)}** total (~₹400/day)
   • Recommended: *${detected.foodSpecialties.map(f => f.name).join(", ")}*

4. 🛺 **Local Transit & Monument Entry Fees:**
   • ~**${formatINR(localTravel)}** (Auto rickshaws, guide fees, ASI tickets)

---
**Estimated Total Cost:** **${formatINR(totalEstimated)}**
${budget >= totalEstimated
  ? `✅ **You are within budget!** You have a comfortable buffer of **${formatINR(bufferRemaining)}** for souvenirs, GI-crafts, or local sweet boxes!`
  : `💡 *Tip:* To fit strictly under ${formatINR(budget)}, opt for NWKRTC Sarige express buses (~₹420 one-way) and Yaatri Niwaas Non-AC double sharing.`}

Would you like me to book your KSRTC bus seat or view the Yaatri Niwaas rooms in ${detected.name}?`;

    return {
      reply,
      actions: [
        { label: `View ${detected.name} District`, actionType: "district", targetId: detected.id },
        { label: `Book Bus to ${detected.name}`, actionType: "transport" },
        { label: `Book Yaatri Niwaas ${detected.name}`, actionType: "stays", targetId: stay?.id }
      ]
    };
  }

  // 2. SPECIFIC ITINERARY / DAY PLAN QUERY (e.g. "what can I see in Mysuru in one day", "2 days in Coorg")
  const isItineraryQuery =
    daysDetected !== null ||
    lower.includes("itinerary") ||
    lower.includes("plan") ||
    lower.includes("one day") ||
    lower.includes("1 day") ||
    lower.includes("2 day") ||
    lower.includes("3 day") ||
    lower.includes("weekend") ||
    lower.includes("what can i see") ||
    lower.includes("places to see") ||
    lower.includes("sightseeing");

  if (isItineraryQuery && detected) {
    sessionState.lastIntent = "itinerary";
    const days = daysDetected || sessionState.lastDays || 2;
    const dests = getDestinationsByDistrict(detected.id);
    const highlights = detected.highlights;
    const stay = getStayByDistrict(detected.id);

    let scheduleText = "";
    if (days === 1) {
      scheduleText = `
• **Morning (8:30 AM - 12:30 PM):**
  Start early at **${highlights[0] || dests[0]?.name || "Main Monument"}**. Experience the historic architecture, peaceful morning courtyards, and photography before midday crowds.

• **Afternoon (1:00 PM - 3:30 PM):**
  Enjoy an authentic Karnataka lunch: taste *${detected.foodSpecialties[0]?.name || "Local Thali"}* (${detected.foodSpecialties[0]?.description || "Traditional recipe"}). Next, visit **${highlights[1] || dests[1]?.name || "Heritage Center"}**.

• **Evening (4:00 PM - 7:30 PM):**
  Head to **${highlights[2] || dests[2]?.name || "Scenic Viewpoint or Lake"}** for sunset views. Conclude with local market shopping for *${detected.cultureAndCrafts[0]?.title || "handicrafts"}*.`;
    } else {
      scheduleText = `
• **Day 1: Heritage & Iconic Landmarks**
  - **Morning:** Explore **${highlights[0] || dests[0]?.name || "Primary Heritage Site"}** — ${dests[0]?.description || "Marvel at the exquisite architecture and history."}
  - **Lunch:** Relish authentic *${detected.foodSpecialties[0]?.name || "Local Regional Meal"}*.
  - **Afternoon & Evening:** Visit **${highlights[1] || dests[1]?.name || "Historic Fort / Complex"}** and enjoy sunset at **${highlights[2] || dests[2]?.name || "Scenic Viewpoint"}**.

• **Day 2: Nature, Culture & Local Traditions**
  - **Morning:** Visit **${highlights[3] || dests[3]?.name || "Nature Spot / Waterfalls / Gardens"}** during the serene early hours.
  - **Afternoon:** Discover traditional crafts like *${detected.cultureAndCrafts[0]?.title || "Local Handicrafts"}*.
  - **Evening:** Stroll through the local bazaar for sweets and spices before your return departure.`;
    }

    const reply = `### 🗺️ Curated ${days}-Day Itinerary for ${detected.name} (${detected.kannadaName})
**Region:** ${detected.region} | **Best Season:** ${detected.bestSeason}

${scheduleText}

---
🏨 **Recommended Lodging:**
• **${stay ? stay.name : `Yaatri Niwaas ${detected.name}`}** (Starts at ${stay ? formatINR(stay.priceStarting) : "₹1,250"}/night). Clean, government-certified, right in the tourism hub.

🍲 **Must-Try Local Cuisine:**
${detected.foodSpecialties.map(f => `• **${f.name}**: ${f.description}`).join("\n")}

💡 **Insider Tip:** ${detected.travelTips[0] || "Hire an authorized KSTDC guide for the best historical narrative."}`;

    return {
      reply,
      actions: [
        { label: `Explore ${detected.name} Full Guide`, actionType: "district", targetId: detected.id },
        { label: `Book Yaatri Niwaas ${detected.name}`, actionType: "stays", targetId: stay?.id },
        { label: "Launch Custom Trip Planner", actionType: "planner" }
      ]
    };
  }

  // 3. NEARBY DESTINATIONS QUERY (e.g. "places to visit near Hampi", "what is near Badami")
  const isNearbyQuery =
    lower.includes("near") ||
    lower.includes("around") ||
    lower.includes("nearby") ||
    lower.includes("close to") ||
    lower.includes("neighbor");

  if (isNearbyQuery && detected) {
    sessionState.lastIntent = "nearby";
    const nearbyDistricts = detected.nearbyDistricts
      .map(id => getDistrictById(id))
      .filter((d): d is District => d !== undefined);

    const nearbyList = nearbyDistricts.map(nd => {
      return `• **${nd.name}** (${nd.region}): Famous for *${nd.highlights.slice(0, 2).join(" & ")}*. Recommended: ${nd.recommendedDuration}.`;
    }).join("\n");

    const reply = `### 📍 Top Destinations & Districts Near ${detected.name}
While visiting **${detected.name}**, you can easily combine your journey with these surrounding districts:

${nearbyList}

🚗 **Transit Connectivity:**
• ${detected.howToReach.road}
• ${detected.howToReach.rail}

Would you like me to map out a multi-district circuit package connecting ${detected.name} with ${nearbyDistricts[0]?.name || "nearby districts"}?`;

    const actions: AIAction[] = [
      { label: `Explore ${detected.name}`, actionType: "district", targetId: detected.id }
    ];
    if (nearbyDistricts[0]) {
      actions.push({ label: `Visit ${nearbyDistricts[0].name}`, actionType: "district", targetId: nearbyDistricts[0].id });
    }
    if (nearbyDistricts[1]) {
      actions.push({ label: `Visit ${nearbyDistricts[1].name}`, actionType: "district", targetId: nearbyDistricts[1].id });
    }

    return { reply, actions };
  }

  // 4. FOOD SPECIALTIES QUERY (e.g. "food famous in Dharwad", "what to eat in Davanagere")
  const isFoodQuery =
    lower.includes("food") ||
    lower.includes("eat") ||
    lower.includes("famous dish") ||
    lower.includes("cuisine") ||
    lower.includes("breakfast") ||
    lower.includes("sweet") ||
    lower.includes("peda") ||
    lower.includes("dosa") ||
    lower.includes("rotti") ||
    lower.includes("meal");

  if (isFoodQuery) {
    sessionState.lastIntent = "food";
    if (detected) {
      const foodItems = detected.foodSpecialties;
      const reply = `### 🍛 Authentic Culinary Specialties of ${detected.name} (${detected.kannadaName})
Karnataka's ${detected.region} is celebrated for its deep culinary traditions:

${foodItems.map(f => `• **${f.name}** ${f.isVeg ? "(🌱 Pure Veg)" : ""}\n  ${f.description}`).join("\n\n")}

${detected.travelTips[1] ? `💡 *Foodie Tip:* ${detected.travelTips[1]}` : ""}
${detected.cultureAndCrafts[0] ? `🎨 *Craft heritage to pick up:* ${detected.cultureAndCrafts[0].title} — ${detected.cultureAndCrafts[0].description}` : ""}

All Yaatri Niwaas properties in ${detected.name} feature an in-house restaurant serving hygienic, authentic versions of these local preparations!`;

      return {
        reply,
        actions: [
          { label: `View ${detected.name} Food & Attractions`, actionType: "district", targetId: detected.id },
          { label: `Book Yaatri Niwaas in ${detected.name}`, actionType: "stays" }
        ]
      };
    } else {
      // General Karnataka food query
      const reply = `### 🍽️ The Famous Flavors of Karnataka's 31 Districts
Karnataka's culinary landscape varies uniquely across its 7 regions:

• **Davanagere Benne Dosa**: Crisp, golden butter dosa prepared on wood-fire griddles, accompanied by fragrant potato palya and coconut chutney.
• **Dharwad Peda (GI-Tagged)**: Century-old caramelized milk fudge with distinctive velvety texture.
• **Coastal Karnataka (Mangaluru & Udupi)**: Neer Dosa, fiery Kundapura Ghee Roast, Kori Rotti, and steaming coastal filter coffee.
• **North Karnataka Jolada Rotti Oota (Bagalkote, Belagavi, Vijayapura)**: Sorghum flatbread with Yennegai (stuffed baby brinjal) and spicy Shenga chutney pudi.
• **Mysuru Royal Cuisine**: World-renowned melt-in-mouth Mysore Pak, Mysore Masala Dosa, and Mysore Bonda.
• **Kodava Pandi Curry & Kadambuttu (Coorg)**: Smoked pork curry seasoned with dark wild Kachampuli vinegar served with steamed rice dumplings.

Ask about any specific district to discover its authentic roadside joints and GI-certified delicacies!`;

      return {
        reply,
        actions: [
          { label: "Explore Davanagere", actionType: "district", targetId: "davanagere" },
          { label: "Explore Dharwad", actionType: "district", targetId: "dharwad" },
          { label: "Explore Udupi", actionType: "district", targetId: "udupi" }
        ]
      };
    }
  }

  // 5. TRANSIT / ROUTE QUERY (e.g. "how to travel from Bengaluru to Udupi", "bus from Hubli to Bangalore")
  const isTransportQuery =
    lower.includes("travel from") ||
    lower.includes("how to reach") ||
    lower.includes("how to go") ||
    lower.includes("bus to") ||
    lower.includes("bus from") ||
    lower.includes("route") ||
    lower.includes("ksrtc") ||
    lower.includes("nwkrtc") ||
    lower.includes("kkrtc") ||
    lower.includes("flight") ||
    lower.includes("train");

  if (isTransportQuery) {
    sessionState.lastIntent = "transport";

    // Try finding matched bus route
    let matchedRoutes = BUS_ROUTES_DATA;
    if (detected) {
      matchedRoutes = BUS_ROUTES_DATA.filter(
        r => r.toCity.toLowerCase().includes(detected!.name.toLowerCase()) ||
             r.fromCity.toLowerCase().includes(detected!.name.toLowerCase())
      );
    }

    const sampleRoute = matchedRoutes[0] || BUS_ROUTES_DATA[0];

    const reply = `### 🚌 Transit & Travel Guide: ${detected ? detected.name : "Karnataka Inter-District Routes"}

${detected ? `**Connectivity Overview:**\n• ✈️ **Air:** ${detected.howToReach.air}\n• 🚆 **Rail:** ${detected.howToReach.rail}\n• 🛣️ **Road:** ${detected.howToReach.road}\n` : ""}

**Scheduled Bus Corridors:**
• **Operator:** ${sampleRoute.operator} (${sampleRoute.serviceType})
• **Route:** ${sampleRoute.fromCity} ➔ ${sampleRoute.toCity}
• **Departure:** ${sampleRoute.departureTime} (Duration: ~${sampleRoute.duration})
• **Starting Fare:** ${formatINR(sampleRoute.price)}
• **Amenities:** ${sampleRoute.amenities.slice(0, 4).join(", ")}

Karnataka operates three state transport corporations:
• **KSRTC**: South, Coastal & Malnad districts (Bengaluru, Mysuru, Mangaluru, Udupi, Coorg)
• **NWKRTC**: North-Western districts (Hubballi, Belagavi, Bagalkote, Dharwad, Uttara Kannada)
• **KKRTC**: Kalyana Karnataka districts (Kalaburagi, Hampi/Hospet, Bidar, Ballari, Raichur)

You can view live platform departure timetables and reserve interactive seats on our Bus & Transit portal!`;

    return {
      reply,
      actions: [
        { label: "Book KSRTC / NWKRTC Bus Seats", actionType: "transport" },
        { label: "View Bus Stand Timetables", actionType: "transport" },
        ...(detected ? [{ label: `View ${detected.name} Guide`, actionType: "district" as const, targetId: detected.id }] : [])
      ]
    };
  }

  // 6. SINGLE DISTRICT OVERVIEW QUERY (e.g. "tell me about Coorg", "Hampi", "Mysuru")
  if (detected) {
    sessionState.lastIntent = "itinerary";
    const stay = getStayByDistrict(detected.id);
    const reply = `### 🌟 Welcome to ${detected.name} (${detected.kannadaName})
*"${detected.tagline}"*

**Region:** ${detected.region} | **Recommended Duration:** ${detected.recommendedDuration} | **Best Time:** ${detected.bestSeason}

${detected.shortDescription}

✨ **Top Attractions & Highlights:**
${detected.highlights.map(h => `• **${h}**`).join("\n")}

🍲 **Famous Culinary Treats:**
• ${detected.foodSpecialties.map(f => f.name).join(", ")}

🏨 **Stay:** Official Yaatri Niwaas ${detected.name} starting from ${stay ? formatINR(stay.priceStarting) : "₹1,250"}/night.

How would you like to proceed? Ask me for a **1-day or 2-day itinerary**, **budget breakdown under ₹5,000**, or **bus routes**!`;

    return {
      reply,
      actions: [
        { label: `Explore All ${detected.name} Spots`, actionType: "district", targetId: detected.id },
        { label: `Plan 2-Day ${detected.name} Trip`, actionType: "planner" },
        { label: `Book Yaatri Niwaas Stay`, actionType: "stays", targetId: stay?.id }
      ]
    };
  }

  // 7. CONTEXTUAL FOLLOW-UP (e.g. user just said "2 days" or "what about budget?" without naming district)
  if (sessionState.lastDistrictId) {
    const prevDistrict = getDistrictById(sessionState.lastDistrictId);
    if (prevDistrict) {
      if (daysDetected) {
        return processKarnavistaAIQuery(`${daysDetected} days itinerary in ${prevDistrict.name}`, history);
      }
      if (budgetDetected) {
        return processKarnavistaAIQuery(`budget trip to ${prevDistrict.name} under ${budgetDetected}`, history);
      }
    }
  }

  // 8. GENERAL / AMBIGUOUS / WELCOME QUERY (e.g. "plan a trip", "hello", "help")
  const reply = `### 🙏 Namaskara! I am YAATRI AI, your Karnataka Travel Concierge.
I have complete knowledge of **all 31 districts of Karnataka**, including World Heritage monuments, hidden beaches, hill stations, KSRTC bus timings, and authentic local food.

**Tell me how I can help you today:**
1. 🗺️ **"Plan a 2-day trip to Mysuru"** or **"What can I see in Hampi in one day?"**
2. 💰 **"Budget trip to Hubli under ₹5000"** (I'll calculate bus fares, Yaatri Niwaas lodging, and food)
3. 🍛 **"What food is famous in Dharwad and Davanagere?"**
4. 🚌 **"How to travel from Bengaluru to Udupi by bus?"**
5. 📍 **"What places can I visit near Badami or Coorg?"**

Which destination or district are you interested in exploring?`;

  return {
    reply,
    actions: [
      { label: "Explore Hampi (Vijayanagara)", actionType: "district", targetId: "vijayanagara" },
      { label: "Explore Coorg (Kodagu)", actionType: "district", targetId: "kodagu" },
      { label: "Book KSRTC Express Bus", actionType: "transport" },
      { label: "Launch Smart Trip Planner", actionType: "planner" }
    ]
  };
}

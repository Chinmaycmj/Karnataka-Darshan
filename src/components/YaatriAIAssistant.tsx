import React, { useState, useRef, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { DISTRICTS_DATA } from "../data/districts";
import { DESTINATIONS_DATA } from "../data/destinations";
import { PACKAGES_DATA } from "../data/packages";
import { STAYS_DATA } from "../data/stays";
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  MapPin, 
  ArrowRight, 
  Compass, 
  Hotel, 
  Bus, 
  RefreshCw,
  X,
  MessageSquare,
  ChevronDown
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  actions?: {
    label: string;
    actionType: "district" | "package" | "transport" | "stays" | "planner";
    targetId?: string;
  }[];
}

export const YaatriAIAssistant: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = true }) => {
  const { language, navigateToDistrict, navigateToPackage, setActiveView } = useApp();
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFloatingOpen, setIsFloatingOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessage: ChatMessage = {
    id: "welcome-msg",
    sender: "ai",
    text: language === "kn"
      ? "ನಮಸ್ಕಾರ! ನಾನು ಯಾತ್ರಿ ಮಿತ್ರ (YAATRI AI), ಕರ್ನಾಟಕ ಪ್ರವಾಸೋದ್ಯಮದ ಡಿಜಿಟಲ್ ಮಾರ್ಗದರ್ಶಿ. 31 ಜಿಲ್ಲೆಗಳ ಪ್ರೇಕ್ಷಣೀಯ ಸ್ಥಳಗಳು, ಅಧಿಕೃತ ಯಾತ್ರಿ ನಿವಾಸ, ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್ಸುಗಳು, ಅಥವಾ ಸ್ಥಳೀಯ ಪಾಕಪದ್ಧತಿಗಳ ಬಗ್ಗೆ ಏನು ತಿಳಿಯಬೇಕಿದೆ?"
      : "Namaskara! I am Yaatri AI, your smart Karnataka Tourism Assistant. Ask me anything about all 31 districts, iconic World Heritage sites, KSRTC bus bookings, Yaatri Niwaas stays, or authentic cuisine trails!",
    timestamp: "Just now",
    actions: [
      { label: "Explore Hampi (31st District)", actionType: "district", targetId: "vijayanagara" },
      { label: "Book KSRTC Express Bus", actionType: "transport" },
      { label: "Browse Yaatri Niwaas Stays", actionType: "stays" }
    ]
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const samplePrompts = [
    {
      label: "Top places in Hampi & Vijayanagara?",
      query: "What are the must visit attractions and temples in Hampi and the 31st district Vijayanagara?"
    },
    {
      label: "Authentic Food in Davanagere & Dharwad?",
      query: "What are the famous food specialties of Davanagere and Dharwad?"
    },
    {
      label: "4-Day Coffee & Western Ghats circuit?",
      query: "Plan a 4-day trip to Western Ghats, Coorg and Chikkamagaluru coffee plantations."
    },
    {
      label: "Where to stay in Badami under ₹2,000?",
      query: "Where can I find affordable official Yaatri Niwaas lodging in Badami?"
    },
    {
      label: "KSRTC buses to Gokarna & Coastal belt?",
      query: "How can I book KSRTC bus travel to Gokarna and coastal beaches?"
    }
  ];

  const generateAIResponse = (userPrompt: string): { reply: string; actions: ChatMessage["actions"] } => {
    const q = userPrompt.toLowerCase();
    const actions: ChatMessage["actions"] = [];

    // Hampi / Vijayanagara
    if (q.includes("hampi") || q.includes("vijayanagara") || q.includes("chariot") || q.includes("31st")) {
      actions.push({ label: "View Vijayanagara District", actionType: "district", targetId: "vijayanagara" });
      actions.push({ label: "View Golden Triangle Circuit", actionType: "package", targetId: "heritage-golden-triangle" });
      return {
        reply: "Vijayanagara (carved out in 2020 as Karnataka's 31st district) houses the UNESCO World Heritage monuments of Hampi! Key must-visit landmarks include:\n\n• **Vijaya Vittala Temple**: Famous for the iconic stone chariot and musical pillars.\n• **Virupaksha Temple**: Sacred active 7th-century Shiva temple with a 50m gopuram.\n• **Lotus Mahal & Elephant Stables**: Royal Zenana enclosure blending Indo-Islamic arches.\n• **Tungabhadra Dam & Japanese Garden**: Located in nearby Hosapete.\n\n*Stay Recommendation:* Yaatri Niwaas Tungabhadra Gateway offers sanitized AC rooms starting from ₹1,450/night.",
        actions
      };
    }

    // Food / Dosa / Peda / Cuisine
    if (q.includes("food") || q.includes("dosa") || q.includes("peda") || q.includes("eat") || q.includes("cuisine") || q.includes("breakfast")) {
      actions.push({ label: "Explore Davanagere District", actionType: "district", targetId: "davanagere" });
      actions.push({ label: "Explore Dharwad District", actionType: "district", targetId: "dharwad" });
      actions.push({ label: "View Coastal Odyssey", actionType: "package", targetId: "coastal-karnataka-odyssey" });
      return {
        reply: "Karnataka boasts some of India's most celebrated culinary traditions across its 7 regions:\n\n• **Davanagere Benne Dosa**: Extremely crisp golden dosa slathered in fresh country butter, served with spicy aloo palya and fresh coconut chutney.\n• **Dharwad Peda (GI)**: Century-old caramelized milk delicacy from Dharwad.\n• **Mangaluru & Udupi**: Neer Dosa, Mangalore Ghee Roast, Kori Rotti, and steaming Udupi Sambar.\n• **North Karnataka Jolada Rotti Oota**: Sorghum flatbread with stuffed brinjal (Yennegai) and shenga chutney.\n• **Kodava Pandi Curry & Kadambuttu**: Traditional smoked pepper pork curry with steamed rice balls in Coorg.",
        actions
      };
    }

    // Coorg / Chikkamagaluru / Western Ghats / Coffee / Hills
    if (q.includes("coorg") || q.includes("kodagu") || q.includes("chikkamagaluru") || q.includes("coffee") || q.includes("ghats") || q.includes("mullayanagiri")) {
      actions.push({ label: "Western Ghats & Coffee Trail", actionType: "package", targetId: "western-ghats-coffee-trail" });
      actions.push({ label: "Explore Chikkamagaluru", actionType: "district", targetId: "chikkamagaluru" });
      actions.push({ label: "Explore Kodagu (Coorg)", actionType: "district", targetId: "kodagu" });
      return {
        reply: "For an unforgettable Western Ghats and Coffee expedition, we recommend a 4-Day circuit:\n\n• **Day 1-2: Chikkamagaluru**: Trek to Mullayanagiri (Karnataka's highest peak at 1,930m), visit the birthplace of Indian coffee at Baba Budangiri, and enjoy Malnad filter coffee.\n• **Day 3-4: Kodagu (Coorg)**: Tour organic spice plantations, marvel at Abbey Falls, and visit Dubare Elephant Camp along the Cauvery River.\n\n*Best Season:* September to March for misty mornings and pleasant weather.",
        actions
      };
    }

    // Badami / Chalukya / Pattadakal / Aihole / Bagalkote
    if (q.includes("badami") || q.includes("bagalkote") || q.includes("pattadakal") || q.includes("aihole") || q.includes("cave")) {
      actions.push({ label: "Explore Bagalkote District", actionType: "district", targetId: "bagalkote" });
      actions.push({ label: "Grand Chalukyan Package", actionType: "package", targetId: "grand-chalukya-empire" });
      actions.push({ label: "Book Yaatri Niwaas Badami", actionType: "stays" });
      return {
        reply: "Bagalkote district is the Cradle of Indian Temple Architecture:\n\n• **Badami Cave Temples**: Four 6th-century rock-cut shrines carved into sheer red sandstone cliffs overlooking the holy Agastya Lake.\n• **Pattadakal UNESCO Site**: 7th-8th century riverside monument showcasing Nagara and Dravidian temple styles.\n• **Aihole Complex**: Over 125 stone temples including the famous apsidal Durga Temple.\n\n*Lodging:* The official Yaatri Niwaas Badami offers clean standard AC & Non-AC rooms starting from ₹1,250/night.",
        actions
      };
    }

    // Buses / KSRTC / NWKRTC / Transport / Transit / Timetable / Hubballi
    if (q.includes("bus") || q.includes("ksrtc") || q.includes("nwkrtc") || q.includes("kkrtc") || q.includes("timetable") || q.includes("schedule") || q.includes("stand") || q.includes("hubballi") || q.includes("airavat") || q.includes("transport") || q.includes("seat") || q.includes("fare") || q.includes("ticket")) {
      actions.push({ label: "Search & Book Buses", actionType: "transport" });
      actions.push({ label: "View Bus Stand Timetables", actionType: "transport" });
      return {
        reply: "Yaatri Niwaas integrates directly with Karnataka's state transport corporations across all 31 districts:\n\n• **NWKRTC (HQ Hubballi)**: 950+ daily express departures connecting Hubballi (Hosur & Gokul Rd CBS) to Belagavi, Gokarna, Karwar, Mangaluru, Bengaluru, Bagalkote, and Vijayapura.\n• **KSRTC (South & Coastal)**: Bengaluru Majestic KBS, Mysuru Suburb CBS, and Mangaluru Bejai terminals.\n• **KKRTC (Kalyana Karnataka)**: Kalaburagi, Hospete (Hampi), Bidar, and Ballari corridors.\n\n*Features:* Check official daily bus stand departure boards with platform bay numbers, live fares, or select your seats interactively!",
        actions
      };
    }

    // Beach / Gokarna / Murudeshwara / Coastal
    if (q.includes("beach") || q.includes("gokarna") || q.includes("murudeshwara") || q.includes("coast") || q.includes("udupi") || q.includes("sea")) {
      actions.push({ label: "Coastal Karnataka Odyssey", actionType: "package", targetId: "coastal-karnataka-odyssey" });
      actions.push({ label: "Explore Uttara Kannada", actionType: "district", targetId: "uttara-kannada" });
      actions.push({ label: "Explore Udupi District", actionType: "district", targetId: "udupi" });
      return {
        reply: "Karnataka's 320 km coastline offers pristine shores, temple towns, and water adventures:\n\n• **Gokarna (Om Beach)**: Serene coves in the shape of the sacred 'Om' and the 4th-century Mahabaleshwara temple.\n• **Murudeshwara**: Towering 123-foot Lord Shiva statue by the sea with a 20-story Rajagopuram.\n• **St. Mary's Island (Malpe)**: World-famous hexagonal volcanic basalt rock formations accessible by ferry.\n• **Panambur Beach (Mangaluru)**: Golden sunsets, jet skiing, and camel rides.",
        actions
      };
    }

    // Stays / Hotel / Yaatri Niwaas
    if (q.includes("stay") || q.includes("hotel") || q.includes("room") || q.includes("niwaas") || q.includes("lodging") || q.includes("resort")) {
      actions.push({ label: "View All 31 Yaatri Niwaas Stays", actionType: "stays" });
      return {
        reply: "The official Yaatri Niwaas network operates in every single one of Karnataka's 31 districts! Every property features:\n\n• Standardized government-regulated tariffs starting from ₹850 to ₹1,450/night.\n• 24/7 hot water, power backup, and sanitized linen.\n• In-house authentic Pure Vegetarian restaurants serving local recipes.\n• KSRTC bus stand shuttle coordination.\n\nClick below to browse stays across all districts or filter by region and price!",
        actions
      };
    }

    // Default general assistant reply
    actions.push({ label: "Use Smart Custom Planner", actionType: "planner" });
    actions.push({ label: "Browse 31 Districts", actionType: "district" });
    return {
      reply: `I can help you explore Karnataka's 31 districts, find certified Yaatri Niwaas lodging, book KSRTC bus seats, or plan an all-inclusive multi-district tour circuit!\n\nTry asking about:\n• **Specific Districts** (e.g. Mysuru Palace, Hampi, Badami, Jog Falls, Bidar Fort)\n• **Travel Circuits** (Coastal Odyssey, Western Ghats, Chalukya Golden Trail)\n• **Authentic Dining** (Benne Dosa, Dharwad Peda, Udupi meals)\n• **Transit Options** (KSRTC Airavat, EV buses, route fares)`,
      actions
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputQuery).trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text,
      timestamp: "Just now"
    };

    setMessages(prev => [...prev, userMessage]);
    setInputQuery("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAIResponse(text);
      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: response.reply,
        timestamp: "Just now",
        actions: response.actions
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (action: NonNullable<ChatMessage["actions"]>[0]) => {
    if (action.actionType === "district" && action.targetId) {
      navigateToDistrict(action.targetId);
    } else if (action.actionType === "package" && action.targetId) {
      navigateToPackage(action.targetId);
    } else if (action.actionType === "transport") {
      setActiveView("transport");
    } else if (action.actionType === "stays") {
      setActiveView("stays");
    } else if (action.actionType === "planner") {
      setActiveView("planner");
    } else {
      setActiveView("districts");
    }
  };

  const handleResetChat = () => {
    setMessages([initialMessage]);
  };

  // Render either embedded home card or floating drawer
  return (
    <div className={`w-full ${isEmbedded ? "" : "relative"}`}>
      <div className="bg-white rounded-3xl shadow-xl border border-amber-200/90 overflow-hidden flex flex-col transition-all">
        
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-amber-950 font-black shadow-md">
              <Sparkles className="w-5 h-5 text-amber-950 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-extrabold text-base sm:text-lg tracking-wide text-white">
                  YAATRI AI • ಯಾತ್ರಿ ಮಿತ್ರ
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Assistant
                </span>
              </div>
              <p className="text-[11px] text-amber-200/80">
                Official 31-District Karnataka Tourism Smart Concierge
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetChat}
              title="Reset Conversation"
              className="p-2 rounded-xl text-amber-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Sample Prompts Bar */}
        <div className="bg-amber-50/70 border-b border-amber-100 px-4 sm:px-6 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider whitespace-nowrap flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-600" /> Suggestions:
          </span>
          {samplePrompts.map((sp, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(sp.query)}
              className="px-3 py-1 rounded-xl text-xs font-semibold bg-white text-slate-700 border border-amber-200/80 hover:bg-amber-100 hover:text-amber-900 hover:border-amber-300 whitespace-nowrap shadow-2xs transition-all shrink-0"
            >
              {sp.label}
            </button>
          ))}
        </div>

        {/* Chat Messages Log */}
        <div className="p-4 sm:p-6 space-y-4 h-80 sm:h-96 overflow-y-auto bg-slate-50/50">
          {messages.map((msg) => {
            const isUser = msg.sender === "user";
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-amber-700 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Bot className="w-4 h-4 text-amber-200" />
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[75%] space-y-2`}>
                  <div
                    className={`p-4 rounded-2xl text-xs leading-relaxed ${
                      isUser
                        ? "bg-amber-800 text-white rounded-tr-xs shadow-md font-medium"
                        : "bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs shadow-sm"
                    }`}
                  >
                    <div className="whitespace-pre-line">
                      {msg.text}
                    </div>
                  </div>

                  {/* Action Link Pills inside AI reply */}
                  {!isUser && msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {msg.actions.map((act, i) => (
                        <button
                          key={i}
                          onClick={() => handleActionClick(act)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold border border-amber-300 shadow-2xs transition-all hover:scale-105"
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="w-3 h-3 text-amber-700" />
                        </button>
                      ))}
                    </div>
                  )}

                  <span className={`text-[10px] text-slate-400 block ${isUser ? "text-right" : "text-left"}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-slate-700 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Typing Animation */}
          {isTyping && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-8 h-8 rounded-xl bg-amber-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Bot className="w-4 h-4 text-amber-200 animate-spin" />
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder={language === "kn" ? "ಕರ್ನಾಟಕ ಪ್ರವಾಸದ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆ ಕೇಳಿ..." : "Ask YAATRI AI about any district, temple, bus route, or stay..."}
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isTyping}
              className={`p-3 rounded-2xl text-white font-bold transition-all shadow-md flex items-center justify-center ${
                inputQuery.trim() && !isTyping
                  ? "bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 shadow-amber-800/30 cursor-pointer"
                  : "bg-slate-300 cursor-not-allowed"
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
            <span>Powered by Official Karnataka Tourism 31-District Knowledge Engine</span>
            <span>Bilingual English / ಕನ್ನಡ Support</span>
          </div>
        </div>

      </div>
    </div>
  );
};

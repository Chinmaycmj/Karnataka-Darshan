import React, { useState, useRef, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { processKarnavistaAIQuery, resetSessionState, AIAction } from "../services/karnavistaAI";
import { KarnavistaLogo } from "../components/KarnavistaLogo";
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  ArrowRight, 
  RefreshCw, 
  ArrowLeft,
  MapPin,
  Compass,
  Bus,
  Hotel
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  actions?: AIAction[];
}

export const AIAssistantPage: React.FC = () => {
  const { 
    language, 
    setActiveView, 
    navigateToDistrict, 
    navigateToPackage, 
    navigateToTransport,
    navigateToMapDistrict 
  } = useApp();

  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialMessage: ChatMessage = {
    id: "welcome-msg",
    sender: "ai",
    text: language === "kn"
      ? "ನಮಸ್ಕಾರ! ನಾನು YAATRI AI, ನಿಮ್ಮ ಕರ್ನಾಟಕ ಪ್ರವಾಸ ಸಹಾಯಕ. 31 ಜಿಲ್ಲೆಗಳು, ವಿಶ್ವ ಪರಂಪರೆ ತಾಣಗಳು, 1-ದಿನದ ಅಥವಾ 2-ದಿನಗಳ ಪ್ರವಾಸ ಯೋಜನೆಗಳು, ಬಜೆಟ್ ಲೆಕ್ಕಾಚಾರ, ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್ ಮಾರ್ಗಗಳು ಅಥವಾ ಸ್ಥಳೀಯ ಪಾಕಪದ್ಧತಿಗಳ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆ ಕೇಳಿ!"
      : "Namaskara! I am YAATRI AI, your dedicated Karnataka Travel Assistant.\n\nAsk me anything about all 31 districts, day-by-day itineraries, budget breakdowns under ₹5,000, KSRTC bus routes, official Yaatri Niwaas stays, or authentic local food!",
    timestamp: "Just now",
    actions: [
      { label: "🗺️ View Hampi on Map", actionType: "map", targetId: "vijayanagara" },
      { label: "Explore Coorg (Kodagu)", actionType: "district", targetId: "kodagu" },
      { label: "Book KSRTC Express Bus", actionType: "transport" },
      { label: "Launch Smart Trip Planner", actionType: "planner" }
    ]
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    inputRef.current?.focus();
  }, []);

  const samplePrompts = [
    {
      label: "Plan a 2-day trip to Mysuru",
      query: "Plan a 2-day trip to Mysuru with places, stay and food."
    },
    {
      label: "Explore Hampi",
      query: "What can I see in Hampi in one day?"
    },
    {
      label: "Best places to visit in Coorg",
      query: "What are the best places to visit in Coorg (Kodagu)?"
    },
    {
      label: "Plan a budget trip from Bengaluru",
      query: "Plan a budget trip to Hubli under ₹5000 from Bengaluru."
    },
    {
      label: "Places to visit in North Karnataka",
      query: "What are the best heritage places to visit in North Karnataka?"
    },
    {
      label: "Famous food in Karnataka",
      query: "What food is famous in Dharwad and Davanagere?"
    },
    {
      label: "Give me a 1-day itinerary for Shivamogga",
      query: "Give me a 1-day itinerary for Shivamogga and Jog Falls."
    },
    {
      label: "Which Karnataka districts are best for a weekend trip?",
      query: "Which Karnataka districts are best for a 2-day weekend trip from Bengaluru?"
    }
  ];

  const handleSendMessage = async (textToSend?: string) => {
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

    try {
      const history = messages.map(m => ({
        role: m.sender,
        content: m.text
      }));

      const response = await processKarnavistaAIQuery(text, history);

      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: response.reply,
        timestamp: "Just now",
        actions: response.actions
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error("AI Error:", err);
      const fallbackMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: "I can help you explore any of Karnataka's 31 districts, book KSRTC bus routes, find Yaatri Niwaas accommodations, or plan day-by-day itineraries. Please ask about a specific destination like Mysuru, Hampi, or Coorg!",
        timestamp: "Just now",
        actions: [
          { label: "🗺️ View Hampi on Map", actionType: "map", targetId: "vijayanagara" },
          { label: "Explore Coorg", actionType: "district", targetId: "kodagu" }
        ]
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionClick = (action: AIAction) => {
    if (action.actionType === "map" && action.targetId) {
      navigateToMapDistrict(action.targetId);
    } else if (action.actionType === "district" && action.targetId) {
      navigateToDistrict(action.targetId);
    } else if (action.actionType === "package" && action.targetId) {
      navigateToPackage(action.targetId);
    } else if (action.actionType === "transport") {
      navigateToTransport();
    } else if (action.actionType === "stays") {
      setActiveView("stays");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (action.actionType === "planner") {
      setActiveView("planner");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setActiveView("districts");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleResetChat = () => {
    resetSessionState();
    setMessages([initialMessage]);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-20">
      
      {/* Top Header Banner */}
      <section className="bg-[#032B43] text-white border-b border-[#073B5C] pt-8 pb-10 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setActiveView("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer backdrop-blur-md border border-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to KARNAVISTA</span>
            </button>

            <button
              onClick={handleResetChat}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-blue-200 hover:text-white text-xs font-semibold transition-all cursor-pointer border border-white/15"
              title="Reset conversation"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Clear Chat</span>
            </button>
          </div>

          {/* Title and Subtitle */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D99A24]/20 border border-[#D99A24]/40 text-[#D99A24] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D99A24]" />
              <span>Official AI Travel Assistant</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>YAATRI AI</span>
              <span className="text-[#D99A24] text-2xl sm:text-4xl">✨</span>
            </h1>

            <p className="text-base sm:text-lg text-blue-100 font-medium">
              Your Karnataka Travel Assistant
            </p>

            <p className="text-xs sm:text-sm text-blue-200/80 font-light max-w-2xl">
              Ask anything about Karnataka travel — all 31 districts, custom itineraries, budget trips, KSRTC bus routes, verified Yaatri Niwaas stays, and authentic culinary trails.
            </p>
          </div>

        </div>
      </section>

      {/* Main Conversation Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col min-h-[650px]">
          
          {/* Quick Suggested Prompts */}
          <div className="bg-[#EAF5FA] border-b border-blue-100 p-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#032B43] uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D99A24]" />
              <span>Suggested Questions:</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {samplePrompts.map((sp, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(sp.query)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white text-slate-700 border border-blue-200/80 hover:bg-[#073B5C] hover:text-white hover:border-[#073B5C] whitespace-nowrap shadow-2xs transition-all shrink-0 cursor-pointer"
                >
                  {sp.label}
                </button>
              ))}
            </div>
          </div>

          {/* Conversation Stream */}
          <div className="p-4 sm:p-8 space-y-6 flex-1 overflow-y-auto bg-slate-50/40">
            {messages.map((msg) => {
              const isUser = msg.sender === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 sm:gap-4 ${isUser ? "justify-end" : "justify-start"}`}
                >
                  {!isUser && (
                    <div className="w-9 h-9 rounded-2xl bg-[#073B5C] text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                      <Bot className="w-5 h-5 text-[#D99A24]" />
                    </div>
                  )}

                  <div className="max-w-[88%] sm:max-w-[80%] space-y-2">
                    <div
                      className={`p-4 sm:p-5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        isUser
                          ? "bg-[#073B5C] text-white rounded-tr-xs shadow-md font-medium"
                          : "bg-white text-slate-800 border border-slate-200 rounded-tl-xs shadow-xs"
                      }`}
                    >
                      <div className="whitespace-pre-line space-y-2">
                        {msg.text}
                      </div>
                    </div>

                    {/* Interactive Action Pills */}
                    {!isUser && msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {msg.actions.map((act, i) => {
                          const isMapAction = act.actionType === "map";
                          return (
                            <button
                              key={i}
                              onClick={() => handleActionClick(act)}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold shadow-2xs transition-all hover:scale-105 cursor-pointer ${
                                isMapAction
                                  ? "bg-[#032B43] text-[#D99A24] border border-[#D99A24]/50 hover:bg-[#073B5C]"
                                  : "bg-blue-50 hover:bg-[#0B5E8E] text-[#073B5C] hover:text-white border border-blue-200"
                              }`}
                            >
                              <span>{act.label}</span>
                              <ArrowRight className="w-3 h-3 text-[#D99A24]" />
                            </button>
                          );
                        })}
                      </div>
                    )}

                    <span className={`text-[10px] text-slate-400 block px-1 ${isUser ? "text-right" : "text-left"}`}>
                      {msg.timestamp}
                    </span>
                  </div>

                  {isUser && (
                    <div className="w-9 h-9 rounded-2xl bg-slate-700 text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                      <User className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Animation */}
            {isTyping && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-9 h-9 rounded-2xl bg-[#073B5C] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Bot className="w-5 h-5 text-[#D99A24] animate-spin" />
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#073B5C] animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#073B5C] animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#073B5C] animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Input Bar */}
          <div className="p-4 sm:p-5 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-3"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask about districts, places, food, routes or itineraries..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                className="flex-1 px-5 py-3.5 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0B5E8E] focus:bg-white transition-all placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isTyping}
                className={`px-5 py-3.5 rounded-2xl text-white font-bold transition-all shadow-md flex items-center justify-center gap-1.5 ${
                  inputQuery.trim() && !isTyping
                    ? "bg-[#073B5C] hover:bg-[#032B43] shadow-blue-900/30 cursor-pointer"
                    : "bg-slate-300 cursor-not-allowed"
                }`}
              >
                <span>Send</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
            
            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 mt-3 px-1 gap-1">
              <span>Powered by KARNAVISTA 31-District Knowledge Base</span>
              <span>Connected with Real Interactive Geographic Map</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

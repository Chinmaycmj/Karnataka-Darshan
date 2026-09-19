import React, { useState, useRef, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { processKarnavistaAIQuery, resetSessionState, AIAction } from "../services/karnavistaAI";
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  ArrowRight, 
  RefreshCw
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  actions?: AIAction[];
}

export const YaatriAIAssistant: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = true }) => {
  const { language, navigateToDistrict, navigateToPackage, setActiveView } = useApp();
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const initialMessage: ChatMessage = {
    id: "welcome-msg",
    sender: "ai",
    text: language === "kn"
      ? "ನಮಸ್ಕಾರ! ನಾನು ಯಾತ್ರಿ ಮಿತ್ರ (YAATRI AI), ಕರ್ನಾಟಕ ಪ್ರವಾಸೋದ್ಯಮದ ಡಿಜಿಟಲ್ ಮಾರ್ಗದರ್ಶಿ. 31 ಜಿಲ್ಲೆಗಳ ಪ್ರೇಕ್ಷಣೀಯ ಸ್ಥಳಗಳು, ಅಧಿಕೃತ ಯಾತ್ರಿ ನಿವಾಸ, ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್ಸುಗಳು, ಅಥವಾ ಸ್ಥಳೀಯ ಪಾಕಪದ್ಧತಿಗಳ ಬಗ್ಗೆ ಏನು ತಿಳಿಯಬೇಕಿದೆ?"
      : "Namaskara! I am YAATRI AI, your Karnataka Travel Assistant. Ask me anything about all 31 districts, 1-day or 2-day itineraries, budget breakdowns under ₹5,000, KSRTC bus routes, or local food!",
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

  // Listen for 'open-yaatri-ai' event dispatched by Navbar
  useEffect(() => {
    const handleOpenAssistant = () => {
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        inputRef.current?.focus();
      }, 400);
    };

    window.addEventListener("open-yaatri-ai", handleOpenAssistant);
    return () => window.removeEventListener("open-yaatri-ai", handleOpenAssistant);
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
      label: "Best places in Coorg",
      query: "What are the best places to visit in Coorg (Kodagu)?"
    },
    {
      label: "Budget trip from Bengaluru",
      query: "Plan a budget trip to Hubli under ₹5000 from Bengaluru."
    },
    {
      label: "Famous food in Karnataka",
      query: "What food is famous in Dharwad and Davanagere?"
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
          { label: "Explore Hampi", actionType: "district", targetId: "vijayanagara" },
          { label: "Bus & Transit Portal", actionType: "transport" }
        ]
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionClick = (action: AIAction) => {
    if (action.actionType === "district" && action.targetId) {
      navigateToDistrict(action.targetId);
    } else if (action.actionType === "package" && action.targetId) {
      navigateToPackage(action.targetId);
    } else if (action.actionType === "transport") {
      setActiveView("transport");
      window.scrollTo({ top: 0, behavior: "smooth" });
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
    <div ref={containerRef} id="yaatri-ai-assistant-container" className={`w-full ${isEmbedded ? "" : "relative"}`}>
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col transition-all">
        
        {/* Chat Header: Deep Navy & Royal Gold Theme */}
        <div className="bg-[#032B43] px-6 py-4 text-white flex items-center justify-between border-b border-[#073B5C]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D99A24] to-[#B87D14] flex items-center justify-center text-slate-950 font-black shadow-md">
              <Sparkles className="w-5 h-5 text-slate-950 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-extrabold text-base sm:text-lg tracking-wide text-white">
                  YAATRI AI
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                </span>
              </div>
              <p className="text-[11px] text-blue-200/90 font-medium">
                Your Karnataka Travel Assistant • Official 31 Districts Concierge
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetChat}
              title="Reset Conversation"
              className="p-2 rounded-xl text-blue-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Sample Prompts Bar */}
        <div className="bg-[#EAF5FA] border-b border-blue-100 px-4 sm:px-6 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-bold text-[#032B43] uppercase tracking-wider whitespace-nowrap flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#D99A24]" /> Suggested:
          </span>
          {samplePrompts.map((sp, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(sp.query)}
              className="px-3 py-1 rounded-xl text-xs font-semibold bg-white text-slate-700 border border-blue-200/80 hover:bg-[#073B5C] hover:text-white hover:border-[#073B5C] whitespace-nowrap shadow-2xs transition-all shrink-0 cursor-pointer"
            >
              {sp.label}
            </button>
          ))}
        </div>

        {/* Chat Messages Log */}
        <div className="p-4 sm:p-6 space-y-4 h-80 sm:h-96 overflow-y-auto bg-slate-50/60">
          {messages.map((msg) => {
            const isUser = msg.sender === "user";
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-[#073B5C] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Bot className="w-4 h-4 text-[#D99A24]" />
                  </div>
                )}

                <div className="max-w-[85%] sm:max-w-[78%] space-y-2">
                  <div
                    className={`p-4 rounded-2xl text-xs leading-relaxed ${
                      isUser
                        ? "bg-[#073B5C] text-white rounded-tr-xs shadow-md font-medium"
                        : "bg-white text-slate-800 border border-slate-200 rounded-tl-xs shadow-xs"
                    }`}
                  >
                    <div className="whitespace-pre-line space-y-1">
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
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-[#0B5E8E] text-[#073B5C] hover:text-white text-xs font-bold border border-blue-200 shadow-2xs transition-all hover:scale-105 cursor-pointer"
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="w-3 h-3 text-[#D99A24]" />
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
              <div className="w-8 h-8 rounded-xl bg-[#073B5C] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Bot className="w-4 h-4 text-[#D99A24] animate-spin" />
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#073B5C] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#073B5C] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#073B5C] animate-bounce" style={{ animationDelay: "300ms" }} />
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
              ref={inputRef}
              type="text"
              placeholder="Ask about districts, places, food, routes or itineraries..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0B5E8E] focus:bg-white transition-all placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isTyping}
              className={`p-3 rounded-2xl text-white font-bold transition-all shadow-md flex items-center justify-center ${
                inputQuery.trim() && !isTyping
                  ? "bg-[#073B5C] hover:bg-[#032B43] shadow-blue-900/30 cursor-pointer"
                  : "bg-slate-300 cursor-not-allowed"
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
            <span>Powered by KARNAVISTA 31-District Knowledge Engine</span>
            <span>Accurate Bus Routes • Verified Yaatri Niwaas • Local Food</span>
          </div>
        </div>

      </div>
    </div>
  );
};

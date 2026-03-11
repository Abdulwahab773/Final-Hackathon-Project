"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useRef, useEffect } from "react";

export default function AIHealthCheckerPage() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: "Hello! I'm your AI health assistant. I can help you understand your symptoms and provide general health guidance.",
      type: "text"
    },
    {
      role: "ai",
      content: "What symptoms are you experiencing today?",
      type: "chips",
      chips: ["Headache", "Fever", "Back Pain", "Cough"]
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulated AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        role: "ai",
        content: "I understand you're feeling some discomfort. Based on your description, it could be related to common strain or seasonal changes. \n\n**Recommendation:** \n- Rest and stay hydrated. \n- Monitor your temperature. \n- If symptoms persist, please consult a specialist.",
        type: "text"
      }]);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-background-dark font-display transition-colors duration-300">
      <Navbar />

      <main className="flex-1 flex flex-col w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* Minimalist Header */}
        <div className="mb-8 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">AI Health Assistant</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Describe your symptoms for instant guidance</p>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
          
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar"
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-500`}
              >
                <div className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-3.5 shadow-sm text-sm md:text-base leading-relaxed ${
                  msg.role === "user" 
                  ? "bg-primary text-white font-medium" 
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700"
                }`}>
                  <p className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-primary dark:text-blue-400">$1</span>') }}></p>
                  
                  {msg.type === "chips" && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {msg.chips.map(chip => (
                        <button 
                          key={chip}
                          onClick={() => {
                            setInput(chip);
                          }}
                          className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-all active:scale-95"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Minimalist Input Area */}
          <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <form onSubmit={handleSend} className="relative flex items-center gap-3">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-4 text-sm md:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                placeholder="Type your symptoms here..."
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="size-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100"
              >
                <span className="material-symbols-outlined !text-2xl font-icon">send</span>
              </button>
            </form>
            <p className="text-[10px] text-center text-slate-400 font-medium mt-4 uppercase tracking-widest">
              Information provided is for educational purposes only.
            </p>
          </div>
        </div>

        {/* Emergency Alert - Minimalist */}
        <div className="mt-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 flex items-center gap-4">
          <span className="material-symbols-outlined text-amber-500 !text-xl font-icon">warning</span>
          <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold leading-relaxed">
            In case of medical emergency, please call your local emergency services immediately.
          </p>
        </div>

      </main>

      <Footer />

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.05); border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); }
      `}</style>
    </div>
  );
}

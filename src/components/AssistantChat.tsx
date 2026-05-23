import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, User, ArrowRight } from 'lucide-react';
import { ChatMessage } from '../types';

export default function AssistantChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Hello! I am Mark Elking\'s virtual twin. I can answer questions about my technical skills, Magento 2 optimizations, Laravel integrations, and active e-commerce implementations. What would you like to know?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'What is your main expertise?',
    'Tell me about TrailReadyParts',
    'Do you work with Node.js & React?',
    'Are you available for projects?'
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            text: m.text
          }))
        })
      });

      if (!response.ok) {
        throw new Error('Inquiry processing failed');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'model', text: data.text }]);
    } catch (e: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: 'Apologies, I encountered a minor signal loss. Please ensure your backend is correctly responsive, or try again shortly!'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        id="ai-coach-fab"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-tr from-primary-accent to-secondary-accent text-white shadow-xl shadow-primary-accent/30 hover:scale-105 transition-all flex items-center gap-2 group cursor-pointer"
      >
        <div className="relative">
          <Bot size={22} className="relative z-10" />
          <Sparkles size={12} className="absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
        </div>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-sans font-semibold text-sm whitespace-nowrap">
          Chat with Mark's AI
        </span>
      </button>

      {/* Floating Chat Panel */}
      {isOpen && (
        <div
          id="ai-assistant-modal"
          className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-32px)] h-[550px] rounded-2xl border border-border-glass bg-void/95 shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-primary-accent/20 to-secondary-accent/20 border-b border-border-glass flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-white flex items-center gap-1.5">
                  Mark Elking Twin
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </h4>
                <p className="text-[10px] font-mono text-gray-400">Powered by Gemini 3.5</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages list */}
          <div
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto space-y-4 font-sans text-sm scrollbar-thin"
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 max-w-[85%] ${
                  m.role === 'user' ? 'ml-auto flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    m.role === 'user'
                      ? 'bg-secondary-accent text-void'
                      : 'bg-primary-accent/20 text-primary-light border border-primary-accent/40'
                  }`}
                >
                  {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>

                <div
                  className={`p-3 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-secondary-accent/10 border border-secondary-accent/30 text-secondary-light'
                      : 'bg-white/5 border border-white/10 text-gray-200'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-7 h-7 rounded-full bg-primary-accent/20 text-primary-light border border-primary-accent/40 flex items-center justify-center">
                  <Bot size={14} />
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-light rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-primary-light rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-primary-light rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts Panel */}
          {messages.length === 1 && (
            <div className="p-4 pt-0 space-y-2 border-t border-white/5 bg-void/50">
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-2">Quick inquiries:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(p)}
                    className="text-xs bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-2.5 py-1 rounded-full border border-white/10 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>{p}</span>
                    <ArrowRight size={10} className="opacity-60" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input field form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-3 bg-white/5 border-t border-border-glass flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-grow bg-white/5 border border-white/10 focus:border-secondary-accent/50 focus:ring-1 focus:ring-secondary-accent/25 rounded-xl px-3 py-2 text-white font-sans text-xs outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-tr from-primary-accent to-secondary-accent disabled:opacity-50 text-white cursor-pointer hover:brightness-110 transition-all flex items-center justify-center flex-shrink-0"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

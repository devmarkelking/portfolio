import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, MessageSquareCode, UsersRound, Terminal, CheckCircle2 } from 'lucide-react';
import { ME_PROFILE } from '../data';

interface ContactProps {
  theme: 'dark' | 'light';
}

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  status: 'Received' | 'Refining-Response' | 'Processed';
}

export default function Contact({ theme }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string | null>(null);
  
  // Real-time terminal log for received messages
  const [logs, setLogs] = useState<Message[]>([]);

  const fetchLogs = async () => {
    try {
      const res = await fetch('/api/contact/messages');
      if (res.ok) {
        const data = await res.json();
        setLogs(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000); // refresh lists every 5s
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSubmitResult('SUCCESS_DISPATCHED');
        setName('');
        setEmail('');
        setMessage('');
        fetchLogs();
      } else {
        setSubmitResult('ERROR_DISPATCH_FAILED');
      }
    } catch (err) {
      setSubmitResult('ERROR_DISPATCH_FAILED');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (theme === 'dark') {
    return (
      <section id="contact" className="py-28 px-6 bg-void max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        
        <div className="glass-card p-8 sm:p-14 rounded-none border border-white/10 relative z-10 select-none bg-black/45">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left information columns */}
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[#F27D26] font-mono text-[10px] uppercase tracking-[0.3em] font-black p-1.5 bg-[#F27D26]/10 border border-[#F27D26]/20 w-fit rounded-none">
                  ESTABLISH CHANNELS
                </span>
                <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white leading-none">Let's build the future together</h2>
                <div className="w-20 h-[2px] bg-[#F27D26] mt-2" />
                <p className="font-sans text-gray-400 text-sm leading-relaxed max-w-md font-light">Looking for a technical partner, custom e-commerce architect, or just want to discuss code namespaces? My inbox is always open.</p>
              </div>

              <div className="space-y-6">
                {/* Email line */}
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-none bg-[#F27D26]/10 border border-[#F27D26]/20 flex items-center justify-center text-[#F27D26] group-hover:bg-[#F27D26] group-hover:text-black transition-all shadow-md">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email</span>
                    <a href={`mailto:${ME_PROFILE.email}`} className="text-white hover:text-[#F27D26] transition-colors font-sans text-sm font-semibold">{ME_PROFILE.email}</a>
                  </div>
                </div>

                {/* Geography Location */}
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-none bg-white/5 border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all shadow-md">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] font-bold text-gray-400 uppercase tracking-wider">Location</span>
                    <span className="text-white font-sans text-sm font-semibold">{ME_PROFILE.location}</span>
                  </div>
                </div>
              </div>

              {/* Received message telemetry log */}
              <div className="space-y-3 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 font-mono text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  <Terminal size={12} className="text-[#F27D26]" />
                  <span>Communication Queue Logs</span>
                </div>
                
                <div className="h-[120px] rounded-none bg-black/60 border border-white/10 p-3.5 overflow-y-auto scrollbar-thin text-[11px] font-mono space-y-1.5 select-text text-gray-300">
                  {logs.length === 0 ? (
                    <div className="text-gray-500">// Queue idle. Messages appear here live.</div>
                  ) : (
                    logs.map((log, idx) => (
                      <div key={log.id || idx} className="border-b border-white/5 pb-1 flex justify-between gap-2.5">
                        <span className="text-gray-400 truncate max-w-[120px]">&gt; {log.name}:</span>
                        <span className="flex-1 truncate text-gray-300">{log.message}</span>
                        <span className={`text-[9px] font-bold px-1 rounded-none ${
                          log.status === 'Processed' ? 'bg-emerald-500/10 text-emerald-400' :
                          log.status === 'Refining-Response' ? 'bg-amber-500/10 text-amber-400' : 'bg-[#F27D26]/10 text-[#F27D26]'
                        }`}>
                          {log.status === 'Processed' ? 'SENT' :
                           log.status === 'Refining-Response' ? 'LOGGED' : 'QUEUE'}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>

            {/* Right form submission element */}
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block font-sans text-[10px] font-bold text-gray-300 uppercase tracking-widest font-mono">Your Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                      className="w-full bg-white/5 border-b border-white/25 focus:border-[#F27D26] focus:ring-0 text-white font-sans text-sm p-3 outline-none transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block font-sans text-[10px] font-bold text-gray-300 uppercase tracking-widest font-mono">Email Address</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white/5 border-b border-white/25 focus:border-[#F27D26] focus:ring-0 text-white font-sans text-sm p-3 outline-none transition-all"
                    />
                  </div>

                </div>

                {/* Message container */}
                <div className="space-y-2">
                  <label className="block font-sans text-[10px] font-bold text-gray-300 uppercase tracking-widest font-mono">Your Message</label>
                  <textarea 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-white/5 border-b border-white/25 focus:border-[#F27D26] focus:ring-0 text-white font-sans text-sm p-3 outline-none transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-none font-mono font-bold tracking-widest text-xs uppercase bg-[#F27D26] text-black hover:bg-[#ffa664] shadow-xl shadow-[#F27D26]/10 flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50 transition-all duration-300"
                >
                  {isSubmitting ? 'Transmitting Module...' : 'Send Message'}
                  <Send size={13} />
                </button>

                {submitResult === 'SUCCESS_DISPATCHED' && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs rounded-none flex items-center gap-2.5">
                    <CheckCircle2 size={14} />
                    <span>Transaction logged successfully! Check communication logs queue.</span>
                  </div>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>
    );
  }

  // Light theme matching 3rd image blocks exactly!
  return (
    <section id="contact" className="py-16 px-6 max-w-7xl mx-auto bg-[#fafbfc]">
      
      {/* Header */}
      <div className="mb-12 border-b border-[#F27D26] pb-3 flex items-center justify-between">
        <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-slate-800">&lt;/CONTACT&gt;</h2>
        <span className="text-[10px] font-mono text-slate-400 hidden">MARK_MAIL_CONTRIBUTIONS_XML</span>
      </div>

      <div className="max-w-xl mx-auto bg-white border border-slate-200 p-8 sm:p-12 rounded-none shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-12 space-y-6">
            <h3 className="font-display text-xl font-extrabold text-[#070709] tracking-tight uppercase">Let's build the future together.</h3>
            <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
              Feel free to reach out if you're looking for a developer, have a question, or simply want to connect.
            </p>

            <div className="space-y-4 font-sans text-xs">
              <div className="flex items-center gap-3">
                <Mail className="text-[#F27D26] flex-shrink-0" size={16} />
                <div>
                  <span className="block text-slate-400 font-bold uppercase tracking-wider text-[9px]">Email</span>
                  <a href={`mailto:${ME_PROFILE.email}`} className="font-bold text-slate-800 hover:underline">{ME_PROFILE.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#F27D26] flex-shrink-0" size={16} />
                <div>
                  <span className="block text-slate-400 font-bold uppercase tracking-wider text-[9px]">Contact #</span>
                  <span className="font-bold text-slate-800">+639-918-189-311</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#F27D26] flex-shrink-0" size={16} />
                <div>
                  <span className="block text-slate-400 font-bold uppercase tracking-wider text-[9px]">Location</span>
                  <span className="font-bold text-slate-800">{ME_PROFILE.location}</span>
                </div>
              </div>
            </div>
            
            {/* Direct messages indicator */}
            <div className="bg-slate-50 border border-slate-150 p-4 rounded-none font-mono text-[10px] space-y-1 hidden">
              <span className="text-[#F27D26] font-extrabold block">// Active Session logs</span>
              <span>Inquiries stored: {logs.length} logged rows.</span>
            </div>
            <button 
                type="submit" 
                onClick={() =>
                  window.location.href =
                    `mailto:${email}?subject=Portfolio Inquiry`
                }
                className="w-32 py-3 rounded-none bg-slate-900 hover:bg-[#F27D26] hover:text-black font-mono font-bold tracking-widest text-xs uppercase text-white transition-all cursor-pointer shadow-md shadow-slate-900/10 active:scale-[0.99] disabled:opacity-50 duration-300"
              >
                Say Hello!
            </button>
          </div>


        </div>
      </div>
    </section>
  );
}

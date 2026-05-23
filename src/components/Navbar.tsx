import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
  activeSection: string;
}

export default function Navbar({ theme, setTheme, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScroll = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 w-full z-40 h-20 transition-all ${
      theme === 'dark' 
        ? 'backdrop-blur-lg border-b border-white/10 bg-void/70' 
        : 'backdrop-blur-lg border-b border-slate-200 bg-white/70'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        {/* Brand Name */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleScroll('#home'); }}
          className={`font-display text-xl font-black tracking-widest uppercase transition-colors ${
            theme === 'dark' ? 'text-white hover:text-primary-accent' : 'text-slate-900 hover:text-primary-accent'
          }`}
        >
          DEVMARKELKING
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 font-mono text-xs uppercase tracking-widest font-bold">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleScroll(item.href); }}
                  className={`relative pb-1.5 transition-colors ${
                    active 
                      ? (theme === 'dark' ? 'text-[#F27D26]' : 'text-[#F27D26]')
                      : (theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-950')
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                      theme === 'dark' ? 'bg-[#F27D26]' : 'bg-[#F27D26]'
                    }`} />
                  )}
                </a>
              );
            })}
          </div>

          {/* Theme switcher inside header */}

          {/* <ThemeToggle theme={theme} setTheme={setTheme} /> */}

          {/* Call to action button */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}
            className={`hidden lg:flex items-center gap-1 px-4 py-2 rounded-sm font-mono font-bold text-xs shadow-md transition-all border ${
              theme === 'dark'
                ? 'border-[#F27D26] text-[#F27D26] hover:bg-[#F27D26] hover:text-black shadow-[#F27D26]/5'
                : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white shadow-slate-900/5'
            }`}
          >
            Get in Touch
            <ArrowUpRight size={13} />
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          {/*<ThemeToggle theme={theme} setTheme={setTheme} /> */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 rounded-lg border transition-colors ${
              theme === 'dark' 
                ? 'border-white/10 text-white hover:bg-white/5' 
                : 'border-slate-200 text-slate-800 hover:bg-slate-100'
            }`}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className={`absolute top-20 left-0 w-full p-6 border-b transition-all flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200 ${
          theme === 'dark' 
            ? 'bg-void/98 border-white/10 text-white' 
            : 'bg-white/98 border-slate-200 text-slate-900'
        }`}>
          <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest font-bold">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleScroll(item.href); }}
                className={`py-2 px-3 rounded-none text-xs transition-colors ${
                  activeSection === item.id 
                    ? 'bg-[#F27D26]/10 text-[#F27D26] font-bold border-l-2 border-[#F27D26]'
                    : (theme === 'dark' ? 'hover:bg-white/5 text-gray-300' : 'hover:bg-slate-50 text-slate-700')
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}
            className={`hidden w-full text-center py-2.5 rounded-sm text-xs font-mono font-bold tracking-widest uppercase shadow-sm border ${
              theme === 'dark'
                ? 'border-[#F27D26] text-[#F27D26] hover:bg-[#F27D26]'
                : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
            }`}
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}

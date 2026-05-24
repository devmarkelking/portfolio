import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AssistantChat from './components/AssistantChat';

export default function App() {
  const [theme, setTheme] = useState<'light'>('light');
  const [activeSection, setActiveSection] = useState('home');

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'light';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Persist theme choice details on change
  const handleSetTheme = (newTheme: 'light') => {
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  // Scroll spy effect to light up correct navigation points dynamically
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${
      theme === 'dark' 
        ? 'bg-[#070709] text-white selection:bg-primary-accent/30 selection:text-white' 
        : 'bg-[#fafbfc] text-slate-800 selection:bg-cyan-100 selection:text-slate-900'
    }`}>
      {/* Dynamic Header */}
      <Navbar theme={theme} setTheme={handleSetTheme} activeSection={activeSection} />

      {/* Main Core Views */}
      <main className="relative">
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </main>

      {/* Floating Gemini Agent Digital Twin Chat */}
      <AssistantChat />

      {/* Footer layout */}
      <footer className={`py-12 px-6 border-t font-sans text-xs transition-colors ${
        theme === 'dark' 
          ? 'bg-[#0a0a0c] border-white/5 text-gray-500' 
          : 'bg-slate-100 border-slate-200 text-slate-500'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-mono text-[10px] uppercase tracking-wider">Engineered by Mark Elking</p>
          </div>
          
          <div className="flex gap-6 font-medium text-center">
            <span>© 2026</span>
            <span>Based in {theme === 'dark' ? '🌌 Cosmic Space' : '📍 Manila, PH'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

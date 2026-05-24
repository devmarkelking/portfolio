import React from 'react';
import { Sun, Moon, Terminal } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light';
  setTheme: (t: 'light') => void;
}

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  return (
    <div className="flex items-center gap-1.5 p-1 rounded-lg border border-border-glass bg-white/5 backdrop-blur-md">
      <button
        id="theme-btn-dark"
        onClick={() => setTheme('dark')}
        className={`px-3 py-1.5 rounded text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
          theme === 'dark'
            ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/20'
            : 'text-gray-400 hover:text-white'
        }`}
        title="Editorial Dark Theme"
      >
        <Moon size={13} />
        <span>Editorial Dark</span>
      </button>

      <button
        id="theme-btn-light"
        onClick={() => setTheme('light')}
        className={`px-3 py-1.5 rounded text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
          theme === 'light'
            ? 'bg-black text-white shadow-md'
            : 'text-gray-300 hover:text-white'
        }`}
        title="Editorial Light Theme"
      >
        <Sun size={13} className={theme === 'light' ? 'animate-spin-slow' : ''} />
        <span>Editorial Light</span>
      </button>
    </div>
  );
}

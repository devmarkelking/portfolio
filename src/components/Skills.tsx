import React from 'react';
import { SKILL_CATEGORIES } from '../data';
import { Terminal, Laptop, Database, Cpu, ShieldCheck } from 'lucide-react';

interface SkillsProps {
  theme: 'light';
}

export default function Skills({ theme }: SkillsProps) {
  // Common vector icons for the light grid to ensure clean loading under all circumstances
  const lightSkillsGrid = [
    { name: 'HTML5', color: '#E34F26', src: '/images/htmllogo.png' },
    { name: 'CSS3', color: '#1572B6', src: '/images/csslogo.png' },
    { name: 'JavaScript', color: '#F7DF1E', src: '/images/jslogo.png' },
    { name: 'Laravel', color: '#FF2D20', src: '/images/laravel.png' },
    { name: 'Magento 2', color: '#F16022', src: '/images/magento.png' },
    { name: 'GitHub', color: '#181717', src: '/images/githublogo.png' },
    { name: 'Git', color: '#F05032', src: '/images/gitlogo.png' },
    { name: 'React', color: '#61DAFB', src: '/images/reactlogo.png' },
    { name: 'Node.js', color: '#339933', src: '/images/node.png' },
    { name: 'Next.js', color: '#000000', src: '/images/nextlogo.png' },
    { name: 'WordPress', color: '#21759B', src: '/images/wordpress.png' },
    { name: 'Claude Ai', color: '#EE4326', src: '/images/claude-ai.png' },
    { name: 'PHP', color: '#777BB4', src: '/images/php.png' },
    { name: 'TypeScript', color: '#3178C6', src: '/images/typescript.png' },
    { name: 'Tailwind CSS', color: '#06B6D4', src: '/images/tailwind.png' },
  ];

  if (theme === 'dark') {
    return (
      <section id="skills" className="py-28 px-6 bg-void border-t border-white/5 relative">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-16 relative z-10 selection:bg-[#F27D26] selection:text-black">
          <div className="text-center space-y-4">
            <span className="text-[#F27D26] font-mono text-[10px] uppercase tracking-[0.3em] font-black p-1.5 bg-[#F27D26]/10 border border-[#F27D26]/20 w-fit mx-auto rounded-none">
              PROFESSIONAL STANDARDS
            </span>
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white leading-none">Technical Arsenal</h2>
            <div className="w-20 h-[2px] bg-[#F27D26] mx-auto mt-2" />
            <p className="font-sans text-gray-400 text-sm max-w-lg mx-auto font-light">A comprehensive suite of tools for the modern scalable web.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Backend Column Card */}
            <div className="glass-card p-8 rounded-none space-y-8 border border-white/10 glow-orange-hover select-none bg-black/40">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-none bg-[#F27D26]/10 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26]">
                  <Terminal size={18} />
                </div>
                <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">Backend Mastery</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILL_CATEGORIES[0].skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-[#F27D26]/5 border border-[#F27D26]/25 hover:border-[#F27D26]/60 rounded-none font-mono text-xs font-semibold text-[#F27D26] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend Column Card */}
            <div className="glass-card p-8 rounded-none space-y-8 border border-white/10 glow-orange-hover select-none bg-black/40">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-none bg-white/5 border border-white/15 flex items-center justify-center text-white">
                  <Laptop size={18} />
                </div>
                <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">Frontend Craft</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILL_CATEGORIES[1].skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-white/5 border border-white/15 hover:border-white/40 rounded-none font-mono text-xs font-semibold text-gray-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Infrastructure Column Card */}
            <div className="glass-card p-8 rounded-none space-y-8 border border-white/10 glow-orange-hover select-none bg-black/40">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-none bg-white/5 border border-white/15 flex items-center justify-center text-gray-400">
                  <Database size={18} />
                </div>
                <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">Infrastructure & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILL_CATEGORIES[2].skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-white/5 border border-white/15 hover:border-white/40 rounded-none font-mono text-xs font-semibold text-gray-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }

  // Light theme matching 3rd image exactly!
  return (
    <section id="skills" className="py-16 px-6 max-w-7xl mx-auto bg-[#fafbfc]">
      
      {/* Title with orange border line */}
      <div className="mb-12 border-b border-[#F27D26] pb-3 flex items-center justify-between">
        <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-slate-800">&lt;/SKILLS&gt;</h2>
        <span className="hidden text-[10px] font-mono text-slate-400">ENGINE_TECHNOLOGY_MAP_TS</span>
      </div>

      <div className="space-y-8 select-none">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-905 bg-slate-100 border border-slate-200 py-1.5 px-4 rounded-none w-fit mx-auto font-extrabold shadow-sm">
            Tech Stack
          </p>
        </div>

        {/* 15 Custom Boxes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {lightSkillsGrid.map((skill, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/90 hover:border-[#F27D26]/75 rounded-none p-5 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 relative group"
            >
              {/* Colored Badge icon simulation */}
              <div 
                className="w-12 h-12 rounded-none flex items-center justify-center font-mono font-extrabold text-sm group-hover:scale-105 transition-all"
              >
                <img src={skill.src} alt={skill.name} />
              </div>
              
              <span className="font-sans font-bold text-xs text-slate-700 tracking-tight group-hover:text-slate-950">
                {skill.name}
              </span>
              
              {/* Faint indicator */}
              <div className="absolute right-2 top-2 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#F27D26] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

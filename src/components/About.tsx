import React from 'react';
import { ME_PROFILE } from '../data';
import { Check, Award, Compass, Zap } from 'lucide-react';

interface AboutProps {
  theme: 'light';
}

export default function About({ theme }: AboutProps) {
  const avatarUrl = "/images/black.png";

  if (theme === 'dark') {
    return (
      <section id="about" className="py-28 px-6 max-w-7xl mx-auto border-t border-white/5 bg-void">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Moody Grayscale Portrait */}
          <div className="relative group overflow-hidden">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-accent/10 to-transparent blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <img 
              alt="Mark Elking Moody Portrait" 
              src={avatarUrl}
              className="relative rounded-sm w-full h-[480px] object-cover grayscale opacity-95 group-hover:grayscale-0 filter hover:contrast-105 transition-all duration-700 shadow-xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Description biography & key statistics panel */}
          <div className="space-y-8 select-none">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-black flex items-center gap-1.5 p-1.5 bg-[#F27D26]/10 text-[#F27D26] w-fit rounded-none border border-[#F27D26]/20">
                <Compass size={11} className="text-[#F27D26]" />
                BIOGRAPHICAL SUMMARY
              </span>
              <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white leading-none">The Architect behind the code</h2>
              <div className="w-20 h-[2px] bg-[#F27D26]" />
            </div>

            <div className="space-y-5 font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              <p>{ME_PROFILE.bio}</p>
              <p>{ME_PROFILE.bioDetailed}</p>
            </div>

            {/* Glass metrics scorecard block */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="glass-card p-5 rounded-none text-center border border-white/10 glow-orange-hover">
                <span className="block font-display text-3xl font-extrabold text-[#F27D26]">{ME_PROFILE.yearsExp}</span>
                <span className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-wider">Years Exp</span>
              </div>
              <div className="glass-card p-5 rounded-none text-center border border-white/10 glow-orange-hover">
                <span className="block font-display text-3xl font-extrabold text-white">{ME_PROFILE.projectsCount}</span>
                <span className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-wider">Projects</span>
              </div>
              <div className="glass-card p-5 rounded-none text-center border border-white/10 glow-orange-hover">
                <span className="block font-display text-3xl font-extrabold text-gray-400">{ME_PROFILE.satisfaction}</span>
                <span className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-wider">Satisfaction</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }

  // Light theme - matches custom 3rd image exactly!
  return (
    <section id="about" className="py-16 px-6 max-w-7xl mx-auto bg-[#fafbfc]">
      
      {/* Title with Orange bottom line spanning wide */}
      <div className="mb-12 border-b border-[#F27D26] pb-3 flex items-center justify-between">
        <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-slate-800">&lt;/ABOUT ME&gt;</h2>
        <span className="hidden text-[10px] font-mono text-slate-400">MARK_PROFILE_INDEX_MD</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Bullet details of experience */}
        <div className="lg:col-span-7 space-y-6">
          <p className="hidden font-sans text-slate-600 leading-relaxed text-sm">
          </p>
          
          <ul className="space-y-4">
            {[
              "6+ Years of Professional Web Development Experience",
              "Strong expertise in PHP, Magento 2, Laravel, CodeIgniter, and WordPress",
              "Experienced in Frontend and Backend Development",
              "Skilled in Custom Module Development, API Integration, and System Optimization",
              "Currently expanding my expertise in Node.js and Next.js"
            ].map((bullet, idx) => (
              <li key={idx} className="flex gap-3 items-start p-2 rounded hover:bg-slate-50 transition-colors">
                <div className="w-5 h-5 rounded-none bg-[#F27D26]/10 border border-[#F27D26]/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#F27D26]">
                  <Check size={12} className="stroke-[3]" />
                </div>
                <span className="font-sans text-sm text-slate-800 font-medium">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="hidden grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            <div className="flex gap-2.5 items-center">
              <Award className="text-[#F27D26]" size={18} />
              <div>
                <span className="block font-sans text-xs text-slate-400">Core Specialty</span>
                <span className="font-sans text-xs font-bold text-slate-800">Magento 2 Checkout API</span>
              </div>
            </div>
            <div className="flex gap-2.5 items-center">
              <Zap className="text-[#F27D26]" size={18} />
              <div>
                <span className="block font-sans text-xs text-slate-400">Clean Standards</span>
                <span className="font-sans text-xs font-bold text-slate-800">PSR-12 PHP Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Square Border Framed Portrait */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] aspect-[4/5] bg-white border border-slate-200 rounded-none p-2 shadow-md">
            <img 
              alt="Mark Elking" 
              src={avatarUrl}
              className="w-full h-full object-cover rounded-none filter contrast-[1.02] brightness-100"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

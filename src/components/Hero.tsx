import React from 'react';
import { ArrowRight, Code, Terminal, Layers, Star } from 'lucide-react';
import { ME_PROFILE } from '../data';

interface HeroProps {
  theme: 'light';
}

export default function Hero({ theme }: HeroProps) {
  const handleScroll = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (theme === 'dark') {
    return (
      <section 
        id="home" 
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-6 py-24 bg-void overflow-hidden"
      >
        {/* Ambient background grid pattern and Editorial radial gradient */}
        <div className="absolute inset-0 grid-pattern pointer-events-none z-0" />
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-gradient-to-br from-[#F27D26]/10 to-transparent rounded-full blur-3xl opacity-35 z-0" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-3xl opacity-20 z-0" />

        {/* Absolute Floating Badges with Editorial stark borders */}
        <div className="absolute top-1/4 left-10 lg:left-24 opacity-35 hidden lg:block animate-bounce [animation-duration:6s]">
          <div className="glass-card px-4 py-2 rounded-none flex items-center gap-2 border border-white/10 shadow-lg bg-black/60">
            <span className="text-[#F27D26] font-mono text-xs font-bold uppercase tracking-wider">PHP 8.3</span>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-12 lg:right-24 opacity-35 hidden lg:block animate-bounce [animation-duration:7s]">
          <div className="glass-card px-4 py-2 rounded-none flex items-center gap-2 border border-white/10 shadow-lg bg-black/60">
            <span className="text-white font-mono text-xs font-bold uppercase tracking-wider">Magento 2.4</span>
          </div>
        </div>

        <div className="absolute top-1/3 right-1/4 opacity-25 hidden lg:block animate-bounce [animation-duration:8s]">
          <div className="glass-card px-4 py-2 rounded-none flex items-center gap-2 border border-white/10 shadow-lg bg-black/60">
            <span className="text-gray-400 font-mono text-xs font-bold uppercase tracking-wider">Laravel 11</span>
          </div>
        </div>

        <div className="max-w-4xl space-y-8 relative z-10 select-none">
          {/* Stark Work Status badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-[#F27D26]/10 border border-[#F27D26]/30 text-[#F27D26] font-mono font-bold text-xs tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F27D26] animate-pulse"></span>
            Available for New Projects
          </span>

          {/* Slogan */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] max-w-3xl mx-auto">
            Senior PHP & <span className="text-[#F27D26]">Magento 2</span> Developer
          </h1>

          {/* Description */}
          <p className="font-sans text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            {ME_PROFILE.tagline}
          </p>

          {/* Action trigger buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => handleScroll('#contact')}
              className="px-8 py-3.5 rounded-sm font-mono font-bold text-xs uppercase tracking-widest bg-[#F27D26] text-black hover:bg-[#ffa664] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#F27D26]/10 cursor-pointer"
            >
              Get in Touch
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => handleScroll('#projects')}
              className="px-8 py-3.5 rounded-sm font-mono font-bold text-xs uppercase tracking-widest bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              View Projects
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Light theme matching the 3rd image exactly!
  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-16 bg-[#fafbfc]"
    >
      <div className="absolute inset-0 grid-pattern-light pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column Text details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex gap-1 items-center font-mono text-sm text-cyan-600 font-semibold bg-cyan-50/60 px-3 py-1 rounded-full border border-cyan-100">
            <span>&lt; Hello, Kamusta! &gt; I'm</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            {ME_PROFILE.name}
          </h1>

          <h2 className="font-sans text-2xl sm:text-3xl font-medium tracking-tight text-slate-700 max-w-lg border-b-2 border-cyan-500 pb-3">
            I Design & Code for the Web
          </h2>

          <div className="space-y-4 max-w-xl">
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Web Developer with 6+ years of experience building web applications, webpages, and e-commerce websites. Experienced in both frontend and backend development.
            </p>
            <p className="font-sans text-slate-500 text-xs sm:text-sm font-medium">
              ✓ Highly specialized in Magento 2 custom extensions, API optimization, and secure checkout frameworks.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => handleScroll('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold text-sm px-6 py-3 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Let's Talk
            </button>
            <button
              onClick={() => handleScroll('#projects')}
              className="border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 font-sans font-semibold text-sm px-6 py-3 rounded-lg transition-all active:scale-95 cursor-pointer"
            >
              View my work
            </button>
          </div>
        </div>

        {/* Right Column Custom Vector Art illustration representation */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-[420px] aspect-square bg-slate-100/60 rounded-3xl p-6 border border-slate-200 shadow-inner flex flex-col justify-between overflow-hidden">
            {/* Top Bar simulating a browser window frame */}
            <div className="flex justify-between items-center bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              </div>
              <span className="font-mono text-[9px] text-slate-400 select-none">mark-elking-checkout-module.php</span>
              <Terminal size={12} className="text-slate-400" />
            </div>

            {/* Custom Interactive code layout representation */}
            <div className="my-4 flex-1 flex flex-col justify-center space-y-3 font-mono text-[11px] text-slate-600 leading-relaxed bg-white/70 border border-slate-150 rounded-2xl p-4 shadow-sm relative">
              <div className="text-blue-600 font-bold">&lt;?php</div>
              <div className="pl-3">
                <span className="text-gray-400">// Checkout optimization</span><br />
                <span className="text-purple-600">class</span> <span className="text-amber-600">EnterpriseCheckout</span> &#123;
              </div>
              <div className="pl-6 bg-slate-100/50 rounded p-1.5 border-l-2 border-cyan-500 font-bold">
                <span className="text-purple-600">public function</span> <span className="text-blue-500">accelerateStore</span>() &#123;<br />
                <span className="pl-3 text-cyan-700">$this</span>-&gt;varnish-&gt;primeHeaders();<br />
                <span className="pl-3 text-emerald-600">return</span> <span className="text-cyan-700">true</span>;<br />
                &#125;
              </div>
              <div className="pl-3">&#125;</div>

              <div className="hidden absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-[9px] py-0.5 px-2 rounded-full border border-yellow-200 flex items-center gap-1">
                <Star size={9} className="fill-yellow-600" />
                <span>Magento V2 Certified</span>
              </div>
            </div>

            {/* Bottom floating technical metrics */}
            <div className="hidden grid grid-cols-3 gap-2.5 mt-auto">
              <div className="bg-white border border-slate-200 rounded-xl p-2 text-center shadow-sm">
                <span className="block font-mono text-cyan-600 font-bold text-sm">PHP</span>
                <span className="text-[9px] font-sans text-slate-400">7+ Years</span>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-2 text-center shadow-sm">
                <span className="block font-mono text-cyan-600 font-bold text-sm">M2</span>
                <span className="text-[9px] font-sans text-slate-400">Expert</span>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-2 text-center shadow-sm">
                <span className="block font-mono text-cyan-600 font-bold text-sm">REACT</span>
                <span className="text-[9px] font-sans text-slate-400">Headless</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

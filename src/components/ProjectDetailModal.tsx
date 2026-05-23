import React from 'react';
import { X, ExternalLink, ShieldAlert, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  theme: 'dark' | 'light';
}

export default function ProjectDetailModal({ project, onClose, theme }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-void/85 backdrop-blur-xl flex justify-center items-center p-4 sm:p-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className={`w-full max-w-4xl rounded-none overflow-hidden border shadow-2xl transition-all relative ${
          theme === 'dark' 
            ? 'bg-[#0a0a0c] border-white/10 text-white' 
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Absolute Close triggers */}
        <button 
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-none border transition-all z-10 hover:scale-105 cursor-pointer ${
            theme === 'dark' 
              ? 'border-white/10 hover:bg-white/15 text-gray-300' 
              : 'border-slate-300 hover:bg-slate-100 text-slate-800'
          }`}
        >
          <X size={16} />
        </button>

        {/* Hero banner representing project screenshot with overlays */}
        <div className="relative aspect-video max-h-[360px] w-full overflow-hidden border-b border-white/5">
          <img 
            alt={project.title} 
            src={project.imageUrl} 
            className="w-full h-full object-cover brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent flex items-end p-8">
            <div className="space-y-2">
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-none bg-[#F27D26]/15 text-[#F27D26] border border-[#F27D26]/30">
                {project.category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white leading-none pt-2">{project.title}</h3>
            </div>
          </div>
        </div>

        {/* Content detail segments */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-thin">
          
          {/* Grid panel for long description and stats summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wider font-bold border-b border-[#F27D26]/20 pb-2">Project Narrative</h4>
              <p className={`font-sans text-sm leading-relaxed font-light ${
                theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
              }`}>
                {project.longDescription}
              </p>
            </div>
            
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wider font-bold border-b border-[#F27D26]/20 pb-2">Key Metrics</h4>
              <div className="space-y-2">
                {project.stats?.map((st, i) => (
                  <div 
                    key={i} 
                    className={`flex justify-between items-center px-4 py-2.5 rounded-none border ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-wider">{st.label}</span>
                    <span className="font-mono text-xs font-black text-[#F27D26]">{st.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/20 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left bullet list of features */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#F27D26]" />
                Key Capabilities Delivered
              </h4>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex gap-2 items-start font-sans text-xs font-light">
                    <ChevronRight size={14} className="text-[#F27D26] mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right code/architecture structure breakdown */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-1.5">
                <Terminal size={15} className="text-[#F27D26]" />
                Architectural Breakdown
              </h4>
              <div className={`p-4 rounded-none border font-mono text-xs leading-relaxed ${
                theme === 'dark' 
                  ? 'bg-black/60 border-white/15 text-gray-300' 
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}>
                {project.architectureDetails}
              </div>
            </div>
          </div>

          {/* Links bottom frame */}
          <div className="border-t border-slate-200/15 pt-6 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-none border ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10 text-gray-400' 
                      : 'bg-slate-100 border-slate-200 text-slate-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F27D26] hover:bg-[#ffa664] rounded-none text-black font-mono font-bold text-xs uppercase tracking-widest transition-colors duration-300 shadow-md shadow-[#F27D26]/10 cursor-pointer"
              >
                Launch Storefront
                <ExternalLink size={12} />
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ExternalLink, Link2, Code2, ArrowRight } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';

interface ProjectsProps {
  theme: 'dark' | 'light';
}

export default function Projects({ theme }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenDetails = (proj: Project, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedProject(proj);
  };

  if (theme === 'dark') {
    return (
      <section id="projects" className="py-28 px-6 bg-void max-w-7xl mx-auto border-t border-white/5">
        <div className="space-y-16">
          
          {/* Header block with side link right */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 select-none">
            <div className="space-y-4">
              <span className="text-[#F27D26] font-mono text-[10px] uppercase tracking-[0.3em] font-black p-1.5 bg-[#F27D26]/10 border border-[#F27D26]/20 w-fit rounded-none">
                CURATED CASE STUDIES
              </span>
              <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white leading-none">Featured Projects</h2>
              <div className="w-20 h-[2px] bg-[#F27D26] mt-2" />
              <p className="font-sans text-gray-400 text-sm max-w-lg font-light">A curation of high-performance e-commerce and business systems.</p>
            </div>
            
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); setSelectedProject(PROJECTS[0]); }}
              className="text-[#F27D26] hover:text-white flex items-center gap-2 transition-colors font-mono tracking-widest text-[10px] uppercase font-bold cursor-pointer group pb-1 border-b border-[#F27D26]/25 hover:border-white"
            >
              Explore All Projects 
              <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Grid Layout Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((proj, idx) => (
              <div 
                key={proj.id}
                onClick={(e) => handleOpenDetails(proj, e)}
                className="glass-card rounded-none overflow-hidden group border border-white/10 select-none cursor-pointer bg-black/40"
              >
                {/* Image container aspects */}
                <div className="relative overflow-hidden aspect-video border-b border-white/5">
                  <img 
                    alt={proj.title} 
                    src={proj.imageUrl} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover visual controls */}
                  <div className="absolute inset-0 bg-void/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button 
                      onClick={(e) => handleOpenDetails(proj, e)}
                      className="bg-black/90 text-[#F27D26] border border-[#F27D26]/30 p-3 rounded-none hover:bg-[#F27D26] hover:text-black transition-all cursor-pointer"
                    >
                      <Link2 size={16} />
                    </button>
                    <button 
                      onClick={(e) => handleOpenDetails(proj, e)}
                      className="bg-black/90 text-white border border-white/20 p-3 rounded-none hover:bg-white hover:text-black transition-all cursor-pointer"
                    >
                      <Code2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Card description details footer */}
                <div className="p-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.slice(0, 2).map((tg, i) => (
                      <span 
                        key={i}
                        className={`text-[9px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-none border ${
                          i === 0 
                            ? 'bg-[#F27D26]/10 text-[#F27D26] border-[#F27D26]/25' 
                            : 'bg-white/5 text-gray-300 border-white/10'
                        }`}
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F27D26] transition-colors">{proj.title}</h3>
                  <p className="font-sans text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">{proj.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Immersive technical details drawer overlay */}
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          theme={theme} 
        />
      </section>
    );
  }

  // Light theme matching custom Image 2 & 3 lists exactly!
  return (
    <section id="projects" className="py-16 px-6 max-w-7xl mx-auto bg-[#fafbfc]">
      
      {/* Structural Header */}
      <div className="mb-12 border-b border-[#F27D26] pb-3 flex items-center justify-between">
        <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-slate-800">&lt;/PROJECTS&gt;</h2>
        <span className="hidden text-[10px] font-mono text-slate-400">MARK_EXPERIMENT_PORTFOLIO_XML</span>
      </div>

      {/* Block Layouts List */}
      <div className="space-y-12 max-w-5xl mx-auto select-none">
        {PROJECTS.map((proj) => (
          <div 
            key={proj.id}
            className="rounded-none border border-slate-200 bg-white hover:bg-slate-50/50 p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center hover:shadow-lg transition-all group"
          >
            {/* Left Column Image Screen inside border */}
            <div className="w-full md:w-5/12 aspect-video rounded-none overflow-hidden border border-slate-205 flex-shrink-0 shadow-sm bg-slate-100">
              <img 
                alt={proj.title} 
                src={proj.imageUrl} 
                className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Column details */}
            <div className="w-full md:w-7/12 space-y-4">
              <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight uppercase">
                {proj.title}
              </h3>
              
              <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                {proj.description}
              </p>

              {/* Badges details mapped */}
              <div className="flex flex-wrap gap-2 pt-1">
                {proj.tags.slice(0, 4).map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-[9px] font-mono font-bold uppercase tracking-wider bg-slate-900 text-white px-2.5 py-0.5 rounded-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View detail action triggering modal screen overlay */}
              <div className="pt-3">
                <button
                  onClick={(e) => handleOpenDetails(proj, e)}
                  className="font-mono text-[#F27D26] hover:text-slate-950 border-b-2 border-[#F27D26] hover:border-slate-950 text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1 uppercase tracking-wider"
                >
                  View Live Page
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        theme={theme} 
      />
    </section>
  );
}

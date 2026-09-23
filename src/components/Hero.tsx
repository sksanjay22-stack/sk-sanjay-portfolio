import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Code, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroPortrait } from './HeroPortrait';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:py-0 flex items-center justify-center overflow-hidden tech-grid">
      
      {/* Interactive 3D WebGL Background Scene */}
      <Hero3DCanvas mousePos={mousePos} />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Text Content & CTAs (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-6 shadow-lg shadow-indigo-950/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{PORTFOLIO_DATA.candidate.badge}</span>
            </div>

            {/* Small Label */}
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold mb-3">
              <Terminal size={16} className="text-cyan-400" />
              <span>{PORTFOLIO_DATA.candidate.label}</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
              S K <span className="gradient-accent">SANJAY</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-indigo-200 mb-6 flex items-center gap-2">
              <span>{PORTFOLIO_DATA.candidate.subheading}</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
              {PORTFOLIO_DATA.candidate.supportingText}
            </p>

            {/* Key Quick Facts for Recruiters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 w-full max-w-xl">
              <div className="glass-panel p-3 rounded-xl border-white/5">
                <div className="text-xs text-gray-400 font-mono">DEGREE</div>
                <div className="text-sm font-semibold text-white">B.E. CSE</div>
                <div className="text-[11px] text-cyan-400 font-mono">2024–2028</div>
              </div>
              <div className="glass-panel p-3 rounded-xl border-white/5">
                <div className="text-xs text-gray-400 font-mono">INSTITUTION</div>
                <div className="text-sm font-semibold text-white">PPG Institute</div>
                <div className="text-[11px] text-indigo-400 font-mono">Coimbatore</div>
              </div>
              <div className="glass-panel p-3 rounded-xl border-white/5 col-span-2 sm:col-span-1">
                <div className="text-xs text-gray-400 font-mono">FOCUS AREA</div>
                <div className="text-sm font-semibold text-white">Software & AI</div>
                <div className="text-[11px] text-emerald-400 font-mono">Python / JS / SQL</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-indigo-200 bg-indigo-950/60 border border-indigo-500/40 hover:bg-indigo-900/80 hover:border-cyan-400/60 shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Download size={16} />
                <span>DOWNLOAD RESUME</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all"
              >
                <Mail size={16} />
                <span>CONTACT ME</span>
              </button>
            </div>

          </div>

          {/* RIGHT: Authentic Portrait with Floating Glass Frame (Col 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroPortrait mousePos={mousePos} />
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-gray-400 pointer-events-none">
        <span>SCROLL TO EXPLORE</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>

    </section>
  );
};

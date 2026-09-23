import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroPortraitProps {
  mousePos: { x: number; y: number };
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ mousePos }) => {
  // Gentle parallax calculation
  const transformStyle = {
    transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0px) rotateX(${-mousePos.y * 4}deg) rotateY(${mousePos.x * 4}deg)`,
  };

  return (
    <div className="relative flex items-center justify-center py-4 lg:py-0 perspective-1000">
      
      {/* Background Soft Glow Aura */}
      <div 
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-indigo-600/25 via-cyan-500/20 to-violet-600/20 blur-3xl -z-10 animate-pulse-slow pointer-events-none"
        style={{
          transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -15}px, 0px)`,
        }}
      />

      {/* Floating Glass Frame Container */}
      <div 
        className="relative group transition-transform duration-200 ease-out animate-float"
        style={transformStyle}
      >
        
        {/* Outer Rim Light Border */}
        <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-r from-cyan-500/40 via-indigo-500/40 to-violet-500/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Main Glass Panel */}
        <div className="relative rounded-[2.2rem] p-3 sm:p-4 bg-[#0B1120]/80 backdrop-blur-xl border border-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] shadow-cyan-950/30">
          
          {/* Top Tech Frame Header */}
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 border border-red-400/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 border border-yellow-400/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
            </div>
            <div className="text-[10px] font-mono tracking-widest text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/40">
              CANDIDATE_PORTRAIT // CSE
            </div>
          </div>

          {/* Authentic Portrait Image Frame */}
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 shadow-inner bg-slate-900 aspect-[3/4] w-64 sm:w-72 md:w-80 lg:w-[320px]">
            <img 
              src={PORTFOLIO_DATA.candidate.portraitPath} 
              alt={PORTFOLIO_DATA.candidate.portraitAlt}
              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.02]"
              loading="eager"
            />

            {/* Subtle Gradient Overlays for integration into dark UI (keeping face 100% natural) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.6rem] pointer-events-none" />
          </div>

          {/* Bottom Floating Badge */}
          <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-gray-300 font-sans font-medium text-xs">PPG Institute of Tech</span>
            </div>
            <span className="text-indigo-400 font-semibold">2024–2028</span>
          </div>

        </div>

        {/* Orbiting Subtle Corner Accent Badges */}
        <div 
          className="absolute -top-4 -right-4 bg-[#111827]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-500/30 text-[11px] font-mono text-cyan-300 shadow-xl hidden sm:flex items-center gap-1.5"
          style={{ transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)` }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>B.E. CSE</span>
        </div>

        <div 
          className="absolute -bottom-4 -left-4 bg-[#111827]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-indigo-500/30 text-[11px] font-mono text-indigo-300 shadow-xl hidden sm:flex items-center gap-1.5"
          style={{ transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0)` }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span>SOFTWARE DEV</span>
        </div>

      </div>

    </div>
  );
};

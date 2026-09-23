import React from 'react';
import { User, Cpu, BookOpen, Target, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { About3DCanvas } from './About3DCanvas';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono text-xs mb-3">
            <User size={14} className="text-cyan-400" />
            <span>BACKGROUND & INTENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-accent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Card (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal mb-6">
                "{PORTFOLIO_DATA.about.content}"
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-cyan-400">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Academic Foundation</h3>
                    <p className="text-xs text-gray-400">B.E. CSE Student at PPG Institute of Technology (2024–2028)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-600/20 border border-cyan-500/30 text-cyan-300">
                    <Target size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Career Goal</h3>
                    <p className="text-xs text-gray-400">Software Development, AI Integration & Web Architecture</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right 3D AI/Network Visualization (Col 5) */}
          <div className="lg:col-span-5">
            <About3DCanvas />
          </div>

        </div>

      </div>
    </section>
  );
};

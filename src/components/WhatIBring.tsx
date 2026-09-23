import React from 'react';
import { Lightbulb, Compass, Code2, TrendingUp, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const WhatIBring: React.FC = () => {
  const iconMap: Record<string, any> = {
    Lightbulb,
    Compass,
    Code2,
    TrendingUp
  };

  return (
    <section className="py-24 relative bg-[#070B16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono text-xs mb-3">
            <Sparkles size={14} className="text-cyan-400" />
            <span>VALUE & MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What I <span className="gradient-accent">Bring</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* 4 Professional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.whatIBring.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <div 
                key={index}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 group-hover:bg-cyan-600/20 transition-all">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    "{item.description}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>PILLAR 0{index + 1}</span>
                  <span className="text-indigo-400">CORE VALUE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

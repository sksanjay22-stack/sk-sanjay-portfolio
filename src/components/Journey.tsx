import React from 'react';
import { Route, BookOpen, Hammer, Beaker, RefreshCw, Rocket } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const icons = [BookOpen, Hammer, Beaker, RefreshCw, Rocket];

  return (
    <section id="journey" className="py-24 relative bg-[#0B1120] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono text-xs mb-3">
            <Route size={14} className="text-cyan-400" />
            <span>GROWTH TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My Development <span className="gradient-accent">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Roadmap Nodes */}
        <div className="relative">
          {/* Horizontal Connecting Energy Track */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-indigo-600 via-cyan-400 to-emerald-400 transform -translate-y-1/2 rounded-full opacity-60" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PORTFOLIO_DATA.journey.map((item, index) => {
              const Icon = icons[index];

              return (
                <div key={item.step} className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 flex flex-col items-center text-center group">
                  
                  {/* Step Node */}
                  <div className="w-14 h-14 rounded-2xl bg-indigo-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-4 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <Icon size={24} />
                  </div>

                  {/* Step Badge */}
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/40 mb-2">
                    {item.step}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Cpu, Terminal, Code, Database, Brain, Wrench, Layers, Info } from 'lucide-react';
import { PORTFOLIO_DATA, Skill } from '../data/portfolioData';
import { SkillSphere3D } from './SkillSphere3D';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(PORTFOLIO_DATA.skills[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Programming', 'Frontend', 'Core CS', 'Database', 'AI & Development', 'Tools'];

  const filteredSkills = activeCategory === 'All' 
    ? PORTFOLIO_DATA.skills 
    : PORTFOLIO_DATA.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#070B16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono text-xs mb-3">
            <Cpu size={14} className="text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skill <span className="gradient-accent">Ecosystem</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base mt-3">
            Interactive 3D technology sphere. Click or hover any node to inspect core capabilities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30 border border-cyan-400/40'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Sphere & Skill Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Central 3D Sphere (Col 7) */}
          <div className="lg:col-span-7 glass-panel p-4 rounded-3xl border border-white/10 relative overflow-hidden">
            <SkillSphere3D
              skills={filteredSkills}
              onSelectSkill={setSelectedSkill}
              selectedSkill={selectedSkill}
            />
          </div>

          {/* Selected Skill Detail Inspector (Col 5) */}
          <div className="lg:col-span-5">
            {selectedSkill ? (
              <div className="glass-card p-6 rounded-2xl border border-cyan-500/40 shadow-2xl relative overflow-hidden animate-fade-in">
                
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 font-mono text-xs">
                    {selectedSkill.category}
                  </span>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                    <Info size={14} className="text-cyan-400" />
                    <span>SELECTED_NODE</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <Terminal size={22} className="text-cyan-400" />
                  <span>{selectedSkill.name}</span>
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {selectedSkill.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>STATUS: ACTIVE_LEARNING</span>
                  <span className="text-indigo-400">CSE CURRICULUM</span>
                </div>

              </div>
            ) : (
              <div className="glass-panel p-8 rounded-2xl border border-white/10 text-center">
                <p className="text-gray-400 text-sm">Select any node on the 3D sphere to inspect skill details.</p>
              </div>
            )}

            {/* Quick Skill Tags List below */}
            <div className="mt-6 flex flex-wrap gap-2">
              {filteredSkills.map((sk) => (
                <button
                  key={sk.name}
                  onClick={() => setSelectedSkill(sk)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedSkill?.name === sk.name
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-sm'
                      : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  {sk.name}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

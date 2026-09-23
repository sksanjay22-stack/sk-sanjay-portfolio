import React from 'react';
import { Briefcase, Building, ArrowRight, Code, Brain, Database, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const internship = PORTFOLIO_DATA.internship;

  return (
    <section id="experience" className="py-24 relative bg-[#070B16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono text-xs mb-3">
            <Briefcase size={14} className="text-cyan-400" />
            <span>PRACTICAL EXPOSURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Internship <span className="gradient-accent">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Internship Main Card */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 text-cyan-400">
                <Building size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{internship.title}</h3>
                <p className="text-sm font-semibold text-cyan-400">{internship.organization}</p>
              </div>
            </div>

            <span className="px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-semibold">
              COMPLETED INTERNSHIP
            </span>
          </div>

          <p className="text-base text-gray-200 leading-relaxed mb-8">
            "{internship.description}"
          </p>

          {/* 3D Visual Flow Pipeline: Python object -> AI network -> Data flow */}
          <div className="mb-8 p-6 rounded-2xl bg-[#0B1120]/80 border border-white/10">
            <div className="text-xs font-mono text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>INTERNSHIP WORKFLOW PIPELINE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              
              {/* Step 1: Python Object */}
              <div className="glass-card p-4 rounded-xl border-indigo-500/30 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/30 border border-indigo-400/50 flex items-center justify-center text-cyan-400 mb-2">
                  <Code size={24} />
                </div>
                <div className="text-sm font-bold text-white">Python Core</div>
                <div className="text-xs text-gray-400 font-mono">Scripting & Logic</div>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:flex justify-center text-cyan-400">
                <ArrowRight size={24} className="animate-pulse" />
              </div>

              {/* Step 2: AI Network */}
              <div className="glass-card p-4 rounded-xl border-cyan-500/30 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-600/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 mb-2">
                  <Brain size={24} />
                </div>
                <div className="text-sm font-bold text-white">AI Network</div>
                <div className="text-xs text-gray-400 font-mono">Applications & Models</div>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:flex justify-center text-cyan-400">
                <ArrowRight size={24} className="animate-pulse" />
              </div>

              {/* Step 3: Data Flow */}
              <div className="glass-card p-4 rounded-xl border-violet-500/30 text-center flex flex-col items-center col-span-1 md:col-span-1">
                <div className="w-12 h-12 rounded-xl bg-violet-600/30 border border-violet-400/50 flex items-center justify-center text-violet-300 mb-2">
                  <Database size={24} />
                </div>
                <div className="text-sm font-bold text-white">Data Flow</div>
                <div className="text-xs text-gray-400 font-mono">Practical Output</div>
              </div>

            </div>
          </div>

          {/* Gained Competencies */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {internship.skillsGained.map((skill) => (
              <div key={skill} className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-white/5 p-2.5 rounded-lg border border-white/5">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

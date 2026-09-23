import React from 'react';
import { GraduationCap, Calendar, MapPin, Building2, BookCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono text-xs mb-3">
            <GraduationCap size={14} className="text-cyan-400" />
            <span>ACADEMIC JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="gradient-accent">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent transform sm:-translate-x-1/2" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col sm:flex-row items-start ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-[#0B1120] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10">
                    <GraduationCap size={18} />
                  </div>

                  {/* Card Container */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pr-12' : 'sm:pl-12'} w-full`}>
                    <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group">
                      
                      {/* Top Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-mono text-xs">
                          <Calendar size={12} className="text-cyan-400" />
                          <span>{item.period}</span>
                        </span>
                        
                        <span className="flex items-center gap-1 text-xs font-mono text-gray-400">
                          <MapPin size={12} className="text-gray-400" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Institution Name */}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                        <Building2 size={18} className="text-indigo-400 shrink-0" />
                        <span>{item.institution}</span>
                      </h3>

                      {/* Degree / Track */}
                      <p className="text-base font-semibold text-indigo-200 mt-1 mb-3">
                        {item.degree}
                      </p>

                      {/* Description if available */}
                      {item.description && (
                        <p className="text-sm text-gray-300 leading-relaxed pt-2 border-t border-white/5">
                          {item.description}
                        </p>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

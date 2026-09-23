import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B16] border-t border-indigo-500/10 py-12 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/5">
          
          {/* Left Column: Brand & Headline (Col 6) */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2 font-mono font-bold text-xl text-white">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-cyan-400">
                <Terminal size={18} />
              </div>
              <span>{PORTFOLIO_DATA.candidate.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-mono">
              {PORTFOLIO_DATA.candidate.headline}
            </p>
          </div>

          {/* Right Column: Social Links & Back to Top (Col 6) */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4">
            <a
              href={PORTFOLIO_DATA.candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={PORTFOLIO_DATA.candidate.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-indigo-400 hover:border-indigo-400/40 transition-all"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.candidate.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-emerald-400 hover:border-emerald-400/40 transition-all"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-indigo-600/30 border border-indigo-500/40 text-cyan-400 hover:bg-indigo-600 hover:text-white transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-300">
          <div>
            © 2026 {PORTFOLIO_DATA.candidate.name}. All rights reserved.
          </div>
          <div>
            PPG Institute of Technology (2024–2028)
          </div>
        </div>

      </div>
    </footer>
  );
};

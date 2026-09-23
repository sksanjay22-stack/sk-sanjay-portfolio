import React from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, MapPin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.candidate.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B1120] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono text-xs mb-3">
            <Send size={14} className="text-cyan-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="gradient-accent">Connect</span>
          </h2>
          <p className="text-gray-300 max-w-xl text-base mt-3">
            Interested in software development, AI, technology, or collaborative projects? Feel free to connect.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* 3 Floating Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Email Card */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-cyan-400/50 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">Email</h3>
            <p className="text-xs text-gray-400 font-mono mb-4">PRIMARY CONTACT</p>

            <a
              href={`mailto:${PORTFOLIO_DATA.candidate.email}`}
              className="text-sm font-semibold text-cyan-300 hover:text-white transition-colors mb-4 break-all"
            >
              {PORTFOLIO_DATA.candidate.email}
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied Email' : 'Copy Email'}</span>
            </button>
          </div>

          {/* LinkedIn Card */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-indigo-400/50 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 mb-6 group-hover:scale-110 transition-transform">
              <Linkedin size={28} />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">LinkedIn</h3>
            <p className="text-xs text-gray-400 font-mono mb-4">PROFESSIONAL PROFILE</p>

            <p className="text-xs text-gray-300 mb-6">
              Connect for software opportunities and technical networking.
            </p>

            <a
              href={PORTFOLIO_DATA.candidate.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-indigo-600/25"
            >
              <span>Visit LinkedIn</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-violet-400/50 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-gray-200 mb-6 group-hover:scale-110 transition-transform">
              <Github size={28} />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">GitHub</h3>
            <p className="text-xs text-gray-400 font-mono mb-4">CODE REPOSITORIES</p>

            <p className="text-xs text-gray-300 mb-6">
              Explore code repositories, projects, and development activity.
            </p>

            <a
              href={PORTFOLIO_DATA.candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-all shadow-lg shadow-cyan-600/25"
            >
              <span>Visit GitHub</span>
              <ExternalLink size={14} />
            </a>
          </div>

        </div>

        {/* Location Banner */}
        <div className="mt-12 max-w-xl mx-auto glass-panel p-4 rounded-2xl border border-white/10 text-center flex items-center justify-center gap-2 text-xs font-mono text-gray-300">
          <MapPin size={16} className="text-cyan-400" />
          <span>LOCATION: {PORTFOLIO_DATA.candidate.location}</span>
        </div>

      </div>
    </section>
  );
};

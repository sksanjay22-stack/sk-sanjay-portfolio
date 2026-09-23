import React from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle, GraduationCap, Code2, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] glass-panel rounded-3xl border border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0F172A]/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-cyan-400">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{PORTFOLIO_DATA.candidate.name} — Curriculum Vitae</h3>
              <p className="text-xs text-cyan-400 font-mono">CSE Student | Software Developer</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          
          {/* Summary Card */}
          <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-sm space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-semibold">PROFESSIONAL OVERVIEW</div>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
              {PORTFOLIO_DATA.candidate.shortIntro}
            </p>
          </div>

          {/* Key Qualifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Education */}
            <div className="glass-card p-4 rounded-2xl border-white/10">
              <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm mb-3">
                <GraduationCap size={18} className="text-cyan-400" />
                <span>Education</span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="font-semibold text-white">PPG Institute of Technology</div>
                  <div className="text-cyan-400 font-mono">B.E. CSE (2024–2028)</div>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <div className="font-semibold text-white">Holy Rosary Matriculation School</div>
                  <div className="text-gray-400 font-mono">Matriculation</div>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <div className="font-semibold text-white">Government Higher Secondary School</div>
                  <div className="text-gray-400 font-mono">Higher Secondary</div>
                </div>
              </div>
            </div>

            {/* Technical Capabilities */}
            <div className="glass-card p-4 rounded-2xl border-white/10">
              <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm mb-3">
                <Code2 size={18} className="text-cyan-400" />
                <span>Technical Skills</span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-gray-400 font-mono">Languages: </span>
                  <span className="text-white font-medium">Python, Java, JavaScript, C, SQL</span>
                </div>
                <div>
                  <span className="text-gray-400 font-mono">Frontend & Web: </span>
                  <span className="text-white font-medium">HTML, CSS, Web UI Integration</span>
                </div>
                <div>
                  <span className="text-gray-400 font-mono">Core CS: </span>
                  <span className="text-white font-medium">DSA, OOP, Operating Systems, Computer Networks</span>
                </div>
                <div>
                  <span className="text-gray-400 font-mono">Tools & Cloud: </span>
                  <span className="text-white font-medium">Git, GitHub, PostgreSQL, Firebase, VS Code</span>
                </div>
              </div>
            </div>

          </div>

          {/* Internship Experience */}
          <div className="glass-card p-4 rounded-2xl border-white/10">
            <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm mb-2">
              <Briefcase size={18} className="text-cyan-400" />
              <span>Internship</span>
            </div>
            <div className="text-xs space-y-1">
              <div className="font-semibold text-white">{PORTFOLIO_DATA.internship.title} — {PORTFOLIO_DATA.internship.organization}</div>
              <p className="text-gray-300">{PORTFOLIO_DATA.internship.description}</p>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 bg-[#0F172A]/90 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-gray-400">PDF FORMAT AVAILABLE</span>

          <div className="flex items-center gap-3">
            <a
              href="/sanjay-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-indigo-200 bg-indigo-950/80 border border-indigo-500/40 hover:bg-indigo-900 transition-colors"
            >
              <ExternalLink size={14} />
              <span>View Full PDF</span>
            </a>

            <a
              href="/sanjay-resume.pdf"
              download="S_K_Sanjay_Resume.pdf"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-600/30 transition-all"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

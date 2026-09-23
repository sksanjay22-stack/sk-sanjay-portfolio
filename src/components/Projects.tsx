import React from 'react';
import { FolderGit2, ExternalLink, Github, Bot, Sparkles, CheckCircle, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Project3DLaptop } from './Project3DLaptop';

export const Projects: React.FC = () => {
  const project = PORTFOLIO_DATA.mainProject;

  return (
    <section id="projects" className="py-24 relative bg-[#0B1120] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono text-xs mb-3">
            <FolderGit2 size={14} className="text-cyan-400" />
            <span>FEATURED IMPLEMENTATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Software <span className="gradient-accent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base mt-3">
            Practical software projects built to explore AI integration, software design, and user interaction.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Main Featured Project Card with 3D Laptop Display */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glow background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Project Details (Col 6) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 font-mono text-xs font-semibold">
                  FEATURED PROJECT
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 font-mono text-xs">
                  AI & WEB DEVELOPMENT
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                <Bot size={32} className="text-cyan-400" />
                <span>{project.title}</span>
              </h3>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                "{project.description}"
              </p>

              {/* Technologies Used */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-gray-400">TECHNOLOGY STACK</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Learning / Outcome */}
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-sm text-gray-300 space-y-1">
                <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs font-mono">
                  <CheckCircle size={14} className="text-emerald-400" />
                  <span>KEY OUTCOME & LEARNING</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.keyOutcome}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/30 transition-all"
                >
                  <Github size={16} />
                  <span>GITHUB REPOSITORY</span>
                </a>

                <button
                  disabled
                  className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-gray-400 bg-white/5 border border-white/10 cursor-not-allowed"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo Coming Soon</span>
                </button>
              </div>

            </div>

            {/* Right Column: 3D Laptop Display (Col 6) */}
            <div className="lg:col-span-6 flex justify-center">
              <Project3DLaptop />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

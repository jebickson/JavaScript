import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Cpu, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { playHover, playClick } = useSoundEffects();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              playClick();
              onClose();
            }}
            className="fixed inset-0 bg-space-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-cyber-cyan/30 shadow-[0_20px_60px_-15px_rgba(0,240,255,0.2)] bg-space-900/95 p-6 sm:p-8 z-10"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              onMouseEnter={playHover}
              aria-label="Close Project Modal"
              className="absolute top-5 right-5 p-2 rounded-full glass-pill text-slate-400 hover:text-white hover:border-cyber-cyan/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30">
                {project.category}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono text-slate-400 bg-white/5 border border-white/10">
                {project.year}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-cyber-cyan/80 mb-6">
              {project.subtitle}
            </p>

            {/* Image Banner */}
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video border border-white/10 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {project.metrics.map((m, i) => (
                <div key={i} className="glass-panel p-3.5 rounded-xl border border-white/5 text-center">
                  <div className="text-lg sm:text-xl font-bold font-mono text-cyber-cyan">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div className="mb-6">
              <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyber-cyan" />
                Project Mission
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyber-emerald" />
                Key Engineered Capabilities
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Deep-Dive */}
            <div className="mb-6">
              <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyber-purple" />
                Architectural Breakdown
              </h3>
              <div className="space-y-2">
                {project.architectureDetails.map((detail, i) => (
                  <div key={i} className="p-3 rounded-xl bg-space-950/60 border border-white/5 text-xs text-slate-300 font-mono flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-cyber-purple flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass-pill text-xs font-mono text-slate-300 hover:text-white hover:border-white/30 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-purple text-space-950 font-bold text-xs font-mono hover:opacity-90 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                >
                  <span>Launch Live System</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

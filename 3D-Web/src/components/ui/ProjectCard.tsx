import React, { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight, Activity } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const { playHover, playClick, playOpenModal } = useSoundEffects();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt
    const rotX = -((y - centerY) / centerY) * 9;
    const rotY = ((x - centerX) / centerX) * 9;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={playHover}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="relative group rounded-3xl glass-panel p-5 sm:p-6 border border-white/10 hover:border-cyber-cyan/40 hover:shadow-[0_15px_40px_-10px_rgba(0,240,255,0.15)] flex flex-col justify-between overflow-hidden"
    >
      {/* Interactive Glare Highlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl z-10"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(0, 240, 255, ${glarePos.opacity}), transparent 60%)`,
        }}
      />

      <div>
        {/* Project Thumbnail Image with Cyber Scanlines */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-5 border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950/90 via-space-950/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-space-950/80 backdrop-blur-md text-cyber-cyan border border-cyber-cyan/30">
              {project.category}
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-300 bg-space-950/80 backdrop-blur-md border border-white/10">
              {project.year}
            </span>
          </div>

          {/* Performance Metric Pill */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300 px-3 py-1.5 rounded-xl bg-space-950/80 backdrop-blur-md border border-white/10">
            <span className="flex items-center gap-1.5 text-cyber-cyan">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>{project.metrics[0].label}:</span>
            </span>
            <span className="font-bold text-white">{project.metrics[0].value}</span>
          </div>
        </div>

        {/* Title and description */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors mb-1.5">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-cyber-purple/90 mb-3">
          {project.subtitle}
        </p>
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-500">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
        <button
          onClick={() => {
            playOpenModal();
            onSelect(project);
          }}
          onMouseEnter={playHover}
          className="flex items-center gap-1.5 text-xs font-mono text-cyber-cyan hover:text-white transition-colors group/btn"
        >
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              onMouseEnter={playHover}
              onClick={playClick}
              className="p-2 rounded-lg glass-pill text-slate-400 hover:text-white hover:border-white/30 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Launch ${project.title} live demo`}
              onMouseEnter={playHover}
              onClick={playClick}
              className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan hover:text-space-950 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

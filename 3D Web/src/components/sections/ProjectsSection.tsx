import React, { useState } from 'react';
import { Layers, Sparkles, Filter } from 'lucide-react';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import { PROJECTS_DATA } from '../../data/projects';
import { Project } from '../../types/portfolio';
import { useSoundEffects } from '../../hooks/useSoundEffects';

const CATEGORIES = ['All', 'WebGL / 3D', 'Creative AI', 'Fullstack Systems', 'Interactive Design'];

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const { playHover, playClick } = useSoundEffects();

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-28 px-4 sm:px-6 z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyber-cyan mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 // FLAGSHIP SYSTEMS & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Featured 3D Work & <br />
              <span className="text-gradient-cyan-purple">Interactive Architecture.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-panel border border-white/10 self-start md:self-auto">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playClick();
                    setSelectedCategory(cat);
                  }}
                  onMouseEnter={playHover}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-cyber-cyan text-space-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Interactive Tilt Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Deep Dive Case Study Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};

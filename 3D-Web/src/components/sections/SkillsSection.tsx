import React, { useState } from 'react';
import { Layers, Zap, Terminal, Sparkles, Sliders } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/skills';
import { SkillOrb } from '../ui/SkillOrb';
import { useSoundEffects } from '../../hooks/useSoundEffects';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id);
  const { playHover, playClick } = useSoundEffects();

  const currentCategory = SKILL_CATEGORIES.find((c) => c.id === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-28 px-4 sm:px-6 z-10 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyber-purple mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>03 // CORE MATRIX & CAPABILITY TAXONOMY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Interactive Orbit Matrix & <br />
            <span className="text-gradient-cyan-purple">Technical Proficiency.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hover over any technical domain node to analyze proficiency metrics, architectural highlights, and real-time synthesized harmonic feedback.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playClick();
                  setActiveTab(cat.id);
                }}
                onMouseEnter={playHover}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-mono transition-all border ${
                  isActive
                    ? 'bg-space-900 border-cyber-cyan text-cyber-cyan shadow-[0_0_20px_rgba(0,240,255,0.25)] font-bold'
                    : 'glass-panel border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Description */}
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-mono text-cyber-purple/90">
            // {currentCategory.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCategory.skills.map((skill) => (
            <SkillOrb
              key={skill.name}
              name={skill.name}
              level={skill.level}
              highlight={skill.highlight}
            />
          ))}
        </div>

        {/* Real-time Hardware Telemetry Bar */}
        <div className="mt-14 glass-panel p-4 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span>RENDER ENGINE: THREE.JS R170 (WEBGL2 / WEBGPU SHADERS)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-cyber-emerald">ALLOCATION: 0 RUNTIME LEAKS</span>
            <span className="text-slate-500">|</span>
            <span className="text-cyber-purple">DPR CLAMP: 2.0 MAX</span>
          </div>
        </div>
      </div>
    </section>
  );
};

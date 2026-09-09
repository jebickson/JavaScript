import React from 'react';
import { ArrowDown, Sparkles, Code2, Globe, Layers, ArrowRight } from 'lucide-react';
import { useSoundEffects } from '../../hooks/useSoundEffects';

export const HeroSection: React.FC = () => {
  const { playHover, playClick } = useSoundEffects();

  const scrollToProjects = () => {
    playClick();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    playClick();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 pb-16 z-10 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Futuristic Status Ribbon */}
        <div className="pointer-events-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan mb-8 shadow-[0_0_20px_rgba(0,240,255,0.15)] animate-float">
          <Sparkles className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
          <span>SPATIAL COMPUTING & 3D WEB ARCHITECTURE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
        </div>

        {/* Main Title & Typographic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
          <span className="block text-gradient-white">Designing Immersive</span>
          <span className="block text-gradient-cyan-purple neon-text-cyan">
            3D Web Realities.
          </span>
        </h1>

        {/* Core Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10">
          I am <strong className="text-white font-semibold">Kaelen Vance</strong>, a Principal Creative Frontend Engineer & 3D Web Architect. I synthesize high-performance WebGL graphics, custom GLSL shaders, and reactive web applications running at effortless 120 FPS.
        </p>

        {/* Action CTAs */}
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToProjects}
            onMouseEnter={playHover}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyber-cyan to-cyber-purple text-space-950 font-bold font-mono text-sm tracking-wide hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>EXPLORE PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToContact}
            onMouseEnter={playHover}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl glass-pill border border-white/15 text-white font-mono text-sm tracking-wide hover:border-cyber-cyan/50 hover:bg-space-900/60 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>INITIATE CONTACT</span>
          </button>
        </div>

        {/* Live Architectural Metrics */}
        <div className="pointer-events-auto grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl">
          <div className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-cyber-cyan/30 transition-colors">
            <div className="flex items-center justify-center gap-1.5 text-cyber-cyan mb-1">
              <Code2 className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-mono font-extrabold text-white">60+</span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              FPS WebGL Target
            </p>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-cyber-purple/30 transition-colors">
            <div className="flex items-center justify-center gap-1.5 text-cyber-purple mb-1">
              <Layers className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-mono font-extrabold text-white">8+</span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Years Experience
            </p>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-cyber-emerald/30 transition-colors">
            <div className="flex items-center justify-center gap-1.5 text-cyber-emerald mb-1">
              <Globe className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-mono font-extrabold text-white">100%</span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Accessible PBR
            </p>
          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="pointer-events-auto mt-16 flex flex-col items-center gap-2 text-slate-500 hover:text-cyber-cyan transition-colors cursor-pointer" onClick={scrollToProjects}>
          <span className="text-[10px] font-mono uppercase tracking-widest">
            Scroll to Navigate 3D Space
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-cyber-cyan" />
        </div>
      </div>
    </section>
  );
};

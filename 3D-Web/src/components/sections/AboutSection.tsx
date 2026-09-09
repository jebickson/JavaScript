import React from 'react';
import { Cpu, Eye, Radio, ShieldAlert, Compass, CheckCircle2 } from 'lucide-react';
import { useSoundEffects } from '../../hooks/useSoundEffects';

const ARCHITECTURAL_PILLARS = [
  {
    icon: Cpu,
    title: 'Hardware-Accelerated WebGL',
    color: 'text-cyber-cyan',
    borderColor: 'hover:border-cyber-cyan/40',
    description: 'Bypassing the CPU bottleneck by leveraging GPU vertex & fragment shaders, instanced draw batches, and memory buffer caching.',
  },
  {
    icon: Eye,
    title: 'Cinematic Visual Fidelity',
    color: 'text-cyber-purple',
    borderColor: 'hover:border-cyber-purple/40',
    description: 'PBR materials, volumetric bloom, transmission glass, and procedural particle constellations that bring enterprise web interfaces to life.',
  },
  {
    icon: Radio,
    title: 'Zero-Asset Procedural Audio',
    color: 'text-cyber-emerald',
    borderColor: 'hover:border-cyber-emerald/40',
    description: 'Real-time harmonic frequency synthesis using the Web Audio API without downloading heavy MP3 sound files.',
  },
];

const ENGINEERING_PRINCIPLES = [
  'Sub-16ms Frame Budgets (Locked 60-120 FPS)',
  'Strict prefers-reduced-motion Accessibility',
  'Dynamic Device Tiering & LOD Throttling',
  'TypeScript 100% Strict Type Coverage',
  'Modular Reactive Canvas Component Architecture',
];

export const AboutSection: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-28 px-4 sm:px-6 z-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Left-aligned column on desktop so the 3D model on the right is spotlighted */}
        <div className="max-w-2xl">
          {/* Section Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyber-purple mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>01 // ARCHITECTURAL PILLARS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Where Advanced Graphics Meet <br />
            <span className="text-gradient-cyan-purple">Production Reliability.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
            For over 8 years, I have lived at the intersection of mathematical graphics programming and production web engineering. Rather than treating 3D as a heavy decorative gimmick, I engineer WebGL systems that feel lightweight, tactile, and performant across everything from mobile phones to high-refresh workstation monitors.
          </p>

          {/* Pillars Cards */}
          <div className="space-y-4 mb-10">
            {ARCHITECTURAL_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  onMouseEnter={playHover}
                  className={`glass-panel p-5 rounded-2xl border border-white/10 ${pillar.borderColor} transition-all group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-space-950/80 border border-white/10 ${pillar.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyber-cyan transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Engineering Core Principles */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 bg-space-950/60">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-cyber-cyan" />
              Non-Negotiable Engineering Standards
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {ENGINEERING_PRINCIPLES.map((principle, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan flex-shrink-0" />
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

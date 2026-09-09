import React from 'react';
import { Mail, Github, Linkedin, Twitter, MessageSquare, Terminal } from 'lucide-react';
import { ContactTerminal } from '../ui/ContactTerminal';
import { useSoundEffects } from '../../hooks/useSoundEffects';

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: Github, url: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'X / Twitter', icon: Twitter, url: 'https://x.com' },
  { name: 'Discord', icon: MessageSquare, url: 'https://discord.com' },
];

export const ContactSection: React.FC = () => {
  const { playHover, playClick } = useSoundEffects();

  return (
    <section
      id="contact"
      className="relative min-h-screen py-28 px-4 sm:px-6 z-10 flex flex-col justify-between"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyber-emerald mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // DIRECT TELEMETRY & TRANSMISSIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's Build the Future of <br />
            <span className="text-gradient-cyan-purple">Interactive Computing.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Have a 3D web application, complex WebGL visualizer, or high-performance frontend architecture challenge? Initialize a transmission below.
          </p>
        </div>

        {/* Cybernetic Contact Terminal */}
        <ContactTerminal />

        {/* Social Matrix & External Presence */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {SOCIAL_LINKS.map((soc) => {
            const Icon = soc.icon;
            return (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-panel border border-white/10 hover:border-cyber-cyan/50 hover:bg-space-900/80 text-xs font-mono text-slate-300 hover:text-white transition-all group"
              >
                <Icon className="w-4 h-4 text-slate-400 group-hover:text-cyber-cyan transition-colors" />
                <span>{soc.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer / Copyright bar */}
      <div className="mt-20 pt-8 border-t border-white/10 max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <p>© {new Date().getFullYear()} Kaelen Vance. All 3D meshes, GLSL shaders & design systems engineered from scratch.</p>
        <p className="flex items-center gap-2">
          <span>React 18</span>
          <span>•</span>
          <span>Three.js R170</span>
          <span>•</span>
          <span className="text-cyber-cyan">60+ FPS Ready</span>
        </p>
      </div>
    </section>
  );
};

import React from 'react';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import { Zap } from 'lucide-react';

interface SkillOrbProps {
  name: string;
  level: number;
  highlight: string;
}

export const SkillOrb: React.FC<SkillOrbProps> = ({ name, level, highlight }) => {
  const { playHover } = useSoundEffects();

  return (
    <div
      onMouseEnter={playHover}
      className="group relative p-4 rounded-2xl glass-panel border border-white/10 hover:border-cyber-cyan/50 hover:bg-space-900/90 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-sm font-semibold text-white group-hover:text-cyber-cyan transition-colors flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-cyber-cyan opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
          {name}
        </span>
        <span className="font-mono text-xs font-bold text-cyber-cyan">
          {level}%
        </span>
      </div>

      {/* Animated Level Bar */}
      <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-white/5 mb-2">
        <div
          className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-purple to-pink-500 rounded-full group-hover:shadow-[0_0_10px_#00f0ff] transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>

      <p className="text-[11px] text-slate-400 font-mono tracking-tight leading-relaxed">
        {highlight}
      </p>
    </div>
  );
};

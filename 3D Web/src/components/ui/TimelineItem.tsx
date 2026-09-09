import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { ExperienceItem } from '../../types/portfolio';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface TimelineItemProps {
  experience: ExperienceItem;
  isLast: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isLast }) => {
  const { playHover } = useSoundEffects();

  return (
    <div
      onMouseEnter={playHover}
      className="relative flex items-start gap-4 sm:gap-6 group"
    >
      {/* Vertical Spine Column */}
      <div className="flex flex-col items-center">
        {/* Glowing Node */}
        <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-space-950 border border-cyber-cyan/40 text-cyber-cyan group-hover:border-cyber-cyan group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
          <Briefcase className="w-4 h-4" />
          <span className="absolute -inset-1 rounded-2xl bg-cyber-cyan/10 animate-pulse-slow pointer-events-none" />
        </div>

        {/* Connecting spine beam */}
        {!isLast && (
          <div className="w-0.5 h-full min-h-[140px] bg-gradient-to-b from-cyber-cyan/40 via-purple-500/20 to-transparent my-2" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-10">
        <div className="glass-panel p-5 sm:p-6 rounded-3xl border border-white/10 group-hover:border-cyber-cyan/30 group-hover:bg-space-900/80 transition-all">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 mb-1.5">
                {experience.badge}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                {experience.role}
              </h3>
              <p className="text-sm font-mono text-slate-300 font-semibold">
                {experience.company}
              </p>
            </div>

            <div className="text-left sm:text-right text-xs font-mono text-slate-400 space-y-1">
              <div className="flex items-center sm:justify-end gap-1 text-cyber-cyan">
                <Calendar className="w-3.5 h-3.5" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Key Achievements */}
          <div className="space-y-2 mb-4">
            {experience.achievements.map((ach, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                <CheckCircle className="w-3.5 h-3.5 text-cyber-emerald flex-shrink-0 mt-0.5" />
                <span>{ach}</span>
              </div>
            ))}
          </div>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/10 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

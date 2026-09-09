import React from 'react';
import { Milestone, GitCommit } from 'lucide-react';
import { EXPERIENCES_DATA } from '../../data/experience';
import { TimelineItem } from '../ui/TimelineItem';

export const JourneySection: React.FC = () => {
  return (
    <section
      id="journey"
      className="relative min-h-screen py-28 px-4 sm:px-6 z-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyber-cyan mb-4">
            <GitCommit className="w-3.5 h-3.5" />
            <span>04 // TIMELINE & ENGINEERING JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Proven Track Record of <br />
            <span className="text-gradient-cyan-purple">Engineering Leadership.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From pioneering early experimental WebGL kiosks to architecting multi-million user spatial computing engines and directing creative engineering teams.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="space-y-2">
          {EXPERIENCES_DATA.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              isLast={index === EXPERIENCES_DATA.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

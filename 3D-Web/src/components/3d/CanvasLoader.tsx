import React from 'react';
import { Html, useProgress } from '@react-three/drei';

export const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();

  return (
    <Html center zIndexRange={[100, 0]}>
      <div className="flex flex-col items-center justify-center p-6 rounded-2xl glass-panel border border-cyber-cyan/30 text-center min-w-[240px]">
        {/* Glowing Spinner */}
        <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-cyber-cyan/20 animate-ping" />
          <div className="w-12 h-12 rounded-full border-2 border-t-cyber-cyan border-r-cyber-purple border-b-transparent border-l-transparent animate-spin" />
          <span className="absolute text-xs font-mono font-bold text-cyber-cyan">
            {Math.round(progress)}%
          </span>
        </div>

        <p className="text-xs font-mono uppercase tracking-widest text-slate-300">
          Synthesizing 3D Canvas
        </p>
        <div className="w-full bg-slate-800/80 h-1.5 rounded-full mt-3 overflow-hidden border border-white/10">
          <div
            className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  );
};

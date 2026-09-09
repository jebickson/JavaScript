import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSoundEffects } from '../../hooks/useSoundEffects';

export const SoundToggle: React.FC = () => {
  const { soundEnabled, toggleSound, playClick } = useSoundEffects();

  const handleClick = () => {
    toggleSound();
    playClick();
  };

  return (
    <button
      onClick={handleClick}
      aria-label={soundEnabled ? 'Mute audio synthesizer' : 'Enable audio synthesizer'}
      className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all duration-300 ${
        soundEnabled
          ? 'bg-cyber-cyan/10 border-cyber-cyan/40 text-cyber-cyan shadow-[0_0_15px_rgba(0,240,255,0.25)]'
          : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
      }`}
    >
      {soundEnabled ? (
        <>
          <Volume2 className="w-3.5 h-3.5 animate-pulse" />
          <span className="hidden sm:inline">AUDIO ON</span>
          {/* Animated EQ Bars */}
          <span className="flex items-center gap-0.5 h-2.5">
            <span className="w-0.5 h-2 bg-cyber-cyan animate-[bounce_1s_infinite_100ms]" />
            <span className="w-0.5 h-3 bg-cyber-cyan animate-[bounce_1s_infinite_300ms]" />
            <span className="w-0.5 h-1.5 bg-cyber-cyan animate-[bounce_1s_infinite_200ms]" />
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-slate-500" />
          <span className="hidden sm:inline">AUDIO OFF</span>
        </>
      )}
    </button>
  );
};

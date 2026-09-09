import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight, Sparkles } from 'lucide-react';
import { SoundToggle } from './SoundToggle';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'hero', label: 'Overview' },
  { id: 'about', label: 'Pillars' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Matrix' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Terminal' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { playHover, playClick } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'glass-panel bg-space-950/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] border border-white/10 px-4 py-2.5 sm:px-6'
            : 'bg-transparent border border-transparent px-2 py-3'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollToSection('hero')}
            onMouseEnter={playHover}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-transparent border border-cyber-cyan/40 flex items-center justify-center group-hover:border-cyber-cyan transition-colors">
              <Terminal className="w-4 h-4 text-cyber-cyan group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <span className="font-mono text-sm font-bold tracking-wider text-white flex items-center gap-1.5">
                KAELEN VANCE
                <span className="text-[10px] text-cyber-cyan font-normal px-1.5 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30">
                  3D.DEV
                </span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
                Principal Creative Engineer
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  onMouseEnter={playHover}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'bg-cyber-cyan/15 text-cyber-cyan font-semibold border border-cyber-cyan/30 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Actions & Status Badge */}
          <div className="flex items-center gap-3">
            {/* Live Availability Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Hire</span>
            </div>

            {/* Synthesizer Audio Toggle */}
            <SoundToggle />

            {/* Quick Contact CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={playHover}
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyber-cyan/20 to-cyber-purple/20 border border-cyber-cyan/40 text-xs font-mono text-white hover:border-cyber-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyber-cyan" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-xl glass-pill text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-2 pb-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Q3/Q4 Projects</span>
            </div>

            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-3.5 py-2 rounded-xl text-xs font-mono transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyber-cyan/15 text-cyber-cyan font-semibold'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

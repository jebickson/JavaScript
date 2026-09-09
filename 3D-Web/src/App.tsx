import React from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';
import { SceneContainer } from './components/3d/SceneContainer';
import { Navbar } from './components/ui/Navbar';
import { CustomCursor } from './components/ui/CustomCursor';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { JourneySection } from './components/sections/JourneySection';
import { ContactSection } from './components/sections/ContactSection';

export const App: React.FC = () => {
  const { activeSection, progress } = useScrollProgress();

  return (
    <div className="relative min-h-screen bg-space-950 text-slate-100 selection:bg-cyber-cyan/30 selection:text-cyber-cyan overflow-x-hidden">
      {/* Accessible Skip Link */}
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyber-cyan text-space-950 font-bold rounded-lg font-mono text-sm"
      >
        Skip to main content
      </a>

      {/* Cybernetic Custom Follow Cursor */}
      <CustomCursor />

      {/* Persistent Global Scroll Progress Laser Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-white/[0.03]">
        <div
          className="h-full bg-gradient-to-r from-cyber-cyan via-sky-400 to-cyber-purple shadow-[0_0_12px_#00f0ff] origin-left transition-transform duration-75"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Background Cyber Grid Overlay */}
      <div className="fixed inset-0 cyber-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Fixed Fullscreen 3D Canvas Scene */}
      <SceneContainer activeSection={activeSection} />

      {/* Floating Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} />

      {/* DOM Content Sections (Layered Above Canvas) */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;

# 3D Portfolio Web Application - Tasks & Execution Milestones

## Directory Structure
```
3d Web/
├── public/
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── SceneContainer.tsx        # Persistent R3F Canvas & Camera
│   │   │   ├── QuantumCore.tsx           # Procedural multi-layer 3D crystal core
│   │   │   ├── ParticleField.tsx         # Instanced floating cosmic particle swarm
│   │   │   ├── LightingRig.tsx           # Mouse-following pointlight & ambient rig
│   │   │   ├── PostProcessingEffects.tsx # Bloom, chromatic aberration, vignette
│   │   │   └── CanvasLoader.tsx          # 3D assets loading state with progress
│   │   ├── ui/
│   │   │   ├── Navbar.tsx                # Floating glassmorphic navbar with status badge
│   │   │   ├── ProjectCard.tsx           # 3D interactive tilt cards with tags & links
│   │   │   ├── ProjectModal.tsx          # Case study modal overlay
│   │   │   ├── SkillOrb.tsx              # Interactive skill chips & radar metrics
│   │   │   ├── TimelineItem.tsx          # Scroll-triggered milestone node
│   │   │   ├── ContactTerminal.tsx       # Glassmorphic form with validation & toast
│   │   │   ├── SoundToggle.tsx           # Cyber audio toggle button
│   │   │   └── CustomCursor.tsx          # Fluid neon ring cursor tracking
│   │   └── sections/
│   │       ├── HeroSection.tsx           # Typographic intro, metrics, CTAs
│   │       ├── AboutSection.tsx          # Philosophy, engineering stack, live stats
│   │       ├── ProjectsSection.tsx       # Grid of 3D tilt cards & filter tabs
│   │       ├── SkillsSection.tsx         # Orbital category matrix & audio feedback
│   │       ├── JourneySection.tsx        # Vertical illuminated timeline
│   │       └── ContactSection.tsx        # Terminal form, copy email, socials
│   ├── hooks/
│   │   ├── useScrollProgress.ts          # Window scroll normalization hook
│   │   ├── useSoundEffects.ts            # Web Audio API procedural sound engine
│   │   └── useMousePosition.ts           # Smoothed mouse coordinate tracker
│   ├── data/
│   │   ├── projects.ts                   # Flagship projects data & case studies
│   │   ├── skills.ts                     # Skill taxonomy, proficiency & categories
│   │   └── experience.ts                 # Milestones, companies, achievements
│   ├── types/
│   │   └── portfolio.ts                  # Strictly typed interfaces
│   ├── App.tsx                           # Main layout composition
│   ├── main.tsx                          # App entry point
│   └── index.css                         # Tailwind directives, glassmorphism, fonts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Dependencies
- **Core**: `react@^18.3.1`, `react-dom@^18.3.1`, `vite@^6.0.0`, `typescript@^5.6.3`
- **3D Engine**: `three@^0.170.0`, `@types/three@^0.170.0`, `@react-three/fiber@^8.17.10`, `@react-three/drei@^9.121.4`, `@react-three/postprocessing@^2.16.3`
- **Animation & Styling**: `framer-motion@^11.11.17`, `tailwindcss@^3.4.15`, `autoprefixer@^10.4.20`, `postcss@^8.4.49`, `clsx`, `tailwind-merge`
- **Icons & Effects**: `lucide-react@^0.460.0`, `canvas-confetti@^1.9.3`, `@types/canvas-confetti@^1.9.0`

## Execution Milestones

- [x] **Milestone 1: Project Scaffolding & Configuration**
  - Initialize Vite React TypeScript project configuration
  - Install dependencies (Three.js, R3F, Drei, Postprocessing, Tailwind, Framer Motion, Lucide)
  - Configure Tailwind with dark-mode slate/onyx palette, neon cyan/purple accents, and glassmorphism utilities

- [x] **Milestone 2: Procedural 3D Scene Architecture**
  - Construct `SceneContainer.tsx` with R3F Canvas and camera controllers
  - Build `QuantumCore.tsx` with procedural crystal geometry, wireframe cage, inner refraction, and orbital rings
  - Implement `ParticleField.tsx` with floating cosmic particles
  - Implement `LightingRig.tsx` tracking cursor in 3D coordinates
  - Configure `PostProcessingEffects.tsx` with Bloom and subtle vignette

- [x] **Milestone 3: Audio Engine & Interactive Hooks**
  - Build Web Audio API procedural sound engine (`useSoundEffects.ts`)
  - Implement scroll observer hook (`useScrollProgress.ts`) to drive 3D model transforms per section

- [x] **Milestone 4: Modern Glassmorphic UI & Sections**
  - Floating `Navbar.tsx` with live "Available for work" pulse and sound toggle
  - `HeroSection.tsx` with bold typography, dynamic role badges, and action CTAs
  - `AboutSection.tsx` with philosophy, tech pillars, and real-time capability metrics
  - `ProjectsSection.tsx` with interactive 3D tilt cards and deep-dive modal
  - `SkillsSection.tsx` with interactive matrix, audio chimes, and mastery indicators
  - `JourneySection.tsx` with illuminated timeline nodes
  - `ContactTerminal.tsx` with validation, email copy, and confetti trigger

- [x] **Milestone 5: Production Verification & Mobile Optimization**
  - Run typecheck (`tsc --noEmit`) and production build (`npm run build`)
  - Test responsiveness across mobile, tablet, and desktop
  - Verify 60+ FPS performance and reduced motion fallbacks

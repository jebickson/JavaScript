import { SkillCategory } from '../types/portfolio';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: '3d-webgl',
    title: '3D WebGL & Graphics',
    description: 'Specialized in real-time browser graphics, procedural shaders, and spatial computing.',
    skills: [
      { name: 'Three.js / WebGL', level: 98, highlight: 'PBR materials, custom raymarching, geometry optimization' },
      { name: 'React Three Fiber & Drei', level: 96, highlight: 'Declarative canvas architecture, instanced meshes, render loops' },
      { name: 'GLSL Shaders', level: 92, highlight: 'Vertex displacement, raymarched signed distance fields (SDF), post-processing' },
      { name: 'WebGPU (WGSL)', level: 85, highlight: 'Compute shaders, buffer management, next-gen graphics pipelines' },
      { name: 'Blender & Asset Pipeline', level: 88, highlight: 'Mesh retopology, UV unwrapping, Draco/KTX2 texture compression' },
    ]
  },
  {
    id: 'frontend-architecture',
    title: 'Frontend Architecture & Systems',
    description: 'Crafting ultra-performant, accessible, and reactive user interfaces at enterprise scale.',
    skills: [
      { name: 'React 18/19 & TypeScript', level: 99, highlight: 'Deep type systems, concurrent mode, custom hooks, atomic design' },
      { name: 'Tailwind CSS & Design Systems', level: 97, highlight: 'Futuristic glassmorphism, micro-interactions, dark-mode-first' },
      { name: 'Framer Motion & GSAP', level: 95, highlight: 'Scroll-driven choreography, FLIP animations, physics simulations' },
      { name: 'Web Audio API', level: 90, highlight: 'Procedural sound synthesis, spatial audio nodes, harmonic frequency math' },
      { name: 'Performance & Profiling', level: 94, highlight: 'Zero layout thrashing, 120 FPS frame budgets, Web Vitals mastery' },
    ]
  },
  {
    id: 'backend-cloud',
    title: 'Fullstack & Scalable Systems',
    description: 'High-throughput APIs, streaming pipelines, and real-time distributed infrastructure.',
    skills: [
      { name: 'Node.js & Next.js', level: 93, highlight: 'Edge runtime, server actions, streaming SSR, API gateways' },
      { name: 'WebSockets & WebRTC', level: 91, highlight: 'Binary data transfer, peer-to-peer mesh, low-latency streaming' },
      { name: 'Docker & Cloud Native', level: 86, highlight: 'Containerization, edge deployments, CI/CD automated test rigs' },
      { name: 'Database & State Caching', level: 89, highlight: 'PostgreSQL, Redis, vector embeddings, client-side indexedDB' },
    ]
  },
];

import { ExperienceItem } from '../types/portfolio';

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Principal Creative Frontend Engineer',
    company: 'Nexus Spatial Labs',
    location: 'San Francisco, CA (Remote)',
    period: '2023 — Present',
    badge: 'Current Role',
    description: 'Spearheading the core WebGL engine and design system for next-generation spatial computing interfaces and collaborative 3D web platforms.',
    achievements: [
      'Architected a distributed browser-based 3D scene engine reducing memory consumption by 42% on lower-end devices.',
      'Mentored 14 engineers across WebGL graphics programming, shader development, and modern React performance.',
      'Pioneered internal procedural sound synthesis toolkit replacing 12MB of raw audio assets with 8KB of math code.',
    ],
    technologies: ['Three.js', 'WebGPU', 'React 18', 'TypeScript', 'GLSL', 'Web Workers', 'Tailwind CSS']
  },
  {
    id: 'exp-2',
    role: 'Staff 3D Interactive Architect',
    company: 'Vortex Creative Studio',
    location: 'New York, NY',
    period: '2021 — 2023',
    badge: 'Staff Engineer',
    description: 'Directed the creative technology department building award-winning interactive brand worlds, WebGL product configurators, and generative AI data art.',
    achievements: [
      'Won 4 Awwwards Site of the Day and 2 FWA of the Month awards for high-fidelity real-time 3D web experiences.',
      'Achieved consistent 60+ FPS on mobile Safari and Chrome through intelligent shader LODs and geometry instancing.',
      'Engineered real-time 3D car configurator utilized by over 4 million prospective buyers worldwide.',
    ],
    technologies: ['React Three Fiber', 'Three.js', 'GSAP', 'GLSL Shaders', 'Zustand', 'Blender']
  },
  {
    id: 'exp-3',
    role: 'Senior Frontend Engineer (Creative Tech)',
    company: 'Hyperion Interactive',
    location: 'Austin, TX',
    period: '2019 — 2021',
    badge: 'Senior Role',
    description: 'Developed high-performance dashboard interfaces, dynamic data visualizations, and interactive marketing spectacles.',
    achievements: [
      'Rebuilt legacy canvas charts into hardware-accelerated WebGL visualizers scaling to 500,000 live data points.',
      'Introduced micro-frontend architecture and established strict accessibility and animation design tokens.',
    ],
    technologies: ['React', 'TypeScript', 'WebGL', 'D3.js', 'Canvas API', 'Tailwind CSS']
  },
  {
    id: 'exp-4',
    role: 'Fullstack Interactive Developer',
    company: 'Quantum Dynamics',
    location: 'Seattle, WA',
    period: '2017 — 2019',
    badge: 'Foundations',
    description: 'Built interactive rich-media web applications, REST APIs, and experimental physical computing prototypes.',
    achievements: [
      'Engineered interactive kiosks combining web technologies with Kinect depth sensors.',
      'Constructed high-speed WebSocket streaming telemetry client for IoT device clusters.',
    ],
    technologies: ['JavaScript', 'Node.js', 'Three.js', 'HTML5 Canvas', 'CSS3']
  }
];

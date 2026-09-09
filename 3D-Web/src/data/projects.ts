import { Project } from '../types/portfolio';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'aetheria-spatial',
    title: 'Aetheria Spatial',
    subtitle: 'High-throughput 3D Spatial Canvas & Scene Composer',
    description: 'An in-browser WebGL & WebGPU spatial computing platform enabling real-time multi-user 3D scene editing, volumetric lighting, and procedural mesh synthesis running at 60 FPS.',
    category: 'WebGL / 3D',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['Three.js', 'WebGPU', 'GLSL Shaders', 'React Three Fiber', 'Zustand', 'TypeScript'],
    githubUrl: 'https://github.com/example/aetheria-spatial',
    liveUrl: 'https://aetheria-spatial-demo.io',
    metrics: [
      { label: 'Render Performance', value: '120 FPS' },
      { label: 'Draw Call Optimization', value: '-65%' },
      { label: 'Active Users', value: '85K+' },
    ],
    keyFeatures: [
      'Custom instanced mesh rendering pipeline with dynamic occlusion culling',
      'PBR transmission materials with real-time screen-space reflections (SSR)',
      'Sub-millisecond collaborative WebSocket synchronization via CRDTs',
      'Export directly to GLTF/GLB with custom compression presets',
    ],
    architectureDetails: [
      'Engineered a hybrid WebGL/WebGPU backend abstraction layer that gracefully downgrades based on hardware capabilities.',
      'Custom worker-based geometry worker threads for non-blocking procedural mesh generation.',
      'Reduced initial bundle overhead by 48% via dynamic code-splitting and asset streaming.',
    ]
  },
  {
    id: 'neuralforge-canvas',
    title: 'NeuralForge Canvas',
    subtitle: 'Generative AI Latent Space Explorer in 3D',
    description: 'An interactive multi-dimensional manifold visualizer mapping millions of high-dimensional neural network latent embeddings into a navigable 3D point-cloud constellation.',
    category: 'Creative AI',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    tags: ['WebGL', 'Barnes-Hut UMAP', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'Python FastApi'],
    githubUrl: 'https://github.com/example/neuralforge-canvas',
    liveUrl: 'https://neuralforge.dev',
    metrics: [
      { label: 'Data Points Mapped', value: '2.4M' },
      { label: 'Search Latency', value: '< 12ms' },
      { label: 'Open Source Stars', value: '3.8K' },
    ],
    keyFeatures: [
      'GPU-accelerated Barnes-Hut octree layout for real-time 3D node clustering',
      'Dynamic shader-based raymarching to render high-density density clouds',
      'Semantic trajectory vectors visualized with glowing volumetric splines',
      'Interactive voice & text semantic search with instant spatial waypoint navigation',
    ],
    architectureDetails: [
      'Implemented custom WebGL particle shaders with compute passes for dynamic clustering.',
      'Built a spatial indexing KD-tree running inside Web Workers to ensure butter-smooth camera movement at 60 FPS.',
    ]
  },
  {
    id: 'chronos-hud',
    title: 'Chronos Telemetry HUD',
    subtitle: 'Cybernetic High-Frequency Liquidity & Block Telemetry',
    description: 'A mission-critical financial observability interface featuring 3D holographic order-book depth maps, real-time node cluster topology, and low-latency audio feedback.',
    category: 'Fullstack Systems',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Three.js', 'WebSockets', 'Web Audio API', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/example/chronos-telemetry',
    liveUrl: 'https://chronos-hud-terminal.io',
    metrics: [
      { label: 'Throughput', value: '500K msg/s' },
      { label: 'Glass-to-Glass Latency', value: '4ms' },
      { label: 'Reliability', value: '99.999%' },
    ],
    keyFeatures: [
      'Volumetric 3D water-fall orderbook depth surface rendered with custom GLSL heightmaps',
      'Synthesized Web Audio frequency cues representing market pressure and block gas anomalies',
      'Glassmorphic telemetry HUD with draggable and dockable modular widgets',
      'Zero garbage-collection memory management in data parsing pipelines',
    ],
    architectureDetails: [
      'Developed binary WebSocket decoding using ArrayBuffers and TypedArrays for zero string-alloc overhead.',
      'Maintained steady 60 FPS under peak load using React memoization, OffscreenCanvas, and custom canvas renderers.',
    ]
  },
  {
    id: 'biome-synthesizer',
    title: 'BioSoma Generative',
    subtitle: 'Procedural Organic Life Simulator & Audio-Visual Ecosystem',
    description: 'An interactive generative ecosystem exploring cellular automata, procedural phyllotaxis, and bioluminescent deep-sea flora driven by ambient synthesized soundscapes.',
    category: 'Interactive Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    tags: ['R3F', 'Noise Algorithms', 'Web Audio Synthesis', 'Post-processing Bloom', 'GLSL'],
    githubUrl: 'https://github.com/example/biosoma-generative',
    liveUrl: 'https://biosoma-world.art',
    metrics: [
      { label: 'Procedural Flora', value: '100% Code' },
      { label: 'Awwwards', value: 'Site of the Day' },
      { label: 'Audio Synthesizer', value: '16 Voices' },
    ],
    keyFeatures: [
      'Real-time Simplex and Perlin 4D noise morphing for organic skin shaders',
      'Polyphonic Web Audio FM-synth dynamically generated from mesh vertex displacement',
      'Subsurface scattering simulation with depth-texture bloom and chromatic refraction',
      'Full touch and gyroscope interaction support on mobile devices',
    ],
    architectureDetails: [
      'Created a dual-buffer ping-pong render target pipeline for reaction-diffusion equations.',
      'Packaged responsive fallback shaders that adapt resolution based on current hardware FPS.',
    ]
  }
];

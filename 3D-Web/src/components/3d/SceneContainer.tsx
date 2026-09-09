import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { QuantumCore } from './QuantumCore';
import { ParticleField } from './ParticleField';
import { LightingRig } from './LightingRig';
import { PostProcessingEffects } from './PostProcessingEffects';
import { CanvasLoader } from './CanvasLoader';

interface SceneContainerProps {
  activeSection: string;
}

export const SceneContainer: React.FC<SceneContainerProps> = ({ activeSection }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas
        camera={{
          position: [0, 0, 7.5],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Multi-source dynamic lighting */}
          <LightingRig />

          {/* Procedural cosmic particle background */}
          <ParticleField count={1400} />

          {/* Interactive choreographed 3D focal object */}
          <QuantumCore activeSection={activeSection} />

          {/* Post-processing bloom & vignette */}
          <PostProcessingEffects />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

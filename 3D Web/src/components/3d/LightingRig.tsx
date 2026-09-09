import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const LightingRig: React.FC = () => {
  const mouseLightRef = useRef<THREE.PointLight>(null);
  const secondaryLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    // Pointer follows in 3D coordinates
    if (mouseLightRef.current) {
      const targetX = state.pointer.x * 5;
      const targetY = state.pointer.y * 3.5;
      mouseLightRef.current.position.x = THREE.MathUtils.lerp(mouseLightRef.current.position.x, targetX, 0.08);
      mouseLightRef.current.position.y = THREE.MathUtils.lerp(mouseLightRef.current.position.y, targetY, 0.08);
      mouseLightRef.current.position.z = 3;
    }

    if (secondaryLightRef.current) {
      // Counter-phase orbiting light
      const time = state.clock.getElapsedTime() * 0.8;
      secondaryLightRef.current.position.x = Math.sin(time) * 4;
      secondaryLightRef.current.position.z = Math.cos(time) * 3;
      secondaryLightRef.current.position.y = Math.cos(time * 0.5) * 2;
    }
  });

  return (
    <group>
      {/* Deep cosmic ambient fill */}
      <ambientLight color="#080e21" intensity={1.2} />

      {/* Dynamic Cursor Tracker Light (Neon Cyan) */}
      <pointLight
        ref={mouseLightRef}
        color="#00f0ff"
        intensity={2.8}
        distance={15}
        decay={2}
      />

      {/* Secondary Counter Light (Electric Violet) */}
      <pointLight
        ref={secondaryLightRef}
        color="#a855f7"
        intensity={2.2}
        distance={12}
        decay={2}
      />

      {/* Top Rim Light (Soft Ice White) */}
      <directionalLight
        position={[0, 8, 4]}
        color="#ffffff"
        intensity={1.0}
      />

      {/* Bottom Uplight (Emerald Glow) */}
      <directionalLight
        position={[0, -6, -2]}
        color="#10b981"
        intensity={0.4}
      />
    </group>
  );
};

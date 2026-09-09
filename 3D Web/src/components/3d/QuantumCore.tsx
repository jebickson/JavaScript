import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface QuantumCoreProps {
  activeSection: string;
}

// Target transforms for each narrative chapter
const SECTION_TRANSFORMS: Record<string, { pos: [number, number, number]; scale: number; rotY: number }> = {
  hero: { pos: [0, 0, 0], scale: 1.4, rotY: 0 },
  about: { pos: [2.2, 0.1, 0], scale: 1.15, rotY: Math.PI * 0.5 },
  projects: { pos: [-2.4, 1.2, -0.5], scale: 0.9, rotY: Math.PI },
  skills: { pos: [0, 0.1, 0.3], scale: 1.35, rotY: Math.PI * 1.5 },
  journey: { pos: [-2.0, -0.4, 0], scale: 1.1, rotY: Math.PI * 2 },
  contact: { pos: [2.0, -0.8, 0.2], scale: 1.2, rotY: Math.PI * 2.5 },
};

export const QuantumCore: React.FC<QuantumCoreProps> = ({ activeSection }) => {
  const rootGroupRef = useRef<THREE.Group>(null);
  const innerCrystalRef = useRef<THREE.Mesh>(null);
  const energyOrbRef = useRef<THREE.Mesh>(null);
  const outerCageRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const ring3Ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const isMobile = state.viewport.width < 6.5;

    // 1. Section Choreography Interpolation
    const targetConfig = SECTION_TRANSFORMS[activeSection] || SECTION_TRANSFORMS.hero;
    
    // On mobile, keep the model centered and slightly offset upward or scaled down
    const targetX = isMobile ? 0 : targetConfig.pos[0];
    const targetY = isMobile ? 1.0 : targetConfig.pos[1];
    const targetZ = isMobile ? -1.0 : targetConfig.pos[2];
    const targetScale = isMobile ? targetConfig.scale * 0.75 : targetConfig.scale;

    if (rootGroupRef.current) {
      // Smooth position lerp
      rootGroupRef.current.position.x = THREE.MathUtils.damp(rootGroupRef.current.position.x, targetX, 2.5, delta);
      rootGroupRef.current.position.y = THREE.MathUtils.damp(rootGroupRef.current.position.y, targetY, 2.5, delta);
      rootGroupRef.current.position.z = THREE.MathUtils.damp(rootGroupRef.current.position.z, targetZ, 2.5, delta);

      // Smooth scale lerp
      const currentScale = rootGroupRef.current.scale.x;
      const newScale = THREE.MathUtils.damp(currentScale, targetScale, 3, delta);
      rootGroupRef.current.scale.set(newScale, newScale, newScale);

      // Mouse Parallax & Chapter Base Rotation
      const targetMouseRotX = -state.pointer.y * 0.4;
      const targetMouseRotY = state.pointer.x * 0.6 + (time * 0.15);
      rootGroupRef.current.rotation.x = THREE.MathUtils.damp(rootGroupRef.current.rotation.x, targetMouseRotX, 4, delta);
      rootGroupRef.current.rotation.y = THREE.MathUtils.damp(rootGroupRef.current.rotation.y, targetMouseRotY, 4, delta);
    }

    // 2. Inner Gemstone Rotation & Pulse
    if (innerCrystalRef.current) {
      innerCrystalRef.current.rotation.y += delta * 0.5;
      innerCrystalRef.current.rotation.z += delta * 0.3;
      const pulse = 1 + Math.sin(time * 2.5) * 0.04;
      innerCrystalRef.current.scale.set(pulse, pulse, pulse);
    }

    // 3. Central Energy Orb Glow Pulse
    if (energyOrbRef.current) {
      const orbPulse = 0.85 + Math.sin(time * 4) * 0.12;
      energyOrbRef.current.scale.set(orbPulse, orbPulse, orbPulse);
    }

    // 4. Outer Wireframe Cage Counter-Rotation
    if (outerCageRef.current) {
      outerCageRef.current.rotation.x -= delta * 0.2;
      outerCageRef.current.rotation.y -= delta * 0.35;
    }

    // 5. Gimbal Orbit Rings Multi-Axis Revolution
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.6;
      ring1Ref.current.rotation.x += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.45;
      ring2Ref.current.rotation.z -= delta * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.5;
      ring3Ref.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={rootGroupRef}>
      {/* 1. Core Pulsing Energy Core */}
      <mesh ref={energyOrbRef}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={1.8}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>

      {/* 2. Inner Faceted Gemstone (Icosahedron) */}
      <mesh ref={innerCrystalRef}>
        <icosahedronGeometry args={[1.0, 0]} />
        <meshPhysicalMaterial
          color="#0b1a3a"
          emissive="#061226"
          roughness={0.1}
          metalness={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          reflectivity={1.0}
          wireframe={false}
        />
      </mesh>

      {/* 3. Outer Emissive Wireframe Polyhedral Cage */}
      <mesh ref={outerCageRef}>
        <dodecahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* 4. Gimbal Ring 1: Cyan Orbit Ring with Satellite Nodes */}
      <group ref={ring1Ref}>
        <mesh>
          <torusGeometry args={[2.0, 0.018, 16, 100]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.9}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Orbital Satellite Node */}
        <mesh position={[2.0, 0, 0]}>
          <octahedronGeometry args={[0.08, 0]} />
          <meshStandardMaterial color="#ffffff" emissive="#00f0ff" emissiveIntensity={2} />
        </mesh>
      </group>

      {/* 5. Gimbal Ring 2: Purple Orbit Ring with Satellite Nodes */}
      <group ref={ring2Ref} rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <mesh>
          <torusGeometry args={[2.3, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <mesh position={[0, 2.3, 0]}>
          <octahedronGeometry args={[0.08, 0]} />
          <meshStandardMaterial color="#ffffff" emissive="#a855f7" emissiveIntensity={2} />
        </mesh>
      </group>

      {/* 6. Gimbal Ring 3: Emerald Orbit Ring */}
      <group ref={ring3Ref} rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
        <mesh>
          <torusGeometry args={[2.6, 0.012, 16, 100]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.65}
          />
        </mesh>
      </group>
    </group>
  );
};

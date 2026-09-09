import React, { useMemo } from 'react';
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';

export const PostProcessingEffects: React.FC = () => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const chromaticOffset = useMemo(() => new THREE.Vector2(0.0006, 0.0006), []);

  if (isMobile) {
    return (
      <EffectComposer multisampling={0}>
        <Bloom
          luminanceThreshold={0.25}
          luminanceSmoothing={0.8}
          intensity={0.8}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.12} darkness={0.9} />
      </EffectComposer>
    );
  }

  return (
    <EffectComposer multisampling={4}>
      <Bloom
        luminanceThreshold={0.25}
        luminanceSmoothing={0.8}
        intensity={1.25}
        mipmapBlur
      />
      <ChromaticAberration
        offset={chromaticOffset}
        radialModulation={false}
        modulationOffset={0}
      />
      <Vignette eskil={false} offset={0.12} darkness={0.9} />
    </EffectComposer>
  );
};

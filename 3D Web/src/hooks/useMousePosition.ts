import { useEffect, useState } from 'react';

export interface MouseCoordinates {
  x: number; // Normalized -1 to 1
  y: number; // Normalized -1 to 1
  rawX: number;
  rawY: number;
}

export function useMousePosition(): MouseCoordinates {
  const [coords, setCoords] = useState<MouseCoordinates>({
    x: 0,
    y: 0,
    rawX: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    rawY: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(e.clientY / window.innerHeight) * 2 + 1;

      setCoords({
        x: normalizedX,
        y: normalizedY,
        rawX: e.clientX,
        rawY: e.clientY,
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const normalizedX = (touch.clientX / window.innerWidth) * 2 - 1;
        const normalizedY = -(touch.clientY / window.innerHeight) * 2 + 1;

        setCoords({
          x: normalizedX,
          y: normalizedY,
          rawX: touch.clientX,
          rawY: touch.clientY,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return coords;
}

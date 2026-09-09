import { useEffect, useState } from 'react';

export interface ScrollState {
  scrollY: number;
  progress: number;
  activeSection: string;
  sectionIndex: number;
}

const SECTION_IDS = ['hero', 'about', 'projects', 'skills', 'journey', 'contact'];

export function useScrollProgress(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    progress: 0,
    activeSection: 'hero',
    sectionIndex: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;

      // Determine active section based on section element positions
      let currentSection = 'hero';
      let currentIndex = 0;
      const viewportMiddle = scrollY + window.innerHeight * 0.4;

      for (let i = 0; i < SECTION_IDS.length; i++) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (viewportMiddle >= top && viewportMiddle < top + height) {
            currentSection = SECTION_IDS[i];
            currentIndex = i;
            break;
          }
        }
      }

      setScrollState({
        scrollY,
        progress,
        activeSection: currentSection,
        sectionIndex: currentIndex,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial measure
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
}

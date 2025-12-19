'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to detect if the viewport is mobile-sized
 * Breakpoint: 768px (Tailwind's md breakpoint)
 */
export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    checkIsMobile();

    // Listen for resize events
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
}

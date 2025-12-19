'use client';

import { useScroll, useTransform, MotionValue } from 'framer-motion';

/**
 * Hook to track scroll progress on the page
 * Returns scroll progress values between 0 and 1
 */
export function useScrollProgress(): {
  scrollYProgress: MotionValue<number>;
  scrollY: MotionValue<number>;
} {
  const { scrollYProgress, scrollY } = useScroll();

  return {
    scrollYProgress,
    scrollY,
  };
}

/**
 * Hook to create parallax effect based on scroll
 * @param speed - Parallax speed multiplier (0.3-1.2)
 * @param inputRange - Optional custom input range [start, end]
 */
export function useParallax(
  speed: number = 0.5,
  inputRange: [number, number] = [0, 1]
): MotionValue<string> {
  const { scrollYProgress } = useScrollProgress();

  // Calculate output range based on speed
  // Slower speed (< 1) = moves less = appears deeper
  // Faster speed (> 1) = moves more = appears closer
  const outputRange = speed < 1
    ? ['0%', `${speed * 100}%`]
    : ['0%', `${(speed - 1) * 50}%`];

  return useTransform(scrollYProgress, inputRange, outputRange);
}

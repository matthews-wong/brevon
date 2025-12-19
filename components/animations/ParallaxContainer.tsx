'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useScrollProgress';
import { useIsMobile } from '@/hooks/useIsMobile';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  axis?: 'y' | 'x';
}

/**
 * Parallax container component
 * Creates depth effect by moving elements at different speeds
 * Disabled on mobile for performance
 */
export function ParallaxContainer({
  children,
  speed = 0.5,
  className = '',
  axis = 'y',
}: ParallaxContainerProps) {
  const isMobile = useIsMobile();
  const y = useParallax(speed);

  // Disable parallax on mobile
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      style={axis === 'y' ? { y } : { x: y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

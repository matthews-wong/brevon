'use client';

import { ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimationProviderProps {
  children: ReactNode;
}

/**
 * Provider component for animation configuration
 * Respects user's reduced motion preferences
 * Configures global motion settings
 */
export function AnimationProvider({ children }: AnimationProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig
      reducedMotion={prefersReducedMotion ? 'always' : 'never'}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: 'easeOut',
      }}
    >
      {children}
    </MotionConfig>
  );
}

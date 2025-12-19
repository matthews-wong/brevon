'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cardVariants, popInVariants } from '@/lib/animation-variants';
import { useIsMobile } from '@/hooks/useIsMobile';

interface AnimatedCardProps {
  children: ReactNode;
  index?: number;
  variant?: 'card' | 'pop';
  staggerDelay?: number;
  enableHover?: boolean;
  enable3D?: boolean;
  className?: string;
}

/**
 * Animated card wrapper component
 * Supports stagger animations and 3D tilt on hover (desktop only)
 */
export function AnimatedCard({
  children,
  index = 0,
  variant = 'card',
  staggerDelay = 0.1,
  enableHover = true,
  enable3D = true,
  className = '',
}: AnimatedCardProps) {
  const isMobile = useIsMobile();

  const selectedVariant = variant === 'pop' ? popInVariants : cardVariants;

  // Calculate delay based on index
  const delay = index * staggerDelay;

  // Add delay to variants
  const variantsWithDelay = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...(selectedVariant.visible as any).transition,
        delay,
      },
    },
  };

  // 3D tilt hover effect (desktop only)
  const hoverEffect =
    enableHover && enable3D && !isMobile
      ? {
          scale: 1.02,
          rotateX: 2,
          rotateY: 2,
          transition: {
            duration: 0.3,
            ease: 'easeOut',
          },
        }
      : enableHover
      ? {
          scale: isMobile ? 0.98 : 1.05,
          transition: {
            duration: 0.2,
            ease: 'easeOut',
          },
        }
      : {};

  const tapEffect = isMobile
    ? {
        scale: 0.98,
        transition: {
          duration: 0.1,
        },
      }
    : {};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variantsWithDelay}
      whileHover={hoverEffect}
      whileTap={tapEffect}
      className={className}
      style={enable3D && !isMobile ? { transformStyle: 'preserve-3d' } : {}}
    >
      {children}
    </motion.div>
  );
}

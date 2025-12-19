'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  fadeInVariants,
  slideUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
  scaleInVariants,
  fadeInVariantsMobile,
  slideUpVariantsMobile,
  getResponsiveVariant,
} from '@/lib/animation-variants';
import { useIsMobile } from '@/hooks/useIsMobile';

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
  threshold?: number;
  className?: string;
}

const variantMap = {
  fadeIn: fadeInVariants,
  slideUp: slideUpVariants,
  slideLeft: slideInLeftVariants,
  slideRight: slideInRightVariants,
  scaleIn: scaleInVariants,
};

const mobileVariantMap = {
  fadeIn: fadeInVariantsMobile,
  slideUp: slideUpVariantsMobile,
  slideLeft: fadeInVariantsMobile,
  slideRight: fadeInVariantsMobile,
  scaleIn: fadeInVariantsMobile,
};

/**
 * Animated section wrapper component
 * Triggers animation when scrolled into view
 */
export function AnimatedSection({
  children,
  variant = 'fadeIn',
  delay = 0,
  threshold = 0.2,
  className = '',
}: AnimatedSectionProps) {
  const isMobile = useIsMobile();

  const selectedVariant = getResponsiveVariant(
    variantMap[variant],
    mobileVariantMap[variant],
    isMobile
  );

  // Add delay to the visible state
  const variantsWithDelay: Variants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...(selectedVariant.visible as any).transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={variantsWithDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

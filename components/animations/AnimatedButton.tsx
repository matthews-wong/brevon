'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Animated button component with ripple effect and micro-interactions
 * Supports both link and button variants
 */
export function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: AnimatedButtonProps) {
  const isMobile = useIsMobile();
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    // Create ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);

    // Call onClick if provided
    if (onClick) {
      onClick();
    }
  };

  // Hover animation (desktop)
  const hoverAnimation = isMobile
    ? {}
    : {
        scale: 1.05,
        transition: { duration: 0.2, ease: 'easeOut' },
      };

  // Tap animation (mobile haptic-like feedback)
  const tapAnimation = isMobile
    ? {
        scale: [1, 0.95, 1.02, 1],
        transition: { duration: 0.2, ease: 'easeOut' },
      }
    : {
        scale: 0.98,
        transition: { duration: 0.1 },
      };

  const MotionComponent = motion.div;

  const buttonContent = (
    <MotionComponent
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {children}

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
            marginLeft: -10,
            marginTop: -10,
            opacity: 0.5,
          }}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
    </MotionComponent>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return <button type={type}>{buttonContent}</button>;
}

import { Transition } from 'framer-motion';

// Default page transition
export const defaultPageTransition: Transition = {
  duration: 0.3,
  ease: 'easeInOut',
};

// Fade transition
export const fadeTransition: Transition = {
  duration: 0.3,
  ease: 'easeInOut',
};

// Scale transition
export const scaleTransition: Transition = {
  duration: 0.5,
  ease: 'easeOut',
};

// Spring transition
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
  mass: 0.8,
};

// Smooth transition
export const smoothTransition: Transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

// Quick transition for mobile
export const quickTransition: Transition = {
  duration: 0.2,
  ease: 'easeOut',
};

// Page exit/enter variants
export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: defaultPageTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

// Slide page variants
export const slidePageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  }),
};

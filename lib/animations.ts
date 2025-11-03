import { Variants } from "framer-motion"

// Timing constants - Coordinados para crear una progresión natural
export const ANIMATION_DELAYS = {
  immediate: 0,
  navbar: 0.2,
  hero: {
    container: 0.4,
    title: 0.6,
    tagline1: 0.9,
    tagline2: 1.2,
    button: 1.5,
  },
  section: {
    first: 0.3,
    second: 0.5,
    third: 0.7,
  },
  stagger: {
    short: 0.1,
    medium: 0.15,
    long: 0.2,
  },
}

export const ANIMATION_DURATIONS = {
  fast: 0.5,
  normal: 0.8,
  slow: 1.2,
  verySlow: 1.5,
}

export const ANIMATION_EASINGS = {
  smooth: [0.4, 0, 0.2, 1], // ease-in-out cubic-bezier
  elegant: [0.25, 0.1, 0.25, 1], // ease-out
  bounce: [0.68, -0.55, 0.265, 1.55],
}

// Variantes reutilizables
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: ANIMATION_EASINGS.elegant,
    },
  },
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: ANIMATION_EASINGS.elegant,
    },
  },
}

export const slideInFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: ANIMATION_EASINGS.elegant,
    },
  },
}

export const slideInFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: ANIMATION_EASINGS.elegant,
    },
  },
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: ANIMATION_EASINGS.smooth,
    },
  },
}

// Variante para stagger (múltiples elementos)
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_DELAYS.stagger.medium,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: ANIMATION_EASINGS.elegant,
    },
  },
}

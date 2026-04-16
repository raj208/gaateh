import type { Transition, Variants } from "framer-motion"

export const viewport = {
  once: true,
  amount: 0.2,
} as const

export const premiumEase = [0.22, 1, 0.36, 1] as const

export const standardTransition: Transition = {
  duration: 0.72,
  ease: premiumEase,
}

export function getRevealMotion(reducedMotion: boolean, distance = 24, delay = 0) {
  return {
    initial: { opacity: 0, y: reducedMotion ? 0 : distance },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      ...standardTransition,
      delay: reducedMotion ? 0 : delay,
    },
  }
}

export function getStaggerParent(
  reducedMotion: boolean,
  delayChildren = 0.04,
  staggerChildren = 0.08,
): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reducedMotion
        ? { duration: 0.01 }
        : {
            delayChildren,
            staggerChildren,
          },
    },
  }
}

export function getStaggerItem(reducedMotion: boolean, distance = 18): Variants {
  return {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: standardTransition,
    },
  }
}

"use client"

import type { PropsWithChildren } from "react"
import { motion, useReducedMotion } from "framer-motion"

import { getRevealMotion, viewport } from "@/lib/motion"
import { cn } from "@/lib/utils"

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  distance?: number
}>

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
}: RevealProps) {
  const reducedMotion = Boolean(useReducedMotion())
  const revealMotion = getRevealMotion(reducedMotion, distance, delay)

  return (
    <motion.div
      initial={revealMotion.initial}
      whileInView={revealMotion.whileInView}
      viewport={viewport}
      transition={revealMotion.transition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

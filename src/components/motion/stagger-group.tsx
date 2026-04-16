"use client"

import type { PropsWithChildren } from "react"
import { motion, useReducedMotion } from "framer-motion"

import { getStaggerItem, getStaggerParent, viewport } from "@/lib/motion"
import { cn } from "@/lib/utils"

type StaggerGroupProps = PropsWithChildren<{
  className?: string
  delayChildren?: number
  staggerChildren?: number
}>

type StaggerItemProps = PropsWithChildren<{
  className?: string
}>

export function StaggerGroup({
  children,
  className,
  delayChildren = 0.04,
  staggerChildren = 0.08,
}: StaggerGroupProps) {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <motion.div
      variants={getStaggerParent(reducedMotion, delayChildren, staggerChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <motion.div variants={getStaggerItem(reducedMotion)} className={cn(className)}>
      {children}
    </motion.div>
  )
}

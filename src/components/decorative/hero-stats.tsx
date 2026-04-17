"use client"

import { useEffect, useRef, useState } from "react"
import { Users, ShieldCheck, MapPin, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Stat = {
  icon: LucideIcon
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { icon: Users, value: 500, suffix: "M+", label: "Target addressable users" },
  { icon: ShieldCheck, value: 7, suffix: "", label: "Trust verification layers" },
  { icon: MapPin, value: 700, suffix: "+", label: "Tribal communities in India" },
  { icon: TrendingUp, value: 3, suffix: "", label: "Staged expansion phases" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1600
          const start = performance.now()

          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="stat-number">
      {display}
      {suffix}
    </span>
  )
}

export function HeroStats() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group interactive-card flex flex-col items-center gap-2 p-5 text-center sm:p-6"
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary/14">
            <stat.icon className="size-5" />
          </div>
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          <p className="text-xs font-medium leading-5 text-muted-foreground sm:text-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}

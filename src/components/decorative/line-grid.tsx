import { useId } from "react"

import { cn } from "@/lib/utils"

type LineGridProps = {
  className?: string
  cell?: number
}

export function LineGrid({ className, cell = 36 }: LineGridProps) {
  const uid = useId().replace(/:/g, "")
  const patternId = `${uid}-pattern`
  const gradientId = `${uid}-gradient`
  const maskId = `${uid}-mask`

  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <pattern
          id={patternId}
          width={cell}
          height={cell}
          patternUnits="userSpaceOnUse"
          x="0"
          y="0"
        >
          <path d={`M ${cell} 0 L 0 0 0 ${cell}`} stroke="currentColor" strokeOpacity="0.16" />
        </pattern>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.78" />
          <stop offset="100%" stopColor="white" stopOpacity="0.08" />
        </linearGradient>
        <mask id={maskId}>
          <rect width="100%" height="100%" fill={`url(#${gradientId})`} />
        </mask>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${patternId})`} mask={`url(#${maskId})`} />
    </svg>
  )
}

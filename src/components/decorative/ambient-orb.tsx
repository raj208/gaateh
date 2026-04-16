import { cn } from "@/lib/utils"

type AmbientOrbProps = {
  className?: string
  tone?: "earth" | "sand" | "clay"
}

const toneClasses = {
  earth: "bg-[radial-gradient(circle,oklch(0.79_0.05_72_/_0.28),transparent_68%)]",
  sand: "bg-[radial-gradient(circle,oklch(0.91_0.03_80_/_0.45),transparent_70%)]",
  clay: "bg-[radial-gradient(circle,oklch(0.72_0.05_38_/_0.18),transparent_68%)]",
} as const

export function AmbientOrb({ className, tone = "earth" }: AmbientOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        toneClasses[tone],
        className,
      )}
    />
  )
}

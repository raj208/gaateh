import { cn } from "@/lib/utils"

type SectionDividerProps = {
  className?: string
  label?: string
}

export function SectionDivider({ className, label }: SectionDividerProps) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-border/20 via-border/80 to-transparent" />
      {label ? (
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
      ) : (
        <span className="size-2 rounded-full bg-primary/40" />
      )}
      <div className="h-px flex-1 bg-gradient-to-l from-border/20 via-border/80 to-transparent" />
    </div>
  )
}

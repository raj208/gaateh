import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

export function SectionWrapper({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn("section-anchor section-space relative", className)} {...props} />
}

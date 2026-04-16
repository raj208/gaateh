import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"

import { AmbientOrb } from "@/components/decorative/ambient-orb"
import { SectionDivider } from "@/components/decorative/section-divider"
import { TrustSignalPanel } from "@/components/decorative/trust-signal-panel"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { buttonVariants } from "@/components/ui/button"
import { positioningPills } from "@/lib/constants"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <SectionWrapper id="vision" className="overflow-hidden pb-10 pt-10 sm:pt-14">
      <Container>
        <div className="section-band relative overflow-hidden sm:px-8 sm:py-8 lg:px-10 lg:py-10 xl:px-12">
          <AmbientOrb tone="earth" className="-left-16 top-8 size-40 opacity-80" />
          <AmbientOrb tone="sand" className="right-0 top-0 size-52 opacity-70" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(28rem,1fr)] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,0.84fr)_minmax(32rem,1fr)] xl:gap-16">
            <Reveal className="space-y-7 lg:max-w-[33rem] lg:pr-2 xl:max-w-[35rem] xl:pr-4">
              <div className="space-y-4">
                <span className="eyebrow">
                  <ShieldCheck className="size-4" />
                  India-first trust infrastructure
                </span>
                <div className="space-y-4">
                  <h1 className="max-w-[11ch] text-[2.9rem] leading-[1.02] sm:text-[4rem] lg:text-[4.35rem] xl:text-[4.75rem]">
                    Serious introductions need more than profiles. They need{" "}
                    <span className="text-gradient">trust infrastructure.</span>
                  </h1>
                  <p className="max-w-[34rem] text-base leading-8 text-muted-foreground sm:text-lg">
                    {siteConfig.name} is an India-first, trust-first relationship platform built
                    for serious introductions. It begins with tribal communities across India,
                    where cultural alignment, serious intent, and community trust matter deeply,
                    and it is designed to scale thoughtfully over time.
                  </p>
                </div>
              </div>

              <SectionDivider className="max-w-xl" label="Why the first page matters" />

              <div className="flex max-w-[34rem] flex-wrap gap-2.5">
                {positioningPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-border/80 bg-white/72 px-4 py-2 text-sm font-medium text-foreground/85 shadow-sm backdrop-blur"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="#contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 w-full px-6 sm:min-w-[11rem] sm:w-auto",
                  )}
                >
                  Contact founder
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="#trust"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 w-full px-6 sm:min-w-[11rem] sm:w-auto",
                  )}
                >
                  Explore trust model
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:justify-self-end lg:w-full lg:max-w-[40rem]">
              <TrustSignalPanel />
            </Reveal>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}

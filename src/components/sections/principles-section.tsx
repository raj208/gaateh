import {
  Compass,
  Fingerprint,
  LockKeyhole,
  Radar,
  Scale,
  Waypoints,
  type LucideIcon,
} from "lucide-react"

import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/shared/section-wrapper"

type Principle = {
  icon: LucideIcon
  title: string
  description: string
}

const principles: Principle[] = [
  {
    icon: Compass,
    title: "Respectful, not swipe-driven",
    description: "Discovery should feel considered and intentional rather than optimized for endless browsing.",
  },
  {
    icon: Fingerprint,
    title: "Identity-led onboarding",
    description: "Serious introductions work better when accountability begins before visibility and outreach.",
  },
  {
    icon: Radar,
    title: "Intent-based discovery",
    description: "Signals about seriousness, pace, and alignment should matter more than pure volume of attention.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy-aware experience",
    description: "Users should feel they can discover and be discovered without overexposure or performative pressure.",
  },
  {
    icon: Scale,
    title: "Trust before scale",
    description: "Category trust is harder to rebuild than growth is to chase, so product discipline has to come first.",
  },
  {
    icon: Waypoints,
    title: "Future-ready operating model",
    description: "The product should be built so verification, moderation, and premium trust services can evolve over time.",
  },
]

export function PrinciplesSection() {
  return (
    <SectionWrapper className="pt-0">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="space-y-6">
              <SectionHeading
                eyebrow="How The Platform Is Designed"
                title="The product philosophy is introduction-led, not attention-led."
                description="Every design decision is aimed at making serious introductions feel more credible, more private, and more respectful than generic relationship products."
              />

              <div className="surface-panel relative overflow-hidden p-6 sm:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <p className="text-base leading-8 text-muted-foreground">
                  Tribal Match should feel closer to a trusted introduction network than a
                  swipe-first app. That means identity, intent, privacy, and operational trust have
                  to shape the experience from the start.
                </p>
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-5 md:grid-cols-2">
            {principles.map((principle, index) => (
              <StaggerItem key={principle.title}>
                <article className="interactive-card group h-full p-6">
                  <div className="flex items-center justify-between">
                    <div className="icon-shell">
                      <principle.icon className="size-5" />
                    </div>
                    <span className="text-2xl font-heading font-light tracking-tight text-primary/10 transition-colors duration-300 group-hover:text-primary/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl leading-tight">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {principle.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </SectionWrapper>
  )
}

import { BriefcaseBusiness, Gem, Layers2, type LucideIcon } from "lucide-react"

import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/shared/section-wrapper"

type BusinessPhase = {
  icon: LucideIcon
  title: string
  description: string
}

const businessPhases: BusinessPhase[] = [
  {
    icon: Layers2,
    title: "Accessible early experience",
    description:
      "Early participation should prioritize trust formation, user quality, and network seeding rather than aggressive monetization.",
  },
  {
    icon: Gem,
    title: "Premium serious-intent tools later",
    description:
      "Over time, premium layers can include richer filters, visibility controls, intent signals, and higher-confidence matching tools.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Higher-trust services over time",
    description:
      "Curated pathways, assisted introductions, and more structured premium services can emerge once the trust layer is proven.",
  },
]

export function BusinessSection() {
  return (
    <SectionWrapper className="pt-0">
      <Container className="space-y-10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              eyebrow="Monetization And Business Logic"
              title="Revenue should follow trust, not outrun it."
              description="The commercial logic is phased: build the right network first, then layer premium tools and higher-trust services in ways that reinforce user quality."
            />

            <div className="surface-panel-muted p-6 sm:p-7">
              <p className="text-base leading-8 text-muted-foreground">
                This matters because a trust-first platform compounds differently from an
                engagement-first platform. Better network quality can support healthier retention,
                stronger referral behavior, and more defensible premium pathways later.
              </p>
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-5 md:grid-cols-3">
          {businessPhases.map((phase) => (
            <StaggerItem key={phase.title}>
              <article className="interactive-card h-full p-6 sm:p-7">
                <div className="icon-shell">
                  <phase.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl leading-tight">{phase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{phase.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </SectionWrapper>
  )
}

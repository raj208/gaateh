import {
  Focus,
  Globe2,
  Layers3,
  ShieldPlus,
  type LucideIcon,
} from "lucide-react"

import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/shared/section-wrapper"

type ThesisCard = {
  icon: LucideIcon
  title: string
  description: string
  number: string
}

const thesisCards: ThesisCard[] = [
  {
    icon: Focus,
    title: "A focused launch wedge",
    description:
      "Starting with tribal communities across India creates a high-context environment where trust, cultural alignment, and serious intent already matter.",
    number: "01",
  },
  {
    icon: ShieldPlus,
    title: "A real trust gap exists",
    description:
      "Most products optimize profile browsing and engagement. Few are designed from the ground up for verification-rich, respectful introductions.",
    number: "02",
  },
  {
    icon: Layers3,
    title: "Better density, better discipline",
    description:
      "A clearly defined first market improves onboarding quality, moderation clarity, supply-demand balance, and the feedback loops required to compound trust.",
    number: "03",
  },
  {
    icon: Globe2,
    title: "Strategic, not limiting",
    description:
      "The trust systems built here can later extend into broader Indian cultural and language groups, then into global use cases that still value cultural context.",
    number: "04",
  },
]

export function ThesisSection() {
  return (
    <SectionWrapper id="why-now" className="pt-0">
      <Container className="space-y-12">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              eyebrow="Why This Matters"
              title="The first market is a strategic entry point, not a narrow niche."
              description="Tribal Match is built on the belief that serious introductions become stronger when trust, context, and product discipline are designed together from day one."
            />

            <div className="surface-panel-muted relative overflow-hidden p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
              <p className="text-base leading-8 text-muted-foreground">
                This is also a timely category. India now has the digital identity rails, smartphone
                familiarity, and rising safety expectations needed for a more trustworthy
                introduction network. The opportunity is not simply to digitize matchmaking, but to
                rebuild it with clearer accountability, privacy, and respect.
              </p>
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {thesisCards.map((card) => (
            <StaggerItem key={card.title}>
              <article className="interactive-card group h-full p-6">
                <div className="flex items-center justify-between">
                  <div className="icon-shell">
                    <card.icon className="size-5" />
                  </div>
                  <span className="text-3xl font-heading font-light tracking-tight text-primary/15 transition-colors duration-300 group-hover:text-primary/25">
                    {card.number}
                  </span>
                </div>
                <h3 className="mt-5 text-xl leading-tight">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </SectionWrapper>
  )
}

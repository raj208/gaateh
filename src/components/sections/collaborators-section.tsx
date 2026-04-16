import { Brush, Shield, TrendingUp, Users, Wrench, type LucideIcon } from "lucide-react"

import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/shared/section-wrapper"

type CollaboratorRole = {
  icon: LucideIcon
  title: string
  description: string
}

const collaboratorRoles: CollaboratorRole[] = [
  {
    icon: Wrench,
    title: "Early operators",
    description: "People who care about process, discipline, and building a high-trust consumer operating model from scratch.",
  },
  {
    icon: Brush,
    title: "Designers",
    description: "Design talent that can make privacy, trust, and seriousness feel intuitive instead of heavy or bureaucratic.",
  },
  {
    icon: Users,
    title: "Engineers",
    description: "Builders who want to work on identity, matching logic, trust systems, and a product that values correctness over gimmicks.",
  },
  {
    icon: Shield,
    title: "Trust and safety builders",
    description: "People who understand that moderation, verification, and recourse are part of product quality, not back-office chores.",
  },
  {
    icon: TrendingUp,
    title: "Growth collaborators",
    description: "Operators who can think carefully about community trust, distribution, retention, and reputation-sensitive growth.",
  },
]

export function CollaboratorsSection() {
  return (
    <SectionWrapper className="pt-0">
      <Container className="space-y-10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              eyebrow="For Collaborators And Future Team Members"
              title="This is meaningful consumer infrastructure, not just another app."
              description="Tribal Match is aimed at a category where trust, culture, identity, and technology intersect. That requires people who want to build durable systems, not short-lived engagement mechanics."
            />

            <div className="surface-panel p-6 sm:p-7">
              <p className="text-base leading-8 text-muted-foreground">
                If the long-term goal is a trusted introduction network that can scale beyond the
                first market, then every early hire and collaborator matters. The product needs
                thoughtful builders who care about quality, not just speed.
              </p>
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {collaboratorRoles.map((role) => (
            <StaggerItem key={role.title}>
              <article className="interactive-card h-full p-5">
                <div className="icon-shell">
                  <role.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg leading-tight">{role.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{role.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </SectionWrapper>
  )
}

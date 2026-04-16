import {
  Camera,
  EyeOff,
  Flag,
  ScanFace,
  ShieldCheck,
  ShieldPlus,
  UsersRound,
  type LucideIcon,
} from "lucide-react"

import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/shared/section-wrapper"

type TrustLayer = {
  icon: LucideIcon
  title: string
  description: string
}

const trustLayers: TrustLayer[] = [
  {
    icon: Camera,
    title: "Introduction videos",
    description:
      "Short introductions add seriousness, tone, and self-representation in a way static profiles cannot.",
  },
  {
    icon: ScanFace,
    title: "Future-ready liveness checks",
    description:
      "Live selfie and liveness layers can be introduced as the product matures to strengthen authenticity and reduce spoofing risk.",
  },
  {
    icon: ShieldCheck,
    title: "Verification signals",
    description:
      "Progressive identity and profile trust markers can help users understand credibility without oversharing personal data.",
  },
  {
    icon: EyeOff,
    title: "Privacy controls",
    description:
      "Visibility, pacing, and exposure should be adjustable so discovery feels selective rather than performative.",
  },
  {
    icon: Flag,
    title: "Report and block foundations",
    description:
      "Fast recourse matters. Reporting, blocking, and escalation paths should exist as first-order product capabilities.",
  },
  {
    icon: UsersRound,
    title: "One-person-one-account thinking",
    description:
      "The system should be designed to discourage duplicates, impersonation, and disposable account behavior over time.",
  },
  {
    icon: ShieldPlus,
    title: "Moderation readiness",
    description:
      "Trust is not just UI. Review tooling, policy signals, and operator workflows are part of the product's long-term defensibility.",
  },
]

export function TrustSection() {
  return (
    <SectionWrapper id="trust" className="pt-0">
      <Container className="space-y-10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              eyebrow="Trust Architecture"
              title="Trust has to be visible to users and operational inside the system."
              description="This is not a thin safety layer added after growth. The platform is designed so verification, privacy, moderation readiness, and serious intent become part of the core user experience."
            />

            <div className="surface-panel p-6 sm:p-7">
              <p className="text-base leading-8 text-muted-foreground">
                Investor relevance comes from the fact that trust here is both product logic and
                operating logic. If serious introductions are the use case, then accountability,
                identity quality, and recourse mechanisms are central to network quality.
              </p>
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {trustLayers.map((layer) => (
            <StaggerItem key={layer.title}>
              <article className="interactive-card h-full p-6">
                <div className="icon-shell">
                  <layer.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl leading-tight">{layer.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{layer.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </SectionWrapper>
  )
}

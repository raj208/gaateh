import { ArrowRight, Globe2, Languages, MapPinned } from "lucide-react"

import { AmbientOrb } from "@/components/decorative/ambient-orb"
import { LineGrid } from "@/components/decorative/line-grid"
import { SectionDivider } from "@/components/decorative/section-divider"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/shared/section-wrapper"

const roadmapStages = [
  {
    stage: "Stage 1",
    title: "Tribal communities across India",
    description:
      "Build dense, credible early networks where cultural context and serious intent already shape how introductions are evaluated.",
    focus: "Operating focus: onboarding trust, verification depth, privacy, moderation readiness.",
    icon: MapPinned,
  },
  {
    stage: "Stage 2",
    title: "Broader Indian cultural and language groups",
    description:
      "Extend the same trust primitives into wider Indian cohorts while preserving cultural grounding and stronger discovery controls.",
    focus: "Operating focus: configurable context, broader matching logic, scalable trust operations.",
    icon: Languages,
  },
  {
    stage: "Stage 3",
    title: "Global platform with optional context filters",
    description:
      "Expand to broader global use cases with optional filters for culture, language, religion, values, and seriousness preferences.",
    focus: "Operating focus: global discovery standards without losing the trust-first operating model.",
    icon: Globe2,
  },
] as const

export function RoadmapSection() {
  return (
    <SectionWrapper id="roadmap" className="pt-0">
      <Container className="space-y-10">
        <Reveal>
          <div className="space-y-6">
            <SectionHeading
              align="center"
              eyebrow="Expansion Path"
              title="The roadmap is staged for depth first, then breadth."
              description="Tribal Match is designed to win trust in a specific starting market before widening into broader Indian and global use cases."
            />
            <SectionDivider className="mx-auto max-w-xl" label="Scale with trust intact" />
          </div>
        </Reveal>

        <div className="surface-panel relative overflow-hidden p-4 sm:p-6">
          <LineGrid className="text-[oklch(0.39_0.04_42)] opacity-35" />
          <AmbientOrb tone="sand" className="-right-12 top-0 size-40 opacity-80" />
          <AmbientOrb tone="earth" className="-left-10 bottom-0 size-28 opacity-70" />

          <StaggerGroup className="relative grid gap-5 lg:grid-cols-3">
            <div className="absolute left-8 right-8 top-11 hidden h-px bg-gradient-to-r from-transparent via-border/85 to-transparent lg:block" />

            {roadmapStages.map((stage, index) => (
              <StaggerItem key={stage.stage} className="relative">
                <article className="surface-panel-strong h-full p-6 sm:p-7">
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <span className="eyebrow">{stage.stage}</span>
                      <h3 className="mt-5 text-2xl leading-tight">{stage.title}</h3>
                    </div>
                    <div className="icon-shell">
                      <stage.icon className="size-5" />
                    </div>
                  </div>

                  <SectionDivider className="my-5" />

                  <p className="text-sm leading-7 text-muted-foreground">{stage.description}</p>
                  <p className="mt-4 text-sm leading-7 text-foreground/80">{stage.focus}</p>

                  {index < roadmapStages.length - 1 ? (
                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground lg:hidden">
                      Next
                      <ArrowRight className="size-4" />
                    </div>
                  ) : null}
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </SectionWrapper>
  )
}

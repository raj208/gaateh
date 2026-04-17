import { ArrowRight, Globe2, Languages, MapPinned } from "lucide-react"

import { LineGrid } from "@/components/decorative/line-grid"
import { SectionDivider } from "@/components/decorative/section-divider"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"

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
    <section
      id="roadmap"
      className="section-anchor relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 0%, oklch(0.32 0.03 55 / 0.5), transparent 55%),
          radial-gradient(ellipse at 80% 100%, oklch(0.28 0.02 35 / 0.4), transparent 50%),
          linear-gradient(180deg, oklch(0.22 0.018 42) 0%, oklch(0.18 0.015 40) 100%)
        `,
      }}
    >
      {/* Grain texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-20 size-80 rounded-full opacity-20" style={{ background: "radial-gradient(circle, oklch(0.5 0.04 65 / 0.5), transparent 70%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 bottom-10 size-60 rounded-full opacity-15" style={{ background: "radial-gradient(circle, oklch(0.45 0.03 45 / 0.4), transparent 70%)" }} />

      <div className="relative py-[clamp(4.5rem,8vw,8rem)]">
        <Container className="space-y-10">
          <Reveal>
            <div className="space-y-6 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.18em] text-white/70 uppercase shadow-sm backdrop-blur">
                Expansion Path
              </span>
              <div className="mx-auto space-y-3">
                <h2 className="mx-auto max-w-3xl font-heading text-3xl leading-tight tracking-[-0.03em] text-white text-balance sm:text-4xl">
                  The roadmap is staged for depth first, then breadth.
                </h2>
                <p className="mx-auto max-w-2xl text-base leading-7 text-white/55 text-pretty sm:text-lg">
                  Tribal Match is designed to win trust in a specific starting market before widening into broader Indian and global use cases.
                </p>
              </div>
              {/* Inline divider for dark section */}
              <div className="mx-auto flex max-w-xl items-center gap-3" aria-hidden="true">
                <div className="h-px flex-1 bg-gradient-to-r from-white/5 via-white/20 to-transparent" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                  Scale with trust intact
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-white/5 via-white/20 to-transparent" />
              </div>
            </div>
          </Reveal>

          <div className="relative overflow-hidden rounded-[calc(var(--radius)*1.6)] border border-white/10 bg-white/5 p-4 shadow-[0_28px_70px_rgb(0_0_0_/_0.3)] backdrop-blur-md sm:p-6">
            <LineGrid className="text-white opacity-10" />

            <StaggerGroup className="relative grid gap-5 lg:grid-cols-3">
              {/* Connecting line */}
              <div className="absolute left-8 right-8 top-11 hidden h-px bg-gradient-to-r from-transparent via-white/12 to-transparent lg:block" />

              {roadmapStages.map((stage, index) => (
                <StaggerItem key={stage.stage} className="relative">
                  <article className="group h-full rounded-[calc(var(--radius)*1.6)] border border-white/10 bg-gradient-to-b from-white/8 to-white/3 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:from-white/12 hover:to-white/5 sm:p-7">
                    {/* Top glow line on hover */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition-all duration-500 group-hover:via-white/25" />

                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.18em] text-white/70 uppercase">
                          {stage.stage}
                        </span>
                        <h3 className="mt-5 font-heading text-2xl leading-tight tracking-[-0.03em] text-white text-balance">
                          {stage.title}
                        </h3>
                      </div>
                      <div
                        className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 shadow-sm"
                        style={{ background: "linear-gradient(135deg, oklch(0.35 0.025 55 / 0.7), oklch(0.30 0.02 48 / 0.5))" }}
                      >
                        <stage.icon className="size-5 text-white/90" />
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-5 flex items-center gap-3" aria-hidden="true">
                      <div className="h-px flex-1 bg-gradient-to-r from-white/5 via-white/15 to-transparent" />
                      <span className="size-1.5 rounded-full bg-white/20" />
                      <div className="h-px flex-1 bg-gradient-to-l from-white/5 via-white/15 to-transparent" />
                    </div>

                    <p className="text-sm leading-7 text-white/50">{stage.description}</p>
                    <p className="mt-4 text-sm leading-7 text-white/65">{stage.focus}</p>

                    {index < roadmapStages.length - 1 ? (
                      <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/30 lg:hidden">
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
      </div>
    </section>
  )
}

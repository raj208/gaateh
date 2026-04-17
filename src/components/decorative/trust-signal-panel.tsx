import {
  BadgeCheck,
  LockKeyhole,
  ScanSearch,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"

import { AmbientOrb } from "@/components/decorative/ambient-orb"
import { LineGrid } from "@/components/decorative/line-grid"
import { SectionDivider } from "@/components/decorative/section-divider"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

type LayerCard = {
  title: string
  value: string
}

type SignalCard = {
  icon: LucideIcon
  title: string
  description: string
  accent: string
}

const layers: LayerCard[] = [
  { title: "Identity", value: "Verified onboarding" },
  { title: "Intent", value: "Serious introductions" },
  { title: "Context", value: "Community-rooted discovery" },
]

const signals: SignalCard[] = [
  {
    icon: ShieldCheck,
    title: "Verified identity",
    description: "Clearer onboarding trust from the first interaction.",
    accent: "from-emerald-500/8 to-teal-500/4",
  },
  {
    icon: LockKeyhole,
    title: "Privacy-aware discovery",
    description: "Selective visibility keeps discovery calm and intentional.",
    accent: "from-violet-500/8 to-indigo-500/4",
  },
  {
    icon: ScanSearch,
    title: "Serious-intent system",
    description: "Signals and controls help separate seriousness from noise.",
    accent: "from-amber-500/8 to-orange-500/4",
  },
]

export function TrustSignalPanel() {
  return (
    <div className="surface-panel relative overflow-hidden p-6 sm:p-7 xl:p-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      <LineGrid className="text-[oklch(0.39_0.04_42)] opacity-45" />
      <AmbientOrb tone="sand" className="-right-12 top-8 size-36 opacity-80" />
      <AmbientOrb tone="earth" className="-left-12 bottom-8 size-28 opacity-75" />

      <div className="relative space-y-4 sm:space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="eyebrow">Trust system composition</span>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Built for calm credibility
          </span>
        </div>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1.08fr)_minmax(14rem,0.92fr)]">
          <div className="surface-panel-strong relative overflow-hidden p-5 sm:p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Abstract platform view
            </p>
            <h2 className="mt-3 max-w-[14ch] text-[1.75rem] leading-tight sm:text-[1.95rem]">
              Trust signals travel with the introduction, not outside it.
            </h2>
            <p className="mt-3 max-w-[34rem] text-sm leading-7 text-muted-foreground">
              The experience is designed so identity, intent, privacy, and community context feel
              native to the product rather than bolted on after growth.
            </p>

            <SectionDivider className="my-4" label="Core layers" />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(10.5rem,1fr))] gap-3">
              {layers.map((layer) => (
                <div
                  key={layer.title}
                  className="group rounded-[1.35rem] border border-border/75 bg-white/74 p-4 shadow-sm transition-all duration-300 hover:border-primary/15 hover:shadow-md"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {layer.title}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">{layer.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="surface-panel-muted relative overflow-hidden p-5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Launch wedge
              </p>
              <h3 className="mt-3 text-xl leading-tight">Tribal communities across India</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                A focused entry point where cultural alignment, community trust, and serious intent
                already carry real weight.
              </p>
            </div>

            <div className="surface-panel-muted relative overflow-hidden p-5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <BadgeCheck className="size-4 text-primary" />
                Early design stance
              </div>
              <p className="mt-3 text-[0.96rem] leading-7 text-foreground/85">
                Respectful design, female-first control, and moderation readiness shape the
                earliest marketplace quality.
              </p>
            </div>
          </div>
        </div>

        <StaggerGroup className="grid grid-cols-[repeat(auto-fit,minmax(11.25rem,1fr))] gap-3">
          {signals.map((signal) => (
            <StaggerItem key={signal.title}>
              <div className="interactive-card group h-full p-4">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${signal.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="icon-shell">
                    <signal.icon className="size-4" />
                  </div>
                  <h3 className="mt-4 text-base leading-tight">{signal.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{signal.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </div>
  )
}

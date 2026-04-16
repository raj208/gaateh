import {
  BadgeCheck,
  HandCoins,
  Shield,
  type LucideIcon,
} from "lucide-react"

import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/shared/section-wrapper"

type MarketplaceCard = {
  icon: LucideIcon
  title: string
  description: string
}

const marketplaceCards: MarketplaceCard[] = [
  {
    icon: Shield,
    title: "Better onboarding control",
    description:
      "Women should have clarity over visibility, pace, and the seriousness of incoming interest. Better control leads to better trust.",
  },
  {
    icon: BadgeCheck,
    title: "Higher-quality demand signals",
    description:
      "When the experience is built to feel safe and respectful for the most trust-sensitive side of the market, overall participation quality improves.",
  },
  {
    icon: HandCoins,
    title: "Stronger retention and referrals",
    description:
      "Healthier early trust tends to create better retention, reputation, and referral loops than a marketplace optimized only for top-of-funnel volume.",
  },
]

export function MarketplaceSection() {
  return (
    <SectionWrapper className="pt-0">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Female-First Marketplace Design"
                title="Female-first trust design is a marketplace-quality decision."
                description="The intent is not to make symbolic claims. It is to build a healthier and more durable early marketplace by improving confidence, control, and participation quality where trust matters most."
              />

              <div className="surface-panel p-6 sm:p-7">
                <p className="text-base leading-8 text-muted-foreground">
                  If the earliest female experience feels uncertain, the network quality degrades
                  quickly. Designing for stronger female onboarding, better control, and clearer
                  seriousness standards is a practical way to improve long-term marketplace health.
                </p>
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {marketplaceCards.map((card) => (
              <StaggerItem key={card.title}>
                <article className="interactive-card h-full p-6">
                  <div className="icon-shell">
                    <card.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl leading-tight">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </SectionWrapper>
  )
}

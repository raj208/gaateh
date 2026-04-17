import { Mail, MessageSquareText, Users2 } from "lucide-react"

import { AmbientOrb } from "@/components/decorative/ambient-orb"
import { LineGrid } from "@/components/decorative/line-grid"
import { SectionDivider } from "@/components/decorative/section-divider"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { ContactForm } from "@/components/sections/contact-form"
import { siteConfig } from "@/lib/site"

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="pt-0">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Contact"
                title="Reach out for investor, collaborator, or early team conversations."
                description="Use the form or founder email for investor, collaborator, hiring, product, or partnership conversations. Submitting the form opens a prefilled Gmail draft addressed to the founder."
              />

              <SectionDivider label="Investors, collaborators, future team" />

              <div className="surface-panel relative overflow-hidden space-y-5 p-6 sm:p-7">
                <LineGrid className="text-[oklch(0.39_0.04_42)] opacity-30" />
                <AmbientOrb tone="sand" className="-right-8 top-3 size-28 opacity-75" />
                <div className="flex items-center gap-3">
                  <div className="icon-shell">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Founder email</p>
                    <a
                      href={`mailto:${siteConfig.founderEmail}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {siteConfig.founderEmail}
                    </a>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="interactive-card p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Users2 className="size-4 text-primary" />
                      Best for
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Investors, collaborators, early operators, designers, engineers, and trust
                      builders.
                    </p>
                  </div>

                  <div className="interactive-card p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <MessageSquareText className="size-4 text-primary" />
                      Contact note
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      The form below opens Gmail with a prepared draft. You can review it there and
                      send it directly to the founder.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </SectionWrapper>
  )
}

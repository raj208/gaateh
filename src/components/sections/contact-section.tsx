import { Mail, MessageSquareText, Users2 } from "lucide-react"

import { AmbientOrb } from "@/components/decorative/ambient-orb"
import { LineGrid } from "@/components/decorative/line-grid"
import { SectionDivider } from "@/components/decorative/section-divider"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { Button } from "@/components/ui/button"
import { contactReasonOptions } from "@/lib/constants"
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
                description="The backend contact flow is intentionally not live yet. For now, this section presents the intended interaction design alongside the founder's direct email."
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
                      The form below is UI-only for now. Direct email remains the active route until
                      the backend flow is added next.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-panel relative overflow-hidden p-6 sm:p-8">
              <LineGrid className="text-[oklch(0.39_0.04_42)] opacity-25" />
              <AmbientOrb tone="earth" className="-left-8 bottom-0 size-24 opacity-75" />

              <form className="relative space-y-5" aria-describedby="contact-form-note">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      className="field-control"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="field-control"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="reason" className="text-sm font-medium text-foreground">
                    Reason for reaching out
                  </label>
                  <select id="reason" name="reason" defaultValue="" className="field-control">
                    <option value="" disabled>
                      Select a reason
                    </option>
                    {contactReasonOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Share context about your interest, role, or conversation."
                    className="field-control resize-none"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p id="contact-form-note" className="text-sm leading-6 text-muted-foreground">
                    Contact flow coming next. This UI is ready for the future Resend-backed form
                    integration.
                  </p>
                  <Button disabled className="h-12 px-6">
                    Contact flow coming next
                  </Button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </SectionWrapper>
  )
}

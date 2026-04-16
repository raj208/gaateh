import Link from "next/link"

import { SectionDivider } from "@/components/decorative/section-divider"
import { Container } from "@/components/shared/container"
import { siteConfig } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background/70 backdrop-blur-xl">
      <Container className="grid gap-8 py-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:items-start">
        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-[0.12em] uppercase text-foreground">
            {siteConfig.name}
          </p>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            {siteConfig.brandStatement}
          </p>
          <SectionDivider className="max-w-sm pt-2" />
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-medium text-foreground">Reach the founder</p>
          <a
            href={`mailto:${siteConfig.founderEmail}`}
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/25"
          >
            {siteConfig.founderEmail}
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-medium text-foreground">Navigate</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-3 text-muted-foreground">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/25"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}

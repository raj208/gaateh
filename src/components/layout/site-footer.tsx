import Link from "next/link"
import { Heart } from "lucide-react"

import { SectionDivider } from "@/components/decorative/section-divider"
import { Container } from "@/components/shared/container"
import { siteConfig } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/70 bg-background/70 backdrop-blur-xl">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <Container className="grid gap-8 py-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:items-start">
        <div className="space-y-4">
          {/* Logo lockup */}
          <div className="flex items-center gap-3">
            <span className="relative flex size-10 items-center justify-center rounded-full border border-border/80 bg-white/84 shadow-sm">
              <span className="absolute inset-[0.3rem] rounded-full border border-primary/12" />
              <span className="absolute inset-[0.55rem] rounded-full border border-primary/18" />
              <span className="size-2 rounded-full bg-primary/85" />
            </span>
            <p className="text-sm font-semibold tracking-[0.12em] uppercase text-foreground">
              {siteConfig.name}
            </p>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            {siteConfig.brandStatement}
          </p>
          <SectionDivider className="max-w-sm pt-2" />
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
            Built with <Heart className="size-3 fill-primary/30 text-primary/50" /> for serious introductions
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <p className="font-medium text-foreground">Reach the founder</p>
          <a
            href={`mailto:${siteConfig.founderEmail}`}
            className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/25"
          >
            <span className="inline-block size-2 rounded-full bg-emerald-500/70 transition-transform duration-300 group-hover:scale-125" />
            {siteConfig.founderEmail}
          </a>
          <p className="text-xs text-muted-foreground/50">
            Available for investor, collaborator, and team conversations.
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <p className="font-medium text-foreground">Navigate</p>
          <nav aria-label="Footer navigation" className="flex flex-col gap-2.5 text-muted-foreground">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/25"
              >
                <span className="h-px w-3 bg-border transition-all duration-300 group-hover:w-5 group-hover:bg-primary/50" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-border/50">
        <Container className="flex items-center justify-between py-5 text-xs text-muted-foreground/50">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>India-first trust platform</p>
        </Container>
      </div>
    </footer>
  )
}

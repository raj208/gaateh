"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"

import { Container } from "@/components/shared/container"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "location" : undefined}
      className={cn(
        "relative rounded-full px-3.5 py-2 text-sm font-medium transition-[background-color,color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/25",
        active
          ? "bg-white text-foreground shadow-sm"
          : "text-muted-foreground hover:bg-white/62 hover:text-foreground",
      )}
    >
      {label}
      {active && (
        <span className="absolute -bottom-px left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary/60" />
      )}
    </Link>
  )
}

export function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState(siteConfig.navLinks[0]?.href ?? "#vision")
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = siteConfig.navLinks
      .map((link) => document.getElementById(link.href.replace("#", "")))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]?.target.id) {
          setActiveHref(`#${visibleEntries[0].target.id}`)
        }
      },
      {
        rootMargin: "-38% 0px -42% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "transition-[background-color,box-shadow,border-color] duration-500",
          isScrolled
            ? "border-b border-border/80 bg-background/86 shadow-[0_10px_30px_rgb(73_45_24_/_0.08)] backdrop-blur-2xl"
            : "bg-background/62 backdrop-blur-xl",
        )}
      >
        <Container className="flex min-h-[var(--nav-height)] items-center justify-between gap-4 py-3">
          <Link href="#vision" className="group flex items-center gap-3" aria-label="Go to Tribal Match hero section">
            <span className="relative flex size-12 items-center justify-center rounded-full border border-border/80 bg-white/84 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-primary/20">
              <span className="absolute inset-[0.38rem] rounded-full border border-primary/12 transition-colors duration-300 group-hover:border-primary/25" />
              <span className="absolute inset-[0.72rem] rounded-full border border-primary/18 transition-colors duration-300 group-hover:border-primary/30" />
              <span className="size-2.5 rounded-full bg-primary/85 transition-transform duration-300 group-hover:scale-110" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.12em] uppercase text-foreground">
                {siteConfig.name}
              </span>
              <span className="text-xs text-muted-foreground">India-first trust platform</span>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 rounded-full border border-white/45 bg-white/38 p-1 shadow-sm backdrop-blur md:flex">
            {siteConfig.navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} active={activeHref === link.href} />
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className={cn(buttonVariants({ variant: "default" }), "btn-shimmer h-11 px-5")}
            >
              Contact founder
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border/80 bg-white/76 text-foreground shadow-sm transition-colors hover:bg-white md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>

        <AnimatePresence initial={false}>
          {menuOpen ? (
            <motion.div
              id="mobile-nav"
              initial={reducedMotion ? false : { opacity: 0, height: 0 }}
              animate={reducedMotion ? { opacity: 1, height: "auto" } : { opacity: 1, height: "auto" }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={reducedMotion ? { duration: 0.12 } : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-border/70 md:hidden"
            >
              <Container className="pb-5">
                <nav aria-label="Mobile navigation" className="section-band flex flex-col gap-2">
                  {siteConfig.navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      active={activeHref === link.href}
                      onClick={() => setMenuOpen(false)}
                    />
                  ))}

                  <Link
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className={cn(buttonVariants({ variant: "default" }), "btn-shimmer mt-2 h-11 w-full")}
                  >
                    Contact founder
                    <ArrowUpRight className="size-4" />
                  </Link>
                </nav>
              </Container>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}

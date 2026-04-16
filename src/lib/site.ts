export type NavItem = {
  label: string
  href: string
}

export type SiteConfig = {
  name: string
  title: string
  description: string
  tagline: string
  brandStatement: string
  founderEmail: string
  url: string
  navLinks: NavItem[]
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://tribal-match-landing.vercel.app"

export const siteConfig: SiteConfig = {
  name: "Tribal Match",
  title: "Tribal Match | Trust-first serious introductions",
  description:
    "Tribal Match is an India-first, trust-first relationship platform for serious introductions, beginning with tribal communities across India and designed to expand through culturally grounded trust infrastructure.",
  tagline:
    "An India-first, trust-first platform for serious introductions that begins with tribal communities across India and scales with care.",
  brandStatement:
    "Culturally grounded introduction infrastructure built around verification, privacy, respectful discovery, and long-term trust.",
  founderEmail: "rajendrajfc1021@gmail.com",
  url: siteUrl,
  navLinks: [
    { label: "Vision", href: "#vision" },
    { label: "Trust", href: "#trust" },
    { label: "Why now", href: "#why-now" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Contact", href: "#contact" },
  ],
}

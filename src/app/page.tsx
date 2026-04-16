import { SiteFooter } from "@/components/layout/site-footer"
import { SiteNavbar } from "@/components/layout/site-navbar"
import { BusinessSection } from "@/components/sections/business-section"
import { CollaboratorsSection } from "@/components/sections/collaborators-section"
import { ContactSection } from "@/components/sections/contact-section"
import { HeroSection } from "@/components/sections/hero-section"
import { MarketplaceSection } from "@/components/sections/marketplace-section"
import { PrinciplesSection } from "@/components/sections/principles-section"
import { RoadmapSection } from "@/components/sections/roadmap-section"
import { ThesisSection } from "@/components/sections/thesis-section"
import { TrustSection } from "@/components/sections/trust-section"

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main id="main-content" className="relative flex-1">
        <HeroSection />
        <ThesisSection />
        <TrustSection />
        <MarketplaceSection />
        <RoadmapSection />
        <PrinciplesSection />
        <BusinessSection />
        <CollaboratorsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

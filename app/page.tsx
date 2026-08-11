import { Coverage } from '@/components/landing/coverage'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { PackPromo } from '@/components/landing/pack-promo'
import { Vision } from '@/components/landing/vision'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Coverage />
        <PackPromo />
        <HowItWorks />
        <Vision />
      </main>
      <SiteFooter />
    </div>
  )
}

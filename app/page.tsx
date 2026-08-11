import { Coverage } from '@/components/landing/coverage'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
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
        <HowItWorks />
        <Vision />
      </main>
      <SiteFooter />
    </div>
  )
}

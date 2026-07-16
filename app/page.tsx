import { ArrowRight, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { Coverage } from '@/components/landing/coverage'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { colaborador } from '@/lib/data'

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Coverage />
        <HowItWorks />

        <section className="border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <ShieldCheck className="size-6" />
              </span>
              <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {colaborador.primerNombre}, tu respaldo está a un clic de distancia
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
                Actívalo hoy y recibe la confirmación por correo. Sentirte respaldado por tu
                empresa nunca fue tan sencillo.
              </p>
              <Button
                size="lg"
                nativeButton={false}
                className="h-11 bg-coral px-6 text-base text-coral-foreground hover:bg-coral/90"
                render={<Link href="/terminos" />}
              >
                Activar mi beneficio
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

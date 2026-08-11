import { ArrowRight, Package, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { beneficiosOpcionales } from '@/lib/data'

export function PackPromo() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="overflow-hidden rounded-3xl border border-coral/30 bg-gradient-to-br from-primary to-primary/85 px-6 py-12 text-primary-foreground sm:px-12 md:py-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground/80">
              <Sparkles className="size-3.5 text-coral" />
              Nuevo producto
            </span>
            <div className="flex items-center gap-3">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-coral text-coral-foreground">
                <Package className="size-7" />
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Arma tu Vita+
              </h2>
            </div>
            <p className="max-w-lg text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              Empieza con tu plan base y suma solo los beneficios que quieres:{' '}
              {beneficiosOpcionales.length} opciones, cada una con su propio costo. Tú armas el
              combo, tú ves el precio final al instante.
            </p>
            <Button
              size="lg"
              nativeButton={false}
              className="h-11 bg-coral px-6 text-base text-coral-foreground hover:bg-coral/90"
              render={<Link href="/arma-tu-plan" />}
            >
              Armar mi plan
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

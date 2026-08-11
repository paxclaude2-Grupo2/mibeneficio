import { Sparkles } from 'lucide-react'
import { producto } from '@/lib/data'

export function Vision() {
  return (
    <section className="border-t border-border bg-primary">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6 md:py-20">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/10 text-primary-foreground">
          <Sparkles className="size-6" />
        </span>
        <span className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
          Nuestra visión en {producto.nombre}
        </span>
        <p className="font-display text-2xl font-bold leading-snug tracking-tight text-balance text-primary-foreground sm:text-3xl">
          "Hacer que proteger tu futuro y el de tu familia sea simple, accesible y digital."
        </p>
      </div>
    </section>
  )
}

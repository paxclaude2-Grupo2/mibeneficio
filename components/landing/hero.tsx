import { ArrowRight, BadgeCheck, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { producto, colaborador } from '@/lib/data'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <BadgeCheck className="size-3.5 text-coral" />
            {producto.nombre} · Beneficio proporcionado por {colaborador.empresa}
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl">
            Tu tranquilidad <span className="text-coral">empieza hoy.</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Tu empresa te ofrece <strong className="font-semibold text-foreground">{producto.nombre}</strong>, un
            seguro de vida diseñado para protegerte a ti y a las personas que más quieres.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              nativeButton={false}
              className="h-11 bg-coral px-6 text-base text-coral-foreground hover:bg-coral/90"
              render={<Link href="#cobertura" />}
            >
              Conocer mi cobertura
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-11 px-6 text-base"
              render={<Link href="/terminos" />}
            >
              Activar mi seguro
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4" />
            Toma menos de 2 minutos · {producto.costoColaborador}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <Image
              src="/hero-colaboradores.png"
              alt="Colaboradores conversando en un espacio de trabajo luminoso"
              width={720}
              height={640}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur sm:left-8 sm:right-auto sm:w-72">
            <p className="text-xs font-medium text-muted-foreground">Cobertura vigente hasta</p>
            <p className="font-display text-lg font-semibold text-foreground">
              {producto.vigenciaHasta}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {producto.nombre} · {colaborador.empresa}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

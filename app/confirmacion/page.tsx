import { ArrowRight, CalendarCheck, CheckCircle2, LifeBuoy, Mail } from 'lucide-react'
import Link from 'next/link'
import { FlowSteps } from '@/components/flow-steps'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { colaborador, seguro } from '@/lib/data'

const siguientes = [
  {
    icon: Mail,
    titulo: 'Revisa tu correo',
    descripcion: `Enviamos la confirmación a ${colaborador.email} con el resumen de tu cobertura.`,
  },
  {
    icon: CalendarCheck,
    titulo: 'Agenda tu chequeo preventivo',
    descripcion: 'Tu chequeo anual está incluido. Es el mejor primer paso para aprovecharlo.',
  },
  {
    icon: LifeBuoy,
    titulo: 'Explora el Centro de recursos',
    descripcion: 'Encuentra FAQs, documentos y contactos de soporte cuando los necesites.',
  },
]

export default function ConfirmacionPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-secondary/30">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 w-full max-w-3xl items-center px-4 sm:px-6">
          <Logo />
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6">
        <div className="mb-10">
          <FlowSteps current={2} />
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-coral/10 text-coral">
            <CheckCircle2 className="size-9" />
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            ¡Listo, {colaborador.primerNombre}! Tu beneficio está activo
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Tu {seguro.nombre} quedó activado y con cobertura vigente hasta el{' '}
            {seguro.vigenciaHasta}. A partir de ahora, cuentas con el respaldo de tu empresa.
          </p>
        </div>

        <Card className="mt-8 border-coral/30 bg-card">
          <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Póliza activada
              </span>
              <span className="font-display text-lg font-semibold text-foreground">
                {seguro.poliza}
              </span>
              <span className="text-sm text-muted-foreground">
                {seguro.aseguradora} · {seguro.costoColaborador}
              </span>
            </div>
            <div className="flex flex-col gap-1 sm:text-right">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Vigente hasta
              </span>
              <span className="font-display text-lg font-semibold text-foreground">
                {seguro.vigenciaHasta}
              </span>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8">
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
            ¿Qué sigue?
          </h2>
          <ul className="flex flex-col gap-3">
            {siguientes.map((s) => (
              <li
                key={s.titulo}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <s.icon className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-foreground">{s.titulo}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.descripcion}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            className="h-11 px-6"
            render={<Link href="/recursos" />}
          >
            Ir al Centro de recursos
          </Button>
          <Button
            size="lg"
            nativeButton={false}
            className="h-11 bg-coral px-6 text-base text-coral-foreground hover:bg-coral/90"
            render={<Link href="/dashboard" />}
          >
            Ir a mi dashboard
            <ArrowRight data-icon="inline-end" className="size-4" />
          </Button>
        </div>
      </main>
    </div>
  )
}

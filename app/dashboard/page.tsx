import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  IdCard,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { colaborador, proximosPasos, seguro, serviciosIncluidos } from '@/lib/data'

const pasoIcon: Record<string, LucideIcon> = {
  CalendarCheck,
  IdCard,
  Users,
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 md:py-10">
        {/* Encabezado */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="size-12">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {colaborador.iniciales}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Hola, {colaborador.primerNombre}
              </h1>
              <p className="text-sm text-muted-foreground">
                {colaborador.puesto} · {colaborador.empresa}
              </p>
            </div>
          </div>
          <Badge className="w-fit gap-1.5 bg-coral/10 text-coral">
            <CheckCircle2 className="size-3.5" />
            Beneficio activo
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Estado de cobertura */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <CardDescription>Estado de tu cobertura</CardDescription>
                  <CardTitle className="text-xl">{seguro.nombre}</CardTitle>
                </div>
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <ShieldCheck className="size-5" />
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Estado
                  </span>
                  <span className="font-display text-base font-semibold text-foreground">
                    Vigente
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Vigente hasta
                  </span>
                  <span className="font-display text-base font-semibold text-foreground">
                    {seguro.vigenciaHasta}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Póliza
                  </span>
                  <span className="font-display text-base font-semibold text-foreground">
                    {seguro.poliza}
                  </span>
                </div>
              </div>
              <Separator />
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Periodo de cobertura 2025</span>
                  <span className="font-medium text-foreground">70% transcurrido</span>
                </div>
                <Progress value={70} />
                <p className="text-xs text-muted-foreground">
                  Tu cobertura se renueva automáticamente mientras seas parte de {colaborador.empresa}.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Acceso rápido */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-primary-foreground">¿Necesitas ayuda?</CardTitle>
              <CardDescription className="text-primary-foreground/70">
                Todo sobre tu beneficio en un solo lugar.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <p className="text-sm leading-relaxed text-primary-foreground/80">
                FAQs, documentos descargables y contactos de soporte disponibles 24/7.
              </p>
              <Button
                nativeButton={false}
                className="bg-coral text-coral-foreground hover:bg-coral/90"
                render={<Link href="/recursos" />}
              >
                Ir al Centro de recursos
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Servicios incluidos */}
        <section className="mt-8">
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
            Servicios incluidos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviciosIncluidos.map((s) => (
              <Card key={s.titulo}>
                <CardContent className="flex items-center justify-between gap-3 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                      <CheckCircle2 className="size-4" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">{s.titulo}</span>
                      <span className="text-xs text-muted-foreground">{s.detalle}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Próximos pasos recomendados */}
        <section className="mt-8">
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
            Acciones recomendadas
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {proximosPasos.map((p) => {
              const Icon = pasoIcon[p.icono] ?? CalendarCheck
              return (
                <Card key={p.titulo} className="flex flex-col">
                  <CardHeader>
                    <span className="mb-1 flex size-10 items-center justify-center rounded-xl bg-coral/10 text-coral">
                      <Icon className="size-5" />
                    </span>
                    <CardTitle className="text-base">{p.titulo}</CardTitle>
                    <CardDescription className="leading-relaxed">{p.descripcion}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button variant="outline" size="sm" className="w-full">
                      {p.accion}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

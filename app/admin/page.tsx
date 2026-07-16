import { MailOpen, MousePointerClick, RotateCcw, TrendingUp, Users } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { activacionPorMes, adopcionPorArea, metricasAdopcion } from '@/lib/data'

const metricas = [
  {
    label: 'Activaron el beneficio',
    valor: `${metricasAdopcion.tasaActivacion}%`,
    sub: `${metricasAdopcion.activaron} de ${metricasAdopcion.totalColaboradores} colaboradores`,
    icon: Users,
    trend: '+8 pts vs. trimestre anterior',
  },
  {
    label: 'Apertura de comunicaciones',
    valor: `${metricasAdopcion.tasaApertura}%`,
    sub: 'Correos de recordatorio abiertos',
    icon: MailOpen,
    trend: '+5 pts últimos 30 días',
  },
  {
    label: 'Usaron el beneficio',
    valor: `${metricasAdopcion.usaronAlMenosUna}%`,
    sub: 'Al menos un servicio utilizado',
    icon: MousePointerClick,
    trend: '+12 pts desde el lanzamiento',
  },
  {
    label: 'Retorno al dashboard (90d)',
    valor: `${metricasAdopcion.retorno90dias}%`,
    sub: 'Volvieron en los últimos 90 días',
    icon: RotateCcw,
    trend: 'Meta: 45%',
  },
]

const maxActivaciones = Math.max(...activacionPorMes.map((m) => m.activaciones))

export default function AdminPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 md:py-10">
        <div className="mb-8 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance">
              Analítica de adopción
            </h1>
            <Badge variant="secondary">Vista RRHH</Badge>
          </div>
          <p className="max-w-2xl text-muted-foreground text-pretty">
            Cómo están adoptando y usando el beneficio los colaboradores de Grupo Andes.
          </p>
        </div>

        {/* Métricas clave */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metricas.map((m) => (
            <Card key={m.label}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                    <m.icon className="size-5" />
                  </span>
                  <TrendingUp className="size-4 text-coral" />
                </div>
                <CardDescription className="mt-2">{m.label}</CardDescription>
                <CardTitle className="font-display text-3xl">{m.valor}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground">{m.sub}</span>
                <span className="text-xs font-medium text-coral">{m.trend}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Activaciones por mes */}
          <Card>
            <CardHeader>
              <CardTitle>Activaciones por mes</CardTitle>
              <CardDescription>Colaboradores que activaron su beneficio en 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-52 items-end justify-between gap-3">
                {activacionPorMes.map((m) => (
                  <div key={m.mes} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                    <span className="text-xs font-medium text-foreground">{m.activaciones}</span>
                    <div
                      className="w-full rounded-t-lg bg-primary transition-all"
                      style={{ height: `${Math.max((m.activaciones / maxActivaciones) * 170, 8)}px` }}
                    />
                    <span className="text-xs text-muted-foreground">{m.mes}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Adopción por área */}
          <Card>
            <CardHeader>
              <CardTitle>Adopción por área</CardTitle>
              <CardDescription>% de activación según el departamento</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {adopcionPorArea.map((a) => (
                <div key={a.area} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{a.area}</span>
                    <span className="text-muted-foreground">{a.porcentaje}%</span>
                  </div>
                  <Progress value={a.porcentaje} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

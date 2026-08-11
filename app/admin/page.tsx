import { ArrowRight, HeartHandshake, ShieldCheck, TrendingDown, TrendingUp, Users } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  activacionPorMes,
  adopcionPorArea,
  beneficiariosPorMes,
  evolucionProteccionCompleta,
  metricasAdopcion,
} from '@/lib/data'

const funnel = [
  { label: 'Conocer', valor: metricasAdopcion.conocieron, icon: Users },
  { label: 'Activar', valor: metricasAdopcion.activaron, icon: ShieldCheck },
  { label: 'Proteger', valor: metricasAdopcion.registraronBeneficiarios, icon: HeartHandshake },
]

const maxActivaciones = Math.max(...activacionPorMes.map((m) => m.activaciones))
const maxBeneficiarios = Math.max(...beneficiariosPorMes.map((m) => m.beneficiarios))

export default function AdminPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 md:py-10">
        <div className="mb-8 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance">
              Adopción de Vita+
            </h1>
            <Badge variant="secondary">Vista RRHH</Badge>
          </div>
          <p className="max-w-2xl text-muted-foreground text-pretty">
            Conoce cómo tus colaboradores están activando y completando su protección.
          </p>
        </div>

        {/* North Star */}
        <Card className="border-coral/30 bg-card">
          <CardContent className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                <HeartHandshake className="size-7" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-coral">
                  North Star Metric
                </span>
                <span className="font-display text-4xl font-bold tracking-tight text-foreground">
                  {metricasAdopcion.northStar.porcentaje}%
                </span>
                <span className="text-sm text-muted-foreground">
                  {metricasAdopcion.northStar.label} · {metricasAdopcion.northStar.numerador} de{' '}
                  {metricasAdopcion.northStar.denominador} colaboradores
                </span>
              </div>
            </div>
            <div className="w-full sm:max-w-xs">
              <Progress value={metricasAdopcion.northStar.porcentaje} />
              <p className="mt-2 text-xs text-muted-foreground">
                % de colaboradores con seguro activo, datos confirmados y al menos un
                beneficiario correctamente registrado.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Funnel */}
        <section className="mt-6">
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
            Funnel de adopción
          </h2>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            {funnel.map((f, i) => (
              <div key={f.label} className="flex flex-1 items-center gap-3">
                <Card className="flex-1">
                  <CardContent className="flex items-center gap-3 pt-6">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                      <f.icon className="size-5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {f.label}
                      </span>
                      <span className="font-display text-2xl font-bold text-foreground">
                        {f.valor}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
                {i < funnel.length - 1 && (
                  <ArrowRight className="hidden size-5 shrink-0 text-muted-foreground sm:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Métricas de control */}
        <section className="mt-6">
          <h2 className="mb-1 font-display text-base font-semibold text-foreground">
            Métricas de control
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Señales de fricción a vigilar — no son el objetivo principal del producto.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="bg-secondary/40 shadow-none ring-0">
              <CardContent className="flex items-center gap-3 pt-6">
                <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <TrendingDown className="size-4" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">
                    Tasa de abandono de activación
                  </span>
                  <span className="font-display text-lg font-semibold text-foreground">
                    {metricasAdopcion.tasaAbandono}%
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-secondary/40 shadow-none ring-0">
              <CardContent className="flex items-center gap-3 pt-6">
                <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <TrendingDown className="size-4" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">
                    Contactos a soporte por dificultades
                  </span>
                  <span className="font-display text-lg font-semibold text-foreground">
                    {metricasAdopcion.contactosSoporte}%
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Analítica */}
        <section className="mt-6">
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">Analítica</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Activaciones por mes</CardTitle>
                <CardDescription>Colaboradores que activaron Vita+ en 2025</CardDescription>
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

            <Card>
              <CardHeader>
                <CardTitle>Beneficiarios registrados por mes</CardTitle>
                <CardDescription>Colaboradores que completaron al menos un beneficiario</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-52 items-end justify-between gap-3">
                  {beneficiariosPorMes.map((m) => (
                    <div key={m.mes} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                      <span className="text-xs font-medium text-foreground">{m.beneficiarios}</span>
                      <div
                        className="w-full rounded-t-lg bg-coral transition-all"
                        style={{ height: `${Math.max((m.beneficiarios / maxBeneficiarios) * 170, 8)}px` }}
                      />
                      <span className="text-xs text-muted-foreground">{m.mes}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Evolución de protección completa</CardTitle>
                <CardDescription>% de colaboradores con protección completa por mes</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {evolucionProteccionCompleta.map((e) => (
                  <div key={e.mes} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{e.mes}</span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <TrendingUp className="size-3.5 text-coral" />
                        {e.porcentaje}%
                      </span>
                    </div>
                    <Progress value={e.porcentaje} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

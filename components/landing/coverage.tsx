import { HeartPulse, ShieldCheck, Users, Video, type LucideIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { coberturas } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  HeartPulse,
  ShieldCheck,
  Users,
  Video,
}

export function Coverage() {
  return (
    <section className="border-t border-border bg-card/50">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral">
            Qué incluye
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Un respaldo pensado para la vida real
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            No es letra chica ni trámites eternos. Es protección concreta para ti y para quienes
            más quieres.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coberturas.map((c) => {
            const Icon = iconMap[c.icono] ?? ShieldCheck
            return (
              <Card key={c.titulo} className="h-full border-border transition-shadow hover:shadow-md">
                <CardHeader>
                  <span className="mb-2 flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="text-lg">{c.titulo}</CardTitle>
                  <CardDescription className="leading-relaxed">{c.descripcion}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

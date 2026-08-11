'use client'

import {
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Package,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { beneficiosOpcionales, producto } from '@/lib/data'
import { cn } from '@/lib/utils'

const beneficioIcon: Record<string, LucideIcon> = {
  TrendingUp,
  Zap,
  HeartHandshake,
  Wallet,
  GraduationCap,
  Landmark,
}

function formatearPrecio(valor: number) {
  return `$${valor.toFixed(2).replace(/\.00$/, '')}`
}

export default function ArmaTuPlanPage() {
  const [seleccionados, setSeleccionados] = useState<string[]>([])

  function alternar(id: string) {
    setSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  const itemsElegidos = useMemo(
    () => beneficiosOpcionales.filter((b) => seleccionados.includes(b.id)),
    [seleccionados],
  )
  const totalAdicionales = itemsElegidos.reduce((sum, b) => sum + b.precio, 0)
  const totalMensual = producto.precioBase + totalAdicionales

  const comboQuery = `${itemsElegidos.length}-${formatearPrecio(totalMensual)}`

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 md:py-10">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
            <Sparkles className="size-3.5" />
            Nuevo · Producto a tu medida
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Arma tu Vita+
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Empieza con tu plan base y suma solo los beneficios que quieres. Tú eliges, tú
            armas tu combo, tú ves el precio final al instante.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div className="flex flex-col gap-5">
            {/* Plan base */}
            <Card className="border-primary/30 bg-primary text-primary-foreground">
              <CardContent className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary-foreground/10">
                    <ShieldCheck className="size-5" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/60">
                      Incluido siempre
                    </span>
                    <span className="font-display text-lg font-semibold">
                      Plan base {producto.nombre}
                    </span>
                    <span className="text-sm text-primary-foreground/70">
                      Fallecimiento $50,000 · Muerte accidental $100,000 · Invalidez $50,000
                    </span>
                  </div>
                </div>
                <span className="font-display text-2xl font-bold text-primary-foreground">
                  {formatearPrecio(producto.precioBase)}
                  <span className="text-sm font-normal text-primary-foreground/70">/mes</span>
                </span>
              </CardContent>
            </Card>

            {/* Beneficios opcionales */}
            <div>
              <h2 className="mb-3 font-display text-lg font-semibold text-foreground">
                Suma los beneficios que quieras
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {beneficiosOpcionales.map((b) => {
                  const Icon = beneficioIcon[b.icono] ?? Sparkles
                  const activo = seleccionados.includes(b.id)
                  return (
                    <label
                      key={b.id}
                      htmlFor={`b-${b.id}`}
                      className={cn(
                        'flex cursor-pointer flex-col gap-3 rounded-2xl border p-4 transition-colors',
                        activo
                          ? 'border-coral bg-coral/5 ring-1 ring-coral/30'
                          : 'border-border bg-card hover:border-coral/40',
                      )}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span
                          className={cn(
                            'flex size-9 items-center justify-center rounded-lg',
                            activo ? 'bg-coral text-coral-foreground' : 'bg-accent text-primary',
                          )}
                        >
                          <Icon className="size-4" />
                        </span>
                        <Checkbox
                          id={`b-${b.id}`}
                          checked={activo}
                          onCheckedChange={() => alternar(b.id)}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold text-foreground">{b.nombre}</span>
                        <span className="text-xs leading-relaxed text-muted-foreground">
                          {b.descripcion}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-coral">
                        + {formatearPrecio(b.precio)}/mes
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Resumen / oferta final */}
          <div className="lg:sticky lg:top-24">
            <Card className="overflow-hidden border-coral/30">
              <div className="bg-gradient-to-br from-primary to-primary/80 px-6 py-5 text-primary-foreground">
                <div className="flex items-center gap-2">
                  <Package className="size-5" />
                  <span className="font-display text-lg font-semibold">Tu combo</span>
                </div>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  {itemsElegidos.length === 0
                    ? 'Aún no agregaste beneficios extra.'
                    : `${itemsElegidos.length} beneficio${itemsElegidos.length > 1 ? 's' : ''} adicional${itemsElegidos.length > 1 ? 'es' : ''}`}
                </p>
              </div>
              <CardContent className="flex flex-col gap-4 pt-6">
                <ul className="flex flex-col gap-2 text-sm">
                  <li className="flex items-center justify-between text-foreground">
                    <span>Plan base</span>
                    <span className="font-medium">{formatearPrecio(producto.precioBase)}/mes</span>
                  </li>
                  {itemsElegidos.map((b) => (
                    <li key={b.id} className="flex items-center justify-between text-muted-foreground">
                      <span>{b.nombre}</span>
                      <span>+{formatearPrecio(b.precio)}/mes</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-medium text-muted-foreground">Total mensual</span>
                  <span className="font-display text-3xl font-bold text-foreground">
                    {formatearPrecio(totalMensual)}
                    <span className="text-sm font-normal text-muted-foreground">/mes</span>
                  </span>
                </div>

                <Button
                  size="lg"
                  nativeButton={false}
                  className="h-11 w-full bg-coral text-base text-coral-foreground hover:bg-coral/90"
                  render={<Link href={`/terminos?combo=${comboQuery}`} />}
                >
                  Contratar este combo
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Precios de ejemplo — MVP demostrativo con datos ficticios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

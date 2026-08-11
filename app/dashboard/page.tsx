'use client'

import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileDown,
  ShieldCheck,
  UserCog,
  Users,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { accionesRecomendadas, colaborador, producto, proteccionDetalle } from '@/lib/data'
import { useBeneficiarios } from '@/lib/use-beneficiarios'
import { usePerfil } from '@/lib/use-perfil'

const accionIcon: Record<string, LucideIcon> = {
  Users,
  ShieldCheck,
  FileDown,
  UserCog,
}

const formatoMoneda = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

function descargarCertificado() {
  const contenido = `VITA+ — CERTIFICADO DE SEGURO (DEMO)
================================================

Titular: ${colaborador.nombre}
Plan: ${producto.precio}
Póliza: ${producto.poliza}
Vigente hasta: ${producto.vigenciaHasta}

Cobertura:
- Fallecimiento: ${formatoMoneda.format(producto.montoFallecimiento)}
- Muerte accidental: ${formatoMoneda.format(producto.montoMuerteAccidental)}
- Invalidez total y permanente: ${formatoMoneda.format(producto.montoInvalidez)}

Este es un documento de demostración generado por el MVP de Vita+.
No tiene validez legal ni contractual.
`
  const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'certificado-vita-plus-demo.txt'
  a.click()
  URL.revokeObjectURL(url)
}

export default function DashboardPage() {
  const { completos: beneficiariosCompletos, listo: beneficiariosListo } = useBeneficiarios()
  const { perfil, actualizadoManualmente, listo: perfilListo, guardar } = usePerfil()

  const [mostrarFormDatos, setMostrarFormDatos] = useState(false)
  const [nombreForm, setNombreForm] = useState(perfil.nombre)
  const [emailForm, setEmailForm] = useState(perfil.email)

  const listo = beneficiariosListo && perfilListo

  const criterios = useMemo(
    () => [
      { id: 'cobertura', hecho: true },
      { id: 'datos', hecho: true },
      { id: 'beneficiarios', hecho: beneficiariosCompletos },
      { id: 'contacto', hecho: actualizadoManualmente },
    ],
    [beneficiariosCompletos, actualizadoManualmente],
  )
  const progreso = listo
    ? Math.round((criterios.filter((c) => c.hecho).length / criterios.length) * 100)
    : 100

  function abrirFormDatos() {
    setNombreForm(perfil.nombre)
    setEmailForm(perfil.email)
    setMostrarFormDatos(true)
  }

  function guardarDatos() {
    if (!nombreForm.trim() || !emailForm.trim()) return
    guardar({ nombre: nombreForm.trim(), email: emailForm.trim() })
    setMostrarFormDatos(false)
  }

  function ejecutarAccion(id: string) {
    if (id === 'certificado') descargarCertificado()
    if (id === 'datos') abrirFormDatos()
  }

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
                Hola, {perfil.nombre.split(' ')[0]}
              </h1>
              <p className="text-sm text-muted-foreground">
                Cliente Vita+ desde el {colaborador.clienteDesde}
              </p>
            </div>
          </div>
          <Badge className="w-fit gap-1.5 bg-coral/10 text-coral">
            <CheckCircle2 className="size-3.5" />
            Tu protección está activa
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Estado de cobertura */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <CardDescription>Estado de tu protección</CardDescription>
                  <CardTitle className="text-xl">{producto.nombre}</CardTitle>
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
                    Activa
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Monto asegurado
                  </span>
                  <span className="font-display text-base font-semibold text-foreground">
                    {formatoMoneda.format(producto.montoFallecimiento)}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Vigencia
                  </span>
                  <span className="font-display text-base font-semibold text-foreground">
                    {producto.vigenciaHasta}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Póliza
                  </span>
                  <span className="font-display text-base font-semibold text-foreground">
                    {producto.poliza}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Plan
                  </span>
                  <span className="font-display text-base font-semibold text-foreground">
                    {producto.precio}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Montos de ejemplo — este es un MVP demostrativo con datos ficticios.
              </p>
              <Separator />
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tu protección está</span>
                  <span className="font-medium text-foreground">{progreso}% completa</span>
                </div>
                <Progress value={progreso} />
                <p className="text-xs text-muted-foreground">
                  {beneficiariosCompletos
                    ? 'Ya registraste a tus beneficiarios. ¡Tu protección está lista!'
                    : 'Te falta registrar a tus beneficiarios para completar tu protección.'}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Acceso rápido */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-primary-foreground">¿Necesitas ayuda?</CardTitle>
              <CardDescription className="text-primary-foreground/70">
                Todo sobre tu seguro en un solo lugar.
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

        {/* Tu protección */}
        <section className="mt-8">
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
            Tu protección
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {proteccionDetalle.map((p) => (
              <Card key={p.titulo}>
                <CardContent className="flex items-center justify-between gap-3 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                      <ShieldCheck className="size-4" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">{p.titulo}</span>
                      <span className="text-xs text-muted-foreground">{p.descripcion}</span>
                    </div>
                  </div>
                  <span className="font-display text-base font-semibold text-foreground">
                    {formatoMoneda.format(p.monto)}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Acciones recomendadas */}
        <section className="mt-8">
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
            Acciones recomendadas
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {accionesRecomendadas.map((a) => {
              const Icon = accionIcon[a.icono] ?? Users
              const contenidoBoton = (
                <>
                  {a.id === 'certificado' && <Download data-icon="inline-start" className="size-4" />}
                  {a.accion}
                </>
              )
              return (
                <Card key={a.titulo} className="flex flex-col">
                  <CardHeader>
                    <span className="mb-1 flex size-10 items-center justify-center rounded-xl bg-coral/10 text-coral">
                      <Icon className="size-5" />
                    </span>
                    <CardTitle className="text-base">{a.titulo}</CardTitle>
                    <CardDescription className="leading-relaxed">{a.descripcion}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    {a.id === 'beneficiarios' || a.id === 'cobertura' ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        nativeButton={false}
                        render={<Link href={a.id === 'beneficiarios' ? '/beneficiarios' : '/recursos'} />}
                      >
                        {a.accion}
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => ejecutarAccion(a.id)}
                      >
                        {contenidoBoton}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {mostrarFormDatos && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base">Actualiza tus datos</CardTitle>
              <CardDescription>Mantén tu nombre y correo al día.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="perfil-nombre" className="text-sm font-medium text-foreground">
                    Nombre completo
                  </label>
                  <Input
                    id="perfil-nombre"
                    value={nombreForm}
                    onChange={(e) => setNombreForm(e.target.value)}
                    className="h-11"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="perfil-email" className="text-sm font-medium text-foreground">
                    Correo electrónico
                  </label>
                  <Input
                    id="perfil-email"
                    type="email"
                    value={emailForm}
                    onChange={(e) => setEmailForm(e.target.value)}
                    className="h-11"
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Button variant="ghost" onClick={() => setMostrarFormDatos(false)}>
                  Cancelar
                </Button>
                <Button
                  className="bg-coral text-coral-foreground hover:bg-coral/90"
                  onClick={guardarDatos}
                >
                  Guardar cambios
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}

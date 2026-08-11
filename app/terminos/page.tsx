'use client'

import { ArrowLeft, ArrowRight, FileText, Lock, Package, UserCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import { FlowSteps } from '@/components/flow-steps'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { producto } from '@/lib/data'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ComboBadge() {
  const searchParams = useSearchParams()
  const combo = searchParams.get('combo')
  if (!combo) return null
  const [cantidad, total] = combo.split('-')
  const n = Number(cantidad)
  if (!n) return null
  return (
    <div className="mb-6 flex items-center justify-center gap-2 rounded-xl border border-coral/30 bg-coral/5 px-4 py-3 text-center text-sm text-foreground">
      <Package className="size-4 shrink-0 text-coral" />
      Tu combo: {n} beneficio{n > 1 ? 's' : ''} adicional{n > 1 ? 'es' : ''} · <strong>{total}/mes</strong>
    </div>
  )
}

export default function TerminosPage() {
  const router = useRouter()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [terminos, setTerminos] = useState(false)
  const [privacidad, setPrivacidad] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const datosValidos = nombre.trim().length > 1 && EMAIL_REGEX.test(email.trim())
  const puedeContinuar = datosValidos && terminos && privacidad

  async function activar() {
    if (!puedeContinuar) return
    setEnviando(true)
    setError(null)
    try {
      const res = await fetch('/api/activar-beneficio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: nombre.trim(), email: email.trim() }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? 'No se pudo enviar el correo.')
      }
      const params = new URLSearchParams({ nombre: nombre.trim(), email: email.trim() })
      router.push(`/confirmacion?${params.toString()}`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Ocurrió un error inesperado.')
      setEnviando(false)
    }
  }

  return (
    <div className="flex min-h-dvh flex-col bg-secondary/30">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <Button variant="ghost" size="sm" nativeButton={false} render={<Link href="/" />}>
            <ArrowLeft data-icon="inline-start" className="size-4" />
            Volver
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6">
        <div className="mb-10">
          <FlowSteps current={1} />
        </div>

        <Suspense fallback={null}>
          <ComboBadge />
        </Suspense>

        <div className="mb-8 flex flex-col gap-3 text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance">
            Un último paso antes de contratar
          </h1>
          <p className="text-muted-foreground text-pretty">
            Para contratar tu {producto.nombre} necesitamos tu consentimiento. Léelo con calma,
            está en lenguaje claro.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <Card>
            <CardHeader>
              <span className="mb-1 flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                <UserCircle className="size-5" />
              </span>
              <CardTitle>¿Quién está contratando el seguro?</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Usamos estos datos para identificarte como el titular de la póliza y enviarte la
                confirmación por correo.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 flex-col gap-1.5">
                  <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                    Nombre completo
                  </label>
                  <Input
                    id="nombre"
                    type="text"
                    autoComplete="name"
                    placeholder="Ej. Marlon Pariona"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="h-11"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="tú@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <span className="mb-1 flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                <FileText className="size-5" />
              </span>
              <CardTitle>Términos y condiciones del seguro</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                {producto.nombre} es el seguro de vida que puedes contratar directamente (póliza{' '}
                {producto.poliza}), {producto.precio.toLowerCase()}. La cobertura estará vigente
                mientras tu plan esté activo y hasta el {producto.vigenciaHasta}.
              </p>
              <p>
                Tu protección incluye fallecimiento, muerte accidental e invalidez total y
                permanente. Las condiciones generales de la póliza detallan los montos y
                situaciones en las que aplica, disponibles en el Centro de recursos.
              </p>
              <p>
                Puedes cancelar tu plan cuando quieras, sin penalidades. Consulta el documento
                completo en cualquier momento.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <span className="mb-1 flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                <Lock className="size-5" />
              </span>
              <CardTitle>Aviso de privacidad</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Tus datos personales se utilizan únicamente para gestionar tu beneficio, validar
                tu cobertura y enviarte comunicaciones relacionadas con el seguro.
              </p>
              <p>
                No compartimos tu información con terceros para fines comerciales. Puedes ejercer
                tus derechos de acceso, rectificación y cancelación escribiendo a nuestro equipo
                de soporte.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5">
            <label htmlFor="terminos" className="flex cursor-pointer items-start gap-3">
              <Checkbox
                id="terminos"
                checked={terminos}
                onCheckedChange={(v) => setTerminos(v === true)}
                className="mt-0.5"
              />
              <span className="text-sm leading-relaxed text-foreground">
                He leído y acepto los <strong className="font-semibold">Términos y
                condiciones</strong> del seguro.
              </span>
            </label>
            <label htmlFor="privacidad" className="flex cursor-pointer items-start gap-3">
              <Checkbox
                id="privacidad"
                checked={privacidad}
                onCheckedChange={(v) => setPrivacidad(v === true)}
                className="mt-0.5"
              />
              <span className="text-sm leading-relaxed text-foreground">
                He leído y acepto el <strong className="font-semibold">Aviso de
                privacidad</strong> y el tratamiento de mis datos.
              </span>
            </label>
          </div>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button variant="ghost" nativeButton={false} render={<Link href="/" />}>
              <ArrowLeft data-icon="inline-start" className="size-4" />
              Cancelar
            </Button>
            <Button
              size="lg"
              className="h-11 bg-coral px-6 text-base text-coral-foreground hover:bg-coral/90"
              disabled={!puedeContinuar || enviando}
              onClick={activar}
            >
              {enviando ? 'Contratando…' : 'Aceptar y contratar'}
              {!enviando && <ArrowRight data-icon="inline-end" className="size-4" />}
            </Button>
          </div>
          {!puedeContinuar && (
            <p className="text-center text-xs text-muted-foreground">
              {!datosValidos
                ? 'Completa tu nombre y un correo electrónico válido para continuar.'
                : 'Debes aceptar ambos documentos para continuar.'}
            </p>
          )}
          {error && (
            <p className="text-center text-sm font-medium text-destructive">{error}</p>
          )}
        </div>
      </main>
    </div>
  )
}

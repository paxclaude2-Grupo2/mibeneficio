'use client'

import {
  AlertCircle,
  CheckCircle2,
  Pencil,
  Plus,
  Trash2,
  Users,
} from 'lucide-react'
import { useState } from 'react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { type Beneficiario, useBeneficiarios } from '@/lib/use-beneficiarios'

const parentescos = ['Cónyuge / Pareja', 'Hijo/a', 'Padre / Madre', 'Hermano/a', 'Otro']

type FormState = { nombre: string; parentesco: string; porcentaje: string }

const formVacio: FormState = { nombre: '', parentesco: parentescos[0], porcentaje: '' }

export default function BeneficiariosPage() {
  const { beneficiarios, listo, agregar, actualizar, eliminar, total, completos } =
    useBeneficiarios()
  const [mostrarForm, setMostrarForm] = useState(false)
  const [editandoId, setEditandoId] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>(formVacio)
  const [error, setError] = useState<string | null>(null)

  function abrirNuevo() {
    setEditandoId(null)
    setForm(formVacio)
    setError(null)
    setMostrarForm(true)
  }

  function abrirEditar(b: Beneficiario) {
    setEditandoId(b.id)
    setForm({ nombre: b.nombre, parentesco: b.parentesco, porcentaje: String(b.porcentaje) })
    setError(null)
    setMostrarForm(true)
  }

  function cancelar() {
    setMostrarForm(false)
    setEditandoId(null)
    setForm(formVacio)
    setError(null)
  }

  function guardar() {
    const nombre = form.nombre.trim()
    const porcentaje = Number(form.porcentaje)

    if (!nombre) {
      setError('Escribe el nombre del beneficiario.')
      return
    }
    if (!Number.isFinite(porcentaje) || porcentaje <= 0 || porcentaje > 100) {
      setError('El porcentaje debe ser un número entre 1 y 100.')
      return
    }

    if (editandoId) {
      actualizar(editandoId, { nombre, parentesco: form.parentesco, porcentaje })
    } else {
      agregar({ nombre, parentesco: form.parentesco, porcentaje })
    }
    cancelar()
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 md:py-10">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance">
            Tus beneficiarios
          </h1>
          <p className="max-w-2xl text-muted-foreground text-pretty">
            Define quién recibirá la protección de tu Vita+ y en qué proporción. Puedes
            agregar, editar o quitar beneficiarios cuando quieras.
          </p>
        </div>

        <Card className="mb-6">
          <CardContent className="flex flex-col gap-4 pt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                  <Users className="size-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {total}% de la protección asignada
                  </span>
                  <span className="text-xs text-muted-foreground">
                    La suma de los porcentajes debe llegar a 100%.
                  </span>
                </div>
              </div>
              {completos ? (
                <Badge className="w-fit gap-1.5 bg-coral/10 text-coral">
                  <CheckCircle2 className="size-3.5" />
                  Beneficiarios completos
                </Badge>
              ) : (
                <Badge variant="destructive" className="w-fit gap-1.5">
                  <AlertCircle className="size-3.5" />
                  Te falta completar tus beneficiarios
                </Badge>
              )}
            </div>
            <Progress value={Math.min(total, 100)} />
          </CardContent>
        </Card>

        <div className="mb-6 flex flex-col gap-3">
          {!listo ? null : beneficiarios.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card px-4 py-10 text-center">
              <p className="text-sm text-muted-foreground">
                Todavía no has registrado beneficiarios. Agrega al menos uno para completar tu
                protección.
              </p>
            </div>
          ) : (
            beneficiarios.map((b) => (
              <div
                key={b.id}
                className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">{b.nombre}</span>
                  <span className="text-xs text-muted-foreground">{b.parentesco}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-base font-semibold text-foreground">
                    {b.porcentaje}%
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label={`Editar a ${b.nombre}`}
                    onClick={() => abrirEditar(b)}
                  >
                    <Pencil className="size-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label={`Eliminar a ${b.nombre}`}
                    onClick={() => eliminar(b.id)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {mostrarForm ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {editandoId ? 'Editar beneficiario' : 'Nuevo beneficiario'}
              </CardTitle>
              <CardDescription>Todos los campos son obligatorios.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-[1.4fr_1fr_0.8fr]">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="b-nombre" className="text-sm font-medium text-foreground">
                    Nombre completo
                  </label>
                  <Input
                    id="b-nombre"
                    value={form.nombre}
                    onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                    className="h-11"
                    placeholder="Ej. Ana Pariona"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="b-parentesco" className="text-sm font-medium text-foreground">
                    Parentesco
                  </label>
                  <select
                    id="b-parentesco"
                    value={form.parentesco}
                    onChange={(e) => setForm((f) => ({ ...f, parentesco: e.target.value }))}
                    className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
                  >
                    {parentescos.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="b-porcentaje" className="text-sm font-medium text-foreground">
                    Porcentaje
                  </label>
                  <Input
                    id="b-porcentaje"
                    type="number"
                    min={1}
                    max={100}
                    value={form.porcentaje}
                    onChange={(e) => setForm((f) => ({ ...f, porcentaje: e.target.value }))}
                    className="h-11"
                    placeholder="Ej. 50"
                  />
                </div>
              </div>
              {error && <p className="text-sm font-medium text-destructive">{error}</p>}
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Button variant="ghost" onClick={cancelar}>
                  Cancelar
                </Button>
                <Button
                  className="bg-coral text-coral-foreground hover:bg-coral/90"
                  onClick={guardar}
                >
                  Guardar beneficiario
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Button
            variant="outline"
            className="w-fit"
            onClick={abrirNuevo}
          >
            <Plus data-icon="inline-start" className="size-4" />
            Agregar beneficiario
          </Button>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}

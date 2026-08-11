import { ShieldCheck } from 'lucide-react'
import { colaborador, producto } from '@/lib/data'
import { Badge } from '@/components/ui/badge'

export function EmailPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      {/* Barra tipo cliente de correo */}
      <div className="flex items-center justify-between gap-3 border-b border-border bg-secondary/50 px-5 py-3">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            Completa tu protección, {colaborador.primerNombre}
          </span>
          <span className="text-xs text-muted-foreground">
            {producto.nombre} · {colaborador.empresa}
          </span>
        </div>
        <Badge variant="secondary" className="shrink-0">
          Recordatorio
        </Badge>
      </div>

      {/* Cuerpo del correo */}
      <div className="flex flex-col gap-4 px-5 py-6">
        <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <ShieldCheck className="size-5" />
        </span>
        <p className="text-sm leading-relaxed text-foreground">
          Hola {colaborador.primerNombre}, tu seguro está activo, pero todavía no has registrado
          a tus <strong>beneficiarios</strong>.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Completa tu protección en menos de 2 minutos. Es el último paso para que{' '}
          {colaborador.empresa} y {producto.nombre} te respalden por completo.
        </p>
        <span className="inline-flex w-fit items-center rounded-lg bg-coral px-4 py-2 text-sm font-medium text-coral-foreground">
          Registrar beneficiarios
        </span>
        <p className="text-xs text-muted-foreground">
          Recibes este correo porque activaste tu beneficio. Puedes ajustar tus notificaciones
          desde tu perfil.
        </p>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Un beneficio de tu empresa para acompañarte a ti y a tu familia. Aquí lo entiendes,
            lo activas y lo aprovechas.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
            Mi dashboard
          </Link>
          <Link href="/recursos" className="text-muted-foreground hover:text-foreground">
            Centro de recursos
          </Link>
          <Link href="/terminos" className="text-muted-foreground hover:text-foreground">
            Términos y condiciones
          </Link>
          <Link href="/recursos" className="text-muted-foreground hover:text-foreground">
            Aviso de privacidad
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          © 2025 Grupo Andes · Mi Beneficio. Este es un módulo demostrativo con datos ficticios.
        </div>
      </div>
    </footer>
  )
}

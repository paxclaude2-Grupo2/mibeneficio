import { Download, FileText, LifeBuoy, Mail, Phone, type LucideIcon } from 'lucide-react'
import { EmailPreview } from '@/components/recursos/email-preview'
import { FaqSearch } from '@/components/recursos/faq-search'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { contactos, documentos } from '@/lib/data'

const contactoIcon: Record<string, LucideIcon> = {
  Phone,
  Mail,
  LifeBuoy,
}

export default function RecursosPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 md:py-10">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance">
            Centro de recursos
          </h1>
          <p className="max-w-2xl text-muted-foreground text-pretty">
            Todo lo que necesitas saber sobre tu beneficio: preguntas frecuentes, documentos,
            contactos de soporte y las comunicaciones que recibes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col gap-8">
            {/* FAQs */}
            <section>
              <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
                Preguntas frecuentes
              </h2>
              <FaqSearch />
            </section>

            {/* Documentos */}
            <section>
              <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
                Documentos descargables
              </h2>
              <div className="flex flex-col gap-3">
                {documentos.map((d) => (
                  <div
                    key={d.nombre}
                    className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                        <FileText className="size-5" />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{d.nombre}</span>
                        <span className="text-xs text-muted-foreground">
                          {d.tipo} · {d.peso}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" aria-label={`Descargar ${d.nombre}`}>
                      <Download data-icon="inline-start" className="size-4" />
                      Descargar
                    </Button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Columna lateral */}
          <div className="flex flex-col gap-8">
            {/* Contactos */}
            <section>
              <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
                Contactos de soporte
              </h2>
              <div className="flex flex-col gap-3">
                {contactos.map((c) => {
                  const Icon = contactoIcon[c.icono] ?? Phone
                  return (
                    <Card key={c.nombre}>
                      <CardContent className="flex items-start gap-3 pt-6">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-coral/10 text-coral">
                          <Icon className="size-5" />
                        </span>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-medium text-foreground">{c.nombre}</span>
                          <span className="text-xs text-muted-foreground">{c.detalle}</span>
                          <span className="mt-1 text-sm font-semibold text-primary">
                            {c.valor}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* Preview de correo */}
            <section>
              <div className="mb-4 flex flex-col gap-1">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Tus notificaciones
                </h2>
                <p className="text-sm text-muted-foreground">
                  Así se ven los recordatorios que enviamos por correo.
                </p>
              </div>
              <EmailPreview />
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

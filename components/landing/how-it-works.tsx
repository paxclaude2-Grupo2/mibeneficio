import { HeartHandshake, MousePointerClick, ShieldCheck } from 'lucide-react'

const pasos = [
  {
    icon: MousePointerClick,
    titulo: 'Conoce tu protección',
    descripcion: 'Entiende cuánto estás cubierto y en qué situaciones aplica tu seguro.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Activa tu cobertura',
    descripcion: 'Confirma tus datos y activa tu protección de forma sencilla.',
  },
  {
    icon: HeartHandshake,
    titulo: 'Protege a quienes más quieres',
    descripcion: 'Registra o actualiza a tus beneficiarios.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-coral">
              Cómo funciona
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Tres pasos y listo. Sin complicaciones.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              Diseñamos este módulo para que actives tu beneficio sin llamadas, sin formularios
              interminables y sin tecnicismos de seguros.
            </p>
          </div>

          <ol className="flex flex-col gap-4">
            {pasos.map((paso, i) => (
              <li
                key={paso.titulo}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <paso.icon className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-coral">Paso {i + 1}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{paso.titulo}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {paso.descripcion}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = ['Conoce', 'Acepta', 'Activado']

export function FlowSteps({ current }: { current: 0 | 1 | 2 }) {
  return (
    <ol className="mx-auto flex w-full max-w-md items-center justify-between gap-2">
      {steps.map((label, i) => {
        const done = i < current
        const active = i === current
        return (
          <li key={label} className="flex flex-1 items-center gap-2 last:flex-none">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'flex size-7 items-center justify-center rounded-full text-xs font-semibold transition-colors',
                  done && 'bg-coral text-coral-foreground',
                  active && 'bg-primary text-primary-foreground',
                  !done && !active && 'bg-muted text-muted-foreground',
                )}
              >
                {done ? <Check className="size-4" /> : i + 1}
              </span>
              <span
                className={cn(
                  'hidden text-sm font-medium sm:inline',
                  active ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span
                className={cn(
                  'h-px flex-1 transition-colors',
                  done ? 'bg-coral' : 'bg-border',
                )}
              />
            )}
          </li>
        )
      })}
    </ol>
  )
}

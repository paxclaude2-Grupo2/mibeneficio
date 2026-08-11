import { ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <ShieldCheck className="size-5" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        Vita+
      </span>
    </Link>
  )
}

'use client'

import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { faqs } from '@/lib/data'

export function FaqSearch() {
  const [query, setQuery] = useState('')

  const filtradas = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return faqs
    return faqs.filter(
      (f) => f.pregunta.toLowerCase().includes(q) || f.respuesta.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="flex flex-col gap-5">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Busca una duda: beneficiarios, cobertura, monto…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-11 pl-9"
          aria-label="Buscar en preguntas frecuentes"
        />
      </div>

      {filtradas.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-card px-4 py-8 text-center text-sm text-muted-foreground">
          No encontramos resultados para “{query}”. Intenta con otra palabra o contacta a soporte.
        </p>
      ) : (
        <Accordion className="rounded-2xl border border-border bg-card px-5">
          {filtradas.map((f, i) => (
            <AccordionItem key={f.pregunta} value={`faq-${i}`}>
              <AccordionTrigger className="text-base font-medium">{f.pregunta}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.respuesta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  )
}

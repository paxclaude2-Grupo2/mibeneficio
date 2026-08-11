'use client'

import { useCallback, useEffect, useState } from 'react'

export type Beneficiario = {
  id: string
  nombre: string
  parentesco: string
  porcentaje: number
}

const STORAGE_KEY = 'vita-beneficiarios'

function leerStorage(): Beneficiario[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Beneficiario[]) : []
  } catch {
    return []
  }
}

export function useBeneficiarios() {
  const [beneficiarios, setBeneficiarios] = useState<Beneficiario[]>([])
  const [listo, setListo] = useState(false)

  useEffect(() => {
    setBeneficiarios(leerStorage())
    setListo(true)
  }, [])

  const guardar = useCallback((next: Beneficiario[]) => {
    setBeneficiarios(next)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }, [])

  const agregar = useCallback(
    (b: Omit<Beneficiario, 'id'>) => {
      guardar([...beneficiarios, { ...b, id: crypto.randomUUID() }])
    },
    [beneficiarios, guardar],
  )

  const actualizar = useCallback(
    (id: string, b: Omit<Beneficiario, 'id'>) => {
      guardar(beneficiarios.map((x) => (x.id === id ? { ...b, id } : x)))
    },
    [beneficiarios, guardar],
  )

  const eliminar = useCallback(
    (id: string) => {
      guardar(beneficiarios.filter((x) => x.id !== id))
    },
    [beneficiarios, guardar],
  )

  const total = beneficiarios.reduce((sum, b) => sum + b.porcentaje, 0)
  const completos = beneficiarios.length > 0 && total === 100

  return { beneficiarios, listo, agregar, actualizar, eliminar, total, completos }
}

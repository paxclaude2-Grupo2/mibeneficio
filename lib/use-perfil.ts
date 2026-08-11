'use client'

import { useCallback, useEffect, useState } from 'react'
import { colaborador } from '@/lib/data'

const STORAGE_KEY = 'vita-perfil'

type Perfil = { nombre: string; email: string }

const perfilPorDefecto: Perfil = { nombre: colaborador.nombre, email: colaborador.email }

export function usePerfil() {
  const [perfil, setPerfil] = useState<Perfil>(perfilPorDefecto)
  const [actualizadoManualmente, setActualizadoManualmente] = useState(false)
  const [listo, setListo] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        setPerfil(JSON.parse(raw) as Perfil)
        setActualizadoManualmente(true)
      }
    } catch {
      // ignorar storage corrupto y usar el valor por defecto
    }
    setListo(true)
  }, [])

  const guardar = useCallback((p: Perfil) => {
    setPerfil(p)
    setActualizadoManualmente(true)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
  }, [])

  return { perfil, listo, actualizadoManualmente, guardar }
}

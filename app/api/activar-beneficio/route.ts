import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { seguro } from '@/lib/data'
import { buildActivationEmailHtml } from '@/lib/email-template'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Ruta de servidor que envía el correo de confirmación por Gmail SMTP.
// Las credenciales viven en variables de entorno (.env.local), nunca en el código.
export async function POST(request: Request) {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD

  if (!user || !pass) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'Faltan credenciales. Configura GMAIL_USER y GMAIL_APP_PASSWORD en el archivo .env.local.',
      },
      { status: 500 },
    )
  }

  const body = await request.json().catch(() => null)
  const nombreCompleto = typeof body?.nombre === 'string' ? body.nombre.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''

  if (!nombreCompleto || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Nombre y correo electrónico son obligatorios.' },
      { status: 400 },
    )
  }

  const primerNombre = nombreCompleto.split(' ')[0]

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    })

    await transporter.sendMail({
      from: `"Mi Beneficio" <${user}>`,
      to: email,
      subject: `Tu ${seguro.nombre} quedó activado`,
      text: `¡Hola ${primerNombre}!

Tu ${seguro.nombre} quedó activado y con cobertura vigente hasta el ${seguro.vigenciaHasta}.

Póliza: ${seguro.poliza}
Aseguradora: ${seguro.aseguradora}
Costo para ti: ${seguro.costoColaborador}

A partir de ahora, cuentas con el respaldo de tu empresa.

— Mi Beneficio`,
      html: buildActivationEmailHtml({
        nombre: primerNombre,
        poliza: seguro.poliza,
        aseguradora: seguro.aseguradora,
        vigenciaHasta: seguro.vigenciaHasta,
        costo: seguro.costoColaborador,
      }),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error enviando el correo:', error)
    return NextResponse.json(
      { ok: false, error: 'No se pudo enviar el correo. Revisa las credenciales de Gmail.' },
      { status: 500 },
    )
  }
}

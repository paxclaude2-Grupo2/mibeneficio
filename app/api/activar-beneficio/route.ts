import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { producto } from '@/lib/data'
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
      from: `"${producto.nombre}" <${user}>`,
      to: email,
      subject: `Tu ${producto.nombre} quedó contratado`,
      text: `¡Hola ${primerNombre}!

Tu ${producto.nombre} quedó contratado y con cobertura vigente hasta el ${producto.vigenciaHasta}.

Póliza: ${producto.poliza}
Plan: ${producto.precio}

Protege económicamente a quienes más quieres: no olvides registrar a tus beneficiarios.

— ${producto.nombre}`,
      html: buildActivationEmailHtml({
        nombre: primerNombre,
        poliza: producto.poliza,
        precio: producto.precio,
        vigenciaHasta: producto.vigenciaHasta,
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

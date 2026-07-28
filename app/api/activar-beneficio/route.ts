import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { colaborador, seguro } from '@/lib/data'
import { buildActivationEmailHtml } from '@/lib/email-template'

// Ruta de servidor que envía el correo de confirmación por Gmail SMTP.
// Las credenciales viven en variables de entorno (.env.local), nunca en el código.
export async function POST() {
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

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    })

    await transporter.sendMail({
      from: `"Mi Beneficio" <${user}>`,
      to: 'Marlon.pariona@gmail.com',
      subject: `Tu ${seguro.nombre} quedó activado`,
      text: `¡Hola ${colaborador.primerNombre}!

Tu ${seguro.nombre} quedó activado y con cobertura vigente hasta el ${seguro.vigenciaHasta}.

Póliza: ${seguro.poliza}
Aseguradora: ${seguro.aseguradora}
Costo para ti: ${seguro.costoColaborador}

A partir de ahora, cuentas con el respaldo de tu empresa.

— Mi Beneficio`,
      html: buildActivationEmailHtml({
        nombre: colaborador.primerNombre,
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

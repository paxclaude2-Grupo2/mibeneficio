import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { colaborador, seguro } from '@/lib/data'

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
      html: `
        <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
          <h1 style="font-size: 22px; margin-bottom: 8px;">¡Hola ${colaborador.primerNombre}! Tu beneficio está activo</h1>
          <p>Tu <strong>${seguro.nombre}</strong> quedó activado y con cobertura vigente hasta el <strong>${seguro.vigenciaHasta}</strong>.</p>
          <table style="border-collapse: collapse; margin: 16px 0;">
            <tr><td style="padding: 4px 12px 4px 0; color:#6b7280;">Póliza</td><td style="padding: 4px 0;"><strong>${seguro.poliza}</strong></td></tr>
            <tr><td style="padding: 4px 12px 4px 0; color:#6b7280;">Aseguradora</td><td style="padding: 4px 0;">${seguro.aseguradora}</td></tr>
            <tr><td style="padding: 4px 12px 4px 0; color:#6b7280;">Costo para ti</td><td style="padding: 4px 0;">${seguro.costoColaborador}</td></tr>
          </table>
          <p>A partir de ahora, cuentas con el respaldo de tu empresa.</p>
          <p style="color:#6b7280; margin-top: 24px;">— Mi Beneficio</p>
        </div>
      `,
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

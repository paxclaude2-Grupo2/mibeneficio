// Plantilla HTML del correo de confirmación, con la paleta de marca de la app
// (navy #172b49, coral #e9504b). Usa tablas + estilos inline porque la mayoría
// de clientes de correo (Gmail, Outlook) ignoran <style> en el <head>.

export function buildActivationEmailHtml(params: {
  nombre: string
  poliza: string
  empresa: string
  vigenciaHasta: string
  costo: string
}) {
  const { nombre, poliza, empresa, vigenciaHasta, costo } = params

  const colors = {
    background: '#f8fafd',
    card: '#ffffff',
    primary: '#172b49',
    primaryForeground: '#f8fafd',
    coral: '#e9504b',
    coralSoft: '#fde9e8',
    accent: '#e9eff7',
    border: '#dee2e7',
    foreground: '#16202e',
    muted: '#626a75',
  }

  return `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tu seguro está activo</title>
  </head>
  <body style="margin:0; padding:0; background-color:${colors.background}; font-family:'Segoe UI', Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${colors.background}; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px; background-color:${colors.card}; border-radius:20px; overflow:hidden; border:1px solid ${colors.border};">

            <!-- Header -->
            <tr>
              <td style="background-color:${colors.primary}; padding:28px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:34px; height:34px; background-color:${colors.coral}; border-radius:10px; text-align:center; vertical-align:middle;">
                      <span style="color:${colors.primaryForeground}; font-size:18px; font-weight:700; line-height:34px;">V</span>
                    </td>
                    <td style="padding-left:10px; color:${colors.primaryForeground}; font-size:16px; font-weight:700;">
                      Vita+
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Hero -->
            <tr>
              <td style="padding:36px 32px 8px; text-align:center;">
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 20px;">
                  <tr>
                    <td style="width:64px; height:64px; background-color:${colors.coralSoft}; border-radius:9999px; text-align:center; vertical-align:middle;">
                      <span style="color:${colors.coral}; font-size:30px; line-height:64px;">&#10003;</span>
                    </td>
                  </tr>
                </table>
                <h1 style="margin:0 0 12px; color:${colors.primary}; font-size:24px; font-weight:800; letter-spacing:-0.02em;">
                  ¡Hola ${nombre}!<br />Tu tranquilidad ya empezó
                </h1>
                <p style="margin:0; color:${colors.muted}; font-size:15px; line-height:1.6;">
                  Tu <strong style="color:${colors.foreground};">Vita+</strong> quedó activado y con cobertura vigente hasta el <strong style="color:${colors.foreground};">${vigenciaHasta}</strong>.
                </p>
              </td>
            </tr>

            <!-- Póliza card -->
            <tr>
              <td style="padding:24px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${colors.accent}; border-radius:16px; border:1px solid ${colors.border};">
                  <tr>
                    <td style="padding:20px 24px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:6px 0; color:${colors.muted}; font-size:13px;">Póliza</td>
                          <td align="right" style="padding:6px 0; color:${colors.primary}; font-size:14px; font-weight:700;">${poliza}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0; color:${colors.muted}; font-size:13px; border-top:1px solid ${colors.border};">Empresa</td>
                          <td align="right" style="padding:6px 0; color:${colors.foreground}; font-size:14px; border-top:1px solid ${colors.border};">${empresa}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0; color:${colors.muted}; font-size:13px; border-top:1px solid ${colors.border};">Costo para ti</td>
                          <td align="right" style="padding:6px 0; color:${colors.foreground}; font-size:14px; border-top:1px solid ${colors.border};">${costo}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0; color:${colors.muted}; font-size:13px; border-top:1px solid ${colors.border};">Vigente hasta</td>
                          <td align="right" style="padding:6px 0; color:${colors.foreground}; font-size:14px; border-top:1px solid ${colors.border};">${vigenciaHasta}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Mensaje final -->
            <tr>
              <td style="padding:24px 32px 32px; text-align:center;">
                <p style="margin:0; color:${colors.muted}; font-size:14px; line-height:1.6;">
                  Protege económicamente a quienes más quieres: te falta un paso importante,
                  registrar a tus beneficiarios. Toma menos de 2 minutos desde tu dashboard.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:20px 32px; background-color:${colors.background}; border-top:1px solid ${colors.border}; text-align:center;">
                <p style="margin:0; color:${colors.muted}; font-size:12px;">— Vita+ · Beneficio proporcionado por ${empresa}</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
}

// Datos mock realistas para el MVP "Vita+" (seguro de vida B2C — venta directa)

export const colaborador = {
  nombre: 'Marlon Pariona',
  primerNombre: 'Marlon',
  iniciales: 'MP',
  email: 'Marlon.pariona@gmail.com',
  clienteDesde: '3 de marzo, 2025',
}

// Vita+ se contrata directamente: no hay empresa intermediaria ni tercero asegurador.
export const producto = {
  nombre: 'Vita+',
  poliza: 'VT-2025-48213',
  vigenciaHasta: '31 de diciembre, 2025',
  precio: 'Desde $9.99/mes',
  precioBase: 9.99,
  montoFallecimiento: 50000,
  montoMuerteAccidental: 100000,
  montoInvalidez: 50000,
}

// "Arma tu Vita+": beneficios opcionales que el cliente suma a su plan base,
// cada uno con su propio costo mensual, para armar su combo a la medida.
export const beneficiosOpcionales = [
  {
    id: 'monto-extra',
    nombre: 'Duplica tu monto asegurado',
    descripcion: 'Sube tu cobertura por fallecimiento de $50,000 a $100,000.',
    precio: 4.99,
    icono: 'TrendingUp',
  },
  {
    id: 'accidental-plus',
    nombre: 'Muerte accidental Plus',
    descripcion: 'Aumenta tu cobertura por accidente a $200,000.',
    precio: 2.99,
    icono: 'Zap',
  },
  {
    id: 'funeraria',
    nombre: 'Asistencia funeraria',
    descripcion: 'Cubre los gastos funerarios para que tu familia no los asuma.',
    precio: 1.49,
    icono: 'HeartHandshake',
  },
  {
    id: 'renta-invalidez',
    nombre: 'Renta por invalidez temporal',
    descripcion: 'Un ingreso mensual mientras te recuperas de una invalidez.',
    precio: 3.99,
    icono: 'Wallet',
  },
  {
    id: 'educacion',
    nombre: 'Protección educativa',
    descripcion: 'Un fondo para la educación de tus hijos beneficiarios.',
    precio: 2.49,
    icono: 'GraduationCap',
  },
  {
    id: 'deudas',
    nombre: 'Protección de deudas',
    descripcion: 'Cubre tus deudas pendientes para que no recaigan en tu familia.',
    precio: 3.49,
    icono: 'Landmark',
  },
] as const

export const proteccionDetalle = [
  {
    titulo: 'Fallecimiento',
    monto: producto.montoFallecimiento,
    descripcion: 'Protección económica para tu familia.',
    icono: 'ShieldCheck',
  },
  {
    titulo: 'Muerte accidental',
    monto: producto.montoMuerteAccidental,
    descripcion: 'Monto adicional si ocurre por accidente.',
    icono: 'HeartHandshake',
  },
  {
    titulo: 'Invalidez total y permanente',
    monto: producto.montoInvalidez,
    descripcion: 'Cobertura adicional si la necesitas.',
    icono: 'Accessibility',
  },
]

export const coberturas = [
  {
    titulo: 'Protección por fallecimiento',
    descripcion: 'Un monto asegurado para que tu familia esté cubierta económicamente.',
    icono: 'ShieldCheck',
  },
  {
    titulo: 'Muerte accidental',
    descripcion: 'Protección adicional cuando el fallecimiento ocurre por un accidente.',
    icono: 'HeartHandshake',
  },
  {
    titulo: 'Beneficiarios',
    descripcion: 'Tú decides quién recibe la protección de tu seguro y en qué proporción.',
    icono: 'Users',
  },
  {
    titulo: 'Invalidez total y permanente',
    descripcion: 'Cobertura adicional si una condición te impide trabajar de forma permanente.',
    icono: 'Accessibility',
  },
  {
    titulo: 'Asistencia a tu familia',
    descripcion: 'Orientación y acompañamiento para tus beneficiarios cuando lo necesiten.',
    icono: 'LifeBuoy',
  },
  {
    titulo: 'Cómo solicitar el beneficio',
    descripcion: 'Un proceso claro para que tu familia sepa exactamente qué hacer.',
    icono: 'FileCheck',
  },
]

export const accionesRecomendadas = [
  {
    id: 'beneficiarios',
    titulo: 'Designa a tus beneficiarios',
    descripcion: 'Define quién recibirá la protección de tu seguro.',
    accion: 'Agregar beneficiarios',
    icono: 'Users',
  },
  {
    id: 'cobertura',
    titulo: 'Revisa tu cobertura',
    descripcion: 'Conoce exactamente qué cubre tu seguro y cuándo aplica.',
    accion: 'Ver cobertura',
    icono: 'ShieldCheck',
  },
  {
    id: 'certificado',
    titulo: 'Descarga tu certificado',
    descripcion: 'Guarda una copia digital de tu protección.',
    accion: 'Descargar',
    icono: 'FileDown',
  },
  {
    id: 'datos',
    titulo: 'Actualiza tus datos',
    descripcion: 'Mantén tu información y la de tus beneficiarios al día.',
    accion: 'Actualizar',
    icono: 'UserCog',
  },
] as const

export const faqs = [
  {
    pregunta: '¿Qué cubre mi seguro?',
    respuesta:
      'Tu Vita+ te protege económicamente a ti y a tu familia ante un fallecimiento, con un monto adicional si ocurre por accidente. También puede incluir invalidez total y permanente como cobertura adicional.',
  },
  {
    pregunta: '¿Cuánto está asegurado?',
    respuesta:
      'Tu póliza incluye $50,000 por fallecimiento, $100,000 por muerte accidental y $50,000 por invalidez total y permanente, desde $9.99 al mes.',
  },
  {
    pregunta: '¿Quién puede ser mi beneficiario?',
    respuesta:
      'Cualquier persona que tú elijas: pareja, hijos, padres u otro familiar. Puedes designar a más de uno y definir qué porcentaje recibe cada uno.',
  },
  {
    pregunta: '¿Puedo cambiar mis beneficiarios?',
    respuesta:
      'Sí, cuando quieras. Entra a la sección de Beneficiarios y actualiza la lista en cualquier momento.',
  },
  {
    pregunta: '¿Puedo cancelar mi seguro cuando quiera?',
    respuesta:
      'Sí. Vita+ no tiene permanencia forzosa: puedes cancelar tu póliza cuando quieras desde tu cuenta, sin penalidades.',
  },
  {
    pregunta: '¿Qué debe hacer mi familia para solicitar el beneficio?',
    respuesta:
      'Deben contactar a la línea de atención de Vita+ y presentar la documentación básica que se detalla en la Guía para beneficiarios.',
  },
  {
    pregunta: '¿Cuándo no aplica la cobertura?',
    respuesta:
      'Las condiciones generales detallan las exclusiones específicas de tu póliza. Puedes revisarlas cuando quieras en el Centro de recursos.',
  },
  {
    pregunta: '¿Dónde encuentro mi certificado?',
    respuesta:
      'Desde tu dashboard, en la sección "Acciones recomendadas", puedes descargar tu certificado en cualquier momento.',
  },
]

export const contactos = [
  {
    nombre: 'Línea de atención Vita+',
    detalle: 'Disponible 24/7 para dudas sobre tu seguro',
    valor: '800 123 4567',
    tipo: 'telefono',
    icono: 'Phone',
  },
  {
    nombre: 'Facturación y pagos',
    detalle: 'Dudas sobre tu plan o tu método de pago',
    valor: 'pagos@vitaplus.com',
    tipo: 'email',
    icono: 'Mail',
  },
  {
    nombre: 'Asistencia para beneficiarios',
    detalle: 'Orientación si necesitas solicitar el beneficio',
    valor: 'Iniciar chat',
    tipo: 'accion',
    icono: 'LifeBuoy',
  },
]

export const documentos = [
  { nombre: 'Resumen de cobertura', tipo: 'PDF', peso: '420 KB' },
  { nombre: 'Certificado de seguro', tipo: 'PDF', peso: '310 KB' },
  { nombre: 'Guía para beneficiarios', tipo: 'PDF', peso: '380 KB' },
  { nombre: 'Condiciones generales', tipo: 'PDF', peso: '1.1 MB' },
  { nombre: '¿Qué hacer para solicitar un beneficio?', tipo: 'PDF', peso: '290 KB' },
]

// Métricas para el dashboard de RR. HH. (/admin)
export const metricasAdopcion = {
  northStar: {
    porcentaje: 62,
    numerador: 744,
    denominador: 1200,
    label: 'Protección completa',
  },
  conocieron: 82,
  activaron: 72,
  registraronBeneficiarios: 65,
  tasaAbandono: 8,
  contactosSoporte: 4,
}

export const activacionPorMes = [
  { mes: 'Ene', activaciones: 62 },
  { mes: 'Feb', activaciones: 98 },
  { mes: 'Mar', activaciones: 141 },
  { mes: 'Abr', activaciones: 120 },
  { mes: 'May', activaciones: 176 },
  { mes: 'Jun', activaciones: 195 },
]

export const adopcionPorArea = [
  { area: 'Operaciones', porcentaje: 84 },
  { area: 'Ventas', porcentaje: 76 },
  { area: 'Tecnología', porcentaje: 69 },
  { area: 'Administración', porcentaje: 61 },
  { area: 'Logística', porcentaje: 52 },
]

export const beneficiariosPorMes = [
  { mes: 'Ene', beneficiarios: 40 },
  { mes: 'Feb', beneficiarios: 65 },
  { mes: 'Mar', beneficiarios: 98 },
  { mes: 'Abr', beneficiarios: 130 },
  { mes: 'May', beneficiarios: 158 },
  { mes: 'Jun', beneficiarios: 190 },
]

export const evolucionProteccionCompleta = [
  { mes: 'Ene', porcentaje: 38 },
  { mes: 'Feb', porcentaje: 44 },
  { mes: 'Mar', porcentaje: 50 },
  { mes: 'Abr', porcentaje: 55 },
  { mes: 'May', porcentaje: 59 },
  { mes: 'Jun', porcentaje: 62 },
]

// Datos mock realistas para el MVP "Mi Beneficio"

export const colaborador = {
  nombre: 'Valentina Ríos',
  primerNombre: 'Valentina',
  iniciales: 'VR',
  puesto: 'Analista de Operaciones',
  empresa: 'Grupo Andes',
  email: 'valentina.rios@grupoandes.com',
  ingreso: '3 de marzo, 2025',
}

export const seguro = {
  nombre: 'Seguro de Vida y Salud',
  aseguradora: 'Aliada Seguros',
  poliza: 'GA-2025-48213',
  proposito:
    'Un respaldo que tu empresa contrató para ti: te acompaña ante imprevistos de salud, accidentes y a tu familia cuando más lo necesitan.',
  vigenciaHasta: '31 de diciembre, 2025',
  costoColaborador: 'Sin costo para ti',
}

export const coberturas = [
  {
    titulo: 'Salud y hospitalización',
    descripcion: 'Atención médica, urgencias y hospitalización con red de clínicas afiliadas.',
    icono: 'HeartPulse',
  },
  {
    titulo: 'Accidentes personales',
    descripcion: 'Cobertura ante accidentes dentro y fuera del trabajo, las 24 horas.',
    icono: 'ShieldCheck',
  },
  {
    titulo: 'Protección familiar',
    descripcion: 'Apoyo económico para tu familia como beneficiarios designados.',
    icono: 'Users',
  },
  {
    titulo: 'Telemedicina 24/7',
    descripcion: 'Consultas médicas por video o teléfono, sin costo y sin filas.',
    icono: 'Video',
  },
]

export const serviciosIncluidos = [
  { titulo: 'Consulta médica presencial', detalle: 'Hasta 12 al año', activo: true },
  { titulo: 'Telemedicina 24/7', detalle: 'Ilimitada', activo: true },
  { titulo: 'Estudios de laboratorio', detalle: 'Cobertura 80%', activo: true },
  { titulo: 'Hospitalización', detalle: 'Hasta $50,000', activo: true },
  { titulo: 'Apoyo psicológico', detalle: '6 sesiones al año', activo: true },
  { titulo: 'Chequeo preventivo anual', detalle: 'Incluido', activo: true },
]

export const proximosPasos = [
  {
    titulo: 'Agenda tu chequeo preventivo',
    descripcion: 'Aprovecha tu chequeo anual sin costo. Es el mejor primer paso.',
    accion: 'Agendar',
    icono: 'CalendarCheck',
  },
  {
    titulo: 'Descarga tu credencial digital',
    descripcion: 'Tenla siempre a mano en tu teléfono para cualquier atención.',
    accion: 'Descargar',
    icono: 'IdCard',
  },
  {
    titulo: 'Designa a tus beneficiarios',
    descripcion: 'Define quién recibirá la protección familiar. Toma 2 minutos.',
    accion: 'Completar',
    icono: 'Users',
  },
]

export const faqs = [
  {
    pregunta: '¿Este seguro tiene algún costo para mí?',
    respuesta:
      'No. Tu empresa cubre el 100% del costo del seguro como parte de tus beneficios. No se descuenta nada de tu salario.',
  },
  {
    pregunta: '¿Desde cuándo puedo usarlo?',
    respuesta:
      'Desde el momento en que activas tu beneficio en esta plataforma. La cobertura queda vigente de inmediato y recibirás la confirmación por correo.',
  },
  {
    pregunta: '¿Cómo agendo una consulta médica?',
    respuesta:
      'Puedes usar la telemedicina 24/7 desde tu dashboard, o agendar una consulta presencial con la red de clínicas afiliadas. Solo necesitas tu credencial digital.',
  },
  {
    pregunta: '¿Mi familia también está cubierta?',
    respuesta:
      'La protección familiar aplica para los beneficiarios que designes. Puedes agregarlos y actualizarlos desde la sección de próximos pasos en tu dashboard.',
  },
  {
    pregunta: '¿Qué pasa si dejo la empresa?',
    respuesta:
      'La cobertura está ligada a tu relación laboral. Si cambias de empleo, el área de Recursos Humanos te explicará las opciones de portabilidad disponibles.',
  },
  {
    pregunta: '¿Dónde veo el detalle de mi póliza?',
    respuesta:
      'En el Centro de recursos encontrarás todos los documentos descargables, incluyendo las condiciones generales y el resumen de tu póliza.',
  },
]

export const contactos = [
  {
    nombre: 'Línea de atención Aliada Seguros',
    detalle: 'Disponible 24/7 para urgencias',
    valor: '800 123 4567',
    tipo: 'telefono',
    icono: 'Phone',
  },
  {
    nombre: 'Recursos Humanos — Grupo Andes',
    detalle: 'Dudas sobre tu beneficio',
    valor: 'beneficios@grupoandes.com',
    tipo: 'email',
    icono: 'Mail',
  },
  {
    nombre: 'Telemedicina',
    detalle: 'Consulta médica inmediata',
    valor: 'Iniciar videollamada',
    tipo: 'accion',
    icono: 'Video',
  },
]

export const documentos = [
  { nombre: 'Condiciones generales de la póliza', tipo: 'PDF', peso: '1.2 MB' },
  { nombre: 'Resumen de coberturas 2025', tipo: 'PDF', peso: '480 KB' },
  { nombre: 'Guía rápida: cómo usar tu seguro', tipo: 'PDF', peso: '640 KB' },
  { nombre: 'Directorio de clínicas afiliadas', tipo: 'PDF', peso: '890 KB' },
  { nombre: 'Formato de designación de beneficiarios', tipo: 'PDF', peso: '210 KB' },
]

// Métricas para la vista admin / analítica
export const metricasAdopcion = {
  totalColaboradores: 1240,
  activaron: 892,
  tasaActivacion: 72,
  tasaApertura: 64,
  usaronAlMenosUna: 48,
  retorno90dias: 38,
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

// ─────────────────────────────────────────────────────────────
// PRECIOS, SERVICIOS Y PROMOCIÓN
// Para cambiar un precio basta con editar el número en PRICES.
// ─────────────────────────────────────────────────────────────

/** Valores en pesos colombianos (COP). */
export const PRICES = {
  marketingMonthly: 1_600_000, // precio de referencia, mensual
  promoFullMonthly: 1_200_000, // promoción: pago completo al inicio, mensual (2 primeros meses)
  promoSplitMonthly: 1_600_000, // promoción: pago dividido, mensual (2 primeros meses)
  webProject: 600_000, // por proyecto
  desktopApp: 2_400_000, // precio acordado de referencia (aplicación de escritorio)
}

export const PROMO_MONTHS = 2

/** Formato de moneda colombiana: $1.200.000 COP */
export const formatCOP = (value: number) =>
  `$${Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} COP`

/** Mitad exacta de un valor (pago dividido 50 % / 50 %). */
export const half = (value: number) => value / 2

export type ServiceIcon = 'marketing' | 'web' | 'software' | 'accounting'

export interface Service {
  id: 'marketing' | 'web' | 'software' | 'accounting'
  icon: ServiceIcon
  title: string
  description: string
  price: string
  priceUnit: string
  /** Etiqueta pequeña sobre el precio */
  priceKind: string
  highlights: string[]
  conditions: string[]
  cta: string
  /** Texto que se prepara en WhatsApp */
  interest: string
  badge?: string
}

export const services: Service[] = [
  {
    id: 'marketing',
    icon: 'marketing',
    title: 'Marketing y manejo de redes sociales',
    description:
      'Fortalecemos la presencia digital de tu negocio mediante estrategia, comunicación visual y contenido pensado para conectar tu marca con sus clientes.',
    price: formatCOP(PRICES.marketingMonthly),
    priceUnit: 'mensuales',
    priceKind: 'Precio mensual de referencia',
    highlights: [
      'Manejo de redes sociales',
      'Diseño de piezas publicitarias',
      'Creación de contenido visual',
      'Comunicación de promociones',
      'Desarrollo de identidad visual',
      'Planificación de contenido',
      'Apoyo a la presencia digital de la marca',
    ],
    conditions: [
      'El alcance específico se define en la propuesta comercial.',
      'El presupuesto para anuncios pagados no está incluido en el precio.',
    ],
    cta: 'Solicitar propuesta de marketing',
    interest: 'el servicio de marketing y manejo de redes sociales',
    badge: 'Promoción en los dos primeros meses',
  },
  {
    id: 'web',
    icon: 'web',
    title: 'Diseño y desarrollo de páginas web',
    description:
      'Diseñamos páginas web modernas, adaptables y visualmente atractivas para presentar tu empresa, tus productos y tus servicios en internet.',
    price: formatCOP(PRICES.webProject),
    priceUnit: 'por proyecto',
    priceKind: 'Precio por proyecto',
    highlights: [
      'Desarrollo exclusivamente frontend',
      'Diseño responsive',
      'Presentación profesional del negocio',
      'Secciones personalizadas según el proyecto',
      'Dos modificaciones menores incluidas',
    ],
    conditions: [
      'No incluye backend, bases de datos ni funcionalidades de servidor.',
      'Se incluyen únicamente dos modificaciones menores.',
      'Los cambios adicionales, las modificaciones importantes y los cambios fuera del alcance acordado se cotizan por separado.',
    ],
    cta: 'Solicitar página web',
    interest: 'el diseño y desarrollo de una página web frontend',
  },
  {
    id: 'software',
    icon: 'software',
    title: 'Desarrollo de aplicaciones y software',
    description:
      'Transformamos necesidades empresariales en soluciones de software diseñadas para facilitar procesos y responder a necesidades específicas.',
    price: formatCOP(PRICES.desktopApp),
    priceUnit: 'aplicación de escritorio',
    priceKind: 'Precio acordado de referencia',
    highlights: ['Aplicación de escritorio conforme al alcance funcional acordado'],
    conditions: [
      'Corresponde al desarrollo de una aplicación de escritorio; no es un precio universal para cualquier programa.',
      'No incluye automáticamente funciones adicionales: nuevas funcionalidades, módulos o cambios que amplíen el alcance se cotizan por separado.',
      'No incluye mantenimiento posterior a la entrega.',
    ],
    cta: 'Consultar desarrollo de software',
    interest: 'el desarrollo de una aplicación de escritorio',
  },
  {
    id: 'accounting',
    icon: 'accounting',
    title: 'Programa de contabilidad y gestión financiera',
    description:
      'Un programa ya desarrollado y en funcionamiento para ayudar a los emprendimientos a organizar y consultar su información financiera, con enfoque de almacenamiento local.',
    price: 'Por definir',
    priceUnit: '',
    priceKind: 'Precio',
    highlights: ['Solución tecnológica propia de ARAM', 'Enfoque de almacenamiento local'],
    conditions: ['Conoce el programa en una demostración.'],
    cta: 'Solicitar una demostración',
    interest: 'una demostración del programa de contabilidad',
  },
]

export type PromoModeId = 'completo' | 'dividido'

export interface PromoMode {
  id: PromoModeId
  label: string
  badge?: string
  monthly: number
  /** Texto breve del precio mensual para mensajes y formularios */
  summary: string
  message: string
  bullets: string[]
  split?: { label: string; amount: number }[]
  cta: string
}

export const promo = {
  name: 'Promoción de marketing: primeros dos meses',
  title: 'Tu marca puede empezar a crecer hoy.',
  subtitle:
    'Elige la modalidad de pago que mejor se adapte a tu negocio y comienza a trabajar con ARAM.',
  referencePrice: `Precio habitual de referencia del servicio de marketing: ${formatCOP(PRICES.marketingMonthly)} mensuales.`,
  note: 'Promoción válida durante los dos primeros meses de servicio. El alcance del trabajo, las fechas de pago y las condiciones posteriores deben quedar establecidos en la propuesta comercial.',
  modes: <PromoMode[]>[
    {
      id: 'completo',
      label: 'Pago completo al inicio',
      badge: 'MEJOR PRECIO',
      monthly: PRICES.promoFullMonthly,
      summary: `${formatCOP(PRICES.promoFullMonthly)} mensuales durante los dos primeros meses`,
      message: `Obtén una tarifa especial de ${formatCOP(PRICES.promoFullMonthly)} mensuales durante los dos primeros meses al elegir el pago completo al inicio de cada periodo acordado.`,
      bullets: [
        'Aplicable durante los dos primeros meses.',
        'Pago completo del periodo mensual al inicio, según el acuerdo comercial.',
      ],
      cta: 'Elegir pago completo',
    },
    {
      id: 'dividido',
      label: 'Pago dividido',
      monthly: PRICES.promoSplitMonthly,
      summary: `${formatCOP(PRICES.promoSplitMonthly)} mensuales durante los dos primeros meses (50 % al inicio: ${formatCOP(half(PRICES.promoSplitMonthly))} y 50 % al final: ${formatCOP(half(PRICES.promoSplitMonthly))})`,
      message:
        'Prefieres dividir el pago: comienza con el 50 % y completa el otro 50 % al finalizar el periodo acordado.',
      bullets: ['Aplicable durante los dos primeros meses.'],
      split: [
        { label: '50 % al inicio', amount: half(PRICES.promoSplitMonthly) },
        { label: '50 % al final', amount: half(PRICES.promoSplitMonthly) },
      ],
      cta: 'Elegir pago dividido',
    },
  ],
}

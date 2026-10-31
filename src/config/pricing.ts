// ─────────────────────────────────────────────────────────────
// SERVICIOS, PRESUPUESTO Y PROMOCIÓN
//
// Los precios NO se muestran en la página: todo se maneja como presupuesto
// personalizado. Los valores acordados se conservan abajo solo como
// referencia interna para el equipo (no se importan en ningún componente).
// ─────────────────────────────────────────────────────────────

/** Referencia interna en COP. No se muestra en la página. */
export const INTERNAL_REFERENCE_PRICES = {
  marketingMonthly: 1_600_000,
  promoFullMonthly: 1_200_000, // pago completo al inicio, 2 primeros meses
  promoSplitMonthly: 1_600_000, // pago dividido 50/50, 2 primeros meses
  webProject: 600_000,
  desktopApp: 2_400_000,
}

export type ServiceIcon = 'marketing' | 'web' | 'software' | 'accounting'

export interface Service {
  id: 'marketing' | 'web' | 'software' | 'accounting'
  icon: ServiceIcon
  title: string
  description: string
  /** Texto del recuadro de inversión (sin montos) */
  quote: string
  quoteNote: string
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
    quote: 'Presupuesto personalizado',
    quoteNote: 'según el alcance de tu marca',
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
      'El presupuesto para anuncios pagados no está incluido.',
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
    quote: 'Presupuesto por proyecto',
    quoteNote: 'según las secciones y el alcance',
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
    quote: 'Presupuesto según el alcance',
    quoteNote: 'de la aplicación de escritorio acordada',
    highlights: ['Aplicación de escritorio conforme al alcance funcional acordado'],
    conditions: [
      'Cada solución se presupuesta según su alcance funcional; no existe un valor universal para cualquier programa.',
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
    quote: 'Consulta con nosotros',
    quoteNote: 'conócelo en una demostración',
    highlights: ['Solución tecnológica propia de ARAM', 'Enfoque de almacenamiento local'],
    conditions: ['Conoce el programa y sus condiciones en una demostración.'],
    cta: 'Solicitar una demostración',
    interest: 'una demostración del programa de contabilidad',
  },
]

/** Opciones del solicitador de presupuesto y del formulario de contacto. */
export const budgetOptions = [
  {
    value: 'marketing',
    label: 'Marketing y redes sociales',
    description: 'Estrategia, contenido y presencia digital',
    interest: 'el servicio de marketing y manejo de redes sociales',
  },
  {
    value: 'web',
    label: 'Página web frontend',
    description: 'Diseño responsive para presentar tu negocio',
    interest: 'el diseño y desarrollo de una página web frontend',
  },
  {
    value: 'software',
    label: 'Aplicación de escritorio',
    description: 'Software a la medida de tu proceso',
    interest: 'el desarrollo de una aplicación de escritorio',
  },
  {
    value: 'accounting',
    label: 'Programa de contabilidad',
    description: 'Solicita una demostración',
    interest: 'una demostración del programa de contabilidad',
  },
  {
    value: 'other',
    label: 'Otro servicio',
    description: 'Cuéntanos qué necesitas',
    interest: 'otro servicio de ARAM',
  },
]

export type PromoModeId = 'completo' | 'dividido'

export interface PromoMode {
  id: PromoModeId
  label: string
  badge?: string
  headline: string
  /** Descripción breve (sin montos) para mensajes y formularios */
  summary: string
  message: string
  bullets: string[]
  split?: { label: string; value: string }[]
  cta: string
}

export const promo = {
  name: 'Promoción de marketing: primeros dos meses',
  title: 'Tu marca puede empezar a crecer hoy.',
  subtitle:
    'Elige la modalidad de pago que mejor se adapte a tu negocio y comienza a trabajar con ARAM.',
  note: 'Promoción válida durante los dos primeros meses de servicio. Las tarifas se informan al solicitar el presupuesto. El alcance del trabajo, las fechas de pago y las condiciones posteriores deben quedar establecidos en la propuesta comercial.',
  modes: <PromoMode[]>[
    {
      id: 'completo',
      label: 'Pago completo al inicio',
      badge: 'MEJOR PRECIO',
      headline: 'Tarifa especial',
      summary:
        'tarifa especial durante los dos primeros meses, con pago completo de cada periodo mensual al inicio',
      message:
        'Obtén una tarifa especial durante los dos primeros meses al elegir el pago completo al inicio de cada periodo acordado.',
      bullets: [
        'Aplicable durante los dos primeros meses.',
        'Pago completo del periodo mensual al inicio, según el acuerdo comercial.',
      ],
      cta: 'Elegir pago completo',
    },
    {
      id: 'dividido',
      label: 'Pago dividido',
      headline: '50 % + 50 %',
      summary:
        'durante los dos primeros meses, con 50 % al inicio y 50 % al final de cada periodo acordado',
      message:
        'Prefieres dividir el pago: comienza con el 50 % y completa el otro 50 % al finalizar el periodo acordado.',
      bullets: ['Aplicable durante los dos primeros meses.'],
      split: [
        { label: 'Al inicio', value: '50 %' },
        { label: 'Al final', value: '50 %' },
      ],
      cta: 'Elegir pago dividido',
    },
  ],
}

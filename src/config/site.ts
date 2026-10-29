// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN GENERAL DE ARAM
// Aquí se centralizan la marca, los contactos y la navegación.
// ─────────────────────────────────────────────────────────────

/** Resuelve la ruta de un recurso dentro de /public (funciona con cualquier base). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const brand = {
  name: 'ARAM',
  shortDescription:
    'Marketing, publicidad, diseño web y soluciones tecnológicas para empresas y emprendimientos.',
  metaDescription:
    'ARAM ofrece servicios de marketing digital, gestión de redes sociales, diseño web y desarrollo de software para empresas y emprendimientos.',
  // Para cambiar el logotipo: reemplaza estos archivos en /public/images/brand/
  logo: {
    icon: 'images/brand/aram-icon.png', // icono cuadrado (barra de navegación)
    wordmark: 'images/brand/aram-logo-dark.jpg', // logotipo completo sobre fondo oscuro (pie de página)
  },
}

/** Paleta (referencia: los valores reales viven como variables CSS en src/styles.css). */
export const colors = {
  brand: '#2557e8',
  navy: '#0b1f4d',
  sky: '#eaf2ff',
  gray: '#64748b',
}

export interface Partner {
  id: 'luis' | 'santiago'
  name: string
  firstName: string
  role: string
  /** Número tal como se muestra al visitante */
  phoneDisplay: string
  /** Número en formato internacional, solo dígitos (para wa.me) */
  phoneDigits: string
  buttonLabel: string
  greeting: string
}

export const partners: Partner[] = [
  {
    id: 'luis',
    name: 'Luis Ferrer',
    firstName: 'Luis',
    role: 'Socio de ARAM',
    phoneDisplay: '+57 313 694 3159',
    phoneDigits: '573136943159',
    buttonLabel: 'Hablar con Luis',
    greeting: 'Hola, Luis. Conocí ARAM y me gustaría recibir información sobre sus servicios.',
  },
  {
    id: 'santiago',
    name: 'Santiago Berrio',
    firstName: 'Santiago',
    role: 'Socio de ARAM',
    phoneDisplay: '+54 9 11 2625-5247',
    phoneDigits: '5491126255247',
    buttonLabel: 'Hablar con Santiago',
    greeting: 'Hola, Santiago. Conocí ARAM y me gustaría recibir información sobre sus servicios.',
  },
]

export const navLinks = [
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'clientes', label: 'Clientes' },
  { id: 'portafolio', label: 'Portafolio' },
  { id: 'estadisticas', label: 'Métricas' },
  { id: 'contabilidad', label: 'Contabilidad' },
  { id: 'precios', label: 'Precios' },
  { id: 'contacto', label: 'Contacto' },
]

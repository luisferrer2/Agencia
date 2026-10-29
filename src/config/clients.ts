// ─────────────────────────────────────────────────────────────
// CLIENTES, PORTAFOLIO Y ESTADÍSTICAS
//
// Para AÑADIR un trabajo publicitario:
//   1. Copia la imagen en /public/images/portfolio/
//   2. Añade un objeto en `portfolio` con su clientId, ancho y alto reales.
//
// Para AÑADIR capturas de estadísticas:
//   1. Copia la imagen en /public/images/analytics/
//   2. Añade un objeto en `analytics`. Si conoces la cuenta, usa su clientId;
//      si no, déjalo en `null` y se mostrará como ejemplo sin asignar.
// ─────────────────────────────────────────────────────────────

export interface Client {
  id: string
  name: string
  instagram: string // usuario sin @
  url: string
  /** Solo si está confirmada */
  location?: string
}

export const clients: Client[] = [
  {
    id: 'cbc',
    name: 'CBC Farmacia y Bioquímica',
    instagram: 'cbc.farmaciaybioquimica',
    url: 'https://www.instagram.com/cbc.farmaciaybioquimica/',
    location: 'Argentina',
  },
  {
    id: 'nuevoespaciofyb',
    name: 'NuevoEspacioFYB',
    instagram: 'nuevoespaciofyb',
    url: 'https://www.instagram.com/nuevoespaciofyb/',
  },
  {
    id: 'perezhok',
    name: 'PerezHok',
    instagram: 'perezhok',
    url: 'https://www.instagram.com/perezhok/',
  },
]

export interface PortfolioItem {
  id: string
  /** id del cliente; null = portafolio general sin clasificar */
  clientId: string | null
  src: string
  width: number
  height: number
  title: string
  alt: string
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'nef-noche-lapices',
    clientId: 'nuevoespaciofyb',
    src: 'images/portfolio/nuevoespaciofyb-noche-de-los-lapices.jpg',
    width: 864,
    height: 1138,
    title: 'A 50 años de La Noche de los Lápices',
    alt: 'Pieza conmemorativa «A 50 años de La Noche de los Lápices, 16 de septiembre de 1976», con retratos en blanco y negro y los logotipos de Nuevo Espacio y CEFyB.',
  },
  {
    id: 'nef-sorteo-black-uba',
    clientId: 'nuevoespaciofyb',
    src: 'images/portfolio/nuevoespaciofyb-sorteo-black-uba.jpg',
    width: 738,
    height: 854,
    title: 'Sorteo Black UBA',
    alt: 'Pieza de sorteo de un buzo a elección para estudiantes de Farmacia y Bioquímica, con dos jóvenes vistiendo buzos UBA y los logotipos de Nuevo Espacio, CEFyB y Black UBA.',
  },
  {
    id: 'ph-mantequita',
    clientId: 'perezhok',
    src: 'images/portfolio/perezhok-la-mantequita.jpg',
    width: 738,
    height: 888,
    title: 'La Mantequita con papas',
    alt: 'Pieza promocional de Pérez·H de martes a jueves: hamburguesa doble con queso La Mantequita con papas sobre fondo azul.',
  },
  {
    id: 'ph-2-cheeseburger',
    clientId: 'perezhok',
    src: 'images/portfolio/perezhok-2-cheeseburger.jpg',
    width: 738,
    height: 897,
    title: '2 cheeseburger con papas',
    alt: 'Pieza promocional de Pérez·H para viernes y sábados de 3 a 6 a. m.: dos cheeseburger con papas, con una hamburguesa sostenida entre las manos.',
  },
]

export interface AnalyticsItem {
  id: string
  /** id del cliente; null = ejemplo con cuenta sin asignar */
  clientId: string | null
  src: string
  width: number
  height: number
  title: string
  platform: string
  period: string
  indicators: string[]
  alt: string
}

export const analytics: AnalyticsItem[] = [
  {
    id: 'ig-panel-reproducciones',
    clientId: null,
    src: 'images/analytics/instagram-panel-reproducciones.jpg',
    width: 738,
    height: 1600,
    title: 'Panel profesional: reproducciones y espectadores',
    platform: 'Instagram',
    period: 'Últimos 30 días (29 sept – 28 oct)',
    indicators: ['Reproducciones', 'Espectadores', 'Visualizaciones por tipo de contenido'],
    alt: 'Captura del panel profesional de Instagram, pestaña Rendimiento: reproducciones, espectadores y gráfica diaria de los últimos 30 días, con visualizaciones por tipo de contenido.',
  },
  {
    id: 'ig-panel-visualizaciones',
    clientId: null,
    src: 'images/analytics/instagram-panel-visualizaciones.jpg',
    width: 738,
    height: 1600,
    title: 'Panel profesional: visualizaciones de seguidores y no seguidores',
    platform: 'Instagram',
    period: 'Últimos 30 días (29 sept – 28 oct)',
    indicators: [
      'Visualizaciones de seguidores',
      'Visualizaciones de no seguidores',
      'Visualizaciones por tipo de contenido',
    ],
    alt: 'Captura del panel profesional de Instagram, pestaña Rendimiento: visualizaciones de seguidores y de no seguidores, gráfica diaria de los últimos 30 días y visualizaciones por tipo de contenido.',
  },
]

/** Etiqueta de las capturas cuya cuenta todavía no está asignada. */
export const UNASSIGNED_ANALYTICS_LABEL = 'Ejemplos de paneles de estadísticas'

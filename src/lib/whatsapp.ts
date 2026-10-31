import { contactEmail } from '../config/site'
import type { Partner } from '../config/site'

/** Enlace de WhatsApp con mensaje preparado. */
export const whatsappLink = (partner: Partner, message?: string) => {
  const base = `https://wa.me/${partner.phoneDigits}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Enlace simple a la conversación con un socio (con saludo inicial). */
export const whatsappChatLink = (partner: Partner) => whatsappLink(partner, partner.greeting)

/** Enlace de correo con el mensaje preparado (saludo genérico al equipo). */
export const mailtoLink = (message: string, subject = 'Consulta a ARAM') => {
  const body = message.replace(/^Hola, [^.\n]+\./, 'Hola, equipo de ARAM.')
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

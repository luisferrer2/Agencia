import type { Partner } from '../config/site'

/** Enlace de WhatsApp con mensaje preparado. */
export const whatsappLink = (partner: Partner, message?: string) => {
  const base = `https://wa.me/${partner.phoneDigits}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Enlace simple (sin mensaje) a la conversación con un socio. */
export const whatsappChatLink = (partner: Partner) => whatsappLink(partner, partner.greeting)

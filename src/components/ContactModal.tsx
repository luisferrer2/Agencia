import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { ExternalLink, Mail, X } from 'lucide-react'
import { partners } from '../config/site'
import type { Partner } from '../config/site'
import { mailtoLink, whatsappLink } from '../lib/whatsapp'
import { useDialog } from '../lib/hooks'
import { WhatsAppIcon } from './ui'

export interface ContactRequest {
  title: string
  intro?: string
  /** Muestra el campo opcional «Nombre de tu negocio». */
  askBusiness?: boolean
  /** Valor inicial del campo de negocio */
  business?: string
  /** Construye el mensaje a partir del socio elegido y del negocio introducido. */
  build: (ctx: { partner: Partner; business: string }) => string
}

interface ContactContextValue {
  openContact: (req: ContactRequest) => void
}

const ContactContext = createContext<ContactContextValue | null>(null)

export function useContact() {
  const ctx = useContext(ContactContext)
  if (!ctx) throw new Error('useContact debe usarse dentro de ContactProvider')
  return ctx
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ id: number; request: ContactRequest } | null>(null)
  const openContact = useCallback(
    (req: ContactRequest) => setState((s) => ({ id: (s?.id ?? 0) + 1, request: req })),
    [],
  )
  const close = useCallback(() => setState(null), [])
  const value = useMemo(() => ({ openContact }), [openContact])

  return (
    <ContactContext.Provider value={value}>
      {children}
      {state && <ContactDialog key={state.id} request={state.request} onClose={close} />}
    </ContactContext.Provider>
  )
}

function ContactDialog({ request, onClose }: { request: ContactRequest; onClose: () => void }) {
  const [partnerId, setPartnerId] = useState<Partner['id'] | null>(null)
  const [business, setBusiness] = useState(request.business ?? '')
  const [message, setMessage] = useState('')
  const [edited, setEdited] = useState(false)
  const ref = useDialog(true, onClose)

  const partner = partners.find((p) => p.id === partnerId) ?? null

  // El mensaje se regenera al cambiar de socio o de negocio, salvo que la persona lo haya editado a mano.
  useEffect(() => {
    if (edited) return
    const base = partner ?? partners[0]
    setMessage(request.build({ partner: base, business: business.trim() }))
  }, [partner, business, edited, request])

  return (
    <div className="overlay" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
        ref={ref}
      >
        <button className="icon-btn dialog-close" onClick={onClose} aria-label="Cerrar">
          <X size={20} />
        </button>
        <h3 id="contact-dialog-title">{request.title}</h3>
        <p className="muted">
          {request.intro ??
            'Elige con quién quieres hablar. Podrás revisar y editar el mensaje antes de abrir WhatsApp o enviarlo por correo.'}
        </p>

        <fieldset className="partner-choice">
          <legend>¿Con quién quieres hablar?</legend>
          {partners.map((p) => (
            <label key={p.id} className={`partner-option ${partnerId === p.id ? 'is-selected' : ''}`}>
              <input
                type="radio"
                name="partner"
                value={p.id}
                checked={partnerId === p.id}
                onChange={() => setPartnerId(p.id)}
              />
              <span className="avatar" aria-hidden="true">
                {p.firstName[0]}
              </span>
              <span>
                <strong>{p.name}</strong>
                <small>{p.phoneDisplay}</small>
              </span>
            </label>
          ))}
        </fieldset>

        {request.askBusiness && (
          <label className="field">
            <span>Nombre de tu negocio (opcional)</span>
            <input
              type="text"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              placeholder="Ej.: Mi Negocio"
              autoComplete="organization"
            />
          </label>
        )}

        <label className="field">
          <span>Mensaje (puedes editarlo)</span>
          <textarea
            rows={7}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              setEdited(true)
            }}
          />
        </label>

        <div className="dialog-actions">
          {partner ? (
            <a
              className="btn btn-whatsapp"
              href={whatsappLink(partner, message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.setTimeout(onClose, 300)}
            >
              <WhatsAppIcon /> Abrir WhatsApp con {partner.firstName} <ExternalLink size={16} />
            </a>
          ) : (
            <button className="btn btn-whatsapp" disabled>
              <WhatsAppIcon /> Elige un socio para continuar
            </button>
          )}
          <a className="btn btn-outline" href={mailtoLink(message)}>
            <Mail size={16} aria-hidden="true" /> Enviar por correo
          </a>
          <button className="btn btn-ghost" onClick={onClose}>
            Cancelar
          </button>
        </div>
        <p className="tiny muted">
          No se realiza ningún cobro ni contratación automática: solo se abre una conversación de WhatsApp.
        </p>
      </div>
    </div>
  )
}

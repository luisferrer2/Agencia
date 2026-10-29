import { useState } from 'react'
import type { FormEvent } from 'react'
import { ExternalLink } from 'lucide-react'
import { partners } from '../config/site'
import { formatCOP, promo } from '../config/pricing'
import type { PromoModeId } from '../config/pricing'
import { whatsappChatLink } from '../lib/whatsapp'
import { useContact } from './ContactModal'
import { Reveal, SectionHeader, WhatsAppIcon } from './ui'

const serviceOptions = [
  { value: 'marketing', label: 'Marketing y redes sociales' },
  { value: 'web', label: 'Página web frontend' },
  { value: 'software', label: 'Aplicación de escritorio' },
  { value: 'accounting', label: 'Programa de contabilidad' },
  { value: 'other', label: 'Otro servicio' },
]

interface FormState {
  name: string
  company: string
  service: string
  description: string
  phone: string
  payment: PromoModeId | ''
}

const empty: FormState = { name: '', company: '', service: '', description: '', phone: '', payment: '' }

type Errors = Partial<Record<keyof FormState, string>>

function validate(f: FormState): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = 'Escribe tu nombre.'
  if (f.company.trim().length < 2) e.company = 'Escribe el nombre de tu empresa o negocio.'
  if (!f.service) e.service = 'Selecciona un servicio de interés.'
  if (f.description.trim().length < 10) e.description = 'Cuéntanos brevemente qué necesitas (mínimo 10 caracteres).'
  const digits = f.phone.replace(/\D/g, '')
  if (digits.length < 7 || digits.length > 15) e.phone = 'Escribe un número de contacto válido (7 a 15 dígitos).'
  if (f.service === 'marketing' && !f.payment) e.payment = 'Elige la modalidad de pago preferida.'
  return e
}

export function Contact() {
  const { openContact } = useContact()
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Errors>({})

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value, ...(key === 'service' && value !== 'marketing' ? { payment: '' as const } : {}) }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    const serviceLabel = serviceOptions.find((s) => s.value === form.service)!.label
    const mode = promo.modes.find((m) => m.id === form.payment)

    openContact({
      title: 'Revisa tu mensaje antes de enviarlo',
      intro: 'Elige con quién quieres hablar. El mensaje se genera con los datos del formulario y puedes editarlo.',
      build: ({ partner }) =>
        [
          `Hola, ${partner.firstName}. Conocí ARAM y me gustaría solicitar una cotización.`,
          '',
          `Nombre: ${form.name.trim()}`,
          `Empresa: ${form.company.trim()}`,
          `Servicio de interés: ${serviceLabel}`,
          mode ? `Modalidad de pago preferida: ${mode.label} — ${mode.summary}` : null,
          `Descripción del proyecto: ${form.description.trim()}`,
          `Número de contacto: ${form.phone.trim()}`,
        ]
          .filter((line): line is string => line !== null)
          .join('\n'),
    })
  }

  const err = (k: keyof FormState) => (errors[k] ? `err-${k}` : undefined)

  return (
    <section id="contacto" className="section" aria-labelledby="contacto-title">
      <div className="container">
        <SectionHeader
          titleId="contacto-title"
          eyebrow="Contacto"
          title="Hablemos del crecimiento de tu negocio."
          subtitle="Cuéntanos qué necesita tu empresa y conversemos sobre una solución adaptada a tus objetivos."
        />

        <div className="grid-2 partners">
          {partners.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <article className="card partner-card">
                <span className="avatar large" aria-hidden="true">
                  {p.firstName[0]}
                </span>
                <h3>{p.name}</h3>
                <p className="muted">{p.role}</p>
                <p className="phone">{p.phoneDisplay}</p>
                <a
                  className="btn btn-whatsapp btn-block"
                  href={whatsappChatLink(p)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> {p.buttonLabel} <ExternalLink size={15} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <form className="card quote-form" onSubmit={onSubmit} noValidate aria-labelledby="form-title">
            <h3 id="form-title">Solicita una cotización</h3>
            <p className="muted">
              Completa el formulario y revisa el mensaje antes de enviarlo por WhatsApp. No se guardan datos ni se
              envían por correo.
            </p>

            <div className="form-grid">
              <label className="field">
                <span>Nombre del contacto *</span>
                <input
                  id="f-name"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={err('name')}
                />
                {errors.name && <em id="err-name" className="error">{errors.name}</em>}
              </label>

              <label className="field">
                <span>Nombre de la empresa *</span>
                <input
                  id="f-company"
                  value={form.company}
                  onChange={(e) => set('company', e.target.value)}
                  autoComplete="organization"
                  aria-invalid={!!errors.company}
                  aria-describedby={err('company')}
                />
                {errors.company && <em id="err-company" className="error">{errors.company}</em>}
              </label>

              <label className="field">
                <span>Servicio de interés *</span>
                <select
                  id="f-service"
                  value={form.service}
                  onChange={(e) => set('service', e.target.value)}
                  aria-invalid={!!errors.service}
                  aria-describedby={err('service')}
                >
                  <option value="">Selecciona una opción</option>
                  {serviceOptions.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                {errors.service && <em id="err-service" className="error">{errors.service}</em>}
              </label>

              <label className="field">
                <span>Número de contacto *</span>
                <input
                  id="f-phone"
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  autoComplete="tel"
                  placeholder="Ej.: +57 300 000 0000"
                  aria-invalid={!!errors.phone}
                  aria-describedby={err('phone')}
                />
                {errors.phone && <em id="err-phone" className="error">{errors.phone}</em>}
              </label>
            </div>

            {form.service === 'marketing' && (
              <fieldset className="payment-choice" aria-describedby={err('payment')}>
                <legend>Modalidad de pago preferida *</legend>
                {promo.modes.map((m) => (
                  <label key={m.id} className={`payment-option ${form.payment === m.id ? 'is-selected' : ''}`}>
                    <input
                      id={m.id === 'completo' ? 'f-payment' : undefined}
                      type="radio"
                      name="payment"
                      value={m.id}
                      checked={form.payment === m.id}
                      onChange={() => set('payment', m.id)}
                    />
                    <span>
                      <strong>{m.label}</strong>
                      <small>
                        {formatCOP(m.monthly)} mensuales durante los dos primeros meses
                        {m.split ? `, con 50 % al inicio y 50 % al final.` : '.'}
                      </small>
                    </span>
                  </label>
                ))}
                {errors.payment && <em id="err-payment" className="error">{errors.payment}</em>}
              </fieldset>
            )}

            <label className="field">
              <span>Descripción del proyecto *</span>
              <textarea
                id="f-description"
                rows={4}
                value={form.description}
                onChange={(e) => set('description', e.target.value)}
                aria-invalid={!!errors.description}
                aria-describedby={err('description')}
              />
              {errors.description && <em id="err-description" className="error">{errors.description}</em>}
            </label>

            <button type="submit" className="btn btn-primary">
              Continuar y elegir con quién hablar
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

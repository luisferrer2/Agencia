import { useState } from 'react'
import { Check, Mail, Sparkles } from 'lucide-react'
import { budgetOptions, promo } from '../config/pricing'
import type { PromoMode, PromoModeId } from '../config/pricing'
import { contactEmail, partners } from '../config/site'
import { whatsappChatLink } from '../lib/whatsapp'
import { useContact } from './ContactModal'
import { Reveal, SectionHeader, WhatsAppIcon } from './ui'

const benefits = [
  'Propuesta a la medida de tu negocio.',
  'Alcance y condiciones definidos en la propuesta comercial.',
  'Atención directa de los socios de ARAM.',
  'No se realiza ningún cobro automático: solo abres una conversación.',
]

export function Budget() {
  const { openContact } = useContact()
  const [service, setService] = useState('marketing')
  const [payment, setPayment] = useState<PromoModeId | ''>('')

  const option = budgetOptions.find((o) => o.value === service)!
  const mode = promo.modes.find((m) => m.id === payment)

  const next = () =>
    openContact({
      title: 'Solicitar presupuesto',
      askBusiness: true,
      build: ({ partner, business }) =>
        [
          `Hola, ${partner.firstName}. Conocí ARAM y me gustaría solicitar un presupuesto para ${option.interest}.`,
          service === 'marketing' && mode
            ? `Modalidad de pago de la promoción: ${mode.label} (${mode.summary}).`
            : null,
          business ? `Negocio: ${business}.` : null,
        ]
          .filter((l): l is string => l !== null)
          .join('\n'),
    })

  const choose = (m: PromoMode) =>
    openContact({
      title: `${promo.name} — ${m.label}`,
      askBusiness: true,
      build: ({ partner, business }) =>
        [
          `Hola, ${partner.firstName}. Conocí ARAM y me interesa la «${promo.name}».`,
          `Modalidad elegida: ${m.label}.`,
          `Condiciones: ${m.summary}.`,
          'Me gustaría recibir el presupuesto con la tarifa correspondiente.',
          business ? `Negocio: ${business}.` : '',
        ]
          .filter(Boolean)
          .join('\n'),
    })

  return (
    <section id="presupuesto" className="section section-tint" aria-labelledby="presupuesto-title">
      <div className="container">
        <SectionHeader
          titleId="presupuesto-title"
          eyebrow="Presupuesto"
          title="Cada proyecto es distinto. Cotizamos a tu medida."
          subtitle="Elige el servicio que te interesa y cuéntanos tu necesidad: preparamos un presupuesto personalizado, sin compromiso de contratación automática."
        />

        <Reveal className="budget-wrap">
          <div className="card budget-card">
            <h3>¿Qué servicio te interesa?</h3>

            <fieldset className="payment-choice">
              <legend className="sr-only">Servicio de interés</legend>
              {budgetOptions.map((o) => (
                <label key={o.value} className={`payment-option ${service === o.value ? 'is-selected' : ''}`}>
                  <input
                    type="radio"
                    name="budget-service"
                    value={o.value}
                    checked={service === o.value}
                    onChange={() => {
                      setService(o.value)
                      if (o.value !== 'marketing') setPayment('')
                    }}
                  />
                  <span>
                    <strong>{o.label}</strong>
                    <small>{o.description}</small>
                  </span>
                </label>
              ))}
            </fieldset>

            {service === 'marketing' && (
              <fieldset className="payment-choice budget-subgroup">
                <legend>Modalidad de pago de la promoción (opcional)</legend>
                {promo.modes.map((m) => (
                  <label key={m.id} className={`payment-option ${payment === m.id ? 'is-selected' : ''}`}>
                    <input
                      type="radio"
                      name="budget-payment"
                      value={m.id}
                      checked={payment === m.id}
                      onChange={() => setPayment(m.id)}
                    />
                    <span>
                      <strong>
                        {m.label} {m.badge && <em className="mini-tag">{m.badge}</em>}
                      </strong>
                      <small>{m.message}</small>
                    </span>
                  </label>
                ))}
              </fieldset>
            )}

            <button className="btn btn-dark btn-block" onClick={next}>
              Siguiente
            </button>

            <ul className="benefits">
              {benefits.map((b) => (
                <li key={b}>
                  <Check size={16} aria-hidden="true" /> {b}
                </li>
              ))}
            </ul>

            <div className="help-line">
              <p>¿Necesitas ayuda? Escríbenos</p>
              <div className="help-links">
                {partners.map((p) => (
                  <a key={p.id} href={whatsappChatLink(p)} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon size={15} /> {p.firstName} · {p.phoneDisplay}
                  </a>
                ))}
                <a href={`mailto:${contactEmail}`}>
                  <Mail size={15} aria-hidden="true" /> {contactEmail}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Promoción ─────────────────────────────── */}
        <div id="promo" className="promo">
          <Reveal className="promo-head">
            <p className="eyebrow on-dark">Promoción especial de marketing</p>
            <h2>{promo.title}</h2>
            <p className="lead">{promo.subtitle}</p>
          </Reveal>

          <div className="promo-cards">
            {promo.modes.map((m, i) => (
              <Reveal key={m.id} delay={i * 100}>
                <article className={`promo-card ${m.badge ? 'is-best' : ''}`}>
                  {m.badge && <span className="best-tag">{m.badge}</span>}
                  <h3>{m.label}</h3>
                  <p className="promo-price is-text">
                    <Sparkles size={22} aria-hidden="true" /> {m.headline}
                  </p>
                  <p className="promo-period">Durante los dos primeros meses</p>

                  {m.split && (
                    <div className="split">
                      {m.split.map((s) => (
                        <div key={s.label}>
                          <small>{s.label}</small>
                          <strong>{s.value}</strong>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="promo-message">{m.message}</p>
                  <ul className="check-list small">
                    {m.bullets.map((b) => (
                      <li key={b}>
                        <Check size={15} aria-hidden="true" /> {b}
                      </li>
                    ))}
                  </ul>
                  <button className={`btn ${m.badge ? 'btn-primary' : 'btn-white'} btn-block`} onClick={() => choose(m)}>
                    {m.cta}
                  </button>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="promo-note">{promo.note}</p>
        </div>
      </div>
    </section>
  )
}

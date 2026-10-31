import { Check, Sparkles } from 'lucide-react'
import { PRICES, PROMO_MONTHS, formatCOP, promo, services } from '../config/pricing'
import type { PromoMode } from '../config/pricing'
import { useContact } from './ContactModal'
import { Reveal, SectionHeader } from './ui'

export function Pricing() {
  const { openContact } = useContact()

  const choose = (mode: PromoMode) =>
    openContact({
      title: `${promo.name} — ${mode.label}`,
      askBusiness: true,
      build: ({ partner, business }) =>
        [
          `Hola, ${partner.firstName}. Conocí ARAM y me interesa la «${promo.name}».`,
          `Modalidad elegida: ${mode.label}.`,
          `Precio: ${mode.summary}.`,
          business ? `Negocio: ${business}.` : '',
        ]
          .filter(Boolean)
          .join('\n'),
    })

  const rows = [
    {
      id: 'marketing',
      name: 'Marketing y redes sociales',
      price: formatCOP(PRICES.marketingMonthly),
      kind: 'Mensual',
      notes: ['Precio de referencia mensual', 'Alcance definido en la propuesta comercial'],
      promo: true,
    },
    {
      id: 'web',
      name: 'Página web frontend',
      price: formatCOP(PRICES.webProject),
      kind: 'Por proyecto',
      notes: ['Incluye dos modificaciones menores', 'Cambios adicionales o importantes se cotizan por separado', 'No incluye backend ni funcionalidades de servidor'],
    },
    {
      id: 'software',
      name: 'Aplicación de escritorio',
      price: formatCOP(PRICES.desktopApp),
      kind: 'Según alcance acordado',
      notes: ['Precio acordado de referencia', 'Funcionalidades adicionales se cotizan por separado', 'No incluye mantenimiento posterior a la entrega'],
    },
    {
      id: 'accounting',
      name: 'Programa de contabilidad',
      price: 'Por definir',
      kind: 'Precio aún no definido',
      notes: ['Conócelo en una demostración'],
    },
  ]

  return (
    <section id="precios" className="section section-tint" aria-labelledby="precios-title">
      <div className="container">
        <SectionHeader
          titleId="precios-title"
          eyebrow="Precios"
          title="Tarifas claras, condiciones visibles"
          subtitle="Valores en pesos colombianos (COP). Diferenciamos los precios mensuales, los precios por proyecto y los valores sujetos al alcance acordado."
        />

        <div className="price-grid">
          {rows.map((r, i) => {
            const svc = services.find((s) => s.id === r.id)!
            return (
              <Reveal key={r.id} delay={i * 70}>
                <article className="card price-card">
                  <p className="price-kind">{r.kind}</p>
                  <h3>{r.name}</h3>
                  <p className={`price-amount ${r.price === 'Por definir' ? 'is-tbd' : ''}`}>{r.price}</p>
                  {r.promo && (
                    <a className="badge badge-promo" href="#promo">
                      <Sparkles size={13} aria-hidden="true" /> Promoción especial en los dos primeros meses
                    </a>
                  )}
                  <ul className="check-list small">
                    {r.notes.map((n) => (
                      <li key={n}>
                        <Check size={15} aria-hidden="true" /> {n}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="btn btn-outline btn-block"
                    onClick={() =>
                      openContact({
                        title: svc.cta,
                        build: ({ partner }) =>
                          `Hola, ${partner.firstName}. Conocí ARAM y me gustaría recibir información sobre ${svc.interest}.`,
                      })
                    }
                  >
                    {r.id === 'accounting' ? 'Solicitar demostración' : svc.cta}
                  </button>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* ── Promoción ─────────────────────────────── */}
        <div id="promo" className="promo">
          <Reveal className="promo-head">
            <p className="eyebrow on-dark">Promoción especial de marketing</p>
            <h2>{promo.title}</h2>
            <p className="lead">{promo.subtitle}</p>
            <p className="promo-ref">{promo.referencePrice}</p>
          </Reveal>

          <div className="promo-cards">
            {promo.modes.map((m, i) => (
              <Reveal key={m.id} delay={i * 100}>
                <article className={`promo-card ${m.badge ? 'is-best' : ''}`}>
                  {m.badge && <span className="best-tag">{m.badge}</span>}
                  <h3>{m.label}</h3>
                  <p className="promo-price">
                    {formatCOP(m.monthly)} <small>mensuales</small>
                  </p>
                  <p className="promo-period">Durante los {PROMO_MONTHS === 2 ? 'dos' : PROMO_MONTHS} primeros meses</p>

                  {m.split && (
                    <div className="split">
                      {m.split.map((s) => (
                        <div key={s.label}>
                          <small>{s.label}</small>
                          <strong>{formatCOP(s.amount)}</strong>
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

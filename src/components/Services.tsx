import { Check, Info } from 'lucide-react'
import { services } from '../config/pricing'
import { useContact } from './ContactModal'
import { iconFor } from './Intro'
import { Reveal, SectionHeader } from './ui'

export function Services() {
  const { openContact } = useContact()

  return (
    <section id="servicios" className="section section-tint" aria-labelledby="servicios-title">
      <div className="container">
        <SectionHeader
          titleId="servicios-title"
          eyebrow="Servicios"
          title="Soluciones para hacer crecer tu negocio"
          subtitle="Estos son nuestros servicios, con sus precios de referencia y las condiciones de cada uno."
        />
        <div className="grid-2 services-grid">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 80}>
              <article className="card service-card" id={`servicio-${s.id}`}>
                <header className="service-head">
                  <span className="icon-tile">{iconFor(s.icon)}</span>
                  <div>
                    <h3>{s.title}</h3>
                    {s.badge && <span className="badge">{s.badge}</span>}
                  </div>
                </header>
                <p>{s.description}</p>

                <div className="price-box">
                  <small>{s.priceKind}</small>
                  <strong>{s.price}</strong>
                  {s.priceUnit && <span>{s.priceUnit}</span>}
                </div>

                <ul className="check-list">
                  {s.highlights.map((h) => (
                    <li key={h}>
                      <Check size={16} aria-hidden="true" /> {h}
                    </li>
                  ))}
                </ul>

                <div className="conditions">
                  <p className="conditions-title">
                    <Info size={15} aria-hidden="true" /> Condiciones
                  </p>
                  <ul>
                    {s.conditions.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() =>
                    openContact({
                      title: s.cta,
                      build: ({ partner }) =>
                        `Hola, ${partner.firstName}. Conocí ARAM y me gustaría recibir información sobre ${s.interest}.`,
                    })
                  }
                >
                  {s.cta}
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

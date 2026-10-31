import { useState } from 'react'
import { Check, HardDrive, Lock, MonitorPlay, ShieldCheck } from 'lucide-react'
import { asset } from '../config/site'
import { accounting } from '../config/content'
import { useContact } from './ContactModal'
import { Lightbox } from './Lightbox'
import { Reveal, SectionHeader } from './ui'

export function Accounting() {
  const { openContact } = useContact()
  const [open, setOpen] = useState<number | null>(null)
  const confirmed = accounting.features.filter((f) => f.confirmed)
  const shots = accounting.screenshots

  const requestDemo = () =>
    openContact({
      title: 'Solicitar una demostración',
      build: ({ partner }) =>
        `Hola, ${partner.firstName}. Conocí ARAM y me gustaría solicitar una demostración del programa de contabilidad y gestión financiera.`,
    })

  return (
    <section id="contabilidad" className="section section-tint" aria-labelledby="contabilidad-title">
      <div className="container">
        <SectionHeader
          titleId="contabilidad-title"
          eyebrow="Programa de contabilidad"
          title={accounting.title}
          subtitle={accounting.subtitle}
        />

        <div className="product-grid">
          <Reveal className="product-visual">
            {shots.length > 0 ? (
              <div className="product-shots">
                {shots.map((s, i) => (
                  <button key={s.src} className="app-window" onClick={() => setOpen(i)} aria-label="Ampliar captura del programa">
                    <span className="app-window-bar">
                      <i /> <i /> <i />
                    </span>
                    <img src={asset(s.src)} alt={s.alt} width={s.width} height={s.height} loading="lazy" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="app-window app-window-empty">
                <span className="app-window-bar">
                  <i /> <i /> <i />
                </span>
                <div className="app-window-body">
                  <MonitorPlay size={40} aria-hidden="true" />
                  <strong>Conoce el programa en acción</strong>
                  <p>Te lo mostramos funcionando en una demostración.</p>
                  <button className="btn btn-primary" onClick={requestDemo}>
                    Solicitar una demostración
                  </button>
                </div>
              </div>
            )}
          </Reveal>

          <Reveal className="product-info" delay={100}>
            <div className="card local-card">
              <span className="icon-tile">
                <HardDrive size={26} />
              </span>
              <h3>{accounting.localStorage.title}</h3>
              <p className="statement">{accounting.mainMessage}</p>
              <p>{accounting.localStorage.text}</p>
              <ul className="check-list">
                {accounting.localStorage.advantages.map((a) => (
                  <li key={a}>
                    <Check size={16} aria-hidden="true" /> {a}
                  </li>
                ))}
              </ul>
              <p className="fine-print left">
                <ShieldCheck size={14} aria-hidden="true" /> {accounting.localStorage.disclaimer}
              </p>
            </div>

            {confirmed.length > 0 && (
              <div className="feature-list">
                {confirmed.map((f) => (
                  <span key={f.title} className="chip-soft">
                    <Check size={14} aria-hidden="true" /> {f.title}
                  </span>
                ))}
              </div>
            )}

            <div className="product-cta">
              <button className="btn btn-primary" onClick={requestDemo}>
                Solicitar una demostración
              </button>
              <span className="muted tiny">
                <Lock size={13} aria-hidden="true" /> Precio por definir
              </span>
            </div>
          </Reveal>
        </div>

        {open !== null && (
          <Lightbox
            images={shots.map((s) => ({ ...s, title: 'Programa de contabilidad ARAM', caption: s.caption }))}
            index={open}
            onIndex={setOpen}
            onClose={() => setOpen(null)}
          />
        )}
      </div>
    </section>
  )
}

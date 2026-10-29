import { useMemo, useState } from 'react'
import { Expand } from 'lucide-react'
import { asset } from '../config/site'
import { UNASSIGNED_ANALYTICS_LABEL, analytics, clients } from '../config/clients'
import { Lightbox } from './Lightbox'
import { Reveal, SectionHeader } from './ui'
import { FILTER_ALL, FILTER_GENERAL } from './Portfolio'

export function Analytics({ filter, onFilter }: { filter: string; onFilter: (f: string) => void }) {
  const [open, setOpen] = useState<number | null>(null)

  const filters = useMemo(() => {
    const list = [{ id: FILTER_ALL, label: 'Todas', count: analytics.length }]
    for (const c of clients) {
      const count = analytics.filter((a) => a.clientId === c.id).length
      if (count > 0) list.push({ id: c.id, label: c.name, count })
    }
    const unassigned = analytics.filter((a) => a.clientId === null).length
    if (unassigned > 0) list.push({ id: FILTER_GENERAL, label: UNASSIGNED_ANALYTICS_LABEL, count: unassigned })
    return list
  }, [])

  const items = analytics.filter((a) =>
    filter === FILTER_ALL ? true : filter === FILTER_GENERAL ? a.clientId === null : a.clientId === filter,
  )
  const accountLabel = (id: string | null) => clients.find((c) => c.id === id)?.name ?? UNASSIGNED_ANALYTICS_LABEL

  return (
    <section id="estadisticas" className="section" aria-labelledby="estadisticas-title">
      <div className="container">
        <SectionHeader
          titleId="estadisticas-title"
          eyebrow="Métricas"
          title="El trabajo creativo también se mide."
          subtitle="Explora las métricas disponibles de nuestras cuentas y conoce los indicadores que muestran su actividad digital."
        />

        {filters.length > 2 && (
          <div className="filters" role="group" aria-label="Filtrar estadísticas por cuenta">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`filter ${filter === f.id ? 'is-active' : ''}`}
                aria-pressed={filter === f.id}
                onClick={() => onFilter(f.id)}
              >
                {f.label} <span>{f.count}</span>
              </button>
            ))}
          </div>
        )}

        <div className="shots" key={filter}>
          {items.map((a, i) => (
            <Reveal key={a.id} delay={i * 80}>
              <article className="card shot-card">
                <header>
                  <span className="badge badge-soft">{a.platform}</span>
                  <h3>{a.title}</h3>
                  <p className="muted tiny">{accountLabel(a.clientId)}</p>
                </header>

                <button className="shot-frame" onClick={() => setOpen(i)} aria-label={`Ampliar captura: ${a.title}`}>
                  <img src={asset(a.src)} alt={a.alt} width={a.width} height={a.height} loading="lazy" decoding="async" />
                  <span className="shot-zoom">
                    <Expand size={16} /> Ampliar
                  </span>
                </button>

                <dl className="shot-meta">
                  <div>
                    <dt>Periodo</dt>
                    <dd>{a.period}</dd>
                  </div>
                  <div>
                    <dt>Indicadores visibles</dt>
                    <dd className="chips">
                      {a.indicators.map((ind) => (
                        <span key={ind} className="chip-soft">
                          {ind}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="fine-print">
          Capturas originales del panel de estadísticas de Instagram. Las cifras corresponden únicamente a lo que muestra
          cada captura y no se atribuyen de forma exclusiva a ARAM.
        </p>

        {open !== null && (
          <Lightbox
            images={items.map((a) => ({
              src: a.src,
              width: a.width,
              height: a.height,
              alt: a.alt,
              title: a.title,
              caption: `${a.platform} · ${a.period}`,
            }))}
            index={open}
            onIndex={setOpen}
            onClose={() => setOpen(null)}
          />
        )}
      </div>
    </section>
  )
}

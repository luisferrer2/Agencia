import { useMemo, useState } from 'react'
import { ZoomIn } from 'lucide-react'
import { asset } from '../config/site'
import { clients, portfolio } from '../config/clients'
import { Lightbox } from './Lightbox'
import { Reveal, SectionHeader } from './ui'

export const FILTER_ALL = 'all'
export const FILTER_GENERAL = 'general'

export function Portfolio({ filter, onFilter }: { filter: string; onFilter: (f: string) => void }) {
  const [open, setOpen] = useState<number | null>(null)

  const filters = useMemo(() => {
    const list = [{ id: FILTER_ALL, label: 'Todos', count: portfolio.length }]
    for (const c of clients) {
      const count = portfolio.filter((p) => p.clientId === c.id).length
      if (count > 0) list.push({ id: c.id, label: c.name, count })
    }
    const general = portfolio.filter((p) => p.clientId === null).length
    if (general > 0) list.push({ id: FILTER_GENERAL, label: 'Portafolio general', count: general })
    return list
  }, [])

  const items = portfolio.filter((p) =>
    filter === FILTER_ALL ? true : filter === FILTER_GENERAL ? p.clientId === null : p.clientId === filter,
  )
  const clientName = (id: string | null) => clients.find((c) => c.id === id)?.name ?? 'Portafolio general'

  return (
    <section id="portafolio" className="section section-tint" aria-labelledby="portafolio-title">
      <div className="container">
        <SectionHeader
          titleId="portafolio-title"
          eyebrow="Portafolio"
          title="Publicidad que comunica con claridad"
          subtitle="Piezas publicitarias reales de los negocios con los que hemos trabajado. Pulsa una imagen para verla ampliada."
        />

        <div className="filters" role="group" aria-label="Filtrar portafolio por cliente">
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

        <div className="gallery" key={filter} style={{ ["--cols" as string]: items.length <= 4 ? 2 : 3 }}>
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 60} className="gallery-cell">
              <button className="gallery-item" onClick={() => setOpen(i)} aria-label={`Ampliar: ${p.title}`}>
                <img
                  src={asset(p.src)}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className="gallery-overlay">
                  <span>
                    <strong>{p.title}</strong>
                    <small>{clientName(p.clientId)}</small>
                  </span>
                  <ZoomIn size={20} aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {open !== null && (
          <Lightbox
            images={items.map((p) => ({
              src: p.src,
              width: p.width,
              height: p.height,
              alt: p.alt,
              title: p.title,
              caption: clientName(p.clientId),
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

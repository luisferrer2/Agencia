import { ArrowUpRight, BarChart3, Images } from 'lucide-react'
import { asset } from '../config/site'
import { analytics, clients, portfolio } from '../config/clients'
import { Reveal, SectionHeader, InstagramIcon } from './ui'

export function Clients({
  onShowWorks,
  onShowStats,
}: {
  onShowWorks: (clientId: string) => void
  onShowStats: (clientId: string) => void
}) {
  return (
    <section id="clientes" className="section" aria-labelledby="clientes-title">
      <div className="container">
        <SectionHeader
          titleId="clientes-title"
          eyebrow="Clientes"
          title="Marcas con las que hemos trabajado."
          subtitle="Conoce algunos de los negocios y organizaciones de la comunidad de la Universidad de Buenos Aires (UBA) cuyos trabajos forman parte de nuestro portafolio."
        />
        <div className="grid-3">
          {clients.map((c, i) => {
            const works = portfolio.filter((p) => p.clientId === c.id)
            const stats = analytics.filter((a) => a.clientId === c.id)
            return (
              <Reveal key={c.id} delay={i * 80}>
                <article className="card client-card">
                  <div className="client-mark" aria-hidden="true">
                    {c.name
                      .split(/\s+/)
                      .filter((w) => w.length > 2)
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join('')
                      .toUpperCase()}
                  </div>
                  <h3>{c.name}</h3>
                  <p className="handle">@{c.instagram}</p>
                  {c.affiliation && <span className="badge badge-soft">{c.affiliation}</span>}
                  {c.location && <p className="muted tiny">{c.location}</p>}

                  <a className="btn btn-outline btn-block" href={c.url} target="_blank" rel="noopener noreferrer">
                    <InstagramIcon /> Visitar perfil <ArrowUpRight size={16} />
                  </a>

                  {works.length > 0 ? (
                    <div className="client-thumbs" aria-label={`Trabajos de ${c.name}`}>
                      {works.slice(0, 3).map((w) => (
                        <button
                          key={w.id}
                          className="thumb"
                          onClick={() => onShowWorks(c.id)}
                          aria-label={`Ver trabajos de ${c.name}: ${w.title}`}
                        >
                          <img src={asset(w.src)} alt="" loading="lazy" width={w.width} height={w.height} />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="client-empty">Los trabajos de esta marca se incorporarán al portafolio.</p>
                  )}

                  <div className="client-links">
                    {works.length > 0 && (
                      <button className="link-btn" onClick={() => onShowWorks(c.id)}>
                        <Images size={16} /> Ver trabajos ({works.length})
                      </button>
                    )}
                    {stats.length > 0 && (
                      <button className="link-btn" onClick={() => onShowStats(c.id)}>
                        <BarChart3 size={16} /> Ver estadísticas
                      </button>
                    )}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
        <p className="fine-print">
          Las marcas mencionadas corresponden a negocios para los que se realizaron trabajos; su aparición no implica un
          respaldo público a ARAM.
        </p>
      </div>
    </section>
  )
}

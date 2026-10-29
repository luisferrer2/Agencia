import { ArrowRight, Code, Megaphone, PenTool, Share2, Sparkles } from 'lucide-react'
import { asset } from '../config/site'
import { hero } from '../config/content'
import { PRICES, formatCOP } from '../config/pricing'
import { portfolio } from '../config/clients'
import { useContact } from './ContactModal'

export function Hero() {
  const { openContact } = useContact()
  // Pieza real del portafolio para la composición (la primera disponible de PerezHok)
  const piece = portfolio.find((p) => p.clientId === 'perezhok') ?? portfolio[0]
  const piece2 = portfolio.find((p) => p.clientId === 'nuevoespaciofyb') ?? portfolio[1]

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="pill">
            <Sparkles size={14} /> Marketing · Publicidad · Tecnología
          </p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="lead">{hero.subtitle}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#servicios">
              Conoce nuestros servicios <ArrowRight size={18} />
            </a>
            <a className="btn btn-outline" href="#portafolio">
              Explora nuestro portafolio
            </a>
            <button
              className="btn btn-ghost"
              onClick={() => openContact({ title: 'Habla con nuestro equipo', build: ({ partner }) => partner.greeting })}
            >
              Habla con nuestro equipo
            </button>
          </div>

          <a className="hero-promo" href="#promo">
            <span className="hero-promo-tag">Promoción de marketing</span>
            <span className="hero-promo-text">
              <strong>{formatCOP(PRICES.promoFullMonthly)} mensuales</strong> durante los dos primeros meses con pago
              completo al inicio
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-card art-browser">
            <div className="art-browser-bar">
              <i /> <i /> <i />
              <span />
            </div>
            <div className="art-browser-body">
              <div className="sk sk-title" />
              <div className="sk sk-line" />
              <div className="sk sk-line short" />
              <div className="sk-row">
                <div className="sk sk-block" />
                <div className="sk sk-block" />
                <div className="sk sk-block" />
              </div>
              <div className="sk sk-btn" />
            </div>
          </div>

          <figure className="art-card art-post art-post-a">
            <img src={asset(piece.src)} alt="" width={piece.width} height={piece.height} />
          </figure>
          <figure className="art-card art-post art-post-b">
            <img src={asset(piece2.src)} alt="" width={piece2.width} height={piece2.height} />
          </figure>

          <div className="art-card art-code">
            <div className="art-code-bar">
              <i /> <i /> <i />
            </div>
            <div className="art-code-body">
              <span style={{ width: '70%' }} />
              <span style={{ width: '45%' }} className="indent" />
              <span style={{ width: '60%' }} className="indent" />
              <span style={{ width: '30%' }} />
              <span style={{ width: '55%' }} className="indent" />
            </div>
          </div>

          <span className="chip chip-1">
            <Share2 size={16} /> Redes sociales
          </span>
          <span className="chip chip-2">
            <Megaphone size={16} /> Publicidad digital
          </span>
          <span className="chip chip-3">
            <PenTool size={16} /> Diseño creativo
          </span>
          <span className="chip chip-4">
            <Code size={16} /> Web y software
          </span>
        </div>
      </div>
    </section>
  )
}

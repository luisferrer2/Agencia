import { Mail } from 'lucide-react'
import { asset, brand, contactEmail, navLinks, partners } from '../config/site'
import { clients } from '../config/clients'
import { services } from '../config/pricing'
import { whatsappChatLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './ui'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src={asset(brand.logo.wordmark)}
            alt={`Logotipo de ${brand.name}`}
            width={230}
            height={113}
            loading="lazy"
          />
          <p>{brand.shortDescription}</p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <h4>Navegación</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4>Servicios</h4>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <a href={`#servicio-${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ul>
          <h4 className="mt">Clientes</h4>
          <ul>
            {clients.map((c) => (
              <li key={c.id}>
                <a href="#clientes">{c.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contacto</h4>
          <ul>
            {partners.map((p) => (
              <li key={p.id}>
                <a href={whatsappChatLink(p)} target="_blank" rel="noopener noreferrer" className="wa-link">
                  <WhatsAppIcon size={16} />
                  <span>
                    {p.name}
                    <small>{p.phoneDisplay}</small>
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contactEmail}`} className="wa-link">
                <Mail size={16} aria-hidden="true" />
                <span>
                  Correo
                  <small>{contactEmail}</small>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

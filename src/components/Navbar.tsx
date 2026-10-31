import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { asset, brand, navLinks } from '../config/site'
import { useActiveSection } from '../lib/hooks'
import { useContact } from './ContactModal'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? 'is-light' : ''}`} href="#inicio" aria-label={`${brand.name} — ir al inicio`}>
      <img src={asset(brand.logo.icon)} alt="" width={40} height={40} />
      <span className="logo-text">{brand.name}</span>
    </a>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(['inicio', ...navLinks.map((l) => l.id)])
  const { openContact } = useContact()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const talk = () =>
    openContact({
      title: 'Habla con nuestro equipo',
      build: ({ partner }) => partner.greeting,
    })

  return (
    <header className={`navbar ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container navbar-inner">
        <Logo />
        <nav id="menu-principal" className={`nav ${open ? 'is-open' : ''}`} aria-label="Navegación principal">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'is-active' : ''}
              aria-current={active === l.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <button
            className="btn btn-primary nav-cta"
            onClick={() => {
              setOpen(false)
              talk()
            }}
          >
            Habla con nosotros
          </button>
        </nav>
        <button
          className="icon-btn nav-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

import { Calculator, Code, LayoutTemplate, Megaphone } from 'lucide-react'
import type { ReactNode } from 'react'
import { intro } from '../config/content'
import { Reveal, SectionHeader } from './ui'

export const iconFor = (name: string, size = 26): ReactNode => {
  switch (name) {
    case 'marketing':
      return <Megaphone size={size} />
    case 'web':
      return <LayoutTemplate size={size} />
    case 'software':
      return <Code size={size} />
    case 'accounting':
      return <Calculator size={size} />
    default:
      return null
  }
}

export function Intro() {
  return (
    <section id="nosotros" className="section" aria-labelledby="nosotros-title">
      <div className="container">
        <SectionHeader titleId="nosotros-title" eyebrow="Nosotros" title={intro.title} subtitle={intro.text} />
        <div className="grid-3">
          {intro.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="card feature-card">
                <span className="icon-tile">{iconFor(c.icon)}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

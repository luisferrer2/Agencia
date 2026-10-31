import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '../config/content'
import { SectionHeader } from './ui'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section section-tint" aria-labelledby="faq-title">
      <div className="container narrow">
        <SectionHeader titleId="faq-title" eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" />
        <div className="accordion">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={f.q} className={`acc-item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span>{f.q}</span>
                    <Plus size={20} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className="acc-panel">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

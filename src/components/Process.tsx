import { process } from '../config/content'
import { Reveal, SectionHeader } from './ui'

export function Process() {
  return (
    <section id="proceso" className="section" aria-labelledby="proceso-title">
      <div className="container">
        <SectionHeader
          titleId="proceso-title"
          eyebrow="Proceso de trabajo"
          title="Así trabajamos contigo"
          subtitle="Cuatro etapas simples, desde la primera conversación hasta la entrega."
        />
        <ol className="steps">
          {process.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <li className="card step">
                <span className="step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

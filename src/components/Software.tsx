import { AppWindow, Check, X } from 'lucide-react'
import { useContact } from './ContactModal'
import { Reveal, SectionHeader } from './ui'

export function Software() {
  const { openContact } = useContact()

  return (
    <section id="software" className="section" aria-labelledby="software-title">
      <div className="container">
        <SectionHeader
          titleId="software-title"
          eyebrow="Desarrollo de software"
          title="Software a la medida de tu proceso"
          subtitle="Transformamos necesidades empresariales en soluciones de software diseñadas para facilitar procesos y responder a necesidades específicas."
        />

        <div className="software-grid">
          <Reveal>
            <article className="card software-card">
              <span className="icon-tile">
                <AppWindow size={26} />
              </span>
              <h3>Aplicación de escritorio</h3>
              <div className="price-box">
                <small>Inversión</small>
                <strong>Presupuesto según el alcance</strong>
                <span>de la aplicación de escritorio acordada</span>
              </div>
              <p>
                El presupuesto se define según el alcance funcional acordado con el cliente. No existe un valor
                universal para cualquier programa: cada solución se cotiza según lo que necesite tu negocio.
              </p>
              <button
                className="btn btn-primary"
                onClick={() =>
                  openContact({
                    title: 'Consultar desarrollo de software',
                    build: ({ partner }) =>
                      `Hola, ${partner.firstName}. Conocí ARAM y me gustaría consultar sobre el desarrollo de una aplicación de escritorio.`,
                  })
                }
              >
                Consultar desarrollo de software
              </button>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <div className="card scope-card">
              <h3>Qué incluye y qué se cotiza aparte</h3>
              <div className="scope-cols">
                <div>
                  <p className="scope-title is-yes">Incluido en el presupuesto acordado</p>
                  <ul className="check-list">
                    <li>
                      <Check size={16} aria-hidden="true" /> Desarrollo de la aplicación de escritorio conforme al alcance
                      funcional acordado
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="scope-title is-no">No incluido</p>
                  <ul className="cross-list">
                    <li>
                      <X size={16} aria-hidden="true" /> Funciones adicionales no acordadas
                    </li>
                    <li>
                      <X size={16} aria-hidden="true" /> Módulos o cambios que amplíen el alcance (se cotizan por
                      separado)
                    </li>
                    <li>
                      <X size={16} aria-hidden="true" /> Mantenimiento posterior a la entrega
                    </li>
                  </ul>
                </div>
              </div>
              <p className="fine-print left">
                No confundir con el servicio de diseño de páginas web frontend, que es un servicio distinto con sus
                propias condiciones.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

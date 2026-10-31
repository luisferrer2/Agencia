import { useCallback, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Clients } from './components/Clients'
import { Portfolio, FILTER_ALL } from './components/Portfolio'
import { Analytics } from './components/Analytics'
import { Accounting } from './components/Accounting'
import { Software } from './components/Software'
import { Budget } from './components/Budget'
import { Process } from './components/Process'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ContactProvider } from './components/ContactModal'

export default function App() {
  const [portfolioFilter, setPortfolioFilter] = useState(FILTER_ALL)
  const [analyticsFilter, setAnalyticsFilter] = useState(FILTER_ALL)

  const goTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <ContactProvider>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Intro />
        <Services />
        <Clients
          onShowWorks={(id) => {
            setPortfolioFilter(id)
            goTo('portafolio')
          }}
          onShowStats={(id) => {
            setAnalyticsFilter(id)
            goTo('estadisticas')
          }}
        />
        <Portfolio filter={portfolioFilter} onFilter={setPortfolioFilter} />
        <Analytics filter={analyticsFilter} onFilter={setAnalyticsFilter} />
        <Accounting />
        <Software />
        <Budget />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </ContactProvider>
  )
}

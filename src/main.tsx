import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.tsx'
import Home from './Home.tsx'
import Services from './Services.tsx'
import Clients from './Clients.tsx'
import Teams from './Teams.tsx'
import Contact from './Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Header/>
    <section id="home" className="scroll-mt-20">
      <Home/>
    </section>
    <section id="services" className="scroll-mt-35">
      <Services/>
    </section>
    <section id="clients" className="scroll-mt-40">
      <Clients/>
    </section>
    <section id="teams" className="scroll-mt-40">
      <Teams/>
    </section>
    <section id="contact" className="scroll-mt-40">
      <Contact/>
    </section>
  </StrictMode>,
)

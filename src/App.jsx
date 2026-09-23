import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Menu from './components/Menu.jsx'
import HowToOrder from './components/HowToOrder.jsx'
import Testimonials from './components/Testimonials.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Footer from './components/Footer.jsx'

import { BUSINESS } from './data.js'

export default function App() {
  const [activeMenu, setActiveMenu] = useState('nasiBox')

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Menu active={activeMenu} onChange={setActiveMenu} />
        <HowToOrder />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer business={BUSINESS} />
    </div>
  )
}

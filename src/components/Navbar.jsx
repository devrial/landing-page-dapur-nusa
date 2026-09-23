import { useState } from 'react'
import { Button } from 'primereact/button'
import { Sidebar } from 'primereact/sidebar'
import { WA_DEFAULT, BUSINESS } from '../data.js'

const LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Cara Pesan', href: '#cara-pesan' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
]

function Brand({ compact = false }) {
  return (
    <a href="#beranda" className={`brand ${compact ? 'brand--compact' : ''}`}>
      <span className="brand__mark">DN</span>
      <span className="brand__text">
        <span className="brand__name">{BUSINESS.name}</span>
        <span className="brand__tag">{BUSINESS.tagline}</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const go = (href) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Brand />

        <nav className="navbar__links" aria-label="Navigasi utama">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={go(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <Button
            label="Pesan via WhatsApp"
            icon="pi pi-whatsapp"
            severity="success"
            rounded
            onClick={() => window.open(WA_DEFAULT, '_blank', 'noopener,noreferrer')}
          />
        </div>

        <button
          className="navbar__burger"
          aria-label="Buka menu navigasi"
          onClick={() => setOpen(true)}
        >
          <i className="pi pi-bars" />
        </button>
      </div>

      <Sidebar visible={open} onHide={() => setOpen(false)} position="right" className="nav-drawer">
        <Brand compact />
        <nav className="nav-drawer__links" aria-label="Navigasi mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={go(l.href)}>
              {l.label}
              <i className="pi pi-angle-right" />
            </a>
          ))}
        </nav>
        <Button
          label="Pesan via WhatsApp"
          icon="pi pi-whatsapp"
          severity="success"
          rounded
          className="nav-drawer__wa w-full"
          onClick={() => {
            setOpen(false)
            window.open(WA_DEFAULT, '_blank', 'noopener,noreferrer')
          }}
        />
        <p className="nav-drawer__meta">
          <i className="pi pi-clock" />
          <span className="nav-drawer__hours">
            {BUSINESS.operationalHours.map((h) => (
              <span key={h.day}>
                {h.day}: {h.time}
              </span>
            ))}
          </span>
        </p>
      </Sidebar>
    </header>
  )
}

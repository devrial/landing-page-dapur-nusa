import { BUSINESS, WA_DEFAULT } from '../data.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="kontak">
      <div className="container footer__grid">
        <div className="footer__col footer__col--brand">
          <div className="brand brand--footer">
            <span className="brand__mark">DN</span>
            <span className="brand__text">
              <span className="brand__name">{BUSINESS.name}</span>
              <span className="brand__tag">{BUSINESS.tagline}</span>
            </span>
          </div>
          <p>{BUSINESS.description}</p>
          <div className="footer__socials">
            <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram Dapur Nusa">
              <i className="pi pi-instagram" />
            </a>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Dapur Nusa">
              <i className="pi pi-whatsapp" />
            </a>
            <a href={`mailto:${BUSINESS.email}`} aria-label="Email Dapur Nusa">
              <i className="pi pi-envelope" />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Kontak</h4>
          <ul>
            <li>
              <i className="pi pi-whatsapp" />
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
                {BUSINESS.phoneDisplay} (WhatsApp)
              </a>
            </li>
            <li>
              <i className="pi pi-instagram" />
              <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer">
                {BUSINESS.instagram}
              </a>
            </li>
            <li>
              <i className="pi pi-envelope" />
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </li>
            <li>
              <i className="pi pi-map-marker" />
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">
                {BUSINESS.address}
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Jam Operasional</h4>
          <ul className="footer__hours">
            {BUSINESS.operationalHours.map((h) => (
              <li key={h.day}>
                <span>{h.day}</span>
                <strong>{h.time}</strong>
              </li>
            ))}
          </ul>
          <h4 className="footer__h4-gap">Navigasi</h4>
          <ul className="footer__nav">
            <li><a href="#menu">Menu &amp; Harga</a></li>
            <li><a href="#layanan">Layanan</a></li>
            <li><a href="#cara-pesan">Cara Pesan</a></li>
            <li><a href="#testimoni">Testimoni</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} {BUSINESS.name}. Dibuat dengan ❤ di Bogor.</span>
          <span>Nasi box · Ayam geprek · Rice bowl · Snack box</span>
        </div>
      </div>
    </footer>
  )
}

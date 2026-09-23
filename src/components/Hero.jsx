import { Button } from 'primereact/button'
import { WA_ORDER, BUSINESS, IMAGES } from '../data.js'

const HIGHLIGHTS = [
  { icon: 'pi pi-sparkles', text: 'Dimasak fresh setiap hari' },
  { icon: 'pi pi-truck', text: 'Antar ke kantor & acara' },
  { icon: 'pi pi-whatsapp', text: 'Pesan gampang lewat WA' },
]

export default function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__badge">
            <i className="pi pi-star-fill" /> Rating {BUSINESS.rating} dari {BUSINESS.ratingCount}+ pelanggan
          </span>

          <h1>
            Masakan rumah hangat, siap antar untuk <em>harian &amp; acara</em> Anda
          </h1>

          <p className="hero__desc">{BUSINESS.description}</p>

          <div className="hero__price">
            <span className="hero__price-label">Harga mulai</span>
            <span className="hero__price-value">
              Rp {BUSINESS.priceFrom.toLocaleString('id-ID')}
              <small> /porsi</small>
            </span>
          </div>

          <div className="hero__actions">
            <a href={WA_ORDER} target="_blank" rel="noopener noreferrer">
              <Button
                label="Pesan via WhatsApp"
                icon="pi pi-whatsapp"
                severity="success"
                size="large"
                raised
              />
            </a>
            <a href="#menu" className="btn-outline">
              Lihat Menu <i className="pi pi-arrow-down" />
            </a>
          </div>

          <ul className="hero__highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h.text}>
                <i className={`pi ${h.icon}`} /> {h.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <img
            className="hero__img-main"
            src={IMAGES.heroMain}
            alt="Aneka masakan rumahan Dapur Nusa"
            loading="eager"
          />
          <img
            className="hero__img-card"
            src={IMAGES.heroSecondary}
            alt="Nasi box Dapur Nusa"
            loading="lazy"
          />
          <div className="hero__float hero__float--delivery">
            <i className="pi pi-truck" />
            <div>
              <strong>Gratis ongkir</strong>
              <span>area Cibinong</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

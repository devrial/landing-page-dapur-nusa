import { Button } from 'primereact/button'
import { WA_ORDER, BUSINESS, IMAGES } from '../data.js'

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
        </div>

        <div className="hero__media">
          <img
            className="hero__img-main"
            src={IMAGES.heroMain}
            alt="Aneka masakan rumahan Dapur Nusa"
            width="1100"
            height="825"
            loading="eager"
            decoding="async"
          />
          <img
            className="hero__img-card"
            src={IMAGES.heroSecondary}
            alt="Nasi box Dapur Nusa"
            width="700"
            height="525"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}

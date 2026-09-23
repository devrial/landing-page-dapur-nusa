import { Card } from 'primereact/card'
import { SERVICES, WA_CATERING } from '../data.js'

export default function Services() {
  return (
    <section className="services section" id="layanan">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Layanan Kami</span>
          <h2 className="section__title">Kami menerima pesanan harian, nasi box &amp; acara</h2>
          <p className="section__subtitle">
            Dari makan siang satu porsi sampai katering 200 box — semuanya bisa diatur lewat WhatsApp.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s) => (
            <Card key={s.title} className="service-card">
              <span className="service-card__icon">
                <i className={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>
                    <i className="pi pi-check-circle" /> {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="services__note">
          <i className="pi pi-info-circle" />
          <p>
            Butuh menu custom atau punya budget tertentu?{' '}
            <a href={WA_CATERING} target="_blank" rel="noopener noreferrer">
              Chat kami langsung
            </a>{' '}
            — konsultasi menu gratis, tanpa minimum tertentu untuk pesanan harian.
          </p>
        </div>
      </div>
    </section>
  )
}

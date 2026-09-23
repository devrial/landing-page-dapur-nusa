import { TESTIMONIALS, BUSINESS } from '../data.js'

const Stars = () => (
  <span className="testimonial__stars" aria-label="Rating 5 dari 5">
    {[1, 2, 3, 4, 5].map((n) => (
      <i key={n} className="pi pi-star-fill" />
    ))}
  </span>
)

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimoni">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Testimoni</span>
          <h2 className="section__title">Kata mereka yang sudah pesan</h2>
          <p className="section__subtitle">
            Rating rata-rata {BUSINESS.rating}/5 dari {BUSINESS.ratingCount}+ pelanggan.
          </p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="testimonial">
              <Stars />
              <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial__avatar" aria-hidden="true">
                  {t.initial}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

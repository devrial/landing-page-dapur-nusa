import { STEPS, WA_ORDER } from '../data.js'

export default function HowToOrder() {
  return (
    <section className="howto section" id="cara-pesan">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Cara Pesan</span>
          <h2 className="section__title">Tiga langkah, pesanan sampai</h2>
        </div>

        <ol className="howto__steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="howto__step">
              <span className="howto__num">{i + 1}</span>
              <span className="howto__icon">
                <i className={`pi ${s.icon}`} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="howto__cta">
          <a href={WA_ORDER} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn-light">
              <i className="pi pi-whatsapp" /> Mulai Pesan Sekarang
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

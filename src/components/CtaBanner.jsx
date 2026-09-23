import { WA_ORDER } from '../data.js'

export default function CtaBanner() {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__box">
          <h2>Lapar sekarang? Pesan sebelum jam 9 pagi.</h2>
          <p>
            Pesanan harian yang masuk sebelum pukul 09.00 diantar saat jam makan siang. Untuk nasi box
            &amp; acara, booking minimal H-3 ya.
          </p>
          <a href={WA_ORDER} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn-cream">
              <i className="pi pi-whatsapp" /> Pesan via WhatsApp
            </button>
          </a>
          <span className="cta__hint">
            Klik untuk chat — pesan otomatis terisi, tinggal tekan kirim.
          </span>
        </div>
      </div>
    </section>
  )
}

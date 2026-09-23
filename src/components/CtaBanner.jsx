import { WA_ORDER, BUSINESS } from '../data.js'

export default function CtaBanner() {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__box">
          <h2>Mau pesan untuk hari ini atau acara?</h2>
          <p>
            Pesanan harian yang masuk sebelum pukul {BUSINESS.dailyCutoff} diantar saat jam makan
            siang. Untuk nasi box &amp; acara, booking minimal {BUSINESS.eventLeadShort} ya.
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

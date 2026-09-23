// ============================================================
// DATA DAPUR NUSA
// File ini khusus untuk mengubah isi website (menu, harga,
// nomor WhatsApp, alamat, dll) TANPA perlu menyentuh kode lain.
// ============================================================
//
// ⚠️  STATUS DATA: MASIH PROTOTYPE / CONTOH
// Semua angka & teks di file ini BELUM dikonfirmasi ke pemilik
// usaha. Wajib diverifikasi dulu sebelum website dirilis.
// Daftar pertanyaannya ada di file CHECKLIST-CLIENT.md.
// Item yang masih contoh:
//   1. Harga semua menu
//   2. Jam operasional
//   3. Area pengantaran & free ongkir
//   4. Minimal order (harian & nasi/snack box)
//   5. Aturan pemesanan (cut-off harian, booking acara H-3/H-7)
//   6. Nomor WhatsApp
//   7. Alamat
//   8. Instagram & email
// ============================================================

export const BUSINESS = {
  name: 'Dapur Nusa',
  tagline: 'Masakan Rumahan untuk Harian & Acara',
  description:
    'Nasi box, ayam geprek, rice bowl, dan snack box yang dimasak fresh setiap hari. Cocok untuk makan siang harian, rapat kantor, arisan, sampai ulang tahun.',
  priceFrom: 25000,
  rating: 4.9,
  ratingCount: 120,

  // Nomor WhatsApp dalam format internasional tanpa "+" atau "0" di depan.
  // Contoh: 0812-3456-7890 tulis jadi "6281234567890"
  whatsapp: '6281234567890',
  phoneDisplay: '0812-3456-7890',
  email: 'halo@dapurnusa.id',
  instagram: '@dapurnusa.id',
  instagramUrl: 'https://instagram.com/dapurnusa.id',

  address: 'Jl. Melati No. 12, Kel. Sukamaju, Kec. Cibinong, Kab. Bogor, Jawa Barat 16913',
  mapsUrl: 'https://maps.google.com/?q=Dapur+Nusa',
  operationalHours: [
    { day: 'Senin – Jumat', time: '06.00 – 19.00' },
    { day: 'Sabtu', time: '06.00 – 15.00' },
    { day: 'Minggu', time: 'Tutup (terima pesanan acara)' },
  ],

  // ---- Aturan pengantaran & pemesanan (masih contoh!) ----
  deliveryArea: 'Cibinong & sekitarnya',
  freeDeliveryNote: 'Gratis ongkir untuk pesanan di atas Rp 100.000 (area Cibinong)',
  minOrderDaily: '1 porsi',
  minOrderBox: '10 box',
  // Batas waktu pesan harian; pesanan setelah jam ini masuk besok.
  dailyCutoff: '09.00',
  // Berapa hari sebelumnya acara harus dibooking.
  eventLeadShort: 'H-3',
  eventLeadLong: 'H-7',
}

// Pesan otomatis yang terisi saat orang menekan tombol WhatsApp.
export const waLink = (message) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`

export const WA_DEFAULT = waLink(
  `Halo ${BUSINESS.name}! Saya mau tanya-tanya menu untuk pesanan.`
)

export const WA_ORDER = waLink(
  `Halo ${BUSINESS.name}! Saya mau pesan. Boleh minta info menu dan harga hari ini?`
)

export const WA_CATERING = waLink(
  `Halo ${BUSINESS.name}! Saya mau tanya paket nasi box / snack box untuk acara.`
)

// ------------------------------------------------------------
// MENU
// ------------------------------------------------------------
export const MENU = {
  nasiBox: {
    id: 'nasiBox',
    name: 'Nasi Box',
    caption: 'Paket lengkap untuk rapat, seminar & arisan',
    items: [
      { name: 'Nasi Box Ayam Bakar Madu', desc: 'Ayam bakar bumbu madu, nasi, lalapan, sambal', price: 30000 },
      { name: 'Nasi Box Ayam Geprek', desc: 'Ayam crispy geprek level 1–5, sambal bawang', price: 25000 },
      { name: 'Nasi Box Empal Gentong', desc: 'Empal sapi kuah santan khas Cirebon', price: 35000 },
      { name: 'Nasi Box Sayur Lodeh Telur', desc: 'Lodeh santan, telur balado, terong & labu', price: 25000 },
    ],
  },
  riceBowl: {
    id: 'riceBowl',
    name: 'Rice Bowl',
    caption: 'Makan siang harian, porsi pas & praktis',
    items: [
      { name: 'Rice Bowl Ayam Suwir Kemangi', desc: 'Ayam suwir bumbu kemangi, sambal matah', price: 22000 },
      { name: 'Rice Bowl Beef Teriyaki', desc: 'Daging sapi iris saus teriyaki, biji kenari', price: 32000 },
      { name: 'Rice Bowl Ayam Katsu Curry', desc: 'Ayam katsu crispy, saus kari Jepang', price: 27000 },
      { name: 'Rice Bowl Udang Pedas Manis', desc: 'Udang saus asam manis pedas', price: 33000 },
    ],
  },
  geprek: {
    id: 'geprek',
    name: 'Ayam Geprek',
    caption: 'Level pedas bisa request dari 1 sampai 10',
    items: [
      { name: 'Geprek Original', desc: 'Ayam crispy + sambal bawang, nasi putih', price: 20000 },
      { name: 'Geprek Mozarella', desc: 'Ayam crispy isi mozarella lumer', price: 28000 },
      { name: 'Geprek Sambal Matah', desc: 'Sambal matah segar khas Bali', price: 24000 },
      { name: 'Geprek Telur Asin', desc: 'Saus telur asin creamy', price: 27000 },
    ],
  },
  snackBox: {
    id: 'snackBox',
    name: 'Snack Box',
    caption: 'Coffee break meeting & camilan acara',
    items: [
      { name: 'Snack Box Mini A', desc: '2 jenis risoles + 1 martabak mini + air mineral', price: 12000 },
      { name: 'Snack Box Mini B', desc: 'Cireng isi + pisang goreng + spring roll', price: 12000 },
      { name: 'Snack Box Premium', desc: '4 macam snack + buah potong + air mineral', price: 18000 },
      { name: 'Puding Cup (isi 10)', desc: 'Puding lumer rasa cokelat / pandan', price: 60000 },
    ],
  },
}

export const ALL_MENU_CATEGORIES = [MENU.nasiBox, MENU.riceBowl, MENU.geprek, MENU.snackBox]

// ------------------------------------------------------------
// LAYANAN / JENIS PESANAN
// ------------------------------------------------------------
export const SERVICES = [
  {
    icon: 'pi pi-calendar-clock',
    title: 'Pesan Harian',
    desc: `Makan siang tiap hari tanpa ribet. Pesan sebelum pukul ${BUSINESS.dailyCutoff}, antar jam makan siang ke rumah atau kantor Anda.`,
    points: [`Order minimal ${BUSINESS.minOrderDaily}`, `Antar area ${BUSINESS.deliveryArea}`, 'Bisa langganan mingguan'],
  },
  {
    icon: 'pi pi-box',
    title: 'Nasi Box & Snack Box',
    desc: 'Paket lengkap untuk rapat kantor, seminar, pengajian, atau arisan. Sudah termasuk dus, sendok, dan air mineral.',
    points: [`Mulai ${BUSINESS.minOrderBox}`, 'Bisa custom menu & label', 'Free pengantaran area tertentu'],
  },
  {
    icon: 'pi pi-users',
    title: 'Pesanan Acara',
    desc: 'Prasmanan rice box besar, tumpeng, sampai paket buffet kecil untuk hajatan keluarga dan kantor.',
    points: ['Konsultasi menu gratis', 'Cetak label nama acara', `Booking ${BUSINESS.eventLeadShort} sampai ${BUSINESS.eventLeadLong}`],
  },
]

// ------------------------------------------------------------
// TESTIMONI PELANGGAN
// ⚠️ Semua testimoni di bawah ini CONTOH (placeholder), bukan
// testimoni asli. Ganti dengan testimoni asli pelanggan saat
// client mengirimkannya — lihat CHECKLIST-CLIENT.md.
// ------------------------------------------------------------
export const TESTIMONIALS = [
  {
    name: 'Bu Ratna',
    role: 'Ibu Rumah Tangga — Arisan Sukamaju',
    text: 'Nasi box-nya enak dan datang tepat waktu. Cocok banget buat acara arisan.',
    initial: 'R',
    placeholder: true,
  },
  {
    name: 'Pak Andi',
    role: 'Admin Kantor PT Cahaya Nusantara',
    text: 'Snack box-nya rapi dan tidak pernah telat. Langganan coffee break kantor kami.',
    initial: 'A',
    placeholder: true,
  },
  {
    name: 'Dina',
    role: 'Pelanggan Rice Bowl',
    text: 'Rice bowl ayam suwir kemangi-nya juara. Porsi kenyang, harganya bersahabat.',
    initial: 'D',
    placeholder: true,
  },
  {
    name: 'Bu Wulan',
    role: 'Kepala Sekolah TK Tunas Bangsa',
    text: 'Acara sekolah kami dianter 80 nasi box lengkap dengan label. Rasa homestyle banget.',
    initial: 'W',
    placeholder: true,
  },
]

// ------------------------------------------------------------
// CARA PESAN (3 langkah)
// ------------------------------------------------------------
export const STEPS = [
  {
    icon: 'pi pi-eye',
    title: 'Pilih Menu',
    desc: 'Lihat menu di atas, catat nama makanan yang Anda mau beserta jumlahnya.',
  },
  {
    icon: 'pi pi-whatsapp',
    title: 'Chat WhatsApp',
    desc: 'Klik tombol "Pesan via WhatsApp". Pesan otomatis langsung terisi, tinggal kirim.',
  },
  {
    icon: 'pi pi-truck',
    title: 'Kami Antar',
    desc: 'Konfirmasi alamat & jam kirim. Pesanan diantar fresh hangat sesuai jadwal.',
  },
]

// ------------------------------------------------------------
// FOTO HERO & MENU
// Pakai foto dari Unsplash untuk placeholder.
// Ganti dengan foto makanan asli Dapur Nusa kapan pun.
// (Tema warna diatur di src/main.jsx + src/styles/global.css)
// ------------------------------------------------------------
const img = (id, w = 640) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 0.75)}&q=70`

export const IMAGES = {
  heroMain: img('photo-1504674900247-0877df9cc836', 1100),
  heroSecondary: img('photo-1512058564366-18510be2db19', 700),
  categories: {
    nasiBox: img('photo-1517244683847-7456b63c5969'),
    riceBowl: img('photo-1567620905732-2d1ec7ab7445'),
    geprek: img('photo-1626645738196-c2a7c87a8f58'),
    snackBox: img('photo-1541614101331-1a5a3a194e92'),
  },
  // Foto per menu item (rasio 4:3). Ganti dengan foto asli per menu —
  // prioritas: menu yang paling banyak dijual.
  dishes: {
    'Nasi Box Ayam Bakar Madu': img('photo-1517244683847-7456b63c5969'),
    'Nasi Box Ayam Geprek': img('photo-1626645738196-c2a7c87a8f58'),
    'Nasi Box Empal Gentong': img('photo-1544025162-d76694265947'),
    'Nasi Box Sayur Lodeh Telur': img('photo-1547592180-85f173990554'),
    'Rice Bowl Ayam Suwir Kemangi': img('photo-1567620905732-2d1ec7ab7445'),
    'Rice Bowl Beef Teriyaki': img('photo-1600891964092-4316c288032e'),
    'Rice Bowl Ayam Katsu Curry': img('photo-1579871494447-9811cf80d66c'),
    'Rice Bowl Udang Pedas Manis': img('photo-1565557623262-b51c2513a641'),
    'Geprek Original': img('photo-1626645738196-c2a7c87a8f58'),
    'Geprek Mozarella': img('photo-1608039829572-78524f79c4c7'),
    'Geprek Sambal Matah': img('photo-1598515214211-89d3c73ae83b'),
    'Geprek Telur Asin': img('photo-1619881590738-a111d176d906'),
    'Snack Box Mini A': img('photo-1541614101331-1a5a3a194e92'),
    'Snack Box Mini B': img('photo-1573821663912-6df460f9c684'),
    'Snack Box Premium': img('photo-1555507036-ab1f4038808a'),
    'Puding Cup (isi 10)': img('photo-1488477181946-6428a0291777'),
  },
}

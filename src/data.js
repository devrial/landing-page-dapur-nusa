// ============================================================
// DATA DAPUR NUSA
// File ini khusus untuk mengubah isi website (menu, harga,
// nomor WhatsApp, alamat, dll) TANPA perlu menyentuh kode lain.
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
    desc: 'Makan siang tiap hari tanpa ribet. Pesan sebelum jam 9 pagi, antar jam makan siang ke rumah atau kantor Anda.',
    points: ['Order minimal 1 porsi', 'Antar area Cibinong & sekitarnya', 'Bisa langganan mingguan'],
  },
  {
    icon: 'pi pi-box',
    title: 'Nasi Box & Snack Box',
    desc: 'Paket lengkap untuk rapat kantor, seminar, pengajian, atau arisan. Sudah termasuk dus, sendok, dan air mineral.',
    points: ['Mulai 10 box', 'Bisa custom menu & label', 'Free pengantaran area tertentu'],
  },
  {
    icon: 'pi pi-users',
    title: 'Pesanan Acara',
    desc: 'Prasmanan rice box besar, tumpeng, sampai paket buffet kecil untuk hajatan keluarga dan kantor.',
    points: ['Konsultasi menu gratis', 'Cetak label nama acara', 'Booking H-3 sampai H-7'],
  },
]

// ------------------------------------------------------------
// TESTIMONI PELANGGAN
// ------------------------------------------------------------
export const TESTIMONIALS = [
  {
    name: 'Bu Ratna',
    role: 'Ibu Rumah Tangga — Arisan Sukamaju',
    text: 'Tiap arisan bulanan selalu pesan nasi box di Dapur Nusa. Anak-anak suka gepreknya, ibu-ibu suka sayur lodehnya. Rasa konsisten dan selalu tepat waktu!',
    initial: 'R',
  },
  {
    name: 'Pak Andi',
    role: 'Admin Kantor PT Cahaya Nusantara',
    text: 'Langganan coffee break kantor kami dari 2023. Snack box-nya rapi, label per-box jelas, dan yang paling penting: tidak pernah telat. Recommended.',
    initial: 'A',
  },
  {
    name: 'Dina',
    role: 'Mahasiswi — Kos Sukamaju',
    text: 'Rice bowl ayam suwir kemangi-nya juara. Porsinya kenyang, harganya mahasiswa-friendly. Sering nambah seminggu dua kali.',
    initial: 'D',
  },
  {
    name: 'Bu Wulan',
    role: 'Kepala Sekolah TK Tunas Bangsa',
    text: 'Acara pensiunan guru kami dianter 80 nasi box lengkap dengan label. Rasa homestyle banget, banyak yang minta nomor Dapur Nusa.',
    initial: 'W',
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
const img = (id, w = 900) =>
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
}

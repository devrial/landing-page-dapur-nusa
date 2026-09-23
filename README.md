# Dapur Nusa — Landing Page

Landing page untuk usaha makanan rumahan **Dapur Nusa** (nasi box, ayam geprek, rice bowl, snack box).

Dibuat dengan **React + JavaScript (Vite)**, komponen UI **PrimeReact**, dan **CSS biasa** (tanpa Tailwind).

## Menjalankan

```bash
npm install      # sekali saja
npm run dev      # buka http://localhost:5173
```

Build untuk produksi:

```bash
npm run build    # hasil ada di folder dist/
```

## Mengubah isi website (untuk pemilik usaha)

**Semua konten** — nomor WhatsApp, menu & harga, alamat, jam buka, testimoni — ada di satu file:

```
src/data.js
```

Yang paling penting diganti pertama kali:

1. **Nomor WhatsApp** — ubah `whatsapp: '6281234567890'` dengan nomor asli (format internasional tanpa `+` dan tanpa `0` di depan; contoh: `08123456789` → `628123456789`).
2. **Alamat, jam operasional, Instagram & email** — bagian `BUSINESS`.
3. **Menu & harga** — bagian `MENU` (tambah/hapus menu bebas).
4. **Foto** — saat ini memakai foto placeholder dari Unsplash. Ganti dengan foto makanan asli di bagian `IMAGES` (cukup tempel URL foto, atau letakkan file di folder `public/` lalu tulis `/nama-foto.jpg`).

Teks pesan otomatis WhatsApp juga bisa diubah di bagian atas file yang sama.

## Catatan teknis

- Stack: Vite 6, React 19, PrimeReact 10.9.9 (lisensi MIT, gratis untuk komersial), primeicons.
- Tema: `lara-light-green` dari PrimeReact sebagai base, di-custom jadi palet **cream/cokelat/hijau** lewat CSS variables di `src/styles/global.css`.
- Struktur section ada di `src/components/` — satu file per section.
- `scripts/make-preview.mjs` + `preview.html` hanya untuk preview build secara offline; tidak dibutuhkan saat develop/deploy.

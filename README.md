# Dapur Nusa — Landing Page

Landing page untuk usaha makanan rumahan **Dapur Nusa** (nasi box, ayam geprek, rice bowl, snack box).

Dibuat dengan **React + JavaScript (Vite)**, komponen UI **PrimeReact**, dan **CSS biasa** (tanpa Tailwind).

## ⚠️ Status: Menunggu Konfirmasi Data Client

Semua data (harga, nomor WA, jam buka, aturan antar) dan foto masih **prototype**.
Sebelum rilis, kirim dulu pertanyaannya dari file **`CHECKLIST-CLIENT.md`** ke pemilik usaha.

Yang sudah otomatis menandai dirinya selagi masih prototype:

- Testimoni contoh menampilkan catatan kecil *"masih contoh"* — hilang sendiri begitu flag `placeholder` dihapus di `src/data.js`.
- Teks aturan pemesanan (cut-off jam 09.00, booking H-3/H-7, minimal order, area antar) semua diambil dari `src/data.js` — ubah sekali, berubah di semua section.

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
3. **Aturan antar & pesan** — `deliveryArea`, `minOrderDaily`, `minOrderBox`, `dailyCutoff`, `eventLeadShort/Long` di bagian `BUSINESS`.
4. **Menu & harga** — bagian `MENU` (tambah/hapus menu bebas).
5. **Foto** — saat ini memakai foto placeholder dari Unsplash. Ganti di bagian `IMAGES`:
   - Foto per menu: kunci `IMAGES.dishes` harus **persis sama** dengan nama menu.
   - Bisa tempel URL foto, atau letakkan file di folder `public/` lalu tulis `/nama-foto.jpg`.
   - Kompres dulu (target < 300 KB, format WebP bila bisa) — lihat panduan di `CHECKLIST-CLIENT.md`.
6. **Testimoni asli** — bagian `TESTIMONIALS`, hapus `placeholder: true` saat sudah asli.

Teks pesan otomatis WhatsApp juga bisa diubah di bagian atas file yang sama.

## Checklist sebelum rilis

- [ ] Semua jawaban dari `CHECKLIST-CLIENT.md` sudah dipasang di `src/data.js`
- [ ] Foto asli terpasang (prioritas menu terlaris), rasio & gaya konsisten
- [ ] Flag `placeholder` di testimoni sudah dihapus / testimoni asli dipasang
- [ ] Semua tombol WhatsApp dites ke nomor asli (hero, navbar, per-menu, CTA bawah, footer)
- [ ] Lighthouse mobile dicek: buka hasil `npm run build` di Chrome → DevTools → Lighthouse (target: Performa & Aksesibilitas ≥ 90)

## Catatan teknis

- Stack: Vite 6, React 19, PrimeReact 10.9.9 (lisensi MIT, gratis untuk komersial), primeicons.
- Tema: `lara-light-green` dari PrimeReact sebagai base, di-custom jadi palet **cream/cokelat/hijau** lewat CSS variables di `src/styles/global.css`.
- Struktur section ada di `src/components/` — satu file per section.
- Gambar non-hero memakai `loading="lazy"` + atribut `width`/`height` untuk mencegah layout shift.
- `scripts/make-preview.mjs` + `preview.html` hanya untuk preview build secara offline; tidak dibutuhkan saat develop/deploy.

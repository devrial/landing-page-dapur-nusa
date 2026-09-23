# Checklist Konfirmasi — Dapur Nusa

> Semua data & foto di website ini masih **contoh/prototype**.
> File ini tinggal di-copy-paste ke WhatsApp client. Setelah jawaban masuk,
> perbarui isinya di `src/data.js` (dan foto di bagian `IMAGES`), lalu hapus
> bagian " masih contoh" yang terkait.

---

## 1. Pertanyaan Data Bisnis (tinggal copy-paste)

```
Halo Kak! Website Dapur Nusa sudah jadi kerangkanya 🎉
Sebelum dirilis, aku perlu konfirmasi data asli dulu ya:

1. NOMOR WHATSAPP untuk tombol pesan?
2. HARGA menu yang dipakai? (boleh kirim daftar menu + harganya)
3. JAM OPERASIONAL per hari? (Senin–Minggu)
4. AREA PENGANTARAN di mana saja? Gratis ongkir untuk area/ nominal
   berapa?
5. MINIMAL ORDER:
   - pesanan harian (porsi)?
   - nasi box / snack box (box)?
6. ATURAN PEMESANAN:
   - pesanan harian: jam berapa batas pesan (cut-off)?
   - acara: harus booking berapa hari sebelumnya (H-3 / H-7)?
7. ALAMAT dapur lengkap (untuk footer + Google Maps)?
8. INSTAGRAM & email yang mau dicantumkan?

Setelah ini semua terisi, tinggal foto makanan ya (daftarnya di bawah).
```

---

## 2. Daftar Foto yang Dibutuhkan

**Aturan biar hasilnya rapi & konsisten:**

- Rasio **4:3** (contoh: 800×600) untuk semua foto
- Gaya sejenis: atas meja / 45°, pencahayaan terang, latar bersih
- Format **JPG atau WebP**, ukuran sekitar 100–300 KB per foto
- Foto dikompres dulu (misal lewat tinypng.com) sebelum dikirim
- **Prioritas:** menu yang paling laris dulu

| # | Foto untuk | Digunakan di |
|---|------------|--------------|
| 1 | Foto utama hidangan lezat (1 foto terbaik) | Bagian atas halaman (hero) |
| 2 | Foto nasi box tampak isi | Tab Nasi Box |
| 3 | Foto rice bowl | Tab Rice Bowl |
| 4 | Foto ayam geprek | Tab Ayam Geprek |
| 5 | Foto snack box | Tab Snack Box |
| 6–21 | 1 foto per menu (16 menu, daftar nama di `src/data.js`) | Baris tiap menu |
| 22 | Foto kedua untuk hero (nasi box) | Kartu kecil hero |

> Kalau foto per-menu dirasa terlalu banyak dulu, minimal kirim nomor
> 1–5 — sisanya boleh menyusul, satu foto bisa dipakai bersama di beberapa menu.

---

## 3. Tempat Mengganti Data (untuk yang mengelola website)

| Data | Lokasi di kode |
|------|----------------|
| Semua info bisnis (WA, alamat, jam, aturan) | `src/data.js` → bagian `BUSINESS` |
| Menu & harga | `src/data.js` → bagian `MENU` |
| Foto hero & kategori | `src/data.js` → `IMAGES.heroMain/heroSecondary/categories` |
| Foto per menu | `src/data.js` → `IMAGES.dishes` (kunci = nama menu persis) |
| Testimoni asli | `src/data.js` → `TESTIMONIALS` (hapus flag `placeholder: true`) |

Foto juga bisa diletakkan sebagai file di folder `public/` lalu ditulis
`/nama-foto.jpg` sebagai alamatnya.

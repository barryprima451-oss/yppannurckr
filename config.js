// Konfigurasi versi konten
// Ubah angka berikut SETIAP kali menambahkan berita baru
const CURRENT_NEWS_VERSION = 4;


// NONAKTIFKAN AKSI COPY & SELEKSI TEKS DI SELURUH HALAMAN
document.addEventListener('copy', function(e) {
    e.preventDefault();
});
document.addEventListener('cut', function(e) {
    e.preventDefault();
});
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

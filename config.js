// Konfigurasi versi konten
// Ubah angka berikut SETIAP kali menambahkan berita baru
const CURRENT_NEWS_VERSION = 4;


// NONAKTIFKAN AKSI COPY, CUT, DAN KLIK KANAN
document.addEventListener('copy', function(e) {
    e.preventDefault();
});
document.addEventListener('cut', function(e) {
    e.preventDefault();
});
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


// EFEK GOYANG PADA TOMBOL MENU BERANDA
document.addEventListener('DOMContentLoaded', function() {
    var homeLinks = document.querySelectorAll('.footer-nav a[href="index.html"]');
    homeLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var item = link.querySelector('.nav-item');
            if (!item) return;
            item.classList.add('nav-shake');
            setTimeout(function() {
                item.classList.remove('nav-shake');
            }, 400);
        });
    });
});


// FITUR PENCARIAN BERITA & ARTIKEL DI BERANDA
document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    function filterCards() {
        var q = searchInput.value.toLowerCase();

        function applyFilter(selector) {
            var items = document.querySelectorAll(selector);
            Array.prototype.forEach.call(items, function(item) {
                var text = item.textContent.toLowerCase();
                if (!q || text.indexOf(q) !== -1) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // berita di beranda
        applyFilter('.berita-item');
        // artikel di beranda
        applyFilter('.artikel-item');
    }

    searchInput.addEventListener('input', filterCards);
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  async redirects() {
    return [

      // ================================================================
      // BAGIAN 1: URL EKSAK DARI GOOGLE SEARCH CONSOLE
      // Sumber: 9 URL terindeks bengkulutravel.com (Maret 2026)
      // CATATAN: ?m=1 (versi mobile Blogger) otomatis diabaikan Next.js
      // ================================================================

      // [GSC-1] Landing page utama Blogger
      // https://bengkulutravel.com/p/bengkulutravelcom-layanan-travel-antar.html
      { source: '/p/bengkulutravelcom-layanan-travel-antar.html', destination: '/', permanent: true },

      // [GSC-2] Travel Bengkulu Jambi
      // https://bengkulutravel.com/2026/02/travel-bengkulu-jambi.html
      { source: '/2026/02/travel-bengkulu-jambi.html', destination: '/travel-bengkulu-jambi', permanent: true },

      // [GSC-3] Label Bengkulu Palembang (2 versi: spasi & encoded)
      // https://bengkulutravel.com/search/label/Bengkulu Palembang
      { source: '/search/label/Bengkulu Palembang', destination: '/travel-bengkulu-palembang', permanent: true },
      { source: '/search/label/Bengkulu%20Palembang', destination: '/travel-bengkulu-palembang', permanent: true },

      // [GSC-4] Travel Bengkulu ke Curup door to door
      // https://bengkulutravel.com/2026/02/travel-bengkulu-ke-curup-door-to-door.html
      { source: '/2026/02/travel-bengkulu-ke-curup-door-to-door.html', destination: '/travel-bengkulu-curup', permanent: true },

      // [GSC-5] Bengkulu ke Jambi berapa jam
      // https://bengkulutravel.com/2026/02/bengkulu-ke-jambi-berapa-jam.html
      { source: '/2026/02/bengkulu-ke-jambi-berapa-jam.html', destination: '/jarak-jambi-bengkulu', permanent: true },

      // [GSC-6] Travel Bengkulu Palembang setiap hari
      // https://bengkulutravel.com/2026/02/travel-bengkulu-palembang-setiap-hari.html
      { source: '/2026/02/travel-bengkulu-palembang-setiap-hari.html', destination: '/travel-bengkulu-palembang', permanent: true },

      // ================================================================
      // BAGIAN 2: POLA FALLBACK — antisipasi URL Blogger lainnya
      // ================================================================

      // Semua label/kategori & search Blogger → Homepage
      { source: '/search/label/:label*', destination: '/', permanent: true },
      { source: '/search/:path*', destination: '/', permanent: true },

      // Semua halaman /p/ lainnya → Homepage
      { source: '/p/:slug.html', destination: '/', permanent: true },

      // Pola artikel berdasarkan kata kunci slug
      { source: '/:y(\\d{4})/:m(\\d{2})/travel-palembang-bengkulu:r*.html', destination: '/travel-palembang-bengkulu', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/travel-bengkulu-palembang:r*.html', destination: '/travel-bengkulu-palembang', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/travel-jambi-bengkulu:r*.html', destination: '/travel-jambi-bengkulu', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/travel-bengkulu-jambi:r*.html', destination: '/travel-bengkulu-jambi', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/bengkulu-ke-jambi:r*.html', destination: '/jarak-jambi-bengkulu', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/jarak-jambi:r*.html', destination: '/jarak-jambi-bengkulu', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/travel-bengkulu-ke-curup:r*.html', destination: '/travel-bengkulu-curup', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/travel-bengkulu-curup:r*.html', destination: '/travel-bengkulu-curup', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/rental-mobil:r*.html', destination: '/rental-mobil-curup', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/antar-jemput:r*.html', destination: '/antar-jemput-bandara-curup', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/kirim-paket:r*.html', destination: '/kirim-paket-bengkulu-palembang', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/tempat-wisata:r*.html', destination: '/tempat-wisata-bengkulu', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/wisata-pantai:r*.html', destination: '/wisata-pantai-panjang-bengkulu', permanent: true },
      { source: '/:y(\\d{4})/:m(\\d{2})/pantai-panjang:r*.html', destination: '/wisata-pantai-panjang-bengkulu', permanent: true },

      // Semua URL Blogger lain yang tidak cocok pola di atas → Homepage
      { source: '/:y(\\d{4})/:m(\\d{2})/:slug.html', destination: '/', permanent: true },

    ];
  },
};

module.exports = nextConfig;

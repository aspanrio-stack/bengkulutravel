/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Untuk foto lokal di /public, tidak perlu konfigurasi tambahan
    // Jika ingin menambah gambar dari domain lain di masa depan, tambahkan di sini
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      // =============================================
      // REDIRECT 301 DARI URL LAMA BLOGGER
      // Ganti /tahun/bulan/nama-artikel.html sesuai URL asli Blogger Anda
      // =============================================

      // 1. Travel Bengkulu Palembang
      {
        source: '/:year(\\d{4})/:month(\\d{2})/travel-bengkulu-palembang.html',
        destination: '/travel-bengkulu-palembang',
        permanent: true,
      },
      // Fallback jika URL berbeda
      {
        source: '/travel-bengkulu-palembang.html',
        destination: '/travel-bengkulu-palembang',
        permanent: true,
      },

      // 2. Travel Palembang Bengkulu
      {
        source: '/:year(\\d{4})/:month(\\d{2})/travel-palembang-bengkulu.html',
        destination: '/travel-palembang-bengkulu',
        permanent: true,
      },
      {
        source: '/travel-palembang-bengkulu.html',
        destination: '/travel-palembang-bengkulu',
        permanent: true,
      },

      // 3. Travel Bengkulu Jambi
      {
        source: '/:year(\\d{4})/:month(\\d{2})/travel-bengkulu-jambi.html',
        destination: '/travel-bengkulu-jambi',
        permanent: true,
      },
      {
        source: '/travel-bengkulu-jambi.html',
        destination: '/travel-bengkulu-jambi',
        permanent: true,
      },

      // 4. Travel Jambi Bengkulu
      {
        source: '/:year(\\d{4})/:month(\\d{2})/travel-jambi-bengkulu.html',
        destination: '/travel-jambi-bengkulu',
        permanent: true,
      },
      {
        source: '/travel-jambi-bengkulu.html',
        destination: '/travel-jambi-bengkulu',
        permanent: true,
      },

      // 5. Travel Bengkulu Curup
      {
        source: '/:year(\\d{4})/:month(\\d{2})/travel-bengkulu-curup.html',
        destination: '/travel-bengkulu-curup',
        permanent: true,
      },
      {
        source: '/travel-bengkulu-curup.html',
        destination: '/travel-bengkulu-curup',
        permanent: true,
      },

      // 6. Rental Mobil Curup
      {
        source: '/:year(\\d{4})/:month(\\d{2})/rental-mobil-curup.html',
        destination: '/rental-mobil-curup',
        permanent: true,
      },
      {
        source: '/rental-mobil-curup.html',
        destination: '/rental-mobil-curup',
        permanent: true,
      },

      // 7. Antar Jemput Bandara Curup
      {
        source: '/:year(\\d{4})/:month(\\d{2})/antar-jemput-bandara-curup.html',
        destination: '/antar-jemput-bandara-curup',
        permanent: true,
      },
      {
        source: '/antar-jemput-bandara-curup.html',
        destination: '/antar-jemput-bandara-curup',
        permanent: true,
      },

      // 8. Kirim Paket Bengkulu Palembang
      {
        source: '/:year(\\d{4})/:month(\\d{2})/kirim-paket-bengkulu-palembang.html',
        destination: '/kirim-paket-bengkulu-palembang',
        permanent: true,
      },
      {
        source: '/kirim-paket-bengkulu-palembang.html',
        destination: '/kirim-paket-bengkulu-palembang',
        permanent: true,
      },

      // 9. Tempat Wisata Bengkulu
      {
        source: '/:year(\\d{4})/:month(\\d{2})/tempat-wisata-bengkulu.html',
        destination: '/tempat-wisata-bengkulu',
        permanent: true,
      },
      {
        source: '/tempat-wisata-bengkulu.html',
        destination: '/tempat-wisata-bengkulu',
        permanent: true,
      },

      // 10. Jarak Jambi Bengkulu
      {
        source: '/:year(\\d{4})/:month(\\d{2})/jarak-jambi-bengkulu.html',
        destination: '/jarak-jambi-bengkulu',
        permanent: true,
      },
      {
        source: '/jarak-jambi-bengkulu.html',
        destination: '/jarak-jambi-bengkulu',
        permanent: true,
      },

      // 11. Wisata Pantai Panjang Bengkulu
      {
        source: '/:year(\\d{4})/:month(\\d{2})/wisata-pantai-panjang-bengkulu.html',
        destination: '/wisata-pantai-panjang-bengkulu',
        permanent: true,
      },
      {
        source: '/wisata-pantai-panjang-bengkulu.html',
        destination: '/wisata-pantai-panjang-bengkulu',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

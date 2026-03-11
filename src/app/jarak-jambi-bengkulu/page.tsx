import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'Jarak Jambi Bengkulu – Berapa KM dan Berapa Jam Perjalanannya?',
  description:
    'Informasi lengkap jarak Jambi ke Bengkulu: berapa km, rute tercepat, waktu tempuh, kondisi jalan, dan tips perjalanan. Plus info travel Jambi Bengkulu termurah.',
  alternates: { canonical: 'https://bengkulutravel.com/jarak-jambi-bengkulu' },
};

export default function JarakJambiBengkulu() {
  return (
    <ArticleLayout
      title="Jarak Jambi ke Bengkulu"
      description="Informasi lengkap jarak, rute, dan waktu tempuh perjalanan dari Jambi ke Bengkulu."
      breadcrumbs={[{ label: 'Artikel' }, { label: 'Jarak Jambi Bengkulu' }]}
      badge="🗺️ Info Perjalanan"
    >
      <p>
        Bagi Anda yang berencana melakukan perjalanan dari Jambi ke Bengkulu (atau sebaliknya), mengetahui <strong>jarak dan estimasi waktu tempuh</strong> sangat penting untuk perencanaan perjalanan yang baik. Artikel ini membahas secara lengkap tentang rute, jarak, kondisi jalan, dan tips perjalanan Jambi–Bengkulu.
      </p>

      <h2>Berapa Jarak Jambi ke Bengkulu?</h2>
      <p>
        Jarak dari Jambi ke Bengkulu via jalur darat adalah sekitar <strong>540–580 km</strong> tergantung rute yang digunakan. Ini adalah perjalanan lintas provinsi yang cukup panjang di kawasan Sumatera bagian selatan.
      </p>

      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Estimasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jarak via darat</td>
            <td>±540–580 km</td>
          </tr>
          <tr>
            <td>Waktu tempuh normal</td>
            <td>9–12 jam</td>
          </tr>
          <tr>
            <td>Kecepatan rata-rata</td>
            <td>50–60 km/jam</td>
          </tr>
        </tbody>
      </table>

      <h2>Rute Perjalanan Jambi ke Bengkulu</h2>
      <p>
        Rute paling umum yang dilalui dari Jambi ke Bengkulu adalah melalui jalur Trans-Sumatera:
      </p>
      <p>
        <strong>Jambi → Sarolangun → Bangko (Merangin) → Muara Bungo → Lubuklinggau → Curup → Kepahiang → Bengkulu</strong>
      </p>
      <p>
        Rute ini melewati beberapa kota dan kabupaten di Provinsi Jambi, Sumatera Selatan, dan Bengkulu. Kondisi jalan umumnya cukup baik, namun ada beberapa segmen di daerah perbukitan yang memerlukan kehati-hatian.
      </p>

      <h2>Kondisi Jalan Jambi – Bengkulu</h2>
      <ul>
        <li><strong>Jambi → Muara Bungo</strong>: Jalan nasional yang cukup baik, lebar dan mulus</li>
        <li><strong>Muara Bungo → Lubuklinggau</strong>: Umumnya baik, namun ada beberapa tikungan tajam</li>
        <li><strong>Lubuklinggau → Curup</strong>: Jalan provinsi yang berkelok di beberapa titik</li>
        <li><strong>Curup → Bengkulu</strong>: Jalan turun bukit yang perlu diwaspadai terutama saat hujan</li>
      </ul>

      <h2>Tips Perjalanan Jambi – Bengkulu</h2>
      <ul>
        <li>Jika berangkat sendiri dengan mobil, pastikan kendaraan dalam kondisi prima sebelum berangkat</li>
        <li>Bawa BBM cadangan jika diperlukan — SPBU cukup tersedia di sepanjang rute</li>
        <li>Berangkat pagi hari untuk menghindari perjalanan malam di daerah pegunungan</li>
        <li>Istirahat setiap 2–3 jam untuk menghindari kelelahan</li>
        <li>Waspada kondisi jalan saat musim hujan, terutama segmen Curup–Bengkulu</li>
      </ul>

      <h2>Alternatif Transportasi Jambi – Bengkulu</h2>
      <p>
        Jika tidak ingin mengemudi sendiri, berikut pilihan transportasi:
      </p>
      <ul>
        <li><strong>Travel Door to Door</strong> – Pilihan terbaik: nyaman, langsung, tanpa ganti kendaraan. Tarif kami <strong>Rp 250.000/orang</strong>.</li>
        <li><strong>Bus Umum</strong> – Tersedia namun kurang nyaman untuk perjalanan panjang dan tidak door to door</li>
        <li><strong>Pesawat</strong> – Tersedia penerbangan via Bengkulu, namun lebih mahal dan perlu transportasi tambahan dari/ke bandara</li>
      </ul>

      <h2>Kota-Kota yang Dilewati</h2>
      <p>
        Dalam perjalanan Jambi–Bengkulu, Anda akan melewati beberapa kota yang menarik:
      </p>
      <ul>
        <li><strong>Sarolangun</strong> – Kota administratif di Jambi dengan beberapa objek wisata alam</li>
        <li><strong>Bangko/Merangin</strong> – Terkenal dengan Geopark Merangin yang memiliki fosil tanaman purba</li>
        <li><strong>Muara Bungo</strong> – Kota transit yang ramai, banyak pilihan kuliner dan penginapan</li>
        <li><strong>Lubuklinggau</strong> – Kota terbesar di Sumatera Selatan bagian barat</li>
        <li><strong>Curup</strong> – Ibukota Rejang Lebong yang sejuk dengan banyak destinasi wisata</li>
      </ul>
    </ArticleLayout>
  );
}

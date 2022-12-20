import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import "./DetailBeritaEmpat.css";
import NewsBanner from "../../pic/Image-Asset/newsDetail/news4.png";
import Sosmed from "../../pic/Image-Asset/newsDetail/sosmed.png";

const DetailBeritaEmpat = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="detail-berita-container">
      <NavbarFix />
      <div className="news" data-aos="fade-down">
        <img src={NewsBanner} />
      </div>
      <div className="news-sosmed-and-content">
        <div className="news-content" data-aos="fade-up">
          <p>
            Pemanfaatan energi dunia saat ini masih didominasi oleh pembakaran
            bahan bakar fosil yang memiliki dampak serius pada pelepasan karbon
            yang tidak terkendali. Pelepasan karbon tersebut menciptakan dimensi
            pembentukan gas rumah kaca yang menyebabkan terjadinya pemanasan
            global. Sumber utama pencemaran udara tersebut adalah pembakaran
            bahan bakar fosil dari kendaraan atau transportasi bergerak, seperti
            mobil dan sepeda motor. Kondisi tersebut menciptakan pemikiran untuk
            mendapatkan sumber energi utama yang lebih ramah lingkungan,
            diantaranya dengan upaya penghilangan, atau setidaknya reduksi
            karbon yang dihasilkan. Semua negara di dunia, baik secara sadar
            atau dipaksakan melalui skema perdagangan internasional, akhirnya
            mencoba untuk mencari sumber energi tersebut melalui pencarian dan
            pengembangan energi baru dan terbarukan.
            <br />
            <br />
            Oleh karena itu, pemanfaatan sumber energi alternatif yang ramah
            lingkungan tersebut, seperti tenaga matahari, angin, dan panas bumi,
            memerlukan dukungan berupa sistem penyimpanan energi (energy
            storage). Saat ini, yang telah diterima secara umum di antara
            berbagai pilihan yang mungkin, paling cocok adalah baterai
            elektrokimia. Baterai adalah perangkat portabel yang mampu
            memberikan energi kimia yang tersimpan sebagai energi listrik dengan
            efisiensi konversi yang tinggi dan tanpa emisi gas. Selain itu,
            baterai menawarkan opsi paling menjanjikan untuk memberi daya pada
            HEV atau EV secara efisien. Dalam skenario ini, yang sangat menarik
            adalah baterai sekunde yang dapat diisi ulang dan merupakan baterai
            yang ramah lingkungan memiliki stabilitas penyimpanan energi yang
            baik.
            <br />
            <br />
            Litium merupakan logam alkali yang paling ringan reaktif, dan
            memiliki nilai jual tinggi karena banyak digunakan dalam berbagai
            aplikasi industri karena banyak digunakan dalam berbagai aplikasi
            industri, seperti untuk bahan baterai, paduan logam, dan aditif pada
            keramik, gelas serta polimer. Dengan meningkatnya produksi kendaraan
            listrik maka kebutuhan akan baterai juga meningkat. Hingga saat ini,
            jenis baterai yang sesuai untuk kendaraan listrik adalah lithium ion
            battery (LIB). Pada LIB, litium digunakan pada komponen katoda
            (bersama logam lain, seperti nikel, kobal, mangan) dan juga sebagai
            elektrolit.
            <br />
            <br />
            Potensi litium di Indonesia belum terlalu banyak. Menurut data dari
            Badan Geologi, terdapat dua lokasi yang cukup berpotensi sebagai
            sumber litium, yaitu di daerah semburan Lumpur Sidoarjo (LUSI), Jawa
            Timur, dengan potensi litium sebesar 486-960 ton, dan di geothermal
            brine Dieng, Jawa Tengah, dengan potensi litium sebesar 360
            ton/tahun. Penelitian yang dilakukan Puslitbang tekMIRA pada tahun
            ini mencakup pengambilan percontoh di dua lokasi tersebut,
            karakterisasi percontoh, hingga proses ekstraksi litium dari LUSI
            dan brine Dieng.
            <br />
            <br />
            Material LUSI didominasi oleh mineral alumino-silikat (lempung)
            sehingga secara tekstur memiliki ukuran partikel yang halus (-325#).
            Hal ini menguntungkan untuk diproses selanjutnya karena tidak
            memerlukan proses kominusi crushing dan grinding. Kadar litium pada
            sample LUSI sekitar 107-155 ppm, dengan penyusun utama adalah SiO2
            54%, Al2O3 19%, dan Fe2O3 7%. untuk melarutkan litium proses HPAL
            dan Bayer merupakan proses cukup efektif dalam melarutkan litium,
            dengan nilai recovery masing-masing sebesar 81% dan 72%. (AW)
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailBeritaEmpat;

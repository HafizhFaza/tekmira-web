import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import "./PengujianBB.css";
import Banner1 from "../../pic/Image-Asset/LayananBanner/pengujianbb1.png";
import Banner2 from "../../pic/Image-Asset/LayananBanner/pengujianbb2.png";
import Banner3 from "../../pic/Image-Asset/LayananBanner/pengujianbb3.png";

const PengujianBb = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="pengujianbb-container">
      <NavbarFix />
      <div className="banner-pengujianbb-satu">
        <div className="pengujianbb-satu" data-aos="fade-down">
          <p data-aos="fade-left">
            Kelompok Pelaksana Pengujian Pengembangan dan Pemanfaatan Batubara
            adalah salah satu divisi di Balai Besar Pengujian Mineral dan
            Batubara tekMIRA Kementerian ESDM, yang khusus bergerak di bidang
            pengujian pengembangan dan pemanfaatan batubara.
            <br />
            <br />
            Kami membantu Anda menghasilkan beragam produk turunan dari bahan
            baku batubara. Selain jasa pendampingan, kami juga menawarkan
            sejumlah unit mesin komersial dan fasilitas untuk mendukung bisnis
            Anda. Galeri produk dan fasilitas kami bisa anda kunjungi di Sentra
            Pengolahan dan Pemanfaatan Batubara di Palimanan Barat, Cirebon,
            Jawa Barat.
            <br />
            <br />
            Kami memberikan pelayanan yang optimal dan terus berusaha menjadi
            mitra terbaik Anda dalam melakukan pengujian, perencanaan,
            perancanagan, hingga pendampingan pembuatan pabrik percontohan.
          </p>
        </div>
        <img src={Banner1} data-aos="fade-down" />
      </div>
      <div className="banner-pengujianbb-dua" data-aos="fade-left">
        <img src={Banner2} />
      </div>
      <div className="banner-pengujianbb-tiga" data-aos="fade-right">
        <img src={Banner3} />
      </div>
      <Footer />
    </div>
  );
};

export default PengujianBb;

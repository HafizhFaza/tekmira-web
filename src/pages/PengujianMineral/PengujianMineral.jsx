import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import "./PengujianMineral.css";
import Banner1 from "../../pic/Image-Asset/LayananBanner/pengujian1.png";
import Banner2 from "../../pic/Image-Asset/LayananBanner/pengujian2.png";
import Banner3 from "../../pic/Image-Asset/LayananBanner/pengujian3.png";

const PengujianMineral = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="pengujian-container">
      <NavbarFix />
      <div className="banner-pengujian-satu">
        <div className="pengujian-satu" data-aos="fade-down">
          <p data-aos="fade-left">
            Kelompok Pelaksana Pengujian Pengolahan dan Pemurnian Mineral adalah
            salah satu divisi di Balai Besar Pengujian Mineral dan Batubara
            tekMIRA Kementerian ESDM, yang khusus bergerak di bidang pemrosesan
            mineral.
            <br />
            <br />
            Didukung dengan tenaga ahli dan fasilitas yang mumpuni, kami
            memberikan layanan pengujian teknis, pengujian tekno-ekonomi,
            pengujian teknis pengolahan dan pemanfaatan Sisa Hasil Proses (SHP),
            pengujian mineral strategis, pengujian produk hasil pengolahan dan
            pemurnian mineral, Pengujian Supply Chain dan Value Chain, penyiapan
            bahan penyusunan prosedur dan standar, pelayanan jasa pengujian
            teknis, pengelolaan sarana & prasarana, pengembangan dan layanan
            pengujian teknis dan pemasaran layanan jasa pengolahan dan pemurnian
            mineral.
          </p>
        </div>
        <img src={Banner1} data-aos="fade-down" />
      </div>
      <div className="banner-pengujian-dua" data-aos="fade-left">
        <img src={Banner2} />
      </div>
      <div className="banner-pengujian-tiga" data-aos="fade-right">
        <img src={Banner3} />
      </div>
      <Footer />
    </div>
  );
};

export default PengujianMineral;

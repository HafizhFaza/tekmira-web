import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import "./PenambanganBB.css";
import Banner1 from "../../pic/Image-Asset/LayananBanner/penambanganBB1.png";
import Banner2 from "../../pic/Image-Asset/LayananBanner/penambanganBB2.png";
import Banner3 from "../../pic/Image-Asset/LayananBanner/penambanganBB3.png";

const PenambanganBB = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="penambangan-container">
      <NavbarFix />
      <div className="banner-penambangan-satu">
        <div className="penambangan-satu" data-aos="fade-down">
          <p data-aos="fade-left">
            Kelompok Pelaksana Penambangan Mineral dan Batubara adalah salah
            satu divisi di Balai Besar Pengujian Mineral dan Batubara tekMIRA
            Kementerian ESDM, yang bergerak di bidang perencanaan dan
            pengelolaan tambang. <br /> <br /> Didukung dengan tenaga ahli dan
            fasilitas yang mumpuni, kami memberikan layanan pengujian teknis
            status sumber daya dan cadangan, pengujian teknik, penyiapan bahan
            penyusunan dan pengujian teknis penerapan standar dan teknologi,
            pelayanan jasa pengujian teknis, pengelolaan sarana & prasarana,
            pengembangan dan layanan pengujian teknis, dan pemasaran
            penambangan, lingkungan, dan K3 mineral dan batubara.
          </p>
        </div>
        <img src={Banner1} data-aos="fade-down" />
      </div>
      <div className="banner-penambangan-dua" data-aos="fade-left">
        <img src={Banner2} />
      </div>
      <div className="banner-penambangan-tiga" data-aos="fade-right">
        <img src={Banner3} />
      </div>
      <Footer />
    </div>
  );
};

export default PenambanganBB;

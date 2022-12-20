import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "./Sejarah.css";
import SejarahBanner from "../../pic/Image-Asset/sejarah.png";
import SejarahExp from "../../pic/Image-Asset/sejarahex.png";
import SejarahTree from "../../pic/Image-Asset/Sejarah-Tree.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Sejarah = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="sejarah-container">
      <NavbarFix />
      <div className="sejarah-banner" data-aos="fade-down">
        <img src={SejarahBanner} />
      </div>
      <div className="sejarah-content">
        <img src={SejarahExp} data-aos="fade-right" />
        <h1 data-aos="fade-up">Sejarah BLU tekMIRA</h1>
        <p data-aos="fade-up">
          Balai Besar Pengujian Mineral dan Batubara tekMIRA adalah unit
          pelaksana teknis di lingkungan Kementerian Energi dan Sumber Daya
          Mineral yang melaksanakan tugas teknis operasional dan/atau tugas
          teknis penunjang di bidang mineral dan batubara yang berada di bawah
          dan bertanggung jawab kepada Direktur Jenderal Mineral dan Batubara
          sesuai Peraturan Menteri ESDM Nomor 7 Tahun 2022 tentang Organisasi
          dan Tata Kerja Balai Besar Pengujian Mineral dan Batubara. Balai Besar
          Pengujian Mineral dan Batubara tekMIRA telah mengalami perubahan nama
          setidaknya 6 (enam) kali dalam perjalanan sejarah yang cukup panjang.
          Awal mulanya Puslitbang tekMIRA berada di bawah sebuah Biro pada Pusat
          Djawatan Geologi dengan nama Balai Penyelidikan Mineral pada tahun
          1956 yang kemudian berkembang dan mengalami berbagai perubahan
          organisasi
        </p>
      </div>
      <div className="sejarah-tree" data-aos="fade-up">
        <img src={SejarahTree} />
      </div>
      <Footer />
    </div>
  );
};

export default Sejarah;

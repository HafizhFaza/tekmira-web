import React from "react";
import Gedung from "../../pic/Image-Asset/gedung.jpg";
import "./tentangKami.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const TentangKami = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <React.Fragment>
      <div className="about-container" data-aos="fade-up">
        <div className="content-container">
          <img src={Gedung} />
          <div className="content">
            <h1>TENTANG KAMI</h1>
            <p>
              Balai Besar Pengujian Mineral dan Batubara tekMIRA adalah unit
              pelaksana teknis di lingkungan Kementerian Energi dan Sumber Daya
              Mineral yang melaksanakan tugas teknis operasional dan/atau tugas
              teknis penunjang di bidang mineral dan batubara yang berada di
              bawah dan bertanggung jawab kepada Direktur Jenderal Mineral dan
              Batubara sesuai Peraturan Menteri ESDM Nomor 7 Tahun 2022 tentang
              Organisasi dan Tata Kerja Balai Besar Pengujian Mineral dan
              Batubara.
            </p>
            <button>BACA SELENGKAPNYA</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TentangKami;

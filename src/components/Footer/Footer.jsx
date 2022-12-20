import React from "react";
import TekmiraLogo from "../../pic/Image-Asset/icon/tekmiralogo.png";
import "./footer.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="footer-content1" data-aos="fade-up-right">
          <img src={TekmiraLogo} />
          <p>ⓒ 2023</p>
          <p>
            Akun resmi Pusat Penelitian dan Pengembangan Teknologi Mineral dan
            Batubara, Badan Litbang Kementerian ESDM
          </p>
        </div>
        <div className="footer-content2" data-aos="fade-up">
          <h1>Kontak Kami</h1>
          <h2>Balai Besar Pengujian Mineral dan Batubara</h2>
          <p>
            Jalan Jend. Sudirman No.623, Wr. Muncang, Kec. Bandung Kulon, Kota
            Bandung, Jawa Barat 40211
          </p>
          <p>Email : info.tekmira@esdm.go.id</p>
          <p>Telepon : +62 22 6030483</p>
        </div>
        <div className="footer-content3" data-aos="fade-up-left">
          <h1>Tautan Terkait</h1>
          <p>Kementerian ESDM</p>
          <p>Direktorat Jenderal Mineral dan Batubara</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

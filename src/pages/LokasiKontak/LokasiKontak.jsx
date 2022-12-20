import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import Lokasi from "../../pic/Image-Asset/lokasi.png";
import "./LokasiKontak.css";

const LokasiKontak = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="lokasi-container">
      <NavbarFix />
      <div className="lokasi-kontak">
        <div className="kontak" data-aos="fade-right">
          <h1>LOKASI DAN KONTAK KAMI</h1>
          <h2>Alamat</h2>
          <p>
            Jalan Jend. Sudirman No.623, Wr. Muncang, Kec. Bandung Kulon, Kota
            Bandung, Jawa Barat 40211
          </p>
          <h2>Telephone</h2>
          <p>+ 62 22 6030483</p>
          <h2>Email</h2>
          <p>info.tekmira@esdm.go.id</p>
          <h2>Fax</h2>
          <p>(+62-22) 6003373</p>
          <div className="sosmed-icon" data-aos="fade-up">
            <i class="bx bxl-facebook-square bx-lg"></i>
            <i class="bx bxl-twitter bx-lg"></i>
            <i class="bx bxl-instagram bx-lg"></i>
          </div>
        </div>
        <img src={Lokasi} data-aos="fade-left" />
      </div>
      <Footer />
    </div>
  );
};

export default LokasiKontak;

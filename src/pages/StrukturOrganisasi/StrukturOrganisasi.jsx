import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import Struktur from "../../pic/Image-Asset/struktur.png";
import "./StrukturOrganisasi.css";

const StrukturOrganisasi = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="struktur-container">
      <NavbarFix />
      <div className="struktur-title" data-aos="fade-up">
        <h1 data-aos="fade-down">STRUKTUR ORGANISASI tekMIRA</h1>
      </div>
      <div className="struktur-img" data-aos="zoom-in">
        <img src={Struktur} />
      </div>
      <Footer />
    </div>
  );
};

export default StrukturOrganisasi;

import React from "react";
import "./beranda.css";
import LayananKami from "../../components/LayananKami/LayananKami";
import TentangKami from "../../components/tentangKami/TentangKami";
import BerandaNews from "../../components/BerandaNews/BerandaNews";
import Footer from "../../components/Footer/Footer";
import HomeCarousel from "../../components/homeCarousel/HomeCarousel";
import NavbarFix from "../../components/Navbar/NavbarFix";

const Beranda = () => {
  return (
    <div className="beranda-container">
      <NavbarFix />
      <HomeCarousel />
      <LayananKami />
      <TentangKami />
      <BerandaNews />
      <Footer />
    </div>
  );
};

export default Beranda;

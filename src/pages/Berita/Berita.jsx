import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import "./Berita.css";
import BerandaNews from "../../components/BerandaNews/BerandaNews";

const Berita = () => {
  return (
    <div className="berita-container">
      <NavbarFix />
      <div className="berita-content">
        <BerandaNews />
      </div>
      <Footer />
    </div>
  );
};

export default Berita;

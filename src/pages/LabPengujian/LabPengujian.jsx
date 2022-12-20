import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import "./LabPengujian.css";
import Banner1 from "../../pic/Image-Asset/LayananBanner/lab1.png";
import Banner2 from "../../pic/Image-Asset/LayananBanner/lab2.png";
import Banner4 from "../../pic/Image-Asset/LayananBanner/lab4.png";

const LabPengujian = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="lab-container">
      <NavbarFix />
      <div className="banner-lab-satu" data-aos="fade-left">
        <img src={Banner1} />
      </div>
      <div className="banner-lab-dua" data-aos="fade-right">
        <img src={Banner2} />
      </div>
      <div className="banner-lab-tiga"></div>
      <div className="banner-lab-empat" data-aos="fade-right">
        <img src={Banner4} />
      </div>
      <Footer />
    </div>
  );
};

export default LabPengujian;

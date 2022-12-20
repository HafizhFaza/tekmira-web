import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import "./Maklumat.css";
import MaklumatPic from "../../pic/Image-Asset/maklumat.png";

const Maklumat = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="maklumat-container">
      <NavbarFix />
      <div className="maklumat-pic">
        <img src={MaklumatPic} data-aos="fade-up" />
      </div>
      <Footer />
    </div>
  );
};

export default Maklumat;

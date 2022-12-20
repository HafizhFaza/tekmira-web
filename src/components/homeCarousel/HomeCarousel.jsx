import React from "react";
import Banner from "../../pic/Image-Asset/carousel/Banner.png";
import "./homeCarousel.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const HomeCarousel = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <React.Fragment>
      <div className="banner-container">
        <img src={Banner} />
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          BALAI BESAR PENGUJIAN MINERAL DAN BATUBARA
        </h1>
      </div>
    </React.Fragment>
  );
};

export default HomeCarousel;

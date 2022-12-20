import React from "react";
import Tambang from "../../pic/Image-Asset/Tambang.png";
import Mineral from "../../pic/Image-Asset/Mineral.png";
import BatuBara from "../../pic/Image-Asset/Batubara.png";
import Lab from "../../pic/Image-Asset/Laboratorium.png";
import Produk from "../../pic/Image-Asset/Produk.png";
import Press from "../../pic/Image-Asset/Press.png";
import "./layanan.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";

const LayananKami = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <React.Fragment>
      <div className="container" data-aos="zoom-in-up">
        <h1>LAYANAN KAMI</h1>
        <div className="card-container">
          <div className="card-upper">
            <Link to="/layanan/penambanganBB">
              <div className="card">
                <img src={Tambang} />
                <h2>TAMBANG</h2>
              </div>
            </Link>
            <Link to="/layanan/pengujianmineral">
              <div className="card">
                <img src={Mineral} />
                <h2>MINERAL</h2>
              </div>
            </Link>
            <Link to="/layanan/pengujianbb">
              <div className="card">
                <img src={BatuBara} />
                <h2>BATUBARA</h2>
              </div>
            </Link>
          </div>
          <div className="card-lower">
            <Link to="/layanan/labpengujian">
              <div className="card">
                <img src={Lab} />
                <h2>LABORATORIUM</h2>
              </div>
            </Link>
            <Link to="/publikasi/berita">
              <div className="card">
                <img src={Press} />
                <h2>PRESS</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LayananKami;

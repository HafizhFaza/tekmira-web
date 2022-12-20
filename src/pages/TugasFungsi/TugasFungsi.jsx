import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import VisiIcon from "../../pic/Image-Asset/TugasIcon/visi.png";
import MisiIcon from "../../pic/Image-Asset/TugasIcon/Misi.png";
import FungsiIcon from "../../pic/Image-Asset/TugasIcon/Fungsi.png";
import TugasIcon from "../../pic/Image-Asset/TugasIcon/Tugas.png";
import Card1 from "../../pic/Image-Asset/TugasIcon/1.png";
import Card2 from "../../pic/Image-Asset/TugasIcon/2.png";
import Card3 from "../../pic/Image-Asset/TugasIcon/3.png";
import Card4 from "../../pic/Image-Asset/TugasIcon/4.png";
import "./TugasFungsi.css";

const TugasFungsi = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="tugas-container">
      <NavbarFix />
      <div className="tugas-card-container">
        <div className="tugas-card" data-aos="fade-down-right">
          <div className="card-image">
            <img src={Card1} />
          </div>
          <div className="card-icon">
            <img src={VisiIcon} />
          </div>
          <div className="card-content">
            <h1>VISI</h1>
            <p className="visi-desc">
              "Terwujudnya BLU tekMIRA yang Berdaya Saing Tinggi"
            </p>
          </div>
        </div>
        <div className="tugas-card" data-aos="fade-down-left">
          <div className="card-image">
            <img src={Card2} />
          </div>
          <div className="card-icon">
            <img src={MisiIcon} />
          </div>
          <div className="card-content">
            <h1>MISI</h1>
            <p>
              Meningkatkan kemampuan litbang di bidang pertambangan mineral dan
              batubara;
            </p>
            <p>
              Meningkatkan produktivitas layanan di bidang pertambangan mineral
              dan batubara;
            </p>
            <p>
              Mengembangkan platform bisnis digital berbasis pertambangan
              mineral dan batubara;
            </p>
            <p>
              Melaksanakan pengelolaan sumber daya sesuai dengan kaidah
              kelembagaan yang baik (good governance).
            </p>
          </div>
        </div>
        <div className="tugas-card" data-aos="fade-up-right">
          <div className="card-image">
            <img src={Card3} />
          </div>
          <div className="card-icon">
            <img src={TugasIcon} />
          </div>
          <div className="card-content">
            <h1>TUGAS</h1>
            <p className="tugas-desc">
              Melaksanakan penelitian, pengembangan, perekayasaan, pengkajian
              dan penerapan teknologi, serta pelayanan jasa di bidang Mineral
              dan Batubara.
            </p>
          </div>
        </div>
        <div className="tugas-card" data-aos="fade-up-left">
          <div className="card-image">
            <img src={Card4} />
          </div>
          <div className="card-icon">
            <img src={FungsiIcon} />
          </div>
          <div className="card-content">
            <h1>MISI</h1>
            <p>
              Penyiapan penyusunan kebijakan teknis, rencana dan program
              penelitian, pengembangan, perekayasaan, pengkajian dan penerapan
              teknologi, serta pelayanan jasa di bidang mineral dan batubara.
            </p>
            <p>
              Pelaksanaan dan pelayanan jasa penelitian, pengembangan,
              perekayasaan, pengkajian dan penerapan teknologi, pengelolaan
              pengetahuan dan inovasi serta pelayanan jasa, di bidang mineral
              dan batubara.
            </p>
            <p>
              Pemantauan, evaluasi dan pelaporan pelaksanaan penelitian,
              pengembangan, perekayasaan, pengkajian dan penerapan teknologi
              serta pelayanan jasa di bidang mineral dan batubara.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TugasFungsi;

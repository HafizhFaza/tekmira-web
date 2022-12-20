import React from "react";
import News1 from "../../pic/Image-Asset/news/news1.jpg";
import News2 from "../../pic/Image-Asset/news/menteri.png";
import News3 from "../../pic/Image-Asset/news/tekmirakomir1.png";
import News4 from "../../pic/Image-Asset/news/tempsnip2.png";
import CalendarIcon from "../../pic/Image-Asset/icon/Calendar-today.png";
import "./berandaNews.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";

const BerandaNews = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <React.Fragment>
      <div className="news-section">
        <div className="news-container" data-aos="zoom-in">
          <h1>BERITA TERBARU</h1>
          <div className="news-card-container">
            <div className="news-card" data-aos="fade-right">
              <img src={News1} />
              <div className="news-card-content">
                <h1>Technical Meeting Uji Profisiensi Putaran 2 Tahun 2022</h1>
                <p>
                  Rabu, 20 Juli 2022 telah dilaksanakan technical meeting untuk
                  peserta Uji Profisiensi putaran 2 Tahun 2022 bagi laboratorium
                  penguji batubara dan mineral nikel. Kegiatan dihadiri oleh
                  seluruh peser...
                </p>
                <div className="news-date">
                  <img src={CalendarIcon} />
                  <p>21 July 2022</p>
                </div>
                <Link to="/publikasi/berita/news1">
                  <button>BACA SELENGKAPNYA</button>
                </Link>
              </div>
            </div>
            <div className="news-card" data-aos="fade-left">
              <img src={News2} />
              <div className="news-card-content">
                <h1>
                  Buka Sidang ETWG G20, Menteri ESDM Tekankan Kebermanfaatan
                  Transisi Energi
                </h1>
                <p>
                  KEMENTERIAN ENERGI DAN SUMBER DAYA MINERAL REPUBLIK INDONESIA
                  SIARAN PERS NOMOR: 125.Pers/04/SJI/2022 Tanggal: 24 Maret 2022
                  Buka Sidang ETWG G20, Menteri ESDM Tekankan Kebermanfaatan
                  Transisi En...
                </p>
                <div className="news-date">
                  <img src={CalendarIcon} />
                  <p>24 March 2022</p>
                </div>
                <Link to="/publikasi/berita/news2">
                  <button>BACA SELENGKAPNYA</button>
                </Link>
              </div>
            </div>
            <div className="news-card" data-aos="fade-right">
              <img src={News3} />
              <div className="news-card-content">
                <h1>
                  Pertemuan BLU tekMIRA dengan Korean Mine Rehabilitation and
                  Resource Corporation (KOMIR)
                </h1>
                <p>
                  Pagi ini (21/2/22) dilaksanakan pertemuan antara Kepala BLU
                  tekMIRA dengan CEO Korean Mine Rehabilitation and Resource
                  Corporation (KOMIR) dan jajarannya di Jakarta.Pertemuan
                  tersebut dalam rangka men...
                </p>
                <div className="news-date">
                  <img src={CalendarIcon} />
                  <p>21 February 2022</p>
                </div>
                <Link to="/publikasi/berita/news3">
                  <button>BACA SELENGKAPNYA</button>
                </Link>
              </div>
            </div>
            <div className="news-card" data-aos="fade-left">
              <img src={News4} />
              <div className="news-card-content">
                <h1>LUSI – BAHAN BAKU BATERAI MASA DEPAN</h1>
                <p>
                  Pemanfaatan energi dunia saat ini masih didominasi oleh
                  pembakaran bahan bakar fosil yang memiliki dampak serius pada
                  pelepasan karbon yang tidak terkendali. Pelepasan karbon
                  tersebut menciptakan dime...
                </p>
                <div className="news-date">
                  <img src={CalendarIcon} />
                  <p>26 January 2022</p>
                </div>
                <Link to="/publikasi/berita/news4">
                  <button>BACA SELENGKAPNYA</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BerandaNews;

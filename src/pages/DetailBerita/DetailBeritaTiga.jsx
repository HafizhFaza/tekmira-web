import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarFix from "../../components/Navbar/NavbarFix";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import "./DetailBeritaTiga.css";
import NewsBanner from "../../pic/Image-Asset/newsDetail/news3.png";
import Sosmed from "../../pic/Image-Asset/newsDetail/sosmed.png";

const DetailBeritaTiga = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="detail-berita-container">
      <NavbarFix />
      <div className="news" data-aos="fade-down">
        <img src={NewsBanner} />
      </div>
      <div className="news-sosmed-and-content">
        <div className="news-content" data-aos="fade-up">
          <p>
            Pada hari 21 Februari 2022 Puslitbang tekMIRA bersama KPPN Bandung
            mengadakan Sosialisasi dan Bimbingan Teknis Persiapan Implementasi
            SAKTI full module. Acara ini dihadiri oleh seluruh operator pengguna
            SAKTI WEB pada satuan kerja Puslitbang tekMIRA.
            <br />
            <br />
            Kepala KPPN Bandung dalam sambutannya menyampaikan bahwa proses
            penggunaan SAKTI di Tahun 2021 akan diimplementasikan SAKTI full
            module merupakan bukti keseriusan DJPb dalam mendukung proses
            pelaksanaan anggaran yang akuntabel dan mengikuti perkembangan
            teknologi. Implementasi SAKTI ini yang merupakan salah satu program
            strategis pemerintah selain implementasi KKP dan Marketplace, Serta
            implementasi rekening virtual account.
            <br />
            <br />
            Dalam sosialisasi SAKTI kali ini, satker diinformasikan terkait
            dengan rencana penerapan implementasi SAKTI tahun 2021 yang dimana
            akan dimulai dengan pembelajaran mengenai Modul Pelaksanaan dan
            Modul Pelaporan SAKTI. Kedua modul tersebut diharapkan dapat di
            implementasikan ke seluruh satker ditahun 2022 dengan penyampaian
            SPM Gaji Induk Bulan Januari Tahun 2022.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailBeritaTiga;

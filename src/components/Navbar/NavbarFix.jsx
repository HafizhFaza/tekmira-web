import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoTekmira from "../../pic/Image-Asset/logotekmira.svg";
import "./NavbarFix.css";

const NavbarFix = () => {
  const [stateTentang, setStateTentang] = useState(false);
  const [stateLayanan, setStateLayanan] = useState(false);
  const [statePublikasi, setStatePublikasi] = useState(false);
  const [stateReformasi, setStateReformasi] = useState(false);
  const [stateTamasya, setStateTamasya] = useState(false);
  const [stateJurnal, setStateJurnal] = useState(false);

  const showDropdownTentang = () => {
    setStateTentang(true);
  };
  const hideDropdownTentang = () => {
    setStateTentang(false);
  };

  const showDropdownLayanan = () => {
    setStateLayanan(true);
  };
  const hideDropdownLayanan = () => {
    setStateLayanan(false);
  };

  const showDropdownPublikasi = () => {
    setStatePublikasi(true);
  };
  const hideDropdownPublikasi = () => {
    setStatePublikasi(false);
  };

  const showDropdownReformasi = () => {
    setStateReformasi(true);
  };
  const hideDropdownReformasi = () => {
    setStateReformasi(false);
  };

  const showDropdownTamasya = () => {
    setStateTamasya(true);
  };
  const hideDropdownTamasya = () => {
    setStateTamasya(false);
  };

  const showDropdownJurnal = () => {
    setStateJurnal(true);
  };
  const hideDropdownJurnal = () => {
    setStateJurnal(false);
  };

  return (
    <nav className="navbar">
      <img src={LogoTekmira} />
      <div className="nav-items">
        <a href="https://www.itenas.ac.id/">ITENAS</a>
        <Link to="/">Home</Link>
        <div
          className="tentang-menu"
          onMouseEnter={showDropdownTentang}
          onMouseLeave={hideDropdownTentang}
        >
          Tentang Kami
          {stateTentang ? (
            <ul className="tentang-dropdown" onMouseEnter={showDropdownTentang}>
              <Link to="/sejarah" className="link-tentang">
                Sejarah
              </Link>
              <Link to="/strukturorganisasi" className="link-tentang">
                Struktur Organisasi
              </Link>
              <Link to="/tugasfungsi" className="link-tentang">
                Tugas Fungsi
              </Link>
              <Link to="/lokasikontak" className="link-tentang">
                Lokasi dan Kontak
              </Link>
            </ul>
          ) : null}
        </div>
        <div
          className="layanan-menu"
          onMouseEnter={showDropdownLayanan}
          onMouseLeave={hideDropdownLayanan}
        >
          Layanan
          {stateLayanan ? (
            <ul className="layanan-dropdown" onMouseEnter={showDropdownLayanan}>
              <Link to="/layanan/penambanganBB">
                Penambangan Mineral dan Batubara
              </Link>
              <Link to="/layanan/pengujianmineral">
                Pengujian Pengolahan dan Pemurnian Mineral
              </Link>
              <Link to="/layanan/pengujianbb">
                Pengujian Pengembangan dan Pemanfaatan Batubara
              </Link>
              <Link to="/layanan/labpengujian">Laboratorium Pengujian</Link>
              <Link>
                <a
                  target="_self"
                  href="https://www.tekmira.esdm.go.id/uprof/login"
                >
                  Uji Profisiensi
                </a>
              </Link>
            </ul>
          ) : null}
        </div>
        <div
          className="publikasi-menu"
          onMouseEnter={showDropdownPublikasi}
          onMouseLeave={hideDropdownPublikasi}
        >
          Publikasi
          {statePublikasi ? (
            <ul
              className="publikasi-dropdown"
              onMouseEnter={showDropdownPublikasi}
            >
              <Link to="/publikasi/berita">Berita</Link>
              <Link>
                <a
                  target="_self"
                  href="https://www.esdm.go.id/id/booklet/booklet-etalase-tambang-2020"
                >
                  Booklet Etalase Tambang
                </a>
              </Link>
            </ul>
          ) : null}
        </div>
        <div
          className="reformasi-menu"
          onMouseEnter={showDropdownReformasi}
          onMouseLeave={hideDropdownReformasi}
        >
          Reformasi Birokrasi
          {stateReformasi ? (
            <ul
              className="reformasi-dropdown"
              onMouseEnter={showDropdownReformasi}
            >
              <Link>
                <a
                  target="_self"
                  href="https://www.tekmira.esdm.go.id/index.php/reformasi-birokrasi/survey-layanan-pelanggan"
                >
                  Survey Langganan Pelanggan
                </a>
              </Link>
              <Link to="/reformasi/maklumatpelayanan">Maklumat Pelayanan</Link>
              <Link>
                <a target="_self" href="https://ppid.esdm.go.id/index.php">
                  Keterbukaan Informasi Publik
                </a>
              </Link>
              <Link>
                {" "}
                <a target="_self" href="https://wbs.esdm.go.id/">
                  Whistle-Blowing
                </a>
              </Link>
              <Link>
                <a target="_self" href="https://Lapor.go.id/">
                  Lapor.go.id
                </a>
              </Link>
            </ul>
          ) : null}
        </div>
        <div
          className="tamasya-menu"
          onMouseEnter={showDropdownTamasya}
          onMouseLeave={hideDropdownTamasya}
        >
          Tamasya
          {stateTamasya ? (
            <ul className="tamasya-dropdown" onMouseEnter={showDropdownTamasya}>
              <Link>
                <a
                  target="_self"
                  href="https://klikminerba.tekmira.esdm.go.id/"
                >
                  Tambang Menyejahtrakan Masyarakat
                </a>
              </Link>
            </ul>
          ) : null}
        </div>
        <div
          className="jurnal-menu"
          onMouseEnter={showDropdownJurnal}
          onMouseLeave={hideDropdownJurnal}
        >
          Jurnal
          {stateJurnal ? (
            <ul className="jurnal-dropdown" onMouseEnter={showDropdownJurnal}>
              <Link>
                <a
                  target="_self"
                  href="https://jurnal.tekmira.esdm.go.id/index.php/imj"
                >
                  Indonesia Mining Journal
                </a>
              </Link>
              <Link>
                {" "}
                <a
                  target="_self"
                  href="https://jurnal.tekmira.esdm.go.id/index.php/minerba"
                >
                  Jurnal Teknologi Mineral dan Batubara
                </a>
              </Link>
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default NavbarFix;

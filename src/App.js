import "./App.css";
import React from "react";
import Beranda from "./pages/Beranda/Beranda";
import { Routes, Route } from "react-router-dom";
import Sejarah from "./pages/Sejarah/Sejarah";
import StrukturOrganisasi from "./pages/StrukturOrganisasi/StrukturOrganisasi";
import TugasFungsi from "./pages/TugasFungsi/TugasFungsi";
import LokasiKontak from "./pages/LokasiKontak/LokasiKontak";
import PenambanganBB from "./pages/PenambanganBB/PenambanganBB";
import PengujianMineral from "./pages/PengujianMineral/PengujianMineral";
import PengujianBb from "./pages/PengujianBB/PengujianBB";
import LabPengujian from "./pages/LabPengujian/LabPengujian";
import Berita from "./pages/Berita/Berita";
import DetailBerita from "./pages/DetailBerita/DetailBerita";
import DetailBeritaDua from "./pages/DetailBerita/DetailBeritaDua";
import DetailBeritaTiga from "./pages/DetailBerita/DetailBeritaTiga";
import DetailBeritaEmpat from "./pages/DetailBerita/DetailBeritaEmpat";
import Maklumat from "./pages/Maklumat/Maklumat";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/strukturorganisasi" element={<StrukturOrganisasi />} />
        <Route path="/tugasfungsi" element={<TugasFungsi />} />
        <Route path="/lokasikontak" element={<LokasiKontak />} />
        <Route path="/layanan/penambanganBB" element={<PenambanganBB />} />
        <Route
          path="/layanan/pengujianmineral"
          element={<PengujianMineral />}
        />
        <Route path="/layanan/pengujianbb" element={<PengujianBb />} />
        <Route path="/layanan/labpengujian" element={<LabPengujian />} />
        <Route path="/publikasi/berita" element={<Berita />} />
        <Route path="/publikasi/berita/news1" element={<DetailBerita />} />
        <Route path="/publikasi/berita/news2" element={<DetailBeritaDua />} />
        <Route path="/publikasi/berita/news3" element={<DetailBeritaTiga />} />
        <Route path="/publikasi/berita/news4" element={<DetailBeritaEmpat />} />
        <Route path="/reformasi/maklumatpelayanan" element={<Maklumat />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

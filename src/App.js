import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarTop from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import DetailProduk from "./components/Detail-Produk/detail-produk";
import ListProduk from "./components/List-Produk/list-produk";
import Beranda from "./pages/Beranda/beranda";
import KabarCard from "./components/Kabar-Card/kabar-card";
import PelakuEkraf from "./pages/Pelaku-Ekraf/pelaku-ekraf";
import Layanan from "./pages/Layanan/layanan";
import TentangKami from "./pages/Tentang-Kami/tentang-kami";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavbarTop />
      <Routes>
        {/* Add your routes here */}
        <Route path="/" element={<Beranda />} />
        <Route path="/kabar-card/" element={<KabarCard />} />
        <Route path="/pelaku-ekraf" element={<PelakuEkraf />} />
        <Route path="/list-produk/:collectionName" element={<ListProduk />} />
        <Route
          path="/detail-produk/:collectionName/:id"
          element={<DetailProduk />}
        />

        <Route path="/layanan" element={<Layanan />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

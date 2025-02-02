import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarTop from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Lazy load komponen
const Beranda = React.lazy(() => import("./pages/Beranda/beranda"));
const KabarCard = React.lazy(() =>
  import("./components/Kabar-Card/kabar-card")
);
const PelakuEkraf = React.lazy(() =>
  import("./pages/Pelaku-Ekraf/pelaku-ekraf")
);
const ListProduk = React.lazy(() =>
  import("./components/List-Produk/list-produk")
);
const DetailProduk = React.lazy(() =>
  import("./components/Detail-Produk/detail-produk")
);
const Layanan = React.lazy(() => import("./pages/Layanan/layanan"));
const TentangKami = React.lazy(() =>
  import("./pages/Tentang-Kami/tentang-kami")
);

function App() {
  return (
    <Router>
      <NavbarTop />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;

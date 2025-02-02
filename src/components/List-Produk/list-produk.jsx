import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db, perf } from "../../config/firebaseconfig"; // Pastikan Anda mengimpor konfigurasi Firebase
import { collection, query, getDocs } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./list-produk.css"; // Custom CSS
import { trace } from "firebase/performance"; // Import untuk Performance Monitoring

function ListProduk() {
  const { collectionName } = useParams(); // Mengambil nama koleksi dari URL params
  const [produkList, setProdukList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const firestoreTrace = trace(perf, "fetch_products_trace"); // Trace untuk pengambilan produk
      firestoreTrace.start(); // Mulai pengukuran waktu

      try {
        if (!collectionName) {
          console.error("Nama koleksi tidak ditemukan.");
          setLoading(false);
          firestoreTrace.stop(); // Stop trace
          return;
        }

        const q = query(collection(db, collectionName)); // Mengambil koleksi berdasarkan nama koleksi
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.warn("Tidak ada data di koleksi:", collectionName);
        }

        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProdukList(items);
        setLoading(false);
      } catch (error) {
        console.error("Error mengambil produk: ", error);
        setLoading(false);
      } finally {
        firestoreTrace.stop(); // Stop trace ketika data selesai diproses
      }
    };

    fetchProducts();
  }, [collectionName]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="geometric-loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <p className="loading-text">Loading Layanan Ekraf...</p>
      </div>
    );
  }

  if (produkList.length === 0) {
    return (
      <div className="no-products-container">
        <h1 className="title">{collectionName || "Koleksi Produk"}</h1>
        <div className="icon-empty">
          <i className="fas fa-box-open"></i> {/* Ikon kotak terbuka */}
        </div>
        <p className="no-products-text">
          Tidak ada produk untuk koleksi {collectionName}
        </p>
        <p className="no-products-suggestion">
          Jelajahi koleksi lainnya atau tambahkan produk baru!
        </p>
      </div>
    );
  }

  return (
    <Container className="text-center my-5">
      <h1 className="title">{collectionName || "Koleksi Produk"}</h1>
      <p className="subtitle">
        Menampilkan berbagai produk dari koleksi {collectionName}
      </p>
      <Row className="g-4">
        {produkList.map((produk) => (
          <Col key={produk.id} xs={12} md={4}>
            <Link
              to={`/detail-produk/${collectionName}/${produk.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card className="h-100 shadow-sm product-card">
                <Card.Img
                  variant="top"
                  src={produk.imageURL || "https://via.placeholder.com/150"}
                  alt={produk.namaProduk || "Nama Produk"}
                />
                <Card.Body>
                  <Card.Title className="product-name">
                    {produk.namaProduk || "Nama Produk"}
                  </Card.Title>
                  <Card.Text className="product-address">
                    {produk.alamat || "Alamat tidak tersedia"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListProduk;

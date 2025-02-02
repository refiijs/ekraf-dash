import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db, perf, trace } from "../../config/firebaseconfig"; // Import trace untuk pemantauan performa
import { doc, getDoc } from "firebase/firestore";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaPhone, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./detail-produk.css";

const DetailProduk = () => {
  const { collectionName, id } = useParams(); // Ambil ID dan collectionName dari URL
  const navigate = useNavigate();
  const [produk, setProduk] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduk = async () => {
      setLoading(true);

      // Memulai trace untuk pemantauan performa
      const fetchTrace = trace(perf, "fetch_produk_details");
      fetchTrace.start();

      try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduk(docSnap.data());
        } else {
          console.error("Produk tidak ditemukan");
        }
      } catch (error) {
        console.error("Error mengambil produk:", error);
      } finally {
        setLoading(false);
        fetchTrace.stop();
      }
    };

    fetchProduk();
  }, [id, collectionName]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="geometric-loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <p className="loading-text">Loading Detail Produk...</p>
      </div>
    );
  }

  if (!produk) {
    return <p className="text-center text-danger">Produk tidak ditemukan</p>;
  }

  return (
    <Container className="py-5">
      {/* Nama Produk */}
      <div className="text-center">
        <h2 className="fw-bold">{produk.namaProduk}</h2>
        <p>{produk.tagline}</p>
      </div>

      {/* Gambar Produk */}
      <Row className="mt-4">
        <Col md={12} className="text-center">
          <Card className="shadow-sm border-0">
            {produk.imageURL2 ? (
              <Card.Img
                src={produk.imageURL2}
                alt={produk.nama}
                className="rounded"
                onError={(e) => {
                  e.target.src = "/path/to/placeholder-image.jpg"; // Gambar fallback jika error
                }}
              />
            ) : (
              <div className="placeholder">No Image</div>
            )}
          </Card>
        </Col>
      </Row>

      {/* Deskripsi */}
      <Row className="mt-4">
        <Col md={4}>
          <h4 className="fw-bold">Kenal Lebih Dekat</h4>
        </Col>
        <Col md={8}>
          <p className="justified-text ">{produk.history}</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h4 className="fw-bold">Tentang {produk.namaProduk}</h4>
        </Col>
        <Col md={8}>
          <p className="justified-text">{produk.deskripsi}</p>
          <h5 className="fw-bold mt-3">Range Harga:</h5>
          <p className="fs-5">Rp {produk.rangeHarga}</p>
        </Col>
      </Row>

      {/* Kontak */}
      <Row className="mt-4">
        <Col md={4}>
          <h4 className="fw-bold">Get in Touch</h4>
        </Col>
        <Col md={3}>
          <p className="product-contact">
            <FaPhone className="me-2" />
            <a
              href={`https://wa.me/${produk.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="product-link"
            >
              {produk.whatsapp}
            </a>
          </p>
        </Col>
        <Col md={4}>
          <p className="product-insta">
            <FaInstagram className="me-2" />
            <a
              href={`https://instagram.com/${produk.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="product-link"
            >
              @{produk.instagram}
            </a>
          </p>
        </Col>
      </Row>

      {/* Lokasi */}
      <Row className="mt-4">
        <Col md={12}>
          <h4 className="fw-bold">Lokasi Kami</h4>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-0">
              <iframe
                src={produk.alamatURL}
                width="100%"
                height="400"
                className="map-frame"
                style={{ borderRadius: "10px", border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Lokasi pada Peta"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Padding tambahan sebelum footer */}
      <div className="padding-footer"></div>
    </Container>
  );
};

export default DetailProduk;

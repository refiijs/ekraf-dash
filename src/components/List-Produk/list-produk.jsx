import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../../config/firebaseconfig"; // Pastikan Anda mengimpor konfigurasi Firebase

import { collection, query, where, getDocs } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./list-produk.css"; // Custom CSS

function ListProduk() {
  const { collectionName } = useParams(); // Mengambil nama koleksi dari URL params
  const [produkList, setProdukList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!collectionName) {
          console.error("Nama koleksi tidak ditemukan.");
          setLoading(false);
          return;
        }

        const q = query(
          collection(db, collectionName) // Mengambil koleksi berdasarkan nama koleksi
        );

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
      }
    };

    fetchProducts();
  }, [collectionName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="text-center my-5">
      <h1 className="title">{collectionName || "Koleksi Produk"}</h1>
      <p className="subtitle">
        Menampilkan berbagai produk dari koleksi {collectionName}
      </p>

      <Row className="g-4">
        {produkList.length > 0 ? (
          produkList.map((produk) => (
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
          ))
        ) : (
          <p>Tidak ada produk untuk koleksi {collectionName}.</p>
        )}
      </Row>
    </Container>
  );
}

export default ListProduk;

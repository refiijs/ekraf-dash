import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../config/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaInstagram } from "react-icons/fa";
import "./detail-produk.css";

const DetailProduk = () => {
  const { collectionName, id } = useParams(); // Ambil ID dan collectionName dari URL
  const navigate = useNavigate(); // Untuk navigasi kembali
  const [produk, setProduk] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduk = async () => {
      setLoading(true);
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
      }
    };

    fetchProduk();
  }, [id, collectionName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!produk) {
    return <p>Produk tidak ditemukan</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* Bagian gambar */}
          <div className="image-card">
            {produk.imageURL ? (
              <img
                src={produk.imageURL}
                alt={produk.namaProduk}
                className="img-fluid rounded"
                onError={(e) => {
                  // Fallback jika gambar gagal dimuat
                  e.target.src = "/path/to/placeholder-image.jpg";
                }}
              />
            ) : (
              <div className="placeholder">No Image</div>
            )}
          </div>
        </div>
        {/* Detail produk */}
        <div className="col-md-6">
          <h2>{produk.namaProduk}</h2>
          <h5 className="text-muted-produk">
            Range Harga: {produk.rangeHarga}
          </h5>
          <p className="product-description">{produk.deskripsi}</p>
          <div className="contact-produk">
            <h6>
              <strong>Kontak:</strong>
            </h6>
            <p>
              <FaPhone />
              <a
                href={`https://wa.me/${produk.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="product-link"
              >
                {produk.whatsapp}
              </a>
            </p>
            <p>
              <FaInstagram />{" "}
              <a
                href={`https://instagram.com/${produk.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="product-link"
              >
                @{produk.instagram}
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Bagian alamat */}
      <div className="mt-5">
        <h4>Alamat Usaha</h4>
        <div className="card">
          <div className="card-body p-0">
            <iframe
              src={produk.alamatURL}
              width="100%"
              height="400"
              className="map-frame"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Lokasi pada Peta"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Padding tambahan sebelum footer */}
      <div className="padding-footer"></div>
    </div>
  );
};

export default DetailProduk;

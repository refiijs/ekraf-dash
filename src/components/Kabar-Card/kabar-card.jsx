import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, perf, trace } from "../../config/firebaseconfig"; // Impor trace dari konfigurasi Firebase
import "bootstrap/dist/css/bootstrap.min.css";
import "./kabar-card.css";

const KabarCard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Buat trace untuk pengambilan data
    const fetchDataTrace = trace(perf, "fetchNewsData");
    fetchDataTrace.start(); // Mulai pengukuran performa

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "news"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNews(data);
        fetchDataTrace.putMetric("documentCount", data.length); // Tambahkan metrik jumlah dokumen
        fetchDataTrace.stop(); // Akhiri pengukuran
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        fetchDataTrace.stop(); // Akhiri meskipun terjadi kesalahan
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="geometric-loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <p className="loading-text">Loading Kabar Ekraf...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mt-4">Kabar Ekraf Bogor</h1>
      <p className="centered-text">
        Berita dan peluang terkini untuk mendukung inovasi dan kolaborasi pelaku
        kreatif di Kota Bogor✨{" "}
      </p>
      <div className="row">
        {news.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={item.image || "https://via.placeholder.com/300x200"}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body">
                <div className="card-header-info">
                  <span className="badge bg-success">{item.category}</span>
                  <p className="text-ekraf">{item.date}</p>
                </div>
                <h5 className="card-title-kabar">{item.title}</h5>
                <p className="card-text-kabar">{item.description}</p>
              </div>

              <div className="card-footer bg-white border-0">
                <a
                  href={item.instagramUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More <span>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KabarCard;

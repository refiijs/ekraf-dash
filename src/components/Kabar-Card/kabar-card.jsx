import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseconfig"; // Path ke konfigurasi Firebase Anda
import "bootstrap/dist/css/bootstrap.min.css";
import "./kabar-card.css";

const KabarCard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data dari Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "news"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mt-4">Kabar Ekraf Bogor</h1>
      <p>
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

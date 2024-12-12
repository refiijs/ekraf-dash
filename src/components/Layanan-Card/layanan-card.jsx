import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseconfig.js";
import { FaCalendarAlt, FaClock, FaUserTie } from "react-icons/fa";
import "./layanan-card.css";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "layanan"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCards(data);
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
    <div className="container mt-5">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4 mb-5" key={card.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={card.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={card.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{card.title}</h5>
                <div className="service-card-text my-3">
                  <p className="service-info">
                    <FaCalendarAlt className="service-icon text-primary me-2" />
                    <strong>{card.date || "TBA"}</strong>
                  </p>
                  <p className="service-info">
                    <FaClock className="service-icon text-warning me-2" />
                    <strong>{card.time || "TBA"}</strong>
                  </p>
                  <p className="service-info">
                    <FaUserTie className="service-icon text-success me-2" />
                    <strong>{card.speaker || "Unknown Speaker"}</strong>
                  </p>
                  <em className="service-role text-muted">{card.role}</em>
                </div>

                <div className="mt-auto text-center">
                  <a
                    href={card.instagramUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-100"
                  >
                    Lihat Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;

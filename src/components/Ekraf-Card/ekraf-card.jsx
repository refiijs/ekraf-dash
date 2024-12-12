import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./ekraf-card.css";

function EkrafCard({ title, description, icon, collectionName }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (collectionName) {
      navigate(`/list-produk/${collectionName}`);
    } else {
      console.error("ID tidak ditemukan untuk navigasi.");
    }
  };

  return (
    <Card className="ekraf-card" onClick={handleClick}>
      <Card.Body>
        <div className="ekraf-card-icon">{icon}</div>
        <Card.Title className="ekraf-card-title">{title}</Card.Title>
        <Card.Text className="ekraf-card-description">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EkrafCard;

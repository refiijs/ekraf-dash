import React from "react";
import CardList from "../../components/Layanan-Card/layanan-card";
import "./layanan.css";

const Layanan = () => {
  return (
    <div>
      <h1 className="text-center mt-4">
        Tingkatkan Keterampilan, Raih Kesuksesan!
      </h1>
      <p>
        Kami hadir untuk membantu Anda mewujudkan potensi terbaik melalui
        program pelatihan berkualitas{" "}
      </p>
      <CardList />
    </div>
  );
};

export default Layanan;

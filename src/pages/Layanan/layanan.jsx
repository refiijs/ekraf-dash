import React from "react";
import CardList from "../../components/Layanan-Card/layanan-card";
import "./layanan.css";

const Layanan = () => {
  return (
    <div>
      <h1 className="text-center mt-4">
        Jelajahi Kreativitas, Kembangkan Keterampilan!
      </h1>
      <p>
        Kami menghadirkan berbagai kelas pelatihan yang dirancang untuk membantu
        Anda menguasai keterampilan baru dan mengembangkan potensi terbaik.
        Dengan program pelatihan berkualitas, kami siap mendukung perjalanan
        Anda menuju kesuksesan. Temukan kelas yang sesuai dengan minat Anda,
        belajar langsung dari para profesional, dan mulailah perjalanan kreatif
        Anda bersama kami!{" "}
      </p>
      <CardList />
    </div>
  );
};

export default Layanan;

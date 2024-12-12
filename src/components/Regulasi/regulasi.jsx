import React, { useState } from "react"; // Impor useState
import "bootstrap/dist/css/bootstrap.min.css";
import "./regulasi.css";

const RegulasiPage = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const toggleCard = (index) => {
    if (openCardIndex === index) {
      setOpenCardIndex(null); // Close the card if it's already open
    } else {
      setOpenCardIndex(index); // Open the clicked card
    }
  };

  const regulations = [
    {
      category: "Undang-Undang",
      items: ["Undang-Undang Nomor 24 Tahun 2019 Tentang Ekonomi Kreatif"],
    },
    {
      category: "Peraturan Pemerintah",
      items: [
        "Peraturan Pemerintah Nomor 24 Tahun 2022 Tentang Peraturan Pelaksanaan Undang-Undang Nomor 24 Tahun 2019 Tentang Ekonomi Kreatif",
      ],
    },
    {
      category: "Peraturan Presiden",
      items: [
        "Peraturan Presiden Nomor 142 Tahun 2018 Tentang Rencana Induk Pengembangan Ekonomi Kreatif Nasional Tahun 2018-2025",
      ],
    },
    {
      category: "Peraturan Menteri",
      items: [
        "Peraturan Menteri Pariwisata dan Ekonomi Kreatif/Kepala Badan Pariwisata dan Ekonomi Kreatif Republik Indonesia Nomor 12 Tahun 2020 Tentang Rencana Strategis Kementerian Pariwisata dan Ekonomi Kreatif Tahun 2020-2024",
      ],
    },
    {
      category: "Peraturan Daerah",
      items: [
        "Peraturan Daerah Provinsi Jawa Barat Nomor 15 Tahun 2017 Tentang Pengembangan Ekonomi Kreatif",
      ],
    },
    {
      category: "Peraturan Gubernur",
      items: [
        "Peraturan Gubernur Provinsi Jawa Barat Nomor 59 Tahun 2019 Tentang Peraturan Pelaksanaan Peraturan Daerah Provinsi Jawa Barat Nomor 5 Tahun 2017 Tentang Pengembangan Ekonomi Kreatif",
      ],
    },
    {
      category: "Peraturan Wali Kota",
      items: [
        "Peraturan Wali Kota Bogor Nomor 139 Tahun 2021 Tentang Forum Ekonomi Kreatif Kota Bogor",
      ],
    },
    {
      category: "Keputusan Wali Kota",
      items: [
        "Keputusan Wali Kota Bogor Nomor 556/Kep.889-Disparbud/2021 tentang Pembentukan Forum Ekonomi Kreatif Kota Bogor Periode Tahun 2021-2023",
        "Keputusan Wali Kota Bogor Nomor 100.3.3/Kep.360-Disparbud/2023 tentang Pembentukan Forum Ekonomi Kreatif Kota Bogor Periode Tahun 2023-2026",
      ],
    },
  ];

  return (
    <div>
      <div className="regulasi-container mt-5">
        <h3 className="regulasi-title text-center mb-3">Ekonomi Kreatif</h3>
        <p className="regulasi-text">
          Merujuk pada Undang-Undang Nomor 24 Tahun 2019, Ekonomi kreatif adalah
          perwujudan nilai tambah dari kekayaan intelektual yang bersumber dari
          kreativitas manusia yang berbasis warisan budaya, ilmu pengetahuan,
          dan/atau teknologi. Di Pemerintahan Kota Bogor, urusan ekonomi kreatif
          diampu oleh Dinas Pariwisata dan Kebudayaan Kota Bogor.
        </p>

        <h2 className="text-center mb-4">Tugas Ekonomi Kreatif</h2>
        <ul className="list-group">
          <li className="list-group-item">
            Perumusan konsep kebijakan daerah di bidang ekonomi kreatif;
          </li>
          <li className="list-group-item">
            Penyusunan rencana kerja di bidang ekonomi kreatif;
          </li>
          <li className="list-group-item">
            Pengoordinasian pelaksanaan kegiatan di bidang ekonomi kreatif;
          </li>
          <li className="list-group-item">
            Pembinaan dan pengoordinasian pelaksanaan kebijakan daerah di bidang
            ekonomi kreatif;
          </li>
          <li className="list-group-item">
            Pemantauan dan evaluasi pelaksanaan kebijakan daerah di bidang
            ekonomi kreatif;
          </li>
          <li className="list-group-item">
            Pelaksanaan evaluasi dan pelaporan kegiatan di bidang ekonomi
            kreatif;
          </li>
          <li className="list-group-item">
            Pelaksanaan fungsi lain yang diberikan oleh Kepala Perangkat Daerah
            yang berkaitan dengan tugasnya.
          </li>
        </ul>
      </div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Dasar Hukum Ekonomi Kreatif</h2>
        <div className="row">
          {regulations.map((regulation, index) => (
            <div className="col-md-12 mb-4" key={index}>
              <div className="card border-primary">
                {/* Header */}
                <div
                  className="card-header d-flex justify-content-between align-items-center toggle-header"
                  onClick={() => toggleCard(index)}
                >
                  {regulation.category}
                  <span>{openCardIndex === index ? "-" : "+"}</span>
                  {/* Toggle icon */}
                </div>

                {/* Body */}
                {openCardIndex === index && (
                  <div className="card-body">
                    <ul>
                      {regulation.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegulasiPage;

import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { groupedSubsektors } from "./sub-sektor";
import RegulasiPage from "../../components/Regulasi/regulasi";
import "./tentang-kami.css";
import img1 from "../../Assets/img/about-ekraf.png";
import img2 from "../../Assets/img/bima-arya.png";
import img3 from "../../Assets/img/sandiaga-uno.png";
import img4 from "../../Assets/img/ridwan-kamil.png";
import img5 from "../../Assets/img/yoris-sebastian.png";

const TentangKami = () => {
  return (
    <Container className="tentang-kami">
      {/* Section: Mengenal Ekraf */}
      <Row className="align-items-center mengenal-ekraf">
        <Col md={4}>
          <div className="image-tentang-kami">
            <img src={img1} alt="about-ekraf" />
          </div>
        </Col>
        <Col md={6} className="align-self-start">
          <h2>Mengenal Ekraf</h2>
          <p>
            Ekonomi Kreatif merupakan motor penggerak kreativitas dan inovasi
            dalam berbagai industri. Kolaborasi dan keberlanjutan adalah kunci
            keberhasilan ekonomi kreatif.
          </p>
          <p>
            Bogor adalah kota penuh inspirasi, di mana setiap pelaku ekonomi
            kreatif dapat berkembang dengan dukungan pemerintah dan komunitas.
            Mari bersama-sama kita kembangkan potensi, ciptakan karya inovatif,
            dan majukan Ekraf Kota Bogor untuk masa depan yang lebih baik!
          </p>
        </Col>
      </Row>

      <section className="kata-tokoh">
        <h3>Kata Tokoh</h3>
        <Carousel
          interval={null}
          prevIcon={<span className="carousel-control-prev-icon" />}
          nextIcon={<span className="carousel-control-next-icon" />}
        >
          <Carousel.Item>
            <div className="tokoh-container">
              <Card className="tokoh-card">
                <Card.Body className="card-body">
                  <img
                    src={img2} // Ganti dengan link atau path gambar
                    alt="Bima Arya"
                    className="tokoh-image" // Menggunakan kelas CSS untuk styling
                  />
                  <Card.Title>Bima Arya</Card.Title>
                  <p className="tokoh-position">Wali Kota Bogor 2014-2024</p>
                  <Card.Text className="card-ekraf-text">
                    Kolaborasi adalah kunci keberhasilan ekonomi kreatif dalam
                    mendorong inovasi dan memperkuat pertumbuhan ekonomi kota.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="tokoh-card">
                <Card.Body className="card-body">
                  <img
                    src={img3} // Ganti dengan link atau path gambar
                    alt="Sandiaga Uno"
                    className="tokoh-image" // Menggunakan kelas CSS untuk styling
                  />
                  <Card.Title>Sandiaga Uno</Card.Title>
                  <p className="tokoh-position">
                    Menteri Pariwisata dan Ekonomi Kreatif Indonesia 2020-2024
                  </p>
                  <Card.Text className="card-ekraf-text">
                    Ekonomi kreatif adalah kunci kebangkitan ekonomi nasional.
                    Kita harus mendorong kolaborasi, inovasi, dan digitalisasi
                    di setiap sektor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="tokoh-container">
              <Card className="tokoh-card">
                <Card.Body className="card-body">
                  <img
                    src={img5} // Ganti dengan link atau path gambar
                    alt="Yoris Sebastian"
                    className="tokoh-image" // Menggunakan kelas CSS untuk styling
                  />
                  <Card.Title>Yoris Sebastian</Card.Title>
                  <p className="tokoh-position">Creativepreneur</p>
                  <Card.Text className="card-ekraf-text">
                    Saat ini industri kreatif tidak hanya 'awareness', tapi
                    sudah menjadi sebuah tren untuk berwirausaha.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="tokoh-card">
                <Card.Body className="card-body">
                  <img
                    src={img4} // Ganti dengan link atau path gambar
                    alt="Ridwan Kamil"
                    className="tokoh-image" // Menggunakan kelas CSS untuk styling
                  />
                  <Card.Title>Ridwan Kamil</Card.Title>
                  <p className="tokoh-position">
                    Gubernur Jawa Barat 2018-2023
                  </p>
                  <Card.Text className="card-ekraf-text">
                    Kota yang baik adalah kota yang memberi ruang bagi ekonomi
                    kreatif untuk tumbuh dan berkembang. Ekonomi kreatif adalah
                    cara untuk membuat kota lebih hidup dan berkelanjutan
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      <section>
        <div>
          <RegulasiPage />
        </div>
      </section>

      <section className="subsektor-container">
        <div>
          <h2 className="subsektor-title">17 Subsektor Ekonomi Kreatif</h2>

          <Carousel indicators={false} interval={3000} controls={true}>
            {groupedSubsektors.map((group, index) => (
              <Carousel.Item key={index}>
                <div className="subsektor-icon-item-wrapper d-flex justify-content-center">
                  {group.map((subsektor, idx) => (
                    <div key={idx} className="subsektor-icon-item mx-2">
                      <div className="subsektor-icon">{subsektor.icon}</div>
                      <p className="subsektor-text">{subsektor.name}</p>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </Container>
  );
};

export default TentangKami;

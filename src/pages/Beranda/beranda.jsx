import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import EkrafCard from "../../components/Ekraf-Card/ekraf-card";
import "./beranda.css";
import img1 from "../../Assets/img/artikel1.png";
import img2 from "../../Assets/img/artikel2.png";
import img3 from "../../Assets/img/artikel3.png";

function Beranda() {
  const scrollToSection = () => {
    document
      .getElementById("target-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="hero-section text-left">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>
                <span class="word1"> Bangkitkan semangat</span>{" "}
                <span class="word2">kreatifmu,</span>{" "}
                <span class="word1">temukan potensi</span>{" "}
                <span class="word2">tanpa batas,</span>{" "}
                <span class="word1">dan wujudkan karya</span>{" "}
                <span class="word2">luar biasa!</span>{" "}
              </h1>

              <p className="author">Karya Lokal, Prestasi Global</p>
              <Button
                variant="primary"
                className="tampil-button"
                onClick={scrollToSection}
              >
                Yuk Jelajahi
              </Button>
            </Col>
            <Col md={4}>
              {/* <div className="hero-image">
                <img src={img4} alt="Hero Illustration" />
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>

      <section id="target-section" className="ekraf-section text-center">
        <Container>
          <h2>Ekrafkan Bogor</h2>
          <p>
            Dari seni dan budaya, desain fashion hingga kuliner khas, Bogor
            memiliki 17 subsektor ekraf yang memukau. Temukan cerita di balik
            setiap subsektornya!
          </p>
          <Row>
            <Col md={4}>
              <EkrafCard
                collectionName="Kuliner"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M368 128h.09m111.46-32h-91.06l8.92-35.66l38.32-13.05c8.15-2.77 13-11.43 10.65-19.71a16 16 0 0 0-20.54-10.73l-47 16a16 16 0 0 0-10.36 11.27L355.51 96H224.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 224 128h2.75l1 8.66A8.3 8.3 0 0 0 236 144c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 0 1 371 218.07a123.4 123.4 0 0 1 10.12 29.51a7.83 7.83 0 0 0 3.29 4.88a72 72 0 0 1 26.38 86.43a7.92 7.92 0 0 0-.15 5.53A96 96 0 0 1 416 376c0 22.34-7.6 43.63-21.4 59.95a80.1 80.1 0 0 1-28.78 21.67a8 8 0 0 0-4.21 4.37a108.2 108.2 0 0 1-17.37 29.86a2.5 2.5 0 0 0 1.9 4.11h49.21a48.22 48.22 0 0 0 47.85-44.14L477.4 128h2.6a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M108.69 320a23.87 23.87 0 0 1 17 7l15.51 15.51a4 4 0 0 0 5.66 0L162.34 327a23.87 23.87 0 0 1 17-7h196.58a8 8 0 0 0 8.08-7.92V312a40.07 40.07 0 0 0-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0 0 16 312a8 8 0 0 0 8 8Zm77.25 32a8 8 0 0 0-5.66 2.34l-22.14 22.15a20 20 0 0 1-28.28 0l-22.14-22.15a8 8 0 0 0-5.66-2.34h-69.4a15.93 15.93 0 0 0-15.76 13.17A65 65 0 0 0 16 376c0 30.59 21.13 55.51 47.26 56c2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55c8.85-10.69 14.73-24.35 17.16-39.47c26.13-.47 47.26-25.39 47.26-56a65 65 0 0 0-.9-10.83A15.93 15.93 0 0 0 367.34 352Z"
                    ></path>
                  </svg>
                }
                title="Kuliner"
                description="Menciptakan cita rasa dan inovasi untuk memuaskan lidah."
              />
            </Col>

            <Col md={4}>
              <EkrafCard
                collectionName="Fashion"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" fillRule="evenodd">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                      <path
                        fill="currentColor"
                        d="M15.847 3c.172 0 .344.003.508.065a2 2 0 0 1 1.472 2.218l-.158 1.104l1.059.264A3 3 0 0 1 21 9.561V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9.562a3 3 0 0 1 2.272-2.91l1.059-.265l-.158-1.104a2 2 0 0 1 1.472-2.218C7.81 3.003 7.981 3 8.153 3zM12 7.4L13.92 5h-3.84zm3.71-1.436L13.553 8.66l1.652 1.826l.503-4.52Zm-7.42 0l.504 4.521l1.652-1.826l-2.155-2.695ZM16 14a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2z"
                      ></path>
                    </g>
                  </svg>
                }
                title="Fashion"
                description="Sentuhan Lokal yang Memikat, Gaya Global yang Memesona."
              />
            </Col>

            <Col md={4}>
              <EkrafCard
                collectionName="Kriya"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" fillRule="evenodd">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                      <path
                        fill="currentColor"
                        d="M10.2 3c0-1.105.696-2 1.8-2s1.8.895 1.8 2l.2 8c0-.364.5-5.66.5-6c0-1 .595-2 1.7-2s1.8.895 1.8 2v7.268c.083-.048.3-3.846.3-4.268c0-1 .263-2 1.2-2c.938 0 1.5.895 1.5 2v6a8 8 0 0 1-8 8h-.674a8 8 0 0 1-7.155-4.422l-2.842-5.684c-.364-.728-.084-1.668.72-2.024c.423-.187.897-.292 1.343-.15c1.108.353.944.86 1.608 1.49V5c0-1.105.695-2 1.8-2c1 0 1.609 1.315 1.7 2c.125.938.5 5.634.5 5.998z"
                      ></path>
                    </g>
                  </svg>
                }
                title="Kriya"
                description="Keahlian dan keindahan dalam setiap karya buatan tangan."
              />
            </Col>
          </Row>
        </Container>

        <Button variant="primary" className="tampil-button">
          <Link
            to="/pelaku-ekraf"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Tampilkan Semua
          </Link>
        </Button>
      </section>

      <section className="potensi-section text-center">
        <Container>
          <h2>Kabar Ekraf Bogor</h2>
          <Carousel interval={3000}>
            <Carousel.Item>
              <img src={img2} alt="Hero Illustration" />
              <Carousel.Caption>
                <h3>KISRUHDOTCOM</h3>
                <p>Musik Lokal Kota Bogor</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={img1} alt="Hero Illustration" />
              <Carousel.Caption>
                <h3>Batik Day</h3>
                <p>Hari Batik Nasional</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={img3} alt="Hero Illustration" />
              <Carousel.Caption>
                <h3>Bogor Cinema</h3>
                <p>Sub Sektor Film, Animasi, dan Video.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <Button variant="primary" className="tampil-button">
          <Link
            to="/kabar-card/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Tampilkan Semua
          </Link>
        </Button>
      </section>
    </div>
  );
}

export default Beranda;

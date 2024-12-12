import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"; // Import react-icons
import "./footer.css";

function Footer() {
  return (
    <footer className="footer text-center text-lg-start">
      <section className="footer-social d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="footer-social-text me-5 d-none d-lg-block">
          <span>Jangan Lewatkan Update! Ikuti Kami di Media Sosial!</span>
        </div>

        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com/pages/Dinas-Pariwisata-Dan-Kebudayaan-Kota-Bogor/1983898771937292"
            className="footer-icon me-4 text-reset"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/parbudkotabogor"
            className="footer-icon me-4 text-reset"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/disparbudkotabogor"
            className="footer-icon me-4 text-reset"
          >
            <FaInstagram />
          </a>
        </div>
      </section>

      <section className="footer-content">
        <div className="footer-container container text-center text-md-start mt-5">
          <div className="footer-row row mt-3">
            <div className="footer-column col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="footer-title text-uppercase fw-bold mb-4">
                Dinas Pariwisata dan Kebudayaan Pemerintah Kota Bogor
              </h6>
              <p>
                Jalan Pandu Raya No. 45, Tegal Gundil, Bogor Tengah, Tegal
                Gundil, Bogor Utara, Kota Bogor Jawa Barat - Indonesia 16121
              </p>
            </div>

            <div className="footer-column col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="footer-subtitle fw-bold mb-4">Tentang</h6>
              <p>
                <a href="/tentang-kami" className="footer-link text-reset">
                  Mengenal Ekraf
                </a>
              </p>
              <p>
                <a href="/tentang-kami" className="footer-link text-reset">
                  Tugas Ekraf
                </a>
              </p>
              <p>
                <a href="/tentang-kami" className="footer-link text-reset">
                  Dasar Hukum Ekraf
                </a>
              </p>
            </div>

            <div className="footer-column col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="footer-subtitle fw-bold mb-4">Layanan</h6>
              <p>
                <a href="/layanan" className="footer-link text-reset">
                  Layanan Ekraf
                </a>
              </p>
            </div>

            <div className="footer-column col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="footer-subtitle fw-bold mb-4">Kontak Kami</h6>
              <p>
                <FaEnvelope className="me-3" />
                <a
                  href="mailto:parbudkotabogor@gmail.com"
                  className="footer-contact-link"
                >
                  parbudkotabogor@gmail.com
                </a>
              </p>
              <p>
                <FaEnvelope className="me-3" />
                <a
                  href="mailto:disparbud@kotabogor.go.id"
                  className="footer-contact-link"
                >
                  disparbud@kotabogor.go.id
                </a>
              </p>
              <p>
                <FaPhone className="me-3" />
                <a href="tel:+622518328827" className="footer-contact-link">
                  +62251-8328827
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-copyright text-center p-4">
        © 2024 Copyright: Pemerintahan Kota Bogor
      </div>
    </footer>
  );
}

export default Footer;

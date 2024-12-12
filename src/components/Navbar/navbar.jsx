import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../Assets/img/logo-disparbud.png";

function NavbarTop() {
  return (
    <Navbar bg="custom" expand="lg" data-bs-theme="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo Disparbud" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Beranda
            </Nav.Link>
            <Nav.Link as={Link} to="/pelaku-ekraf">
              Pelaku Ekraf
            </Nav.Link>
            <Nav.Link as={Link} to="/layanan">
              Layanan
            </Nav.Link>
            <Nav.Link as={Link} to="/tentang-kami">
              Tentang Kami
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;

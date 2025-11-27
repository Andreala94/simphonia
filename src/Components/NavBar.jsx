import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/logo_simphoniastore.png';
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";


function NavBar() {
  return (
    <Container fluid className="p-0 m-0">
      <Navbar expand="lg" className="bg-light shadow-sm py-1 ">
        <Container>
          {/* Brand con logo */}
          <Navbar.Brand href="#" className="d-flex align-items-center" style={{height: '100px'}}>
            {/* Logo grande desktop */}
            <img
              src={logo}
              alt="Logo"
              className=" d-none d-lg-block"
              style={{ height: "300%", width: "auto", marginRight: "30px", objectFit: "contain" }}
              onClick={() => window.location.href = '/'}
              />
            {/* Logo più piccolo mobile */}
            <img
              src={logo}
              alt="Logo"
              className="d-lg-none"
              style={{ height: "80px", width: "auto", marginRight: "15px", objectFit: "contain" }}
            />

          </Navbar.Brand>

          {/* Toggle per menu mobile */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Link della navbar */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto" style={{fontWeight: '600'}}>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/contatti">Contatti</Nav.Link>
              <Nav.Link href="#chisiamo">Chi Siamo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
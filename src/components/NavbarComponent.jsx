import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#d2b48c" }}>
        <Container>
          <Navbar.Brand href="#home" className="mx-auto">
            Logo Atma Kitchen
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Product</Nav.Link>
              <Nav.Link href="#link">Order</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>

            <Nav className="justify-content-end">
              <Nav.Link href="#home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.742 9.742a5.5 5.5 0 1 0-1.5 1.5l3.793 3.793a1 1 0 0 0 1.414-1.414l-3.793-3.793zm1.474-5.418a4.5 4.5 0 1 1-7.56 5.162L.354 12.94a1 1 0 1 1-1.414-1.414l3.793-3.793a4.5 4.5 0 0 1 7.56-5.162z"
                  />
                </svg>{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 0 1 5 5H3a5 5 0 0 1 5-5z" />
                </svg>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Bean And Brew</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/booking">Booking</Nav.Link>
            <Nav.Link href="/takeaway">Takeaway</Nav.Link>
            <Nav.Link href="/Login">Sign Up Or Login</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <Nav.Link href="/harrogate">Harrogate</Nav.Link>
              
              <Nav.Link href="/knaresboroughcastle">
              
              Knaresborough Castle
              </Nav.Link>
              <Nav.Link href="/leeds">Leeds</Nav.Link>
              <NavDropdown.Divider />
              
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
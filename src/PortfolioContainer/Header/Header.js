import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Nav className="mr-auto nav_bar_wrapper">
          <Link to="/about" >About</Link>
          <Link to="/contact" >Contact Me</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;

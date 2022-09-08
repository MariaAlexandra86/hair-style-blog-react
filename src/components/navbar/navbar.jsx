import React from "react";
import { Link } from "react-router-dom";
import { Navbar as NavbarBS, Container, Nav } from "react-bootstrap"
import './navbar.css';


const Navbar = () => {
  return (
    <NavbarBS expand="lg" variant="dark" className="navbar-transparent">
      <Container fluid>
        <NavbarBS.Brand><h1>All About Hair</h1></NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="navbarScroll" />
        <NavbarBS.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/galery">Galery</Link>
            <Link className="nav-link" to="/products">Products</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}

export default Navbar;

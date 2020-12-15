import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const NavbarCustom = () => {
  return (
    <div>
      <Navbar className="celeste" expand="lg">
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} className="m-2" width="180px" height="30px" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant="outline-light">Cerrar Sesión</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarCustom;

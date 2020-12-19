import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ButtonRegistro from "../../components/Botones/ButtonRegistro";
import ButtonInicioSesion from "../../components/Botones/ButtonInicioSesion";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const NavbarCustom = () => {
  return (
    <div>
      <Navbar className="celeste" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              className="m-2"
              width="180px"
              height="30px"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ButtonRegistro />
            <ButtonInicioSesion />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarCustom;

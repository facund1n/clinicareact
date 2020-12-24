import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import setLogINfalse from "../../services/setLogIN";
import { useHistory } from "react-router-dom";

const NavbarCustom = () => {
  let history = useHistory();
  const [isLogIN, setIsLogIN] = useState(
    JSON.parse(localStorage.getItem("logIN"))
  );
  useEffect(() => {
    setIsLogIN();

    if (isLogIN === false) {
      alert("Debe Iniciar Sesión");
      history.push("/");
    } else {
      history.push("/panel-medicos");
    }
  }, [history, isLogIN]);

  return (
    <div>
      <Navbar className="verde" expand="lg">
        <Link to="/">
          <Navbar.Brand>
            <img
              src={logo}
              className="m-2"
              width="180px"
              height="30px"
              alt="logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant="outline-light" onClick={() => setLogINfalse()}>
              Cerrar Sesión
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarCustom;

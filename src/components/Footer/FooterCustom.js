import React from "react";
import { Container, Row } from "react-bootstrap";
import logofooter from "../../img/logofooter.png";

const FooterCustom = () => {
  return (
    <>
      <footer>
        <Container className="mt-5 py-3 ">
          <Row>
            <img src={logofooter} alt="logofooter" className="pl-2" />
            <p className="p-4 lead text-white text-center m-auto">
              Instituto Técnico Para La Acreditación De Instituciones De Salud
            </p>
            <p className="p-4 lead text-white text-center m-auto" href="#">
              Todos los derechos reservados | Grupo-6
            </p>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default FooterCustom;

import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import mujer2 from "../img/mujer2.png";

const Objetivo = () => {
  return (
    <>
      <Container>
        <div className="text-white mx-auto d-none d-sm-block d-md-block d-lg-block">
          <Row>
            <Col sm={6} className="align-self-center">
              <img src={mujer2} alt="mujer2" className="img-fluid" />
            </Col>
            <Col sm={6} className="align-self-center ">
              <p className="sombra font-weight-bold lead">
                El objetivo continuo de nuestro Centro Médico ha sido brindar
                atención médica primaria integral. Cuando tenga necesidades de
                atención médica, debe acudir a un médico que escuche y responda,
                un profesional experimentado que conozca el campo y pueda
                diagnosticar y tratar sus necesidades de manera efectiva un
                personal amable que lo asesore sobre las mejores formas de
                mantener y mejorar su salud.
              </p>
              <Button variant="light" className="text-center p-2 px-5">
                <div className="lead text-dark nav nav-link">Contacto</div>
              </Button>
            </Col>
          </Row>
        </div>
        <div className="text-white mx-auto d-block d-sm-none">
          <Row>
            <Col className="align-self-center">
              <p className="sombra font-weight-bold lead">
                El objetivo continuo de nuestro Centro Médico ha sido brindar
                atención médica primaria integral. Cuando tenga necesidades de
                atención médica, debe acudir a un médico que escuche y responda,
                un profesional experimentado que conozca el campo y pueda
                diagnosticar y tratar sus necesidades de manera efectiva un
                personal amable que lo asesore sobre las mejores formas de
                mantener y mejorar su salud.
              </p>
              <Button variant="light" className="text-center p-2 px-5 shadow">
                <div className="lead text-dark nav nav-link">Contacto</div>
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Objetivo;

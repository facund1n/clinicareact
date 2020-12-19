import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import heart from "../../img/heart.png";
import child from "../../img/child.png";

const Cardiologia = () => {
  return (
    <>
      <Container>
        <div className="text-white mx-auto d-none d-sm-block d-md-block d-lg-block">
          <Row>
            <Col className="align-self-center">
              <h1 className="sombra font-weight-bold ">Cardiología</h1>
              <p className="sombra font-weight-bold lead">
                El Servicio de Cardiología está constituido por un equipo de
                expertos en continua actualización y formación, actividad
                científica y participación en las principales sociedades
                científicas.
              </p>
              <img src={heart} alt="heart" height="140px" />
              <h1 className="sombra font-weight-bold ">Pediatría</h1>
              <p className="sombra font-weight-bold lead">
                Coordinar la atención de seguimiento con los pediatras de
                nuestra clínica antes o después del alta hospitalaria o del
                parto. Exámenes físicos preescolares, deportivos y de rutina.
              </p>

              <img src={child} alt="child" height="140px" />
            </Col>
          </Row>
        </div>
        <div className="text-white mx-auto d-block d-sm-none">
          <Row>
            <Col className="align-self-center">
              <h1 className="sombra font-weight-bold ">Cardiología</h1>
              <p className="sombra font-weight-bold lead">
                El Servicio de Cardiología está constituido por un equipo de
                expertos en continua actualización y formación, actividad
                científica y participación en las principales sociedades
                científicas.
              </p>

              <h1 className="sombra font-weight-bold ">Pediatría</h1>
              <p className="sombra font-weight-bold lead">
                Coordinar la atención de seguimiento con los pediatras de
                nuestra clínica antes o después del alta hospitalaria o del
                parto. Exámenes físicos preescolares, deportivos y de rutina.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Cardiologia;

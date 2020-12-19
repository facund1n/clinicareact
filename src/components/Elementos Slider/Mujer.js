import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import women from "../../img/women.png";
import skin from "../../img/skin.png";

const Mujer = () => {
  return (
    <>
      <Container>
        <div className="text-white mx-auto d-none d-sm-block d-md-block d-lg-block">
          <Row>
            <Col className="align-self-center">
              <h1 className="sombra font-weight-bold ">Salud de la Mujer</h1>
              <p className="sombra font-weight-bold lead">
                Es un campo que cubre los numerosos problemas de salud que
                enfrentan las mujeres, desde la salud sexual y reproductiva
                hasta las mamografías.
              </p>
              <img src={women} alt="women" height="140px" />
              <h1 className="sombra font-weight-bold ">Dermatología</h1>
              <p className="sombra font-weight-bold lead">
                Nuestros proveedores están capacitados para manejar un espectro
                de afecciones de la piel, cubriendo la mayoría de sus
                inquietudes dermatológicas.
              </p>

              <img src={skin} alt="skin" height="140px" />
            </Col>
          </Row>
        </div>
        <div className="text-white mx-auto d-block d-sm-none">
          <Row>
            <Col className="align-self-center">
              <h1 className="sombra font-weight-bold ">Salud de la Mujer</h1>
              <p className="sombra font-weight-bold lead">
                Es un campo que cubre los numerosos problemas de salud que
                enfrentan las mujeres, desde la salud sexual y reproductiva
                hasta las mamografías.
              </p>

              <h1 className="sombra font-weight-bold ">Dermatología</h1>
              <p className="sombra font-weight-bold lead">
                Nuestros proveedores están capacitados para manejar un espectro
                de afecciones de la piel, cubriendo la mayoría de sus
                inquietudes dermatológicas.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Mujer;

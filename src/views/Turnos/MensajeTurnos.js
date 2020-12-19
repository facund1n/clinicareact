import React from "react";
import { Col } from "react-bootstrap";

const MensajeTurnos = () => {
  return (
    <>
      <Col>
        <p className="lead font-weight-bold">
          La atención es por orden de llegada.
        </p>
        <p className="lead">
          Turno mañana a partir <b>de las 8:00 a 12:00</b>
        </p>
        <p className="lead">
          Turno tarde a partir <b>de las 16:00 a 20:00</b>
        </p>
        <p className="lead">
          Deberá presentar <b>DNI o Credencial de Obra Social</b>
        </p>
        <hr />
      </Col>
    </>
  );
};

export default MensajeTurnos;

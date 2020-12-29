import MensajeTurnos from "./MensajeTurnos";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Form, Card, Container, Col } from "react-bootstrap";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const validationSchema = Yup.object().shape({
  especialidad: Yup.string().required("Complete este campo."),
  dia: Yup.string().required("Complete este campo."),
  turno: Yup.string().required("Complete este campo."),
  problematica: Yup.string()
    .required("Complete este campo.")
    .min(6, "Mínimo 6 carácteres.")
    .max(250, "Máximo 250 carácteres."),
});

const FormularioTurnos = (props) => {
  let history = useHistory();
  const [isLogIN, setIsLogIN] = useState(
    JSON.parse(localStorage.getItem("logIN"))
  );
  useEffect(() => {
    setIsLogIN();
    if (isLogIN == false) {
      alert("Debe Iniciar Sesión");
      history.push("/");
    } else {
      history.push("/panel-turnos");
    }
  }, [history, isLogIN]);

  const { handleSubmit, handleChange, errors, values, resetForm } = useFormik({
    initialValues: {
      nombre: localStorage.getItem("nombrePaciente"),
      dni: localStorage.getItem("DNI"),
      especialidad: props.turno.especialidad || "Cardiología",
      dia: props.turno.dia || "",
      turno: props.turno.turno || "Mañana",
      problematica: props.turno.problematica || "",
    },
    validationSchema,
    onSubmit: (values) => {
      props.handlerTurno(values);
      resetForm();
    },
  });

  return (
    <div>
      <Container>
        <Card>
          <MensajeTurnos />
          <Col>
            <h4>Pida su turno:</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Seleccione Especialidad:</Form.Label>
                <Form.Control
                  as="select"
                  name="especialidad"
                  onChange={handleChange}
                >
                  <option value="Cardiología">Cardiología</option>
                  <option value="Pediatría">Pedriatría</option>
                  <option value="Salud de la Mujer">Salud de la Mujer</option>
                  <option value="Dermatología">Dermatología</option>
                </Form.Control>
                {errors.especialidad ? (
                  <div className="bg-light text-danger p-2 font-weight-bold">
                    {errors.especialidad}
                  </div>
                ) : null}
                <Form.Label htmlFor="dia">Seleccione Día:</Form.Label>
                <Form.Control
                  id="dia"
                  name="dia"
                  type="date"
                  onChange={handleChange}
                  value={values.dia}
                />
                {errors.dia ? (
                  <div className="bg-light text-danger p-2 font-weight-bold">
                    {errors.dia}
                  </div>
                ) : null}
                <Form.Label>Seleccione Turno:</Form.Label>
                <Form.Control as="select" name="turno" onChange={handleChange}>
                  <option value="Mañana">Mañana</option>
                  <option value="Tarde">Tarde</option>
                </Form.Control>
                {errors.turno ? (
                  <div className="bg-light text-danger p-2 font-weight-bold">
                    {errors.turno}
                  </div>
                ) : null}
                <Form.Label>Describa Problemática:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="problematica"
                  onChange={handleChange}
                  value={values.problematica}
                />
                {errors.problematica ? (
                  <div className="bg-light text-danger p-2 font-weight-bold">
                    {errors.problematica}
                  </div>
                ) : null}
              </Form.Group>
              <p>
                Por favor <b>verifique los datos </b>
                antes de ser enviados.
              </p>
              <Button variant="primary" type="submit" block className="mb-2">
                {props.buttonTurno}
              </Button>
            </Form>
          </Col>
        </Card>
      </Container>
    </div>
  );
};
FormularioTurnos.propTypes = {
  buttonTurno: PropTypes.string.isRequired,
  handlerTurnos: PropTypes.func,
  Turnos: PropTypes.object,
};
export default FormularioTurnos;

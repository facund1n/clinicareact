import React from "react";
import { useFormik } from "formik";
import { Card as Modal, Button, Form, Row, Container } from "react-bootstrap";
import ButtonInicioSesion2 from "../../components/Botones/ButtonInicioSesion2";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import PropTypes from "prop-types";

const validationSchema = Yup.object().shape({
  dni: Yup.string()
    .min(6, "6 caracteres mínimo.")
    .max(8, "8 Caracteres máximo.")
    .required("Complete este campo."),
  nombre: Yup.string()
    .min(4, "Mínimo 4 carácteres")
    .max(40, "40 Caracteres máximo.")
    .required("Complete este campo."),
  password: Yup.string()
    .min(4, "Mínimo 4 carácteres")
    .max(20, "20 Caracteres máximo.")
    .required("Complete este campo."),
  password2: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden.")
    .required("Complete este campo."),
  fecha: Yup.string().required("Complete este campo."),
  checkbox: Yup.boolean().oneOf([true], "Debe aceptar términos y condiciones."),
});

const FormularioPaciente = (props) => {
  const { handleSubmit, handleChange, errors, values, resetForm } = useFormik({
    initialValues: {
      dni: /* props.paciente.dni || */ "",
      nombre: /* props.paciente.nombre || */ "",
      password: /* props.paciente.password || */ "",
      password2: "",
      fecha: /* props.paciente.fecha || */ "",
      checkbox: false,
      tipo: "paciente",
    },
    validationSchema,
    onSubmit: (values) => {
      props.handlerPaciente(values);
      resetForm();
    },
  });
  return (
    <div className="mt-2">
      <Container>
        <Modal>
          <Modal.Header>
            <Modal.Title>Pacientes - Registración:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="dni">
                  Ingrese DNI <b>(será utilizado como Usuario)</b>
                </Form.Label>
                <Form.Control
                  id="dni"
                  name="dni"
                  type="number"
                  onChange={handleChange}
                  value={values.dni}
                />
                {errors.dni ? (
                  <div className="bg-light text-danger p-2 font-weight-bold">
                    {errors.dni}
                  </div>
                ) : null}
                <Form.Label htmlFor="nombre">
                  Ingrese Nombre Y Apellido
                </Form.Label>
                <Form.Control
                  id="nombre"
                  name="nombre"
                  type="text"
                  onChange={handleChange}
                  value={values.nombre}
                />
                {errors.nombre ? (
                  <div className="bg-light text-danger p-2 font-weight-bold">
                    {errors.nombre}
                  </div>
                ) : null}
                <Form.Label htmlFor="password">Ingrese Contraseña</Form.Label>
                <Form.Control
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password ? (
                  <div className="bg-light text-danger p-2 font-weight-bold">
                    {errors.password}
                  </div>
                ) : null}
                <Form.Label htmlFor="password2">Repita Contraseña</Form.Label>
                <Form.Control
                  id="password2"
                  name="password2"
                  type="password"
                  onChange={handleChange}
                  value={values.password2}
                />
                {errors.password2 ? (
                  <div className="bg-light text-danger p-2 font-weight-bold">
                    {errors.password2}
                  </div>
                ) : null}
                <Form.Label htmlFor="fecha">Fecha de nacimiento:</Form.Label>
                <Form.Control
                  id="fecha"
                  name="fecha"
                  type="date"
                  onChange={handleChange}
                  value={values.fecha}
                />
                {errors.fecha ? (
                  <div className="bg-light text-danger p-2 font-weight-bold">
                    {errors.fecha}
                  </div>
                ) : null}
                <Form.Control
                  id="tipo"
                  name="tipo"
                  type="hidden"
                  onChange={handleChange}
                  value={values.tipo}
                />
                <Row className="p-2">
                  <Form.Check
                    type="checkbox"
                    name="checkbox"
                    label="Acepto los"
                    onChange={handleChange}
                    checked={values.checkbox}
                  />
                  <Link to="/404"> Términos y Condiciones</Link>
                  {errors.checkbox ? (
                    <div className="bg-light text-danger p-2 font-weight-bold">
                      {errors.checkbox}
                    </div>
                  ) : null}
                </Row>
              </Form.Group>

              <Button variant="primary" type="submit" block className="mb-2">
                {props.buttonCrearPaciente}
              </Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <p className="mr-auto">
              Ya tienes cuenta?
              <ButtonInicioSesion2 body="Iniciá sesión aquí." />
            </p>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};
FormularioPaciente.propTypes = {
  buttonCrearPaciente: PropTypes.string.isRequired,
  handlerPaciente: PropTypes.func,
  paciente: PropTypes.object,
};
export default FormularioPaciente;

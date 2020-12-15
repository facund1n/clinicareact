import React from "react";
import { useFormik } from "formik";
import { Modal, Button, Form } from "react-bootstrap";
import ButtonRegistro2 from "../components/ButtonRegistro2";
import * as Yup from "yup";
import PropTypes from "prop-types";

const validationSchema = Yup.object().shape({
  dni: Yup.string()
    .min(6, "6 caracteres mínimo.")
    .max(8, "8 Caracteres máximo.")
    .required("Complete este campo."),
  password: Yup.string()
    .min(4, "Mínimo 4 carácteres")
    .max(20, "20 Caracteres máximo.")
    .required("Complete este campo."),
});

const LoginPaciente = (props) => {
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      dni: props.user.dni || "",
      password: props.user.password || "",
    },
    validationSchema,
    onSubmit: (values) => {
      props.handlerUser(values);
    },
  });
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Pacientes, Iniciar Sesión:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="dni">Ingrese DNI</Form.Label>
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
              <Form.Label htmlFor="dni">Ingrese Contraseña</Form.Label>
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
            </Form.Group>

            <Button type="submit">Iniciar Sesión</Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <p className="mr-auto">
            No tenés cuenta? creá una haciendo
            <ButtonRegistro2 body="Iniciá sesión aquí." />
          </p>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

LoginPaciente.propTypes = {
  handlerUser: PropTypes.func,
  user: PropTypes.object,
};

export default LoginPaciente;

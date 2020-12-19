import React from "react";
import { useFormik } from "formik";
import { Modal, Button, Form } from "react-bootstrap";
import ButtonRegistro2 from "../../components/Botones/ButtonRegistro2";
import * as Yup from "yup";
import PropTypes from "prop-types";

const validationSchema = Yup.object().shape({
  legajo: Yup.string()
    .min(4, "4 caracteres mínimo.")
    .max(15, "15 Caracteres máximo.")
    .required("Complete este campo."),
  password: Yup.string()
    .min(4, "Mínimo 4 carácteres")
    .max(20, "20 Caracteres máximo.")
    .required("Complete este campo."),
});

const LoginMedico = (props) => {
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      legajo: props.user.legajo || "",
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
          <Modal.Title>Médicos, Iniciar Sesión:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="legajo">Ingrese Legajo</Form.Label>
              <Form.Control
                id="legajo"
                name="legajo"
                type="number"
                onChange={handleChange}
                value={values.legajo}
              />
              {errors.legajo ? (
                <div className="bg-light text-danger p-2 font-weight-bold">
                  {errors.legajo}
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
            </Form.Group>
            {errors.password ? (
              <div className="bg-light text-danger p-2 font-weight-bold">
                {errors.password}
              </div>
            ) : null}
            <Button variant="success" type="submit">
              Iniciar Sesión
            </Button>
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

LoginMedico.propTypes = {
  handlerUser: PropTypes.func,
  user: PropTypes.object,
};

export default LoginMedico;

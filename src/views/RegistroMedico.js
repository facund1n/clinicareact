import React from "react";
import { useFormik } from "formik";
import { Modal, Button, Form } from "react-bootstrap";
import ButtonInicioSesion2 from "../components/ButtonInicioSesion2";
import * as Yup from "yup";
import PropTypes from "prop-types";

const validationSchema = Yup.object().shape({
  legajo: Yup.string()
    .min(4, "4 caracteres mínimo.")
    .max(15, "15 Caracteres máximo.")
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
});

const RegistroMedico = (props) => {
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      legajo: props.user.legajo || "",
      nombre: props.user.nombre || "",
      password: props.user.password || "",
      password2: "",
      type: "medic",
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
          <Modal.Title>Profesionales - Registración:</Modal.Title>
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
              <Form.Label htmlFor="legajo">
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
              <Form.Control
                id="type"
                name="type"
                type="hidden"
                onChange={handleChange}
                value={values.type}
              />
              <Form.Control
                id="validado"
                name="validado"
                type="hidden"
                onChange={handleChange}
                value={values.validado}
              />
            </Form.Group>
            <p>Por favor verifique los datos antes de ser enviados.</p>
            <Button variant="success" type="submit" block className="mb-2">
              CREAR CUENTA
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <p className="mr-auto">
            Ya tienes cuenta?
            <ButtonInicioSesion2 body="Iniciá sesión aquí." />
          </p>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

RegistroMedico.propTypes = {
  handlerUser: PropTypes.func,
  user: PropTypes.object,
};
export default RegistroMedico;

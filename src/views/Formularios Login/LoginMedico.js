import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Modal, Button, Form } from "react-bootstrap";
import ButtonRegistro2 from "../../components/Botones/ButtonRegistro2";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { getTodosLosMedicos } from "../../services/medicos";

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
  const [listaMedicos, setListaMedicos] = useState([]);
  useEffect(() => {
    try {
      const request = async () => {
        const updatearListaMedicos = await getTodosLosMedicos();
        if (updatearListaMedicos) {
          if (updatearListaMedicos.medicosDB)
            setListaMedicos(updatearListaMedicos.medicosDB);
          console.log("lista medicos: ", listaMedicos);
        }
      };
      request();
    } catch (error) {
      console.log("Error en submit...", error);
    }
  }, []);
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      legajo: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      //get en BD para tomar todos los usuario y luego filtro la lista
      // para saber si existe uno con DNI = al que se coloque en el form.
      const filter = listaMedicos.filter(
        (legajo) => legajo.legajo == values.legajo
      );
      // si existe se hace un .map y se obtiene el DNI y el password
      const legajo1 = filter.map((legajo1) => legajo1.legajo);
      const password1 = filter.map((password1) => password1.password);
      // se transforman los valores anteriores como lo requiere mi back end (modelos de paciente y médico)
      const legajo2 = Number(legajo1);
      const password2 = String(password1);
      // si los values coinciden con los datos que se obtuvieron arriba hace el loguin
      if (legajo2 === values.legajo && password2 === values.password) {
        console.log("logeado");
      } else {
        console.log("no logueado");
      }
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

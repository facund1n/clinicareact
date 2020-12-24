import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Modal, Button, Form } from "react-bootstrap";
import ButtonRegistro2 from "../../components/Botones/ButtonRegistro2";

import PropTypes from "prop-types";
import { getTodosLosPacientes } from "../../services/pacientes";

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

const LoginPaciente = () => {
  let history = useHistory();
  const [listaPacientes, setListaPacientes] = useState([]);

  useEffect(() => {
    try {
      const request = async () => {
        const updatearListaPacientes = await getTodosLosPacientes();
        if (updatearListaPacientes) {
          if (updatearListaPacientes.pacientesDB)
            setListaPacientes(updatearListaPacientes.pacientesDB);
          /* console.log("lista pacientes: ", listaPacientes); */
        }
      };
      request();
    } catch (error) {
      console.log("Error en submit...", error);
    }
  }, []);
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      dni: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      //get en BD para tomar todos los usuario y luego filtro la lista
      // para saber si existe uno con DNI = al que se coloque en el form.
      // eslint-disable-next-line
      const filter = listaPacientes.filter((dni) => dni.dni == values.dni);
      // si existe se hace un .map y se obtiene el DNI y el password
      const dni1 = filter.map((dni1) => dni1.dni);
      const password1 = filter.map((password1) => password1.password);

      const user = filter.map((user) => user.nombre);
      // se transforman los valores anteriores como lo requiere mi back end (modelos de paciente y médico)
      const dni2 = Number(dni1);
      const password2 = String(password1);
      // si los values coinciden con los datos que se obtuvieron arriba hace el loguin
      if (dni2 === values.dni && password2 === values.password) {
        localStorage.setItem("nombrePaciente", user);
        localStorage.setItem("logIN", true);
        alert(`bienvenido: ${user}`);
        history.push("/panel-turnos");
      } else {
        alert(`Verifique usuario o contraseña por favor.`);
      }
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
            <ButtonRegistro2 />
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

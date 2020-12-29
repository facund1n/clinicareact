import React, { useState, useEffect } from "react";
import NavbarPanelMedico from "../NavBars/NavbarPanelMedico";
import { getTurnos } from "../../services/turnos";
import { useFormik } from "formik";
import { Table, Form, Card, Container, Col, Button } from "react-bootstrap";

const Turnos = () => {
  const [listaTurnos, setListaTurnos] = useState([]);
  const [seleccion, setSeleccion] = useState([]);
  const [nombreMedico, setNombreMedico] = useState(
    localStorage.getItem("nombreMedico")
  );
  useEffect(() => {
    try {
      const request = async () => {
        const updatearListaTurnos = await getTurnos();
        if (updatearListaTurnos) {
          if (updatearListaTurnos.turnosDB)
            setListaTurnos(updatearListaTurnos.turnosDB);
        }
      };
      request();
    } catch (error) {
      console.log("Error en submit...", error);
    }
  }, []);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      especialidad: "",
    },
    onSubmit: (values) => {
      const filter = listaTurnos.filter(
        // eslint-disable-next-line
        (especialidad) => especialidad.especialidad == values.especialidad
      );
      setSeleccion(filter);
    },
  });
  return (
    <>
      <NavbarPanelMedico />
      <Container className="mt-2">
        <Card>
          <Col>
            <p className="lead font-weight-bold"></p>
            Bienvenido/a <p className="lead">{nombreMedico}</p>
            <hr />
          </Col>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Turnos, seleccione:</Form.Label>
                <Form.Control
                  as="select"
                  name="especialidad"
                  value={values.especialidad}
                  onChange={handleChange}
                >
                  <option value="" label="Seleccione..." />
                  <option value="Cardiología" label="Cardiología" />
                  <option value="Pediatría" label="Pediatría" />
                  <option value="Salud de la Mujer" label="Salud de la Mujer" />
                  <option value="Dermatología" label="Dermatología" />
                </Form.Control>
              </Form.Group>
              <Table striped bordered hover size="sm" responsive>
                <thead>
                  <tr>
                    <th>Paciente</th>
                    <th>Fecha</th>
                    <th>Horario</th>
                    <th>Problemática</th>
                    <th>Especialidad</th>
                  </tr>
                </thead>
                <tbody>
                  {seleccion.map((element, index) => {
                    return (
                      <tr key={index}>
                        <td>{element.nombre}</td>
                        <td>{element.dia}</td>
                        <td>{element.turno}</td>
                        <td>{element.problematica}</td>
                        <td>{element.especialidad}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Button type="submit" variant="success" className="m-2">
                consultar
              </Button>
            </Form>
          </Col>
        </Card>
      </Container>
    </>
  );
};

export default Turnos;

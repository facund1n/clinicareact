import React from "react";
import NavbarPanelMedico from "../NavBars/NavbarPanelMedico";
import { useFormik } from "formik";
import { Table, Form, Card, Container, Col } from "react-bootstrap";

const Turnos = () => {
  const formik = useFormik({
    initialValues: {
      especialidad: "cardiologia",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <NavbarPanelMedico />

      <Container className="mt-2">
        <Card>
          <Col>
            <p className="lead font-weight-bold">Bienvenido</p>

            <hr />
          </Col>
          <Col>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Label>Turnos, seleccione:</Form.Label>
                <Form.Control
                  as="select"
                  name="especialidad"
                  onChange={formik.handleChange}
                >
                  <option value="cardiologia">Cardiología</option>
                  <option value="pediatria">Pedriatría</option>
                  <option value="salud mujer">Salud de la Mujer</option>
                  <option value="dermatologia">Dermatología</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>

          {/* Aqui se debe hacer un .map para obtener la info de la API de turnos así se completen los campos */}
          <Table responsive striped bordered hover size="sm">
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
              <tr>
                <td>cambiar</td>
                <td>cambiar</td>
                <td>cambiar</td>
                <td>cambiar</td>
                <td>cambiar</td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Container>
    </>
  );
};

export default Turnos;

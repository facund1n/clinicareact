import MensajeTurnos from "../../components/MensajeTurnos";
import { useFormik } from "formik";
import { Button, Form, Card, Container, Col } from "react-bootstrap";
import * as Yup from "yup";
import PropTypes from "prop-types";

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
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      especialidad: props.turno.especialidad || "cardiologia",
      dia: props.turno.dia || "",
      turno: props.turno.turno || "manana",
      problematica: props.turno.problematica || "",
    },
    validationSchema,
    onSubmit: (values) => {
      props.handlerTurno(values);
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
                  <option value="cardiologia">Cardiología</option>
                  <option value="pediatria">Pedriatría</option>
                  <option value="salud mujer">Salud de la Mujer</option>
                  <option value="dermatologia">Dermatología</option>
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
                  <option value="manana">Mañana</option>
                  <option value="tarde">Tarde</option>
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

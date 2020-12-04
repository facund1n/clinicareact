import React from "react";
import NavbarTurnos from "./NavbarTurnos";
import { useFormik } from "formik";
import { Button, Form, Card, Container, Col } from "react-bootstrap";

const Turnos = () => {
	const formik = useFormik({
		initialValues: {
			especialidad: "cardiologia",
			dia: "",
			turno: "",
			problematica: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div>
			<NavbarTurnos />
			<Container className="mt-2">
				<Card>
					<Col>
						<p className="lead font-weight-bold">
							La atención es por orden de llegada.
						</p>
						<p className="lead">
							Turno mañana a partir <b>de las 8:00 a 12:00</b>
						</p>
						<p className="lead">
							Turno tarde a partir <b>de las 16:00 a 20:00</b>
						</p>
						<p className="lead">
							Deberá presentar <b>DNI o Credencial de Obra Social</b>
						</p>
						<hr />
					</Col>
					<Col>
						<h4>Pida su turno:</h4>
						<Form onSubmit={formik.handleSubmit}>
							<Form.Group>
								<Form.Label>Seleccione Especialidad:</Form.Label>
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
								<Form.Label htmlFor="dia">Seleccione Día:</Form.Label>
								<Form.Control
									id="dia"
									name="dia"
									type="date"
									onChange={formik.handleChange}
									value={formik.values.dia}
								/>
								<Form.Label>Seleccione Turno:</Form.Label>
								<Form.Control
									as="select"
									name="turno"
									onChange={formik.handleChange}
								>
									<option value="manana">Mañana</option>
									<option value="tarde">Tarde</option>
								</Form.Control>
								<Form.Label>Describa Problemática:</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									name="problematica"
									onChange={formik.handleChange}
									value={formik.values.problematica}
								/>
							</Form.Group>

							<Button variant="primary" type="submit" block className="mb-2">
								PEDIR TURNO
							</Button>
						</Form>
					</Col>
				</Card>
			</Container>
		</div>
	);
};

export default Turnos;

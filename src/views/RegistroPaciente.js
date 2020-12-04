import React from "react";
import { useFormik } from "formik";
import { Modal, Button, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegistroPaciente = () => {
	const formik = useFormik({
		initialValues: {
			dni: "",
			nombre: "",
			password1: "",
			password2: "",
			fecha: "",
			checkbox: false,
			type: "patient",
			validado: false,
		},

		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div>
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Pacientes - Registración:</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={formik.handleSubmit}>
						<Form.Group>
							<Form.Label htmlFor="dni">
								Ingrese DNI <b>(será utilizado como Usuario)</b>
							</Form.Label>
							<Form.Control
								id="dni"
								name="dni"
								type="number"
								onChange={formik.handleChange}
								value={formik.values.dni}
							/>
							<Form.Label htmlFor="nombre">
								Ingrese Nombre Y Apellido
							</Form.Label>
							<Form.Control
								id="nombre"
								name="nombre"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.nombre}
							/>
							<Form.Label htmlFor="password1">Ingrese Contraseña</Form.Label>
							<Form.Control
								id="password1"
								name="password1"
								type="password"
								onChange={formik.handleChange}
								value={formik.values.password1}
							/>
							<Form.Label htmlFor="password2">Repita Contraseña</Form.Label>
							<Form.Control
								id="password2"
								name="password2"
								type="password"
								onChange={formik.handleChange}
								value={formik.values.password2}
							/>
							<Form.Label htmlFor="fecha">Fecha de nacimiento:</Form.Label>
							<Form.Control
								id="fecha"
								name="fecha"
								type="date"
								onChange={formik.handleChange}
								value={formik.values.fecha}
							/>
							<Form.Control
								id="type"
								name="type"
								type="hidden"
								onChange={formik.handleChange}
								value={formik.values.type}
							/>
							<Form.Control
								id="validado"
								name="validado"
								type="hidden"
								onChange={formik.handleChange}
								value={formik.values.validado}
							/>
							<Row className="p-2">
								<Form.Check
									type="checkbox"
									name="checkbox"
									label="Acepto los"
									onChange={formik.handleChange}
									checked={formik.values.checkbox}
								/>
								<Link to=""> Términos y Condiciones</Link>
							</Row>
						</Form.Group>

						<Button variant="primary" type="submit">
							Crear cuenta
						</Button>
					</Form>
				</Modal.Body>

				<Modal.Footer>
					<p className="mr-auto">
						Ya tienes cuenta? <Link to=""> Iniciá sesión aquí.</Link>
					</p>
				</Modal.Footer>
			</Modal.Dialog>
		</div>
	);
};

export default RegistroPaciente;

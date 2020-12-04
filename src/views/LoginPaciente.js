import React from "react";
import { useFormik } from "formik";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPaciente = () => {
	const formik = useFormik({
		initialValues: {
			dni: "",
			password: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div>
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Pacientes, Iniciar Sesión:</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={formik.handleSubmit}>
						<Form.Group>
							<Form.Label htmlFor="dni">Ingrese DNI</Form.Label>
							<Form.Control
								id="dni"
								name="dni"
								type="number"
								onChange={formik.handleChange}
								value={formik.values.dni}
							/>

							<Form.Label htmlFor="dni">Ingrese Contraseña</Form.Label>
							<Form.Control
								id="password"
								name="password"
								type="password"
								onChange={formik.handleChange}
								value={formik.values.password}
							/>
						</Form.Group>

						<Button type="submit">Iniciar Sesión</Button>
					</Form>
				</Modal.Body>

				<Modal.Footer>
					<p className="mr-auto">
						No tenés cuenta? creá una haciendo <Link href="">click aquí</Link>
					</p>
				</Modal.Footer>
			</Modal.Dialog>
		</div>
	);
};

export default LoginPaciente;

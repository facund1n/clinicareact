import React from "react";
import { useFormik } from "formik";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginMedico = () => {
	const formik = useFormik({
		initialValues: {
			legajo: "",
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
					<Modal.Title>Médicos, Iniciar Sesión:</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={formik.handleSubmit}>
						<Form.Group>
							<Form.Label htmlFor="legajo">Ingrese Legajo</Form.Label>
							<Form.Control
								id="legajo"
								name="legajo"
								type="number"
								onChange={formik.handleChange}
								value={formik.values.legajo}
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

						<Button variant="success" type="submit">
							Iniciar Sesión
						</Button>
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

export default LoginMedico;

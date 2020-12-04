import React from "react";
import { useFormik } from "formik";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegistroMedico = () => {
	const formik = useFormik({
		initialValues: {
			legajo: "",
			nombre: "",
			password1: "",
			password2: "",
			type: "medic",
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
					<Modal.Title>Profesionales - Registración:</Modal.Title>
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
							<Form.Label htmlFor="legajo">
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
						</Form.Group>

						<Button variant="success" type="submit">
							Crear cuenta
						</Button>
					</Form>
				</Modal.Body>

				<Modal.Footer>
					<p className="mr-auto">
						Ya tienes cuenta? <Link> Iniciá sesión aquí.</Link>
					</p>
				</Modal.Footer>
			</Modal.Dialog>
		</div>
	);
};

export default RegistroMedico;

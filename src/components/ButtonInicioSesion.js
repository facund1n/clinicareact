import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const ButtonInicioSesion = () => {
	const [smShow, setSmShow] = useState(false);
	return (
		<>
			<Button
				variant="outline-light"
				className="m-1"
				onClick={() => setSmShow(true)}
			>
				Iniciar Sesión
			</Button>
			<Modal
				size="sm"
				show={smShow}
				onHide={() => setSmShow(false)}
				aria-labelledby="example-modal-sizes-title-sm"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title
						id="example-modal-sizes-title-sm"
						className="lead font-weight-bold"
					>
						Iniciar Sesión:
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Link to="login-pacientes">
						<Button variant="primary" className="my-2 " block>
							Paciente
						</Button>
					</Link>
					<Link to="login-medicos">
						<Button variant="success" className="my-2" block>
							Médico
						</Button>
					</Link>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ButtonInicioSesion;

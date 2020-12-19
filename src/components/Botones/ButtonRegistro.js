import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const ButtonRegistro = () => {
	const [smShow, setSmShow] = useState(false);

	return (
		<>
			<Button variant="light" className="m-1" onClick={() => setSmShow(true)}>
				Registrarse
			</Button>
			<Modal
				size="sm"
				show={smShow}
				onHide={() => setSmShow(false)}
				aria-labelledby="example-modal-sizes-title-sm"
				centered
			>
				<Modal.Header>
					<Modal.Title
						id="example-modal-sizes-title-sm"
						className="lead font-weight-bold"
					>
						Crear cuenta:
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Link to="/registro-pacientes">
						<Button variant="primary" className="my-2" block>
							Paciente
						</Button>
					</Link>
					<Link to="/registro-medicos">
						<Button variant="success" className="p-2" block>
							Médico
						</Button>
					</Link>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ButtonRegistro;

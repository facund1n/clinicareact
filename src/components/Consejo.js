import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import info from "../img/info.png";

const Elemento3 = () => {
	return (
		<>
			<Container>
				<div className="text-white mx-auto d-none d-sm-block d-md-block d-lg-block">
					<Row>
						<Col sm={6} className="align-self-center">
							<img src={info} alt="info" className="img-fluid" />
						</Col>
						<Col sm={6} className="align-self-center ">
							<p className="sombra font-weight-bold lead">
								Visitar a su médico de forma regular es clave para una vida
								sana. Ya sea que sienta los efectos del resfriado común o que
								simplemente vaya a un chequeo, queremos asegurarnos de que tenga
								todos los datos que necesita para tomar una decisión informada.
								su salud.
							</p>
							<Button
								variant="light"
								className="boton1 nav-link text-center p-2 px-5 shadow"
							>
								<a href="#" className="text-dark lead">
									Conocer Mas..
								</a>
							</Button>
						</Col>
					</Row>
				</div>
				<div className="text-white mx-auto d-block d-sm-none">
					<Row>
						<Col className="align-self-center">
							<p className="sombra font-weight-bold lead">
								Visitar a su médico de forma regular es clave para una vida
								sana. Ya sea que sienta los efectos del resfriado común o que
								simplemente vaya a un chequeo, queremos asegurarnos de que tenga
								todos los datos que necesita para tomar una decisión informada.
								su salud.
							</p>
							<Button
								variant="light"
								className="boton1 nav-link text-center p-2 px-5 shadow "
							>
								<a href="#" className="text-dark lead ">
									Conocer Mas..
								</a>
							</Button>
						</Col>
					</Row>
				</div>
			</Container>
		</>
	);
};

export default Elemento3;

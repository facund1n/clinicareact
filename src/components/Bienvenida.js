import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import mujer from "../img/mujer.png";

const Bienvenida = () => {
	return (
		<>
			<Container>
				<div className="text-white mx-auto d-none d-sm-block d-md-block d-lg-block">
					<Row>
						<Col sm={5} className="align-self-center">
							<img src={mujer} alt="mujer" className="img-fluid" />
						</Col>
						<Col sm={7} className="align-self-center ">
							<h1 className="sombra ">Bienvenido/a.</h1>
							<h1 className="sombra ">
								Tené acceso a un profesional de la salud en cualquier momento.
							</h1>
							<p className="sombra font-weight-bold lead">
								Bienestar para su familia Bienestar de por vida.
							</p>
							<Button variant="light" className=" text-center p-2 px-5 shadow">
								<a className="lead text-dark nav nav-link" href="#">
									Perdir Turno
								</a>
							</Button>
						</Col>
					</Row>
				</div>
				<div className="text-white mx-auto d-block d-sm-none">
					<Row>
						<Col className="align-self-center">
							<h1 className="sombra">Bienvenido/a.</h1>
							<h1 className="sombra">
								Tené acceso a un profesional de la salud en cualquier momento.
							</h1>
							<p className="sombra font-weight-bold lead">
								Bienestar para su familia. Bienestar de por vida.
							</p>
							<Button variant="light" className=" text-center p-2 px-5 shadow">
								<a className="lead text-dark nav nav-link" href="#">
									Perdir Turno
								</a>
							</Button>
						</Col>
					</Row>
				</div>
			</Container>
		</>
	);
};

export default Bienvenida;

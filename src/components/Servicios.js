import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import servicios from "../img/servicios.png";

const Servicios = () => {
	return (
		<>
			<Container>
				<div className="text-white mx-auto d-none d-sm-block d-md-block d-lg-block">
					<Row className="d-flex mx-auto">
						<Col>
							<h1 className="sombra font-weight-bold ">Nuestros Servicios</h1>
							<p className="sombra font-weight-bold lead">
								Obtenga más información sobre los diversos servicios que ofrece
								Nuestra Clínica y cómo le brindamos atención de primera clase.
							</p>
							<h1 className="sombra font-weight-bold display-1 text-center">
								⇨
							</h1>
							<img
								src={servicios}
								alt="servicios"
								className="mx-auto"
								width="600px"
							/>
						</Col>
					</Row>
				</div>
				<div className="text-white mx-auto d-block d-sm-none">
					<Row>
						<Col className="align-self-center">
							<h1 className="sombra font-weight-bold ">Nuestros Servicios</h1>
							<p className="sombra font-weight-bold lead">
								Obtenga más información sobre los diversos servicios que ofrece
								Nuestra Clínica y cómo le brindamos atención de primera clase.
							</p>
							<h1 className="sombra font-weight-bold display-1 text-center">
								⇨
							</h1>
						</Col>
					</Row>
				</div>
			</Container>
		</>
	);
};

export default Servicios;

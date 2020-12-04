import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import fb from "../img/fb.png";
import insta from "../img/insta.png";
import twitter from "../img/twitter.png";

const Social = () => {
	return (
		<>
			<Container>
				<div className="text-white mx-auto d-none d-sm-block d-md-block d-lg-block">
					<Row className="d-flex align-items-center">
						<Col>
							<p className="sombra font-weight-bold lead text-center">
								Seguinos en las redes:
							</p>
							<div className="d-flex justify-content-center">
								<a
									className="nav-link font-weight-bold lead text-light sombra"
									href="https://www.facebook.com/"
								>
									<img src={fb} alt="fb" height="140px" />
									/CentroMedico
								</a>
								<a
									className="nav-link font-weight-bold lead text-light sombra"
									href="https://www.instagram.com/"
								>
									<img src={insta} alt="insta" height="140px" />
									@CentroMedico
								</a>
								<a
									className="nav-link font-weight-bold lead text-light sombra"
									href="https://www.twitter.com/"
								>
									<img src={twitter} alt="twitter" height="140px" />
									@CentroMedico
								</a>
							</div>
							<br />
							<p className="sombra font-weight-bold lead text-center">
								San Miguel de Tucumán (cp 4000) - Calle sin nombre 123
							</p>{" "}
							<p className="sombra font-weight-bold lead text-center">
								Horarios de Atención Corrido de 9 a 20 horas.
							</p>
						</Col>
					</Row>
				</div>
				<div className="text-white mx-auto d-block d-sm-none">
					<Row>
						<Col>
							<p className="sombra font-weight-bold lead">
								Seguinos en las redes:
							</p>
							<div className="d-block justify-content-center">
								<a
									className="nav-link font-weight-bold lead text-light sombra"
									href="https://www.facebook.com/"
								>
									<img src={fb} alt="fb" height="40px" />
									/CentroMedico
								</a>
								<a
									className="nav-link font-weight-bold lead text-light sombra"
									href="https://www.instagram.com/"
								>
									<img src={insta} alt="insta" height="40px" />
									@CentroMedico
								</a>
								<a
									className="nav-link font-weight-bold lead text-light sombra"
									href="https://www.twitter.com/"
								>
									<img src={twitter} alt="twitter" height="40px" />
									@CentroMedico
								</a>
							</div>
							<p className="sombra font-weight-bold lead">
								San Miguel de Tucumán (cp 4000) - Calle sin nombre 123
							</p>{" "}
							<p className="sombra font-weight-bold lead">
								Horarios de Atención Corrido de 9 a 20 horas.
							</p>
						</Col>
					</Row>
				</div>
			</Container>
		</>
	);
};

export default Social;

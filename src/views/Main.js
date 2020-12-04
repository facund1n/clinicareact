import React from "react";
import NavbarCustom from "./NavbarCustom";
import SimpleSlider from "./SliderCustom";
import LogoCustom from "../components/LogoCustom";
import FooterCustom from "../components/FooterCustom";
import { Container } from "react-bootstrap";

const Main = () => {
	return (
		<>
			<NavbarCustom />
			<Container fluid>
				<LogoCustom />
				<SimpleSlider />
			</Container>
			<FooterCustom />
		</>
	);
};

export default Main;

import React from "react";
import NavbarCustom from "./NavBars/NavbarCustom";
import SimpleSlider from "./SliderCustom";
import LogoCustom from "../components/Logo/LogoCustom";
import FooterCustom from "../components/Footer/FooterCustom";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <div style={{ backgroundColor: "rgb(55, 156, 210)" }}>
        <NavbarCustom />
        <Container fluid>
          <LogoCustom />
          <SimpleSlider />
        </Container>
        <FooterCustom />
      </div>
    </>
  );
};

export default Main;

import React, { Component } from "react";

import Slider from "react-slick";
import Bienvenida from "../components/Bienvenida";
import Objetivo from "../components/Objetivo";
import Consejo from "../components/Consejo";
import Servicios from "../components/Servicios";
import Cardiologia from "../components/Cardiologia";
import Mujer from "../components/Mujer";
import Social from "../components/Social";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container-fluid">
        <Slider {...settings}>
          <div>
            <Bienvenida />
          </div>
          <div>
            <Objetivo />
          </div>
          <div>
            <Consejo />
          </div>
          <div>
            <Servicios />
          </div>
          <div>
            <Cardiologia />
          </div>
          <div>
            <Mujer />
          </div>
          <div>
            <Social />
          </div>
        </Slider>
      </div>
    );
  }
}

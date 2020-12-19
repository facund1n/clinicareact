import React, { Component } from "react";

import Slider from "react-slick";
import Bienvenida from "../components/Elementos Slider/Bienvenida";
import Objetivo from "../components/Elementos Slider/Objetivo";
import Consejo from "../components/Elementos Slider/Consejo";
import Servicios from "../components/Elementos Slider/Servicios";
import Cardiologia from "../components/Elementos Slider/Cardiologia";
import Mujer from "../components/Elementos Slider/Mujer";
import Social from "../components/Elementos Slider/Social";

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

import React from "react";
import Main from "../views/Main";
import RegistroPaciente from "../views/Formularios Registro/RegistroPaciente";
import LoginPaciente from "../views/Formularios Login/LoginPaciente";
import LoginMedico from "../views/Formularios Login/LoginMedico";
import RegistroMedico from "../views/Formularios Registro/RegistroMedico";
import Turnos from "../views/Turnos/Turnos";
import PanelMedico from "../views/PanelMedico";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Rutas = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/registro-pacientes" component={RegistroPaciente} />
          <Route path="/registro-medicos" component={RegistroMedico} />
          <Route path="/login-pacientes" component={LoginPaciente} />
          <Route path="/login-medicos" component={LoginMedico} />
          <Route path="/panel-turnos" component={Turnos} />
          <Route path="/panel-medicos" component={PanelMedico} />
        </Switch>
      </Router>
    </>
  );
};

export default Rutas;

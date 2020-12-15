import React from "react";
import Main from "./Main";
import RegistroPaciente from "./RegistroPaciente";
import LoginPaciente from "./LoginPaciente";
import LoginMedico from "./LoginMedico";
import RegistroMedico from "./RegistroMedico";
import Turnos from "./Turnos";
import PanelMedico from "./PanelMedico";
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

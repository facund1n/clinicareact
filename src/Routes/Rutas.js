import React from "react";
import Main from "../views/Main";
import Pacientes from "../views/Formularios Registro/Pacientes";
import LoginPaciente from "../views/Formularios Login/LoginPaciente";
import LoginMedico from "../views/Formularios Login/LoginMedico";
import Medicos from "../views/Formularios Registro/Medicos";
import Turnos from "../views/Turnos/Turnos";
import PanelMedico from "../views/PanelMedicos/PanelMedico";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Rutas = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/registro-pacientes" component={Pacientes} />
          <Route path="/registro-medicos" component={Medicos} />
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

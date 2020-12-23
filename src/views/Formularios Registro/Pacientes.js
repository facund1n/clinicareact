/* import React from "react"; */
import { Container } from "react-bootstrap";
import { postPaciente } from "../../services/pacientes";
import FormularioPacientes from "./FormularioPacientes";
import React from "react";

const Pacientes = (props) => {
  return (
    <>
      <Container>
        <FormularioPacientes
          paciente={{}}
          buttonCrearPaciente={"CREAR CUENTA"}
          handlerPaciente={async (values) => {
            postPaciente(values);
          }}
        />
      </Container>
    </>
  );
};

export default Pacientes;

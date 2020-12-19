import { Container } from "react-bootstrap";
import { postMedico } from "../../services/medicos";
import FormularioMedicos from "./FormularioMedicos";

const Medicos = (props) => {
  return (
    <>
      <Container>
        <FormularioMedicos
          Medico={{}}
          buttonCrearMedico={"CREAR CUENTA"}
          handlerMedico={async (values) => {
            postMedico(values);
          }}
        />
      </Container>
    </>
  );
};

export default Medicos;

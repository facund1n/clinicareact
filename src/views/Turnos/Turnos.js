import React, { useState, useEffect } from "react";
import NavbarTurnos from "../NavBars/NavbarTurnos";
import { Container, Alert, Card, Table, Button } from "react-bootstrap";
import { postTurno, getTurnos, eliminarTurno } from "../../services/turnos";
import FormularioTurnos from "./FormularioTurnos";

const Turnos = (props) => {
  const [listaTurnos, setListaTurnos] = useState([]);
  const [nombrePaciente, setnombrePaciente] = useState(
    localStorage.getItem("nombrePaciente")
  );
  const filtroMisTurnos = listaTurnos.filter((dni) => dni.dni);
  useEffect(() => {
    try {
      const request = async () => {
        const updatearListaTurnos = await getTurnos();
        if (updatearListaTurnos) {
          if (updatearListaTurnos.turnosDB)
            setListaTurnos(updatearListaTurnos.turnosDB);
        }
      };
      request();
    } catch (error) {
      console.log("Error en submit...", error);
    }
  }, []);

  return (
    <>
      <NavbarTurnos />
      <Container>
        <Card className="mx-3 my-2">
          <Card.Body>
            <h4> Paciente: {nombrePaciente}</h4>
            <h3>📲 Sistema Turnos</h3>
          </Card.Body>
        </Card>

        <FormularioTurnos
          turno={{}}
          buttonTurno={"PEDIR TURNO"}
          handlerTurno={async (values) => {
            postTurno(values);
            /* const turnoNuevo = await */
            /* setLista([...lista, turnoNuevo.data]); */
            alert("Turno enviado");
            window.location.reload();
          }}
        />
        <Card className="card mx-3 my-2">
          <h3 className="m-2">📄 Mis turnos:</h3>
          {filtroMisTurnos.length > 0 ? (
            <Table striped hover responsive variant="light">
              <thead>
                <tr>
                  <th>Especialidad:</th>
                  <th>Fecha:</th>
                  <th>Horario:</th>
                  <th>Problemática:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtroMisTurnos.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element.especialidad}</td>
                      <td>{element.dia}</td>
                      <td>{element.turno}</td>
                      <td>{element.problematica}</td>
                      <td>
                        <Button
                          onClick={() => eliminarTurno(element._id)}
                          variant="outline-danger"
                          className="mx-2 my-2"
                        >
                          Eliminar &times;
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <Alert variant="primary" className="m-2">
              No tiene turnos cargados.
            </Alert>
          )}
        </Card>
      </Container>
    </>
  );
};

/*                <div key={index} style={{ margin: "15px" }}>
                  <CardTurnos
                    turno={element}
                    funcionEliminar={async () => {
                      await eliminarTurno(element._id);
                      const nuevaLista = listaTurnos.filter((turno) => {
                        if (turno._id !== element._id) return turno;
                      });
                      setListaTurnos(nuevaLista);
                    }}
                  />
                </div> 
              );
            })
          ) : (
            <div className="mx-auto container">
              <Alert variant={"info"}>Usted no tiene turnos cargados.</Alert>
            </div>
             */

export default Turnos;

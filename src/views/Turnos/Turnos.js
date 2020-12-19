import React, { useState, useEffect } from "react";
import NavbarTurnos from "../NavBars/NavbarTurnos";
import { Container, Alert } from "react-bootstrap";
import { postTurno, getTurnos, eliminarTurno } from "../../services/turnos";
import FormularioTurnos from "./FormularioTurnos";
import CardTurnos from "./CardTurnos";

const Turnos = (props) => {
  const [lista, setLista] = useState([]);
  useEffect(
    () =>
      async function () {
        try {
          const storageLista = await getTurnos();
          if (storageLista.data) setLista(storageLista.data);
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    []
  );

  return (
    <>
      <NavbarTurnos />
      <Container>
        <h3 className="m-2">📲 Sistema Turnos </h3>
        <FormularioTurnos
          turno={{}}
          buttonTurno={"PEDIR TURNO"}
          handlerTurno={async (values) => {
            /* const turnoNuevo = await */ postTurno(values);
            /* setLista([...lista, turnoNuevo.data]); */
          }}
        />
        <div>
          <h3 className="m-2">📄 Mis turnos:</h3>
          {lista.length > 0 ? (
            lista.map((element, index) => {
              return (
                <div key={index} style={{ margin: "15px" }}>
                  <CardTurnos
                    indice={index}
                    turno={element}
                    funcionEliminar={async () => {
                      await eliminarTurno(element._id);
                      const nuevaLista = lista.filter((turno) => {
                        if (turno._id !== element._id) return turno;
                      });
                      setLista(nuevaLista);
                    }}
                  />
                </div>
              );
            })
          ) : (
            <div className="mx-auto container">
              <Alert variant={"info"}>Usted no tiene turnos cargados.</Alert>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Turnos;

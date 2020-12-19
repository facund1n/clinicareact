const axios = require("axios");
const url = "http://localhost:3000";

const getTodosLosPacientes = async () => {
  try {
    const respuesta = await axios.get(`${url}/pacientes`); // utilizar esta funcion para filtar turnos por Paciente, este mismo paciente pueda ver sus turnos.
    return respuesta.pacientesDB;
  } catch (error) {
    console.log("Error ", error);
  }
};

const postPaciente = async (paciente) => {
  try {
    return await axios.post(`${url}/pacientes`, paciente);
  } catch (error) {
    console.log("Error ", error);
  }
};

const actualizarTurno = async (turno) => {
  try {
    const respuesta = await axios.put(`${url}/turnos/${turno._id}`, turno);
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};
const eliminarTurno = async (id) => {
  try {
    return await axios.delete(`${url}/turnos/${id}`);
  } catch (error) {
    console.log("Error ", error);
  }
};
const getTurnosPorId = async (id) => {
  try {
    const respuesta = await axios.get(`${url}/turnos/${id}`);
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};

export {
  getTodosLosPacientes,
  postPaciente,
  eliminarTurno,
  getTurnosPorId,
  actualizarTurno,
};

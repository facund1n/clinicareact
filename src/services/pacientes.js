const axios = require("axios");
const url = "http://localhost:3000";

const getTodosLosPacientes = async () => {
  try {
    const respuesta = await axios.get(`${url}/pacientes`); // utilizar esta funcion para filtar turnos por Paciente, este mismo paciente pueda ver sus turnos.
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};

const getDNI = async () => {
  try {
    const respuesta = await axios.get(`${url}/pacientes`); // utilizar esta funcion para filtar turnos por Paciente, este mismo paciente pueda ver sus turnos.
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};

const postPaciente = async (paciente) => {
  try {
    return await axios.post(`${url}/pacientes`, paciente);
  } catch (error) {
    alert("DNI en uso", error);
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

const validarPaciente = async (paciente) => {
  // para que no hayan dos usuarios con mismo dni
  try {
    const respuesta = await axios.get(
      `${url}/pacientes?dni_like=${paciente.dni}`
    );
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};

export {
  getTodosLosPacientes,
  getDNI,
  postPaciente,
  eliminarTurno,
  getTurnosPorId,
  actualizarTurno,
  validarPaciente,
};

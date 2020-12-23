const axios = require("axios");
const url = "http://localhost:3000";

const getTodosLosMedicos = async () => {
  try {
    const respuesta = await axios.get(`${url}/medicos`); // utilizar esta funcion para filtar turnos por Paciente, este mismo paciente pueda ver sus turnos.
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};

const postMedico = async (turno) => {
  try {
    return await axios.post(`${url}/medicos`, turno);
  } catch (error) {
    console.log("Error ", error);
  }
};

const actualizarMedico = async (turno) => {
  try {
    const respuesta = await axios.put(`${url}/medicos/${turno._id}`, turno);
    return respuesta.medicosDB;
  } catch (error) {
    console.log("Error ", error);
  }
};
const eliminarMedico = async (id) => {
  try {
    return await axios.delete(`${url}/medicos/${id}`);
  } catch (error) {
    console.log("Error ", error);
  }
};
const getTurnosPorId = async (id) => {
  try {
    const respuesta = await axios.get(`${url}/medicos/${id}`);
    return respuesta.medicosDB;
  } catch (error) {
    console.log("Error ", error);
  }
};

export {
  getTodosLosMedicos,
  postMedico,
  eliminarMedico,
  getTurnosPorId,
  actualizarMedico,
};

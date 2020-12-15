const axios = require("axios");
const url = "http://localhost:3000";

const getTurnos = async () => {
  try {
    const respuesta = await axios.get(`${url}/panel-turnos`);
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};

const setTurno = async (turno) => {
  try {
    return await axios.post(`${url}/panel-turnos`, turno);
  } catch (error) {
    console.log("Error ", error);
  }
};

const actualizarTurno = async (turno) => {
  try {
    const respuesta = await axios.put(
      `${url}/panel-turnos/${turno._id}`,
      turno
    );
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};
const eliminarTurno = async (id) => {
  try {
    return await axios.delete(`${url}/panel-turnos/${id}`);
  } catch (error) {
    console.log("Error ", error);
  }
};
const getTurnosPorId = async (id) => {
  try {
    const respuesta = await axios.get(`${url}/panel-turnos/${id}`);
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};

export { getTurnos, setTurno, eliminarTurno, getTurnosPorId, actualizarTurno };

const setLogINfalse = () => {
  localStorage.setItem("logIN", false);
  localStorage.removeItem("nombrePaciente");
  localStorage.removeItem("nombreMedico");
  window.location.reload();
};

export default setLogINfalse;

// Fecha de inicio de la relación: 11 de agosto de 2026
const fechaInicio = new Date(2026, 7, 11);

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  const texto = `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
  const contadorEl = document.getElementById('contador');
  if (contadorEl) {
    contadorEl.textContent = texto;
  }
}

setInterval(actualizarContador, 1000);
actualizarContador();

const form = document.querySelector(".form");
const tbody = document.querySelector("tbody");

function handleSubmit(e) {
  e.preventDefault();

  const generoInputs = form.querySelectorAll('input[name="genero"]:checked');
  let generosSeleccionados = [];
  generoInputs.forEach(input => {
    generosSeleccionados.push(input.value);
  });

  const MediaCollector = {
    titulo: form.titulo.value,
    estreno: form.estreno.value,
    finalizacion: form.finalizacion.value,
    clasificacion: form.clasificacion.value,
    genero: generosSeleccionados,
    demografia: form.demografia.value,
    formato: form.formatos.value,
    calificacion: form.calificacion.value,
    comentario: form.comentario.value
  };

  console.log("Datos capturado:", MediaCollector);

  renderTable(MediaCollector);

  form.reset();
}

function renderTable(datos) {
  const row = `
    <tr>
      <td>${datos.titulo}</td>
      <td>${datos.estreno}</td>
      <td>${datos.finalizacion}</td>
      <td>${datos.clasificacion}</td>
      <td>${datos.genero.join(", ") || "N/A"}</td>
      <td>${datos.demografia}</td>
      <td>${datos.formato}</td>
      <td>${datos.calificacion}</td>
      <td>${datos.comentario}</td>
    </tr>
  `;
  tbody.innerHTML += row;
}

form.addEventListener("submit", handleSubmit);
/* import { createClient } from '@supabase/supabase-js';*/
import { createClient } from 'https://esm.sh/@supabase/supabase-js';


// Acceso al botón HTML
const button = document.querySelector(".btn");
// Acceso al cuerpo de mi tabla
const tbody = document.querySelector(".tbody");
const thead = document.querySelector(".thead");

const form = document.querySelector(".form");
const clearButton = document.querySelector(".clear-btn");

// Acceso a Supabase
const supabaseUrl = "https://prgaxwuydfpckimasfea.supabase.co";
const supabaseKey = "sb_publishable_DNIeFS7gWowjudz98bB3Kg_bs4dBwWr";

const supabase = createClient(supabaseUrl, supabaseKey);

async function showDataTable() {
  const { data, error } = await supabase.from("Cartoons").select("Titulo, Inicio, Finalizo, Episodios, Temporadas, Pais_de_Origen");

  if (error) {
    console.warn("Hay un error de conexión!", error.message);
    return;
  }

  tbody.innerHTML = "";
  thead.innerHTML = `
  <tr>
    <th>Título</th>
    <th>Año de Inicio</th>
    <th>Año de Finalización</th>
    <th>Número de Episodios</th>
    <th>Número de Temporadas</th>
    <th>País de Origen</th>
  </tr>
  `;
  data.forEach((p) => {
    tbody.innerHTML += `
      <tr>
        <td> ${p.Titulo} </td>
        <td> ${p.Inicio} </td>
        <td> ${p.Finalizo} </td>
        <td> ${p.Episodios} </td>
        <td> ${p.Temporadas} </td>
        <td> ${p.Pais_de_Origen} </td>
      </tr>
    `;
  });
}
async function insertData(e) {
  e.preventDefault();

  const Titulo = form.Titulo;
  const Inicio = form.Inicio;
  const Finalizo = form.Finalizo;
  const Episodios = form.Episodios;
  const Temporadas = form.Temporadas;
  const Pais_de_Origen = form.Pais_de_Origen;

  const { error } = await supabase
    .from("Cartoons")
    .insert({ Titulo: Titulo.value, Inicio: Inicio.value, Finalizo: Finalizo.value, Episodios: Episodios.value, Temporadas: Temporadas.value, Pais_de_Origen: Pais_de_Origen.value });

  if (error) {
    console.log(error.message);
    return;
  }

  console.log("Caricatura insertada correctamente!");
}

/* limpiar las entradas del formulario */
function clearForm() {
  form.reset();
}

button.addEventListener("click", showDataTable);
form.addEventListener("submit", insertData);
clearButton?.addEventListener("click", clearForm);



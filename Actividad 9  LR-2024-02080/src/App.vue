<script setup>
import { ref } from "vue";
import Title from "./components/Title.vue";

const datos = ref([
  { nombre: "Olkys", apellido: "Olivo", genero: "Femenino", carrera: "Ingenieria en Software"},
  { nombre: "Juan", apellido: "Perez", genero: "Masculino", carrera: "Contabilidad"},
  { nombre: "Maria", apellido: "Gonzalez", genero: "Femenino", carrera: "Psicologia Clinica"},
  { nombre: "Pedro", apellido: "Ramirez", genero: "Masculino", carrera: "Ingenieria en Software"},
  { nombre: "Ana", apellido: "Lopez", genero: "Femenino", carrera: "Psicologia Clinica"},
  { nombre: "Luis", apellido: "Martinez", genero: "Masculino", carrera: "Ingenieria en Software"},
]);

const nombre = ref("");
const apellido = ref("");
const genero = ref("");
const carrera = ref("");
const show = ref(false);
const buttomTitle = ref("Mostrar Registros");

function mostrarDatos() {
  show.value = !show.value;
  buttomTitle.value = show.value ? "Ocultar Registros" : "Mostrar Registros";
}

function RegistrarDatos() {
  if(nombre.value && apellido.value && genero.value && carrera.value) {
    datos.value.push({
      nombre: nombre.value,
      apellido: apellido.value,
      genero: genero.value,
      carrera: carrera.value,
    });
    // Limpiar formulario
    nombre.value = ""; apellido.value = ""; genero.value = ""; carrera.value = "";
  }
}
</script>

<template>
  <Title />
  
  <div class="card">
    <form @submit.prevent="RegistrarDatos">
      <div class="InputText">
        <label>Nombre Completo</label>
        <input type="text" placeholder="Escribe el nombre" v-model="nombre" />
        <input type="text" placeholder="Escribe el apellido" v-model="apellido" />
      </div>

      <div class="InputRadio">
        <label>Género</label>
        <div class="radio-group">
          <label><input type="radio" v-model="genero" value="Masculino" /> Masculino</label>
          <label><input type="radio" v-model="genero" value="Femenino" /> Femenino</label>
        </div>
      </div>

      <div class="InputSelect">
        <label>Carrera</label>
        <select v-model="carrera">
          <option value="" disabled>Seleccione una opción</option>
          <option value="Ingenieria en Software">Ingeniería en Software</option>
          <option value="Contabilidad">Contabilidad</option>
          <option value="Psicologia Clinica">Psicología Clínica</option>
          <option value="Bioanalisis">Bioanálisis</option>
        </select>
      </div>

      <button class="btn btn-registrar" type="submit">Guardar Datos</button>
    </form>
  </div>

  <hr />

  <button class="btn btn-mostrar" @click="mostrarDatos">{{ buttomTitle }}</button>

  <div v-if="show" class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Género</th>
          <th>Carrera</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dato, index) in datos" :key="index">
          <td>{{ dato.nombre }}</td>
          <td>{{ dato.apellido }}</td>
          <td>{{ dato.genero }}</td>
          <td>{{ dato.carrera }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
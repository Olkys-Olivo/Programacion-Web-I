<script setup>
  import { ref, vModelRadio } from "vue";
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
const buttomTitle = ref("Mostrar");

function mostrarDatos() {
  show.value = !show.value;

  if (show.value) {
    buttomTitle.value = "Ocultar";
  } else {
    buttomTitle.value = "Mostrar";
  }
}

function RegistrarDatos() {
  datos.value.push({
    nombre: nombre.value,
    apellido: apellido.value,
    genero: genero.value,
    carrera: carrera.value,
  });

  nombre.value = "";
  apellido.value = "";
  genero.value = "";
  carrera.value = "";
}
</script>

<template>
  <Title />
  <div class="card">
  <form @submit.prevent = "RegistrarDatos">
    <div class="InputText">
      <input type="text" placeholder="Nombre" v-model="nombre" />
      <input type="text" placeholder="Apellido" v-model="apellido" />
    </div>

    <div class="InputRadio">
      <input type="radio" v-model="genero" value="Masculino">Masculino</input>
      <input type="radio" v-model="genero" value="Femenino">Femenino</input>
    </div>

    <div class="InputSelect">
      <select v-model="carrera">
        <option value="" disabled>Seleccione una carrera</option>
        <option value="Ingenieria en Software">Ingenieria en Software</option>
        <option value="Contabilidad">Contabilidad</option>
        <option value="Psicologia Clinica">Psicologia Clinica</option>
        <option value="Psicologia Industrial y Organizacional">Psicologia Industrial y Organizacional</option>
        <option value="Bioanalisis">Bioanalisis</option>
        <option value="Educacion Inicial">Edicacion</option>
        <option value="Ciencias de la Comunicacion">Ciencias de la Comunicacion</option>
        <option value="Administracion de Empresas Turisticas">Administracion de Empresas Turisticas</option>
      </select>
    </div>
    <button class="btn" type="submit">Registrar</button>
  </form>
  </div>
  <hr />

  <button @click="mostrarDatos">{{ buttomTitle }}</button>

  <table v-if="show">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Genero</th>
        <th>Carrera</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="dato in datos">
        <td>{{ dato.nombre }}</td>
        <td>{{ dato.apellido }}</td>
        <td>{{ dato.genero }}</td>
        <td>{{ dato.carrera }}</td>
      </tr>
    </tbody>
  </table>
</template>

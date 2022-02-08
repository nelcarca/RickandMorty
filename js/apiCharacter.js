
const nameCharacter = document.querySelector("#titulo");
const imgCharacter = document.querySelector('#imgCharacter');
const statusCharacter = document.querySelector('#statusCharacter');
const genderCharacter = document.querySelector ('#genderCharacter');
const speciesCharacter = document.querySelector ('#speciesCharacter');
const originCharacter = document.querySelector ('#originCharacter');
const locationCharacter = document.querySelector ('#locationCharacter');


const parametro = window.location.search;
const urlParams = new URLSearchParams(parametro);
let id = urlParams.get("id");

const getCharacterById = async (id) => {
   try {
      const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
      const data = response.json();
      return data;
   } catch (error) {
      throw error;
   }
   
}

//el llamado a la funcion
getCharacterById(id).then( data => {
   nameCharacter.innerText = data.name;
   imgCharacter.src = data.image;
   genderCharacter.innerText = "Genero: " + data.gender;
   speciesCharacter.innerText = "Especie: " + data.species;
   originCharacter.innerText = "Origen: " + data.origin.name;
   locationCharacter.innerText = "Ubicación actual: " + data.location.name;
   statusCharacter.innerText = "Condición: " + data.status;
   if (data.status === 'Alive') {
      statusCharacter.classList.add('green');
   } else if (data.status === 'Dead') {
      statusCharacter.classList.add('red');
   } else {
      statusCharacter.classList.add('yellow');
   }

}).catch(err => err);


// getCharacterById(id).then( data => {
   
// }).catch(err => err);

//peticion al api pero por id

// const printPagination = (info) => {

// }
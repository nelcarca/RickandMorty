
const nameCharacter = document.querySelector("#titulo");

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
   nameCharacter.innerText = data.name
}).catch(err => err);
//peticion al api pero por id

const printPagination = (info) => {

}
//crear referencias
const rowCards = document.querySelector("#rowCards");
const formData = document.querySelector("#formData");

// METODO ANTIGUO
// const url= "https://rickandmortyapi.com/api/character";
// fetch(url).then(
//     function (resp) {
//         return resp.json();
// })
// .then((data) => {
//     // console.log(data.results);
//     console.log(data);
// })
// .catch((err) => console.error(err));

//llamado a las apis (PETICIONES)
const getCharacters = async () => {
   try{
   const response = await fetch("https://rickandmortyapi.com/api/character");
   const data = response.json();
   return data;
   }catch (error){
      console.log(error);
   }
};

const getCharacterForName = async (nameCharacter) => {
   try {
   const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`);
   const data = await response.json();
   return data;
   } catch (error) {
      throw error;
   }
   
}
//limpia el row
const cleanRow =() => {
   rowCards.innerHTML="";
}

const init = async () => {
   const characters = await getCharacters();
   console.log(characters.results);
   createCards(characters.results)
}
init();

// //funcion anonima
// () => {}
// // funcion anonima auto invocada
// (() => {})()


// (async ()=> {
//    const data = getCharacters();
//    console.log(data);
//    console.log(data.results);
// })();
// end points
// npm axios

cardCharacter = (character) => {
   //creamos los elementos html
   const cardBootstrap = document.createElement("div");
   const imgCard = document.createElement("img");
   const cardBody = document.createElement("div");
   const titleCharacter = document.createElement("h5");
   const btnByIdCharacter = document.createElement("a");
   //añadir sus clases
   cardBootstrap.classList.add("card", "mt-4");
   imgCard.classList.add("card-img-top", "mt-2");
   cardBody.classList.add("card-body");
   titleCharacter.classList.add("card-title", "text-center");
   btnByIdCharacter.classList.add("btn", "btn-secondary", "mb-2");

   //añadiendo el href
   btnByIdCharacter.href=`personaje.html?id=${character.id}`;

   //textos de los elementos
   const nameCharacter = document.createTextNode(character.name);
   const textButtonCharacter = document.createTextNode("ir al personaje");

   //cargar imagenes
   imgCard.src=character.image;
   //carga titulos
   titleCharacter.appendChild(nameCharacter);
   btnByIdCharacter.appendChild(textButtonCharacter);

   //el renderizado
   cardBootstrap.append(imgCard, cardBody, btnByIdCharacter);
   cardBody.append(titleCharacter);
   rowCards.append(cardBootstrap);
}

//creacion de cards
createCards = (characters) => {
   console.log(characters);
   characters.map(element => cardCharacter(element));
}

/* llamar al formulario*/
formData.addEventListener("submit", handleSudmit);

function handleSudmit(event) {
   event.preventDefault();
   const form = new FormData(this);
   cleanRow();
   // console.log(form.get("character"));
   getCharacterForName(form.get("character")).then(data => createCards (data.results)).catch(err => console.log(err));
}


{/* <div class="card" style="width: 18rem;">
   <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <a href="#" class="mb-3 btn btn-primary">ir a personaje</a>
</div> */}
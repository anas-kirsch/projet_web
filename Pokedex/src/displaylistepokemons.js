


import { Components } from "./components.js";
import { recupPokemons } from "./recupPokemons.js";
import { displayOnePokemon } from "./displayOnePokemon.js";

export async function displayListePokemons(){

    const tableauPokemons =  await recupPokemons();
    // console.log(tableauPokemons);

    const template = document.querySelector("#template");

    
    tableauPokemons.forEach(pokemon => {
        const cloneTemplate = template.content.cloneNode(true);

        const div = cloneTemplate.querySelector(".div-liste-pokemons")
        const sectionDisplay= document.querySelector(".display-pokemon");
        
        
        div.addEventListener('click',()=>{
            const divMessage = document.querySelector(".display-home-content")
            divMessage.classList.add("active");
        //    console.log(pokemon);
            displayOnePokemon(pokemon);
        });
        
        
        const baliseH =  cloneTemplate.querySelector("h2");
        baliseH.textContent = pokemon.name;
        
        // baliseP.texteContent = pokemon.name;
        
        const baliseP = cloneTemplate.querySelector("p");
        baliseP.textContent = pokemon.id;
        

        const baliseImg = cloneTemplate.querySelector("img")
        baliseImg.setAttribute("src",pokemon.image)
        baliseImg.setAttribute("alt",pokemon.name)
        
        Components.allPokemons.sectionScrollPokemons.appendChild(cloneTemplate);

        



    });

}
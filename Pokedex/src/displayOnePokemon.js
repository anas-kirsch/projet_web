
import { Components } from "./components.js";
import { displayListePokemons } from "./displaylistepokemons.js";
import { recupPokemons } from "./recupPokemons.js";

export function displayOnePokemon(pokemon){

    const sectionDisplay= document.querySelector(".display-pokemon");
    sectionDisplay.innerHTML= "";

    const templatedeux = document.querySelector("#template-deux")
    const cloneTemplateDeux = templatedeux.content.cloneNode(true);

    const baliseNumPokemon = cloneTemplateDeux.querySelector(".display-numero-pokemon")
    baliseNumPokemon.textContent ="n°"+ pokemon.id+"";
    
    const baliseNamePokemon = cloneTemplateDeux.querySelector(".display-nom-pokemon");
    baliseNamePokemon.textContent = pokemon.name;

    const baliseImagePokemon = cloneTemplateDeux.querySelector(".display-image-pokemon");
    baliseImagePokemon.setAttribute("src",pokemon.image)
    baliseImagePokemon.setAttribute("alt",pokemon.name)

    const alignTypes = cloneTemplateDeux.querySelector(".align-types")

    pokemon.apiTypes.forEach(types => {
        
        const imageType = document.createElement("img");
        imageType.setAttribute("src",types.image);
        imageType.setAttribute("alt",types.name)

        imageType.classList.add("types-pokemons")
        alignTypes.appendChild(imageType);
    });

    sectionDisplay.appendChild(cloneTemplateDeux);

}
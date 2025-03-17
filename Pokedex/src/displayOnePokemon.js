
import { Components } from "./components.js";
import { displayListePokemons } from "./displaylistepokemons.js";
import { recupPokemons } from "./recupPokemons.js";
import { getOnePokemon } from "../fetchpokemon.js";


export async function displayOnePokemon(pokemon){

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


    if(pokemon.apiEvolutions.length != 0){

        const monEvoDuCoup = await getOnePokemon(pokemon.apiEvolutions[0].name);
        console.log(monEvoDuCoup);

        const numeroEvolution = cloneTemplateDeux.querySelector(".display-numero-pokemon-evolution")
        numeroEvolution.textContent = monEvoDuCoup.pokedexId;
        
        const nameEvolution = cloneTemplateDeux.querySelector(".display-name-pokemon-evo");
        nameEvolution.textContent = monEvoDuCoup.name;



        const imageEvolution = cloneTemplateDeux.querySelector(".image-pokemon-evo");
        imageEvolution.setAttribute("src",monEvoDuCoup.image);
        imageEvolution.setAttribute("alt",monEvoDuCoup.name);

    }else{
        console.log("pas devo")

        const divEvo = cloneTemplateDeux.querySelector(".divEvolution");
        divEvo.innerHTML=""
        divEvo.textContent = "Pas d'évolution ∅"
        divEvo.classList.add("pasdevo")

    }



    sectionDisplay.appendChild(cloneTemplateDeux);


}


  
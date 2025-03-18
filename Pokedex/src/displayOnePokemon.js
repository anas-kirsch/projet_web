
import { Components } from "./components.js";
import { displayListePokemons } from "./displaylistepokemons.js";
import { recupPokemons } from "./recupPokemons.js";
import { getOnePokemon } from "./getonePokemon.js";

export async function displayOnePokemon(pokemon){

    

    // console.log(pokemon)

    const sectionDisplay= document.querySelector(".display-pokemon");
    sectionDisplay.innerHTML= "";

    const templatedeux = document.querySelector("#template-deux")
    const cloneTemplateDeux = templatedeux.content.cloneNode(true);

    const baliseNumPokemon = cloneTemplateDeux.querySelector(".display-numero-pokemon")
    baliseNumPokemon.textContent ="n°"+ pokemon.id +"";
    
    const baliseNamePokemon = cloneTemplateDeux.querySelector(".display-nom-pokemon");
    baliseNamePokemon.textContent = pokemon.name;

    const baliseImagePokemon = cloneTemplateDeux.querySelector(".display-image-pokemon");
    baliseImagePokemon.setAttribute("src",pokemon.image)
    baliseImagePokemon.setAttribute("alt",pokemon.name)
    // console.log(pokemon.name);

    const alignTypes = cloneTemplateDeux.querySelector(".align-types")
    // console.log(pokemon.apiTypes);
    pokemon.apiTypes.forEach(types => {
        
        const imageType = document.createElement("img");
        imageType.setAttribute("src",types.image);
        imageType.setAttribute("alt",types.name)

        imageType.classList.add("types-pokemons")
        alignTypes.appendChild(imageType);
        
    });

    
    const divEvolutionContainer = cloneTemplateDeux.querySelector(".divEvolutionContainer");
    divEvolutionContainer.innerHTML = ""; // Clear any existing content

    if (pokemon.apiEvolutions.length < 2) {
        divEvolutionContainer.classList.add("style-evolutions");
    } else {
        divEvolutionContainer.classList.add("divEvolutionContainer");
    }

    if (pokemon.apiEvolutions.length != 0) {

        pokemon.apiEvolutions.forEach(async (lesEvo) => {
            // console.log(lesEvo);

            const monEvoDuCoup = await getOnePokemon(lesEvo.name);
            // console.log(monEvoDuCoup);

            const divEvo = document.createElement("div");
            divEvo.classList.add("divEvolution");

            const numeroEvolution = document.createElement("div");
            numeroEvolution.classList.add("display-numero-pokemon-evolution");
            numeroEvolution.textContent = monEvoDuCoup.pokedexId;
            divEvo.appendChild(numeroEvolution);

            const nameEvolution = document.createElement("div");
            nameEvolution.classList.add("display-name-pokemon-evo");
            nameEvolution.textContent = monEvoDuCoup.name;
            divEvo.appendChild(nameEvolution);

            const imageEvolution = document.createElement("img");
            imageEvolution.classList.add("image-pokemon-evo");
            imageEvolution.setAttribute("src", monEvoDuCoup.image);
            imageEvolution.setAttribute("alt", monEvoDuCoup.name);
            divEvo.appendChild(imageEvolution);

            divEvo.addEventListener('click', () => {
                displayOnePokemon(monEvoDuCoup);
            });

            divEvolutionContainer.appendChild(divEvo);
        });
        } else {
            console.log("pas devo");

            const divEvo = document.createElement("div");
            divEvo.classList.add("divEvolution");
            divEvo.textContent = "Pas d'évolution ∅";
            divEvo.classList.add("pasdevo");

            divEvolutionContainer.appendChild(divEvo);
        }

        sectionDisplay.appendChild(cloneTemplateDeux);
        
        


}



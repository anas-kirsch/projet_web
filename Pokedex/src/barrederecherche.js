
import { displayOnePokemon } from "./displayOnePokemon.js";
import { getOnePokemon } from "./getonePokemon.js";
import { Components } from "./components.js";

export function getSearch(){



    Components.recherche.bouttonValidrecherche.addEventListener('click',async ()=>{
        // console.log("boutton")
        const divMessage = document.querySelector(".display-home-content")
        divMessage.classList.add("active");
        const PokemonQueJeCherche = Components.recherche.maBarreDeRecherche.value;
        // console.log(PokemonQueJeCherche);

        const lePokemonTrouve = await getOnePokemon(PokemonQueJeCherche);
        // console.log(lePokemonTrouve);
        
         displayOnePokemon(lePokemonTrouve);

    })


}
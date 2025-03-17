
import { displayOnePokemon } from "./displayOnePokemon.js";
import { getOnePokemon } from "../fetchpokemon.js";
import { Components } from "./components.js";

export function getSearch(){



    Components.recherche.bouttonValidrecherche.addEventListener('click',()=>{
        // console.log("boutton")
        const PokemonQueJeCherche = Components.recherche.maBarreDeRecherche.value;
        console.log(PokemonQueJeCherche);

        const lePokemonTrouve = getOnePokemon(PokemonQueJeCherche);
        console.log(lePokemonTrouve);
        
        displayOnePokemon(lePokemonTrouve);

    })


}
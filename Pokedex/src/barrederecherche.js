
import { displayOnePokemon } from "./displayOnePokemon.js";
import { getOnePokemon } from "./getonePokemon.js";
import { Components } from "./components.js";

export function getSearch(){



    Components.recherche.bouttonValidrecherche.addEventListener('click',async ()=>{
        // console.log("boutton")
        const PokemonQueJeCherche = Components.recherche.maBarreDeRecherche.value;
        // console.log(PokemonQueJeCherche);

        const lePokemonTrouve = await getOnePokemon(PokemonQueJeCherche);
        // console.log(lePokemonTrouve);
        
         displayOnePokemon(lePokemonTrouve);

    })


}
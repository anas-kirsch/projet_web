
import { displayListePokemons } from "./displaylistepokemons.js";


export async function getOnePokemon(evoName){

        let evopokemon;
        const getEvo = await fetch("https://pokebuildapi.fr/api/v1/pokemon/"+evoName+"")
        .then(response=>response.json())
        .then((reponse)=>{
                // console.log(reponse);
                 evopokemon = reponse;
                // console.log(evo);
        });
        //     console.log(evopokemon);
        
        return evopokemon;


}


// import { recupPokemons } from "../src/recupPokemons.js";
import { displayListePokemons } from "../src/displaylistepokemons.js";
import { displayOnePokemon } from "../src/displayOnePokemon.js";
import { getOnePokemon } from "../fetchpokemon.js";
import { getSearch } from "../src/barrederecherche.js";


main();


function main(){

    

    displayListePokemons();

    displayOnePokemon();

    getSearch();
}
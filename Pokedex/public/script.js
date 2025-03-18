

// import { recupPokemons } from "../src/recupPokemons.js";
import { displayListePokemons } from "../src/displaylistepokemons.js";
import { displayOnePokemon } from "../src/displayOnePokemon.js";
import { getOnePokemon } from "../src/getonePokemon.js"; 
import { getSearch } from "../src/barrederecherche.js";
import { boutton } from "../src/buttton.js";
import { bouttonNext } from "../src/buttton.js";

main();


function main(){

    displayListePokemons();
    displayOnePokemon();
    getSearch();
    boutton();
    bouttonNext();

    
}
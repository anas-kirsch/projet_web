
import { getOnePokemon } from "./getonePokemon.js";
import { displayOnePokemon } from "./displayOnePokemon.js"; 

export async function boutton(){

    const goback = document.querySelector(".goback");   
    goback.addEventListener('click', async () => {
    
    const pokemonNow = document.querySelector(".display-numero-pokemon");
    // console.log(pokemonNow.textContent);
        
// splite ou parseint
    const string = pokemonNow.textContent;
    const monNombre =  string.split("°")


    // const number = parseInt(pokemonNow.textContent)
    
            const previousPokedexId = monNombre[1]-1;
            // console.log(previousPokedexId)
            const preEvo = await getOnePokemon(previousPokedexId);
            // console.log(preEvo);
            displayOnePokemon(preEvo);
        
    });



}


export async function bouttonNext(){


    const goNext = document.querySelector(".gonext");   
    goNext.addEventListener('click', async () => {
    
    const pokemonNow = document.querySelector(".display-numero-pokemon");
    // console.log(pokemonNow.textContent);
        
// splite ou parseint
    const string = pokemonNow.textContent;
    const monNombre =  string.split("°")
    // console.log(monNombre);


    const number = parseInt(monNombre[1])
    
    const PokedexIdNext = number+1;
        // console.log(number);
        // console.log(PokedexIdNext)
        const pokemonNext = await getOnePokemon(PokedexIdNext);
        // console.log(pokemonNext);
        displayOnePokemon(pokemonNext);
        
    });



}
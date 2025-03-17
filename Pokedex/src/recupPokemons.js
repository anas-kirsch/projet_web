


export async function recupPokemons(){


    // const getAllPokemonPromise = fetch("https://pokebuildapi.fr/api/v1/pokemon") 
    const getAllPokemonPromise = fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100") 
  

    let tableauPokemons = await getAllPokemonPromise.then((reponse)=>{

        return reponse.json();
    }).catch((error)=>{
        console.error(error.message);
    });
    
    
    return tableauPokemons;
   
}
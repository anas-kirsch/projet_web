
import { Components } from "./components/Components.mjs";
import { getPotentialCityToSearch } from "./searchEvent.mjs";
import { handleSearchBarreEvent } from "./eventSubmitSearch.mjs";
import { ChooseSuggestions } from "./chooseSuggestions.mjs";


main();

async function main(){

    const div = document.querySelector(".div-proposition-recherche")
    
    document.addEventListener('click',()=>{
        
        div.classList.remove("active")
            
    })
    

    getPotentialCityToSearch();
    handleSearchBarreEvent();
    ChooseSuggestions();

    const maLoc = await fetch("https://api.locationiq.com/v1/autocomplete?key=pk.0873db43d16d82f5ba795ff21e7788c0&q=&limit=5&dedupe=1&",{
    }).then(response => response.json())

    
    console.log(maLoc)




   


    
}
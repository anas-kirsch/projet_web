
import { Components } from "./components/Components.mjs";
import { getPotentialCityToSearch } from "./searchEvent.mjs";
import { handleSearchBarreEvent } from "./eventSubmitSearch.mjs";
import { ChooseSuggestions } from "./chooseSuggestions.mjs";
import { getstatfetch } from "./getstats.mjs";
import { displayStats } from "./displayStats.mjs";
import { ReadInfos } from "./ReadInfos.mjs";

main();

async function main(){

    const div = document.querySelector(".div-proposition-recherche")
    
    document.addEventListener('click',()=>{
        
        div.classList.remove("active")
            
    })
    

    getPotentialCityToSearch();
    handleSearchBarreEvent();
    ChooseSuggestions();

    async function getLocationByIP() {
        
        const response = await fetch("http://ip-api.com/json/");
        const data = await response.json();
        console.log(data);
        console.log(data.lat);
        console.log(data.lon);

        const latitude = data.lat;
        const longitude = data.lon;
        
            const coord = {
                latitude,
                longitude,
            }
            
            console.log(coord);
            await displayStats(coord)
            Components.data.ville.textContent = ""+data.city+", "+data.regionName+", "+data.country+"";



    }

    getLocationByIP();

    ReadInfos();

}
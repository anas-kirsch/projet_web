import { Components } from "./components/Components.mjs";
import { getstatfetch } from "./getstats.mjs";

/**
 * 
 * @param {{latitude:number,longitude:number}} coord 
 */
export async function displayStats(coord){
    
    const mystat = await getstatfetch(coord);
    // console.log(mystat);

    
    
    // Components.data.ville.textContent = "latitude : "+coord.latitude" : "
    
    Components.data.temperature.textContent = mystat.current.temperature_2m;
    Components.data.ville.textContent = Components.search.barrederecherche.value;



    Components.search.barrederecherche.value="";
}


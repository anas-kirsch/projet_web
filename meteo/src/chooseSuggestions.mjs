
import { getPotentialCityToSearch } from "./searchEvent.mjs";
import { Components } from "./components/Components.mjs";
import { getstatfetch } from "./getstats.mjs";
import { displayStats } from "./displayStats.mjs";
import { GeoCityServices } from "./services/GeoCityService.mjs";

export async function ChooseSuggestions(){

    Components.search.bouttonRecherche.addEventListener('click',async()=>{

        const div = document.querySelector(".div-proposition-recherche")

    
        div.classList.remove("active")


        
        const nameCity = Components.search.barrederecherche.value;
        console.log(nameCity)
        
        const regex = /[0-9]/g;
        const found  = nameCity.match(regex);
        // console.log(found)
        if( found == null){
            console.log("pas de nombre ceci est une ville")
            
    
            const coordJSON = localStorage.getItem("RECHERCHE");
            const coord = JSON.parse(coordJSON);
            console.log(coord);
            
            

            const objectCoord =  {
                latitude: coord.latitude,
                longitude: coord.longitude
            }
            console.log(objectCoord)

            const statdelaville  = await getstatfetch(objectCoord);
            console.log(statdelaville)
            
            displayStats(statdelaville);

        

        }
    else{

        const dataOfInput = Components.search.barrederecherche.value;


        console.log("ceci est des coordonees")
        const ArrayLatLong = dataOfInput.split(" ");
        console.log(ArrayLatLong);

        const arrayLat = ArrayLatLong[0].split("=");
        console.log(arrayLat[1])
        
        const arrayLong = ArrayLatLong[1].split("=");
        console.log(arrayLong[1])
        
        const latitude = arrayLat[1];        
        const longitude = arrayLong[1];
        
        const finaleCoordonnées = {
            latitude,
            longitude
        }
        
        console.log(finaleCoordonnées)
        
        
       
        const statdelaville  = await getstatfetch(finaleCoordonnées);
        console.log(statdelaville)
        
        displayStats(statdelaville)

    }


    })

    
}












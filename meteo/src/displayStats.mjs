import { Components } from "./components/Components.mjs";
import { getstatfetch } from "./getstats.mjs";

/**
 * 
 * @param {{latitude:number,longitude:number}} coord 
 */
export async function displayStats(coord){
    
    const mystat = await getstatfetch(coord);
    // console.log(mystat);

    const nuageAccueil = document.querySelector(".wrapper")
    nuageAccueil.classList.add("active")

    const h5 = document.querySelector("h5");
    h5.classList.add("active");

    const divAccueil = document.querySelector(".accueil");
    divAccueil.classList.add("active")






    
    // Components.data.ville.textContent = "latitude : "+coord.latitude" : "
    
    Components.data.temperature.textContent = ""+ mystat.current.temperature_2m+"°";
    Components.data.ville.textContent = Components.search.barrederecherche.value;

    Components.data.ciel.textContent = "Couverture : "+mystat.current.cloud_cover+"%";

    
    if (mystat.current.cloud_cover < 33) {
        console.log("moin de33")
        if (mystat.current.cloud_cover < 33) {
            console.log("moin de33")
            Components.data.imgCiel.setAttribute("alt","ciel degage")
            Components.data.imgCiel.setAttribute("src","./image/sun(4).png")
            Components.data.imgCiel.classList.add("active");
        
        }

    } else if (mystat.current.cloud_cover < 66) {
        console.log("moin de 66")
        Components.data.imgCiel.setAttribute("alt","ciel degage")
        Components.data.imgCiel.setAttribute("src","./image/cloudy.png")
        Components.data.imgCiel.classList.add("active");
    } else {
        Components.data.imgCiel.setAttribute("alt","ciel couvert")
        Components.data.imgCiel.setAttribute("src","./image/clouds.png")
        Components.data.imgCiel.classList.add("active");
    }





    Components.search.barrederecherche.value="";
}



// containerCiel: document.querySelector(".container-temps"),
// ciel : document.querySelector(".temps"),
// imgCiel : document.querySelector(".cloudCover"),

// precipitation:document.querySelector(".precipitation"),
// pressure : document.querySelector(".pressure"),


// containerDAYNIGHT: document.querySelector(".container-isday"),
// imgISDAYNIGHT :document.querySelector(".image-jour-nuit"),

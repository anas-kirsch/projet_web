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

    const divAccueil = document.querySelector(".accueil");
    divAccueil.classList.add("active")


    
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

    /*rain mm*/ 


    Components.data.precipitation.textContent = "Précipitations : "+mystat.current.precipitation+"mm"

    if(mystat.current.precipitation > 0){
        Components.data.precipitationImg.setAttribute("src","./image/rain.png")
        Components.data.precipitationImg.setAttribute("alt","il pleut")
        Components.data.precipitationImg.classList.add("active");
    }
    else{
        Components.data.precipitationImg.setAttribute("src","./image/clouds(1).png")
        Components.data.precipitationImg.setAttribute("alt","il pleut")
        Components.data.precipitationImg.classList.add("active");
    }

    /* pressure*/
    Components.data.pressure.textContent = "Pression : "+mystat.current.pressure_msl+" hpa"
    
    Components.data.pressureImg.setAttribute("src","./image/atmospherique.png")
    Components.data.pressureImg.setAttribute("alt","logo pression atmospherique")
    Components.data.pressureImg.classList.add("active");

    Components.data.humidity.textContent = "Humidité : "+mystat.current.relative_humidity_2m+" %"
    
    Components.data.humidityImg.setAttribute("src","./image/humidite.png")
    Components.data.humidityImg.setAttribute("alt","image humidite")
    Components.data.humidityImg.classList.add("active");


    if(mystat.current.is_day == 0){

        Components.css.body.classList.add("active");
        Components.css.containerDirectMeteo.classList.add("active")

        Components.data.containerCiel.forEach(element => {
            
            element.classList.add("active")
        });

    }


    if(mystat.current.is_day == 1){

        Components.css.body.classList.remove("active");
        Components.css.containerDirectMeteo.classList.remove("active")

        Components.data.containerCiel.forEach(element => {
            
            element.classList.remove("active")
        });
        
    }



    Components.search.barrederecherche.value="";
}



import { Components } from "./components/Components.mjs";
import { getstatfetch } from "./getstats.mjs";
import { displayStats } from "./displayStats.mjs";
import { GeoCityServices } from "./services/GeoCityService.mjs";

export function search(){


    Components.search.formulaire.addEventListener('input',async(event)=>{
        const template = document.querySelector(".template-recherche")
        const div = document.querySelector(".div-proposition-recherche")
        div.classList.add("active")
        div.innerHTML= "";
        
        const dataOfInput = Components.search.barrederecherche.value;
        event.preventDefault();
        // console.log(dataOfInput);
        
        const arrayOfCity =await GeoCityServices.getCityInfo(dataOfInput)
        .then(arrayOfCity=>{
            console.log(arrayOfCity);
    
            for (let index = 0; index < 5; index++) {
                const cloneTemplate = template.content.cloneNode(true);
                const p = cloneTemplate.querySelector(".texte-proposition")
                p.textContent =" "+arrayOfCity.results[index].name+", "+arrayOfCity.results[index].country+"";
                
                cloneTemplate.appendChild(p);
                div.appendChild(cloneTemplate)
                // const header= document.querySelector("header");
                // header.appendChild(cloneTemplate)
            }
        })
        .catch(err=>{
            // console.error("pas trouvé");
            const messageErreur = document.createElement("p");
            messageErreur.classList.add("messageErreur")
            messageErreur.textContent = "..."
            div.appendChild(messageErreur)
        });        

        
        
        

    Components.search.formulaire.addEventListener('submit', async(event)=>{
        
        // const dataOfInput = Components.search.barrederecherche.value;
        // console.log(dataOfInput);
        // console.log(typeof dataOfInput);
        
        const regex = /[0-9]/g;
            const found  = dataOfInput.match(regex);
            // console.log(found)
            
        if( found == null){
            // console.log("pas de nombre ceci est une ville")





        }
       else{

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
        
        
        displayStats(finaleCoordonnées);
        
    }
    
    
});

})


}
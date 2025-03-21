
import { Components } from "./components/Components.mjs";
import { getstatfetch } from "./getstats.mjs";
import { displayStats } from "./displayStats.mjs";

export function search(){


    Components.search.formulaire.addEventListener('input',async(event)=>{
        const template = document.querySelector(".template-recherche")
        // template.innerHTML= "";
        
        const dataOfInput = Components.search.barrederecherche.value;
        event.preventDefault();
        // console.log(dataOfInput);
        
        
        const getCityName = fetch("https://geocoding-api.open-meteo.com/v1/search?name="+dataOfInput+"&count=10&language=fr&format=json")
        
        let arrayOfCity = await getCityName.then((Response)=>{
            return Response.json();
        }).catch((error)=>{
            console.log(error.message);
        })
        
        // const containerTemplate = document.querySelector(".template-container");
        console.log(arrayOfCity);
        
        
     
        
        for (let index = 0; index < 5; index++) {
            
            
            const cloneTemplate = template.content.cloneNode(true);
            const div = cloneTemplate.querySelector(".div-proposition-recherche")
            const ul = cloneTemplate.querySelector(".texte-proposition")
            
            ul.textContent =" "+arrayOfCity.results[index].name+", "+arrayOfCity.results[index].country+"";
            div.appendChild(ul);
            cloneTemplate.appendChild(div)
            
            const header= document.querySelector("header");
            header.appendChild(cloneTemplate)
            
            
        }
        
        

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
        // console.log(ArrayLatLong);

        const arrayLat = ArrayLatLong[0].split("=");
        // console.log(arrayLat[1])
        
        const arrayLong = ArrayLatLong[1].split("=");
        // console.log(arrayLong[1])
        
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
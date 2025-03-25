
import { Components } from "./components/Components.mjs";
import { getstatfetch } from "./getstats.mjs";
import { displayStats } from "./displayStats.mjs";
import { GeoCityServices } from "./services/GeoCityService.mjs";



/**
 * @returns { Promise<Array<{name:string,latitude: number,longitude:number}>> }
 */
export function getPotentialCityToSearch(){

    

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


            arrayOfCity.results.forEach(city => {
                
                // console.log(city)

                const cloneTemplate = template.content.cloneNode(true);
                const p = cloneTemplate.querySelector(".texte-proposition")
                p.textContent =" "+city.name+", "+city.admin2+" "+city.country+"";
                
                cloneTemplate.appendChild(p);
                div.appendChild(cloneTemplate)

                p.addEventListener('click',async()=>{
                    div.classList.remove("active")

                    console.log(city.name)
                    console.log(city.latitude)
                    console.log(city.longitude)

                    const objectCoord =  {
                        latitude: city.latitude,
                        longitude: city.longitude
                    }
                    console.log(objectCoord)

                    const statdelaville  = await getstatfetch(objectCoord);
                    console.log(statdelaville)

                 displayStats(statdelaville);


                })

            return arrayOfCity;
        });
        })
        .catch(err=>{
            // console.error("pas trouvé");
            const messageErreur = document.createElement("p");
            messageErreur.classList.add("messageErreur")
            messageErreur.textContent = "..."
            div.appendChild(messageErreur)
        });        



});




}




        
    

// Components.search.formulaire.addEventListener('submit', async(event)=>{
//     event.preventDefault();
//     div.classList.remove("active")
//     // const dataOfInput = Components.search.barrederecherche.value;
//     // console.log(dataOfInput);
//     // console.log(typeof dataOfInput);
    
//     const regex = /[0-9]/g;
//     const found  = dataOfInput.match(regex);
//         // console.log(found)
        
//     if( found == null){
//         // console.log("pas de nombre ceci est une ville")

//         const laVilleChercher = arrayOfCity.results[0].name
//         console.log(laVilleChercher);            
        

//     }
//    else{

//        const ArrayLatLong = dataOfInput.split(" ");
//     console.log(ArrayLatLong);

//     const arrayLat = ArrayLatLong[0].split("=");
//     console.log(arrayLat[1])
    
//     const arrayLong = ArrayLatLong[1].split("=");
//     console.log(arrayLong[1])
    
//     const latitude = arrayLat[1];        
//     const longitude = arrayLong[1];
    
//     const finaleCoordonnées = {
//         latitude,
//         longitude
//     }
    
//     console.log(finaleCoordonnées)
    
    
//     displayStats(finaleCoordonnées);
    
// }


// });






























Components.search.formulaire.addEventListener('submit', async(event)=>{
    event.preventDefault();
    div.classList.remove("active")
    // const dataOfInput = Components.search.barrederecherche.value;
    // console.log(dataOfInput);
    // console.log(typeof dataOfInput);
    
    const regex = /[0-9]/g;
    const found  = dataOfInput.match(regex);
        // console.log(found)
        
    if( found == null){
        console.log("pas de nombre ceci est une ville")


         
    const arrayOfCity = await GeoCityServices.getCityInfo(dataOfInput)
    .then( async arrayOfCity =>{

        console.log(arrayOfCity);
        
        
        console.log(arrayOfCity.results[0].name)
        console.log(arrayOfCity.results[0].latitude)
        console.log(arrayOfCity.results[0].longitude)


        const objectCoord =  {
            latitude: arrayOfCity.results[0].latitude,
            longitude: arrayOfCity.results[0].longitude
        }
        console.log(objectCoord)


        const statdelaville  = await getstatfetch(objectCoord);
        console.log(statdelaville)
        
        displayStats(statdelaville);


    })







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


})

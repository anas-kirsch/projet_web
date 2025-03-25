
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
            // console.log(arrayOfCity);
            
        
            arrayOfCity.results.forEach(city => {
                
                // console.log(city)
            
            const cloneTemplate = template.content.cloneNode(true);
            const p = cloneTemplate.querySelector(".texte-proposition")
            if(city.admin2 == undefined ){
                p.textContent =" "+city.name+", "+city.country+"";
            }
            if(city.country==undefined){
                p.textContent =" "+city.name+", "+city.admin2+"";
            }
            else{
                p.textContent =" "+city.name+", "+city.admin2+", "+city.country+"";

            }

            cloneTemplate.appendChild(p);
            div.appendChild(cloneTemplate)
            
            p.addEventListener('click',async()=>{
                div.classList.remove("active")
                if(city.admin2 == undefined){
                    Components.search.barrederecherche.value= " "+city.name+", "+city.country+"";
                }
                else{
                    Components.search.barrederecherche.value= " "+city.name+", "+city.admin2+", "+city.country+"";
                }
                
                event.preventDefault();
                // window.addEventListener("load",())


            console.log(city.name)
            console.log(city.latitude)
            console.log(city.longitude)
            
            const objectCoord =  {
                    name : city.name,
                    latitude: city.latitude,
                    longitude: city.longitude
                }    
            console.log(objectCoord)

            const coordJSON = JSON.stringify(objectCoord);
            localStorage.setItem("RECHERCHE",coordJSON)
            
            // const statdelaville  = await getstatfetch(objectCoord);
            // console.log(statdelaville)
            
            // displayStats(statdelaville);
        
                
            })    
                
            
        });    

            return arrayOfCity;
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




        
    

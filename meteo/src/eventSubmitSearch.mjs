import { Components } from "./components/Components.mjs"



/**
 * 
 */
export function handleSearchBarreEvent(){

     const barrederecherche = Components.search.barrederecherche;

     barrederecherche.addEventListener('submit',(event)=>{

      event.preventDefault();
        console.log("bonjour")

     });





}

import { Components } from "../Components.js";


export function onScrollFunction(){

    

    
    
    Components.searchBar.sectionTacheUnique.offsetTop;
    for (let i = 0; i < Components.searchBar.sectionTacheUnique.length; i++) {
        
        console.log(Components.searchBar.divcherche.offsetTop);
        console.log(Components.searchBar.sectionTacheUnique[i].offsetTop);
    
    
        if(Components.searchBar.sectionTacheUnique[i].offsetTop< Components.searchBar.divcherche.offsetTop -140 ){
            Components.searchBar.sectionTacheUnique[i].classList.add("active");
    
        }
        else if(Components.searchBar.sectionTacheUnique[i].offsetTop +140 > Components.searchBar.divcherche.offsetTop ){
            Components.searchBar.sectionTacheUnique[i].classList.remove("active");
        }
        
    }



}











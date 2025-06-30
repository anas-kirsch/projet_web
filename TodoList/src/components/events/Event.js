import { Components } from "../Components.js";
import { getDate } from "../../services/API/SaveDate.js";

export class Event {

    static cliqueAjouteUneTache(){

        Components.boutton.addTask.addEventListener('click',()=>{
        
            Components.form.sectionAddTask.classList.add("active");
    
        });
    }
    
    static cliqueNajoutePasUneTache(){
   
        Components.unshow.cancel.addEventListener('click',()=>{
            
            Components.form.sectionAddTask.classList.remove("active");
            
        });
        
    }

    static FinaliseAjoutTache(){
    
        Components.form.ValidTask.addEventListener('click',()=>{
            
            const toDates = getDate();
            
            Components.date.balisePDate.textContent = toDates;
            
        });
    }
            
}

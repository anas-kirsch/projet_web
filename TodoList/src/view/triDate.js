import { Components } from "../components/Components.js";
import { Local } from "../services/dataBase/local.js";
import { reloadTasks } from "../view/reloadTasks.js";
import { display } from "./Display.js";

export function triDate(){

    Components.boutton.bouttontri.addEventListener('click',()=>{


        
        let tabTasksList = Local.getAllTasks();

        console.log(tabTasksList);
        
        // tabTasksList.sort((a ,b) => {
            
            //     // console.log(a.date)
            
            //     return a.date - b.date;
    // });
    // console.log(tabTasksList);
    // reloadTasks(tabTasksList);
    
    const ordre = tabTasksList.reverse();
    console.log(ordre);
    

    tabTasksList.forEach(element => {
        const sectionNouvelleTache = document.querySelectorAll(".ListTask");
        const divTacheContent = document.querySelectorAll(".display-Task-Content");

        sectionNouvelleTache.forEach(element => {
            element.remove();
        });
        divTacheContent.forEach(element => {
            element.remove();
        });
    });

    
        ordre.forEach(element => {
            display.displayMyTask(element);
            const balisePasTrouve = document.querySelector(".messageRechercheIntrouvable");
            balisePasTrouve.textContent = "";
        });
    




});
    
    
}
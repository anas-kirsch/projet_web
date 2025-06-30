import { Components } from "../components/Components.js";
import { Local } from "../services/dataBase/local.js";
import { reloadTasks } from "../view/reloadTasks.js";
import { display } from "./Display.js";

export function triDate(tabInverser){

    Components.boutton.bouttontri.addEventListener('click',()=>{

        Components.boutton.bouttontri.classList.add("active")
        
        let tabTasksList = Local.getAllTasks();

        console.log(tabTasksList);
        
        const tabInverser = tabTasksList.sort((a ,b) => {
            
                // console.log(a.date)

                return b.date - a.date;
    });


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

    
        tabInverser.forEach(element => {
            display.displayMyTask(element);
            const balisePasTrouve = document.querySelector(".messageRechercheIntrouvable");
            balisePasTrouve.textContent = "";

        });
        
});
    
}







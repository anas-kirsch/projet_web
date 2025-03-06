import { Local } from "../services/dataBase/local.js";
import { display } from "./Display.js"; 

export function reloadTasks(){

    

    let tabTasksList = Local.getAllTasks();
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



    tabTasksList.forEach(element => {
        display.displayMyTask(element);
        const balisePasTrouve = document.querySelector(".messageRechercheIntrouvable");
        balisePasTrouve.textContent = "";
    });

    

}
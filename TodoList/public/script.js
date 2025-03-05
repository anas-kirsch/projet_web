import { Components } from "../src/components/Components.js"
import { getDate } from "../src/services/API/SaveDate.js"
import {Local} from "../src/services/dataBase/local.js"
import { deleteView} from "../src/view/deleteTask.js"
import { display} from "../src/view/Display.js" 
import { onScrollFunction } from "../src/components/events/Scroll.js"
import { Event } from "../src/components/events/Event.js"
import { resetForm } from "../src/services/dataBase/resetformulaire.js"
import { displayAll } from "../src/view/displayAll.js"


main();

function main(){
    


    let tabTasksList = Local.getAllTasks();
    if(tabTasksList == null){
        tabTasksList = [];
        console.log("le tableau vient d'etre creer");
    }

    displayAll.displayMyTasks(tabTasksList);

    
    console.log(tabTasksList);
    const tabTasksListJSON = JSON.stringify(tabTasksList);
    localStorage.setItem("LIST",tabTasksListJSON);
    

    Event.cliqueAjouteUneTache();
    Event.cliqueNajoutePasUneTache();
    Event.FinaliseAjoutTache();


    Components.form.ValidTask.addEventListener('click',()=>{

        Local.AddTask();
        display.displayMyTasks();
        console.log(Components.getNewTask());
        
        // location.reload();
        

        resetForm();
        
    });



    Components.boutton.clearTrash.addEventListener('click', ()=> {
        sectionNouvelleTache.remove();
        divTacheContent.remove();
        Local.deleteAllTasks();


        //soit recuper div de chaque index soir mette locationreload
    });

    return;
}


import { Components } from "../src/components/Components.js"
import { getDate } from "../src/services/API/SaveDate.js"
import {Local} from "../src/services/dataBase/local.js"
import { deleteView} from "../src/view/deleteTask.js"
import { display} from "../src/view/Display.js" 
import { onScrollFunction } from "../src/components/events/Scroll.js"
import { Event } from "../src/components/events/Event.js"


main();

function main(){
    

    let tabTasksList = Local.getAllTasks();
    if(tabTasksList == null){
        tabTasksList = [];
        console.log("le tableau vient d'etre creer")
    }
    
    const tabTasksListJSON = JSON.stringify(tabTasksList);
    localStorage.setItem("LIST",tabTasksListJSON);
    
    display.displayMyTasks(tabTasksList);
    Event.cliqueAjouteUneTache();
    Event.cliqueNajoutePasUneTache();
    Event.FinaliseAjoutTache();

    Components.form.ValidTask.addEventListener('click',()=>{
        
        Local.AddTask();
        location.reload();
        
    });


       
    

    Components.boutton.clearTrash.addEventListener('click', ()=> {

        Local.deleteAllTasks();
    });

    return;
}


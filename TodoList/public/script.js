import { Components } from "../src/components/Components.js"
import { getDate } from "../src/services/API/SaveDate.js"
import {Local} from "../src/services/dataBase/local.js"
import { deleteView} from "../src/view/deleteTask.js"
import { display} from "../src/view/Display.js" 
import { onScrollFunction } from "../src/components/events/Scroll.js"
import { Event } from "../src/components/events/Event.js"
import { resetForm } from "../src/services/dataBase/resetformulaire.js"
import { rechercheDansLaBarre } from "../src/services/dataBase/recherche.js"
import { reloadTasks } from "../src/view/reloadTasks.js"
import { triDate } from "../src/view/triDate.js"

main();


function main(){
    


    let tabTasksList = Local.getAllTasks();
    if(tabTasksList == null){
        tabTasksList = [];
        console.log("le tableau vient d'etre creer");
    }

    tabTasksList.forEach(element => {
        display.displayMyTask(element);
        
    });
    
    
    // console.log(tabTasksList);
    const tabTasksListJSON = JSON.stringify(tabTasksList);
    localStorage.setItem("LIST",tabTasksListJSON);
    

    Event.cliqueAjouteUneTache();
    Event.cliqueNajoutePasUneTache();
    Event.FinaliseAjoutTache();


    Components.form.ValidTask.addEventListener('click',()=>{
        


        Local.AddTask();
        // location.reload();
        display.displayMyTask(Components.getNewTask());
        console.log(Components.getNewTask());
        
        

        resetForm();
        
    });

    rechercheDansLaBarre();
    
    Components.boutton.flecheretour.addEventListener('click',()=>{
        reloadTasks();
        Components.boutton.bouttontri.classList.remove("active");
    });


    triDate();





    return;
}


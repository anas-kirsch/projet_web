
import { Components } from "../../components/Components.js"
import { display } from "../../view/Display.js";
import { getDate } from "../API/SaveDate.js";
//a voir

export class Local {

    static saveTache(Tasks){

        let TasksJSON = JSON.stringify(Tasks);
        localStorage.setItem("LIST",TasksJSON);
        
        return;
    }


    static deleteAllTasks(){

           
        localStorage.clear();
        // location.reload();

    }

    
    static getAllTasks(){

         
        const recupContentList = localStorage.getItem("LIST");
        if(recupContentList == null) return null;


        const tasksFinaleList = JSON.parse(recupContentList);
        
        return tasksFinaleList;
        

    }

    static AddTask(){



        Components.form.sectionAddTask.classList.remove("active");

        const recupTabTasksList = localStorage.getItem("LIST");

        if(recupTabTasksList == null) return null;

        const tasks = JSON.parse(recupTabTasksList);
        tasks.push(Components.getNewTask());
        localStorage.setItem("LIST",JSON.stringify(tasks));

        
        return;

    }


}
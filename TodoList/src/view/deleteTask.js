import { Components } from "../components/Components.js";
// import { getAllTasks } from "../services/dataBase/local.js";
import {Local} from "../services/dataBase/local.js";


export class deleteView{


    static deleteViewOfTask(titreTache){

        console.log(titreTache);

        
        const liste = Local.getAllTasks();
        console.log(liste);

        liste.forEach((tache,index) => {
            if(tache.titre == titreTache ){
                liste.splice(index,1);
            }

        });
        console.log(liste);

        const supSaveNewTabJSON = JSON.stringify(liste);
        localStorage.setItem("LIST",supSaveNewTabJSON);
        
        
    
    
}




}
import { Components } from "../components/Components.js";
import { Local } from "../services/dataBase/local.js";
import { reloadTasks } from "../view/reloadTasks.js";


export function triDate(){

    const tabTasksList = Local.getAllTasks();

    console.log(tabTasksList);


  
    tabTasksList.sort((a ,b) => {

        // console.log(a.date)

        return a.date - b.date;
    });

    console.log(tabTasksList);
    reloadTasks(tabTasksList);

}
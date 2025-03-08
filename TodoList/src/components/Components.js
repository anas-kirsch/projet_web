import { getDate } from "../services/API/SaveDate.js"
import { reloadTasks } from "../view/reloadTasks.js";


export class Components{

    static boutton = {

        addTask : document.querySelector(".addListLogo"),
        clearTrash : document.querySelector(".bin-button"),
        search : document.querySelector(".bouttonRecherche"),
        flecheretour: document.querySelector(".fa-arrow-left"),
        bouttontri : document.querySelector(".btn-tri")
    }

    static input ={
       
        barreDeRecherche : document.querySelector(".barreDeRecherche"),        
        contenuPasTrouve : document.querySelector(".contenuPasTrouve"),
    };

    static test = ()=>{

        return {
            barreDeRechercheInput : this.input.barreDeRecherche.value,

        } 


    };

    static form = {

        sectionAddTask : document.querySelector(".sectionAddTask"),
        
        TasknameInput : document.querySelector(".TasknameInput"),
        TaskContentInput : document.querySelector(".InputContent"),
        TaskTagInput : document.querySelector(".InputTag"),
        ValidTask : document.querySelector(".valider-ma-tache")

    }  

    static searchBar = {

        divcherche : document.querySelector(".sectionRecherche"),
        sectionTacheUnique : document.querySelectorAll(".ListTask"),

    }


    static DisplayTask = {

        containerList : document.querySelector(".container-List"),

    }


    static unshow ={

        cancel : document.querySelector(".fa-trash"),

    }


    static date ={

        balisePDate : document.querySelector(".CreateDate"),
        
    }

    
    static getNewTask = ()=>{

        return {

            titre: this.form.TasknameInput.value,
            date:  getDate(),
            content: this.form.TaskContentInput.value,
            tag: this.form.TaskTagInput.value,
            status : false,

        }


        
    
    };


}

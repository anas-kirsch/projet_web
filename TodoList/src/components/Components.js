import { getDate } from "../services/API/SaveDate.js"



export class Components{

    static boutton = {

        addTask : document.querySelector(".addListLogo"),
        clearTrash : document.querySelector(".clear"),//ok


    }

    static form = {

        sectionAddTask : document.querySelector(".sectionAddTask"),
        
        TasknameInput : document.querySelector(".TasknameInput"),
        TaskContentInput : document.querySelector(".InputContent"),
        TaskTagInput : document.querySelector(".InputTag"),
        ValidTask : document.querySelector(".BouttonValidTask")

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
        }
    
    };

    static getStatus = ()=> {   

        return {

            status : false,
        }

    };

}

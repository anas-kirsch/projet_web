
import { Components } from "../components/Components.js";
import { Local } from "../services/dataBase/local.js";
import { deleteView } from "./deleteTask.js";


export class display{


    static displayMyTask(newTask){

        
        
            //ici je recupere la section qui contient les sections de chaque ajoutée
            
            // ici je creer la section qui contient une seul tache ; 1 nouvelle tache = 1 nouvelle section comme celle ci
            const sectionNouvelleTache = document.createElement("section")
            sectionNouvelleTache.classList.add("ListTask");
            Components.DisplayTask.containerList.appendChild(sectionNouvelleTache);
            
            
            // ici je creer la div qui va contenir le titre de la tache
            const nouvelleDivTask = document.createElement("div");
            nouvelleDivTask.classList.add("div-align-task");
            sectionNouvelleTache.appendChild(nouvelleDivTask);
            

            const containerChevron = document.createElement("div");
            containerChevron.classList.add(".containerChevron");
            nouvelleDivTask.appendChild(containerChevron);

            
            //creer fleche clique pour voir une tache
            const chevron = document.createElement("i");
            chevron.classList.add("fa-solid");
            chevron.classList.add("fa-chevron-down");
            chevron.classList.add("fa-x1");
            containerChevron.appendChild(chevron);


            
            
            const conteneurTache = document.querySelector(".container-List")
            const divTacheContent = document.createElement("div");
            
            divTacheContent.classList.add("display-Task-Content");
            conteneurTache.appendChild(divTacheContent);
            

            const baliseContent = document.createElement("p");
            const baliseDate = document.createElement("p");
            const baliseTag = document.createElement("p");
            
            baliseContent.classList.add("contenuDivTache");
            baliseDate.classList.add("contenuDivTache");
            baliseTag.classList.add("contenuDivTache");
            
            divTacheContent.appendChild(baliseContent);
            divTacheContent.appendChild(baliseDate);
            divTacheContent.appendChild(baliseTag);
            
            // faire le remplissage avce lobjet


            baliseContent.textContent = newTask.content;
            baliseDate.textContent = newTask.date;
            baliseTag.textContent = newTask.tag;


            chevron.addEventListener('click',()=>{

                console.log("bonjour")
                divTacheContent.classList.toggle("active");
                chevron.classList.toggle("active");

            })



            // ici c'est la balise p qui contient le titre de la tache ajouter dans la div parente
            const titleTask = document.createElement("p");
            titleTask.classList.add("texte-Tasks-style");
            titleTask.textContent = newTask.titre;
            
            nouvelleDivTask.appendChild(titleTask);
            
            
            //ici creation de la div qui contient les image valider et supprimer une tache
            const NouvelleDivImage = document.createElement("div");
            NouvelleDivImage.classList.add("image-valide-delete");
            sectionNouvelleTache.appendChild(NouvelleDivImage);

        

            const baliseValid = document.createElement("i");
            const baliseDelete = document.createElement("i");
            
            baliseDelete.classList.add("fa-solid");
            baliseDelete.classList.add("fa-circle-xmark");
            baliseDelete.classList.add("fa-2x");


            baliseValid.classList.add("fas");
            baliseValid.classList.add("fa-check-circle");
            baliseValid.classList.add("fa-2x");
                
            NouvelleDivImage.appendChild(baliseValid);
            NouvelleDivImage.appendChild(baliseDelete);
            
//check valide

         

        if(newTask.status == true){
            baliseValid.classList.add("active");
        }   
        else{
            baliseValid.classList.remove("active");
        }   



        baliseValid.addEventListener('click',()=>{
    
            let tabTasksList = Local.getAllTasks();

            
            if(newTask.status == false){
                baliseValid.classList.add("active");
                newTask.status = true;
                console.log("cest active");

                tabTasksList.forEach(tache => {
                if(tache.titre == newTask.titre){
                    tache.status = true;     
                }
                
                });
                
            }
            else{
                baliseValid.classList.remove("active");
                newTask.status = false;
                console.log("cest desactiver");
                
                tabTasksList.forEach(tache => {
                if(tache.titre == newTask.titre){
                    tache.status = false;     
                }
                
                });
                
                
            }
            
            const tabTasksListJSON = JSON.stringify(tabTasksList);
            localStorage.setItem("LIST",tabTasksListJSON);

            
        });

   
            const titreTache = newTask.titre;
            
            baliseDelete.addEventListener('click',()=>{

                sectionNouvelleTache.remove();
                divTacheContent.remove();
                deleteView.deleteViewOfTask(titreTache);

            });

            
        Components.boutton.clearTrash.addEventListener('click', ()=> {
            
            sectionNouvelleTache.remove();
            divTacheContent.remove();
            Local.deleteAllTasks();

            

    });


    }

}




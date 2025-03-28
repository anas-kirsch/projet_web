
main();

// function TaskBuilder(title,description,isValidate){
//     const task = {
//         title : 
//     }

//     return task;
// }

function main(){
    
    const addTask = document.querySelector(".addListLogo");
    const sectionAddTask = document.querySelector(".sectionAddTask");

    addTask.addEventListener('click',()=>{
        
        sectionAddTask.classList.add("active");
    });
    
    const cancel = document.querySelector(".fa-trash");
    cancel.addEventListener('click',()=>{
        
        sectionAddTask.classList.remove("active");
        
    });
    
    const TasknameInput = document.querySelector(".TasknameInput");
    const TaskContentInput = document.querySelector(".InputContent");
    const TaskTagInput = document.querySelector(".InputTag")
    const ValidTask = document.querySelector(".BouttonValidTask");
    
    

    let tabTasksList = getAllTasks();
    
    if(tabTasksList == null){
        tabTasksList = [];
    }
    
    displayAllTasks(tabTasksList);

    //a remettre
    window.addEventListener("scroll",onScrollFunction);
   
     


    const tabTasksListJSON = JSON.stringify(tabTasksList);
    localStorage.setItem("LIST",tabTasksListJSON);


    ValidTask.addEventListener('click',()=>{

    const toDates = getDate();

    const balisePDate = document.querySelector(".CreateDate");
    balisePDate.textContent= toDates;


    const saveTask = {


    titre:TasknameInput.value,
    date:balisePDate.textContent,
    content:TaskContentInput.value,
    tag:TaskTagInput.value
    
    

    };

    AddTask(saveTask,sectionAddTask);



    });


    return;
}





function AddTask(saveTask,sectionAddTask){

    sectionAddTask.classList.remove("active");


        const recupTabTasksList = localStorage.getItem("LIST");

        if(recupTabTasksList == null) return null;

        const tasks = JSON.parse(recupTabTasksList);
        tasks.push(saveTask);
        localStorage.setItem("LIST",JSON.stringify(tasks));
        
        displayAllTasks(tasks);

        return;
    }




function getAllTasks(){
        
        const recupContentList = localStorage.getItem("LIST");
        
        if(recupContentList == null) return null;
        
        const tasksFinaleList = JSON.parse(recupContentList);
        
        return tasksFinaleList;
        
        
    }
        



        
    
    function displayAllTasks(tasks){
        
        const containerList = document.querySelector(".container-List");
        containerList.innerHTML = "";
        
        tasks.forEach((task,index) => {
            
            
            
            
            //ici je recupere la section qui contient les sections de chaque ajoutée
            
            // ici je creer la section qui contient une seul tache ; 1 nouvelle tache = 1 nouvelle section comme celle ci
            const sectionNouvelleTache = document.createElement("section")
            sectionNouvelleTache.classList.add("ListTask");
            containerList.appendChild(sectionNouvelleTache);
            
            
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
            
            baliseContent.textContent = task.content;
            baliseDate.textContent = task.date;
            baliseTag.textContent = task.tag;




            chevron.addEventListener('click',()=>{

                console.log("bonjour")
                divTacheContent.classList.toggle("active");
                chevron.classList.toggle("active");

            })



            // ici c'est la balise p qui contient le titre de la tache ajouter dans la div parente
            const titleTask = document.createElement("p");
            titleTask.classList.add("texte-Tasks-style");
            titleTask.textContent = task.titre ;
            
            nouvelleDivTask.appendChild(titleTask);
            
            
            //ici creation de la div qui contient les image valider et supprimer une tache
            const NouvelleDivImage = document.createElement("div");
            NouvelleDivImage.classList.add("image-valide-delete");
            sectionNouvelleTache.appendChild(NouvelleDivImage);

        

            const baliseValid = document.createElement("i");
            const baliseDelete = document.createElement("i");
            
            baliseDelete.classList.add("fa-solid");
            baliseDelete.classList.add("fa-circle-xmark");
            // baliseDelete.classList.add("fa-lg");
            baliseDelete.classList.add("fa-2x");


            baliseValid.classList.add("fas");
            baliseValid.classList.add("fa-check-circle");
            // baliseValid.classList.add("fa-lg");
            baliseValid.classList.add("fa-2x");
            
            
            baliseValid.addEventListener('click',()=>{

                baliseValid.classList.toggle("active");

                
                
            });
            
                
                
            NouvelleDivImage.appendChild(baliseValid);
            NouvelleDivImage.appendChild(baliseDelete);
            
            
            baliseDelete.addEventListener('click',()=>{


                tasks.splice(index,1);

                const supSaveNewTabJSON = JSON.stringify(tasks);
                localStorage.setItem("LIST",supSaveNewTabJSON);

                location.reload();


                
            });

        });

    }



    
    
    //permet a l'utilsateur de supprimer toute ces taches d'un coup en vidant le stockage local
    const clearTrash = document.querySelector(".clear");
    
    clearTrash.addEventListener('click',clearLocalStorage);
    
    function clearLocalStorage(){
        
        localStorage.clear();
        location.reload();

    }
    
    


    function getDate(){
        
        const date = new Date();
        
        const heure =  date.getHours();
        const minute = date.getMinutes();
        const jour =  date.getUTCDate();
        const mois = date.getUTCMonth();
        const moisAjour = mois+1;
        const annee = date.getFullYear();
        
        
        
        const toDate = "Crée le : "+heure+":"+minute+"/"+jour+"."+moisAjour+"/"+annee+ "";
        
        
        return toDate;
        
        
    }



    function onScrollFunction(){
        const divcherche = document.querySelector(".sectionRecherche");
        const sectionTacheUnique = document.querySelectorAll(".ListTask");
        // divcherche.offsetTop;

        sectionTacheUnique.offsetTop;
        for (let i = 0; i < sectionTacheUnique.length; i++) {
            
            console.log(divcherche.offsetTop);
            console.log(sectionTacheUnique[i].offsetTop);

        
            if(sectionTacheUnique[i].offsetTop< divcherche.offsetTop -140 ){
                sectionTacheUnique[i].classList.add("active");
        
            }
            else if(sectionTacheUnique[i].offsetTop +140 > divcherche.offsetTop ){
                sectionTacheUnique[i].classList.remove("active");
            }
            
        }

    }


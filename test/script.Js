





const addTask = document.querySelector(".addListLogo");
const sectionAddTask = document.querySelector(".sectionAddTask");
addTask.addEventListener('click',()=>{
    
    // console.log("non")
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



let tabTasksList = recupTasks();

if(tabTasksList == null){
    tabTasksList = [];
}


const tabTasksListJSON = JSON.stringify(tabTasksList);
localStorage.setItem("LIST",tabTasksListJSON);



window.addEventListener("scroll",onScrollFunction);




ValidTask.addEventListener('click',()=>{

    getDate();
    const toDates = getDate();
    console.log(toDates);

    const balisePDate = document.querySelector(".CreateDate");
    balisePDate.textContent= toDates;
    console.log(balisePDate);
    
    const saveTask = {
        
        titre:TasknameInput.value,
        date:balisePDate.value,
        content:TaskContentInput.value,
        tag:TaskTagInput.value


    };

    
    
    
    recupTasks();
    AddTask(saveTask);
    
    // console.log(tasksFinaleList);

    showTasks(recupTasks());

    
});

// window.addEventListener("scroll",onScrollFunction);


function onScrollFunction(){
    const divcherche = document.querySelector(".sectionRecherche");
    const sectionTacheUnique = document.querySelectorAll(".ListTask");
    // divcherche.offsetTop;

    sectionTacheUnique.offsetTop;
    for (let i = 0; i < sectionTacheUnique.length; i++) {
        
        console.log(divcherche.offsetTop);
        console.log(sectionTacheUnique[i].offsetTop);
        // console.log(sectionTacheUnique)

       
        if(sectionTacheUnique[i].offsetTop< divcherche.offsetTop -140 ){
            sectionTacheUnique[i].classList.add("active");
    
        }
        else if(sectionTacheUnique[i].offsetTop +140 > divcherche.offsetTop ){
            sectionTacheUnique[i].classList.remove("active");
        }
        
    }

}





function AddTask(saveTask){

    sectionAddTask.classList.remove("active");


    const recupTabTasksList = localStorage.getItem("LIST");

    if(recupTabTasksList == null) return null;

    const tasks = JSON.parse(recupTabTasksList);
    tasks.push(saveTask);
    localStorage.setItem("LIST",JSON.stringify(tasks));



    return;
}


function recupTasks(){

    const recupContentList = localStorage.getItem("LIST");

     if(recupContentList == null) return null;

     const tasksFinaleList = JSON.parse(recupContentList);

     return tasksFinaleList;
     
     
}
    
    

function showTasks(tasks){
    
    const containerList = document.querySelector(".container-List");
    containerList.innerHTML = "";

    tasks.forEach(task => {
        
        
        
        
    
        //ici je recupere la section qui contient les sections de chaque ajoutée
        
        // ici je creer la section qui contient une seul tache ; 1 nouvelle tache = 1 nouvelle section comme celle ci
        const sectionNouvelleTache = document.createElement("section")
        sectionNouvelleTache.classList.add("ListTask");
        containerList.appendChild(sectionNouvelleTache);
        
        
            // ici je creer la div qui va contenir le titre de la tache
        const nouvelleDivTask = document.createElement("div");
        nouvelleDivTask.classList.add("div-align-task");
        sectionNouvelleTache.appendChild(nouvelleDivTask);

        
        // ici c'est la balise p qui contient le titre de la tache ajouter dans la div parente
        const titleTask = document.createElement("p");
        titleTask.classList.add("texte-Tasks-style");
        titleTask.textContent = task.titre ;
        
        nouvelleDivTask.appendChild(titleTask);
        
        
        
        
        
        //ici creation de la div qui contient les image valider et supprimer une tache
        const NouvelleDivImage = document.createElement("div");
        NouvelleDivImage.classList.add("image-valide-delete");
        sectionNouvelleTache.appendChild(NouvelleDivImage);
        
        // ici creation balise image pour supprimer et valider un tache 
        const CreateImgTaskFinished = document.createElement("img");
        const CreateImgTaskDelete = document.createElement("img");
        
        // je met les deux src des images dans des variables
        const imageFinished = "./public/icons8-checked-50.png";
        const imgDelete= "./public/icons8-delete-50.png";
        
        // ici je defini donc les attributs des deux balises images 
        CreateImgTaskFinished.setAttribute("src",imageFinished);
        CreateImgTaskDelete.setAttribute("src",imgDelete);
        
        
        // ici je place les deux balises images a leur parent divImage
        NouvelleDivImage.appendChild(CreateImgTaskFinished);
        NouvelleDivImage.appendChild(CreateImgTaskDelete);
        

        


});

}




//permet a l'utilsateur de supprimer toute ces taches d'un coup en vidant le stockage local
const clearTrash = document.querySelector(".clear");

clearTrash.addEventListener('click',clearLocalStorage);


function clearLocalStorage(){

    localStorage.clear();
}



// getDate();

function getDate(){

    const date = new Date();

    const heure =  date.getHours();
    const minute = date.getMinutes();
    const jour =  date.getUTCDate();
    const mois = date.getUTCMonth();
    const moisAjour = mois+1;
    const annee = date.getFullYear();


    // const toDate = heure + minute + jour + mois + annee;
    // const toDate = String.prototype.concat(heure,minute,jour,mois,annee);

    const toDate = "Date: "+heure+":"+minute+"/"+jour+"."+moisAjour+"/"+annee+ "";
    // console.log(toDate);

    return toDate;

    
}

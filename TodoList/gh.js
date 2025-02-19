

// <!--              
//                 <section class="ListTask">
//                     <div class="div-align-task">
//                         <p class="texte-Tasks-style"> TITRE de la tache</p>
//                         <div class="image-valide-delete">
                            
//                             <img src="./public/icons8-checked-50.png" alt="">
//                             <img src="./public/icons8-delete-50.png" alt="">
//                         </div>
//                     </div>
                    
//                 </section>
//                  -->






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



let tabTasksList = recupTask();

if(tabTasksList == null){
    tabTasksList = [];
}


const tabTasksListJSON = JSON.stringify(tabTasksList);
localStorage.setItem("LIST",tabTasksListJSON);




ValidTask.addEventListener('click',()=>{

    
    const saveTask = {
        
        titre:TasknameInput.value,
        content:TaskContentInput.value,
        tag:TaskTagInput.value


    };

    

    recupTask();

    AddTask(saveTask);

    DataSave();

    
});



function AddTask(saveTask){

    const recupTabTasksList = localStorage.getItem("LIST");

    if(recupTabTasksList == null) return null;

    const tasks = JSON.parse(recupTabTasksList);
    tasks.push(saveTask);
    localStorage.setItem("LIST",JSON.stringify(tasks));



    return;
}


function recupTask(){

    const recupContentList = localStorage.getItem("LIST");

     if(recupContentList == null) return null;

     const tasksFinaleList = JSON.parse(recupContentList);

     return tasksFinaleList;




}
    



function DataSave(){



    sectionAddTask.classList.remove("active");
    
    const sectionListTask = document.querySelector(".ListTask");
    const nouvelleDivTask = document.createElement("div");
    sectionListTask.appendChild(nouvelleDivTask);
    const titleTask = document.createElement("p");
    nouvelleDivTask.appendChild(titleTask);


    const CreateImgTaskFinished = document.createElement("img");
    const imageFinished = "./public/icons8-checked-50.png";
    CreateImgTaskFinished.setAttribute("src",imageFinished);
    const CreateImgTaskDelete = document.createElement("img");
    const imgDelete= "./public/icons8-delete-50.png";
    CreateImgTaskDelete.setAttribute("src",imgDelete);

    nouvelleDivTask.appendChild(CreateImgTaskFinished);
    nouvelleDivTask.appendChild(CreateImgTaskDelete);

  
}



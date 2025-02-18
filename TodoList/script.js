

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



const tabTasksList = [];

const tabTasksListJSON = JSON.stringify(tabTasksList);
localStorage.setItem("LIST",tabTasksListJSON);




ValidTask.addEventListener('click',()=>{

    
    const saveTask = {
        
        titre:TasknameInput.value,
        content:TaskContentInput.value,
        tag:TaskTagInput.value


    };

    

    
    
    AddTask(saveTask);

    // DataSave();

    
});



function AddTask(saveTask){

    const recupTabTasksList = localStorage.getItem("LIST");

    if(recupTabTasksList == null) return null;

    const tasks = JSON.parse(recupTabTasksList);
    tasks.push(saveTask);
    localStorage.setItem("LIST",JSON.stringify(tasks));





    // console.log(tabTasks);

    // const saveTabTasks = JSON.stringify(tabTasks);

    // console.log(saveTabTasks);
    
    // localStorage.setItem("LIST",saveTabTasks);



    // const recupTabTasks = localStorage.getItem("LIST");

    // if(recupTabTasks == null) return null;

    // console.log(recupTabTasks);

    // const Tasks = JSON.parse(recupTabTasks);
    // Tasks.push(saveTask);

    // localStorage.setItem("LIST",JSON.stringify(Tasks));



    return;
}



function DataSave(){



    sectionAddTask.classList.remove("active");
    
    // const sectionListTask = document.querySelector(".ListTask");
    // const nouvelleDivTask = document.createElement("div");
    // sectionListTask.appendChild(nouvelleDivTask);
    // const titleTask = document.createElement("p");
    // nouvelleDivTask.appendChild(titleTask);


    // const CreateImgTaskFinished = document.createElement("img");
    // const imageFinished = "./public/icons8-checked-50.png";
    // CreateImgTaskFinished.setAttribute(imageFinished);
    // const CreateImgTaskDelete = document.createElement("img");
    // const imgDelete= "./public/icons8-delete-50.png";
    // CreateImgTaskDelete.setAttribute(imgDelete);

    // nouvelleDivTask.appendChild(CreateImgTaskFinished);
    // nouvelleDivTask.appendChild(CreateImgTaskDelete);

  
}




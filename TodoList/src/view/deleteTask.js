import { Components } from "../components/Components.js";



export class deleteView{


    static deleteViewOfTask(){

        
        baliseDelete.addEventListener('click',()=>{
            
            
        tasks.splice(index,1);

        const supSaveNewTabJSON = JSON.stringify(tasks);
        localStorage.setItem("LIST",supSaveNewTabJSON);
        
        location.reload();
        
        
    });
    
}




}
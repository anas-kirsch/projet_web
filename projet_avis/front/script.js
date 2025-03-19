import { Commponents } from "./src/components.js";
import { HOST } from "./src/config.js";
main();


function main(){


    Commponents.formulaire.formulaire.addEventListener('submit',(event )=>{
        event.preventDefault();
        const headers = new Headers();

        console.log(Commponents.formAvis);


        headers.append("Content-type","application/json");
        fetch("http://"+ HOST+":3000/create-avis",{
            method : "POST",
            headers : headers,


            body  : JSON.stringify({
                name:Commponents.formAvis.name.value,
                mail:Commponents.formAvis.mail.value,
                comment:Commponents.formAvis.content.value
            })
         });
        
        
    });
    
    
    //    fetch("http://localhost:3000/all-avis")
    //    .then(res=>res.json())
    //    .then(data=>{
    //        console.log(data);
    //    })


       

}
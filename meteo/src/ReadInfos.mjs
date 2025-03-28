

import {Components} from "./components/Components.mjs"


export function ReadInfos(){

    Components.infos.btnInfos.addEventListener('click',()=>{

        // console.log("bonjour")
       Components.infos.closebtn.classList.add("active");
       Components.infos.containerInfos.classList.add("active")



    });

    Components.infos.closebtn.addEventListener('click',()=>{

        Components.infos.closebtn.classList.remove("active");
        Components.infos.containerInfos.classList.remove("active")
    });



} 
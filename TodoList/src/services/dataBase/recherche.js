 
import { Components } from "../../components/Components.js";
import { Local } from "./local.js";
import { resetrecherche } from "./resetrecherche.js";
import { display } from "../../view/Display.js";


export function rechercheDansLaBarre(){

     let tabTasksList = Local.getAllTasks();
    //  console.log(tabTasksList);

    console.log("bienvenue dans la recherche");
    const balisePasTrouve = document.createElement("p");
    Components.input.contenuPasTrouve.appendChild(balisePasTrouve);
    balisePasTrouve.classList.add("messageRechercheIntrouvable");

    Components.boutton.search.addEventListener('click',()=>{

        
        const maRecherche = Components.test().barreDeRechercheInput;
        // console.log(maRecherche);
        let trouveOuPas = false;

        tabTasksList.forEach(tache => {
            if (maRecherche === tache.titre) {
                console.log("trouvé");
                resetrecherche();
                trouveOuPas = true;

                const sectionNouvelleTache = document.querySelectorAll(".ListTask");
                const divTacheContent = document.querySelectorAll(".display-Task-Content");

                sectionNouvelleTache.forEach(element => {
                    element.remove();
                });
                divTacheContent.forEach(element => {
                    element.remove();
                });

                balisePasTrouve.textContent = "Recherche " + tache.titre + " trouvée";
                display.displayMyTask(tache);
            }
        });

        if (!trouveOuPas) {
            if (maRecherche === "") {
                console.log("rien a chercher");
                balisePasTrouve.textContent = "Recherche introuvable : réessayer";
            } else {
                console.log("pas trouvé");
                resetrecherche();
                balisePasTrouve.textContent = "Recherche introuvable : réessayer";
            }
        }


    });





    

}
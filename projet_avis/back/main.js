import express from "express";
import { getAllAvis, newAvis, sequelize } from "./database.js";
import cors from "cors";
// Je connecte ma bdd et je crée la table
sequelize.sync({force : true}).then(()=>{
    // quand la BDD est bien connecté je démarre mon programme
    main();
});

function main(){
    const app = express();
    app.use(express.json()); // Cette ligne parse le body JSON et créer la variable req.body
    app.use(cors()) 
    // ...

    

    app.get("/all-avis",async (req,res)=>{
        const tabAvis = await getAllAvis();
        res.json(tabAvis);
    });

    app.post("/create-avis",async (req,res)=>{
        console.log(req.body);
        const avis = await newAvis(req.body.name,req.body.mail,req.body.comment);
        res.json(avis);
    })

    app.listen(3000,()=>{
        console.log("API listen on port 3000");
    });


}






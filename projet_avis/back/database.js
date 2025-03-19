import { DataTypes, Sequelize } from "sequelize";

/**
 * Init BDD
 */
const login = {
    database : "bhlocation",
    username : "root",
    password : "root",
};
export const sequelize = new Sequelize(login.database,login.username,login.password,{
    dialect:"mysql",
    // port : 3396
});

/**
 * CREATE TABLE Je défini la sctructure de la table des avis
 */
const Avis =  sequelize.define("Avis",{
    name : DataTypes.STRING,
    mail : DataTypes.STRING,
    comment : DataTypes.STRING
});





/**
 * Ajoute un produit à la bdd
 * @param {string} name
 * @param {string} mail 
 * @param {string} comment 
 */
export async function newAvis(name,mail,comment){
    const newAvis = await Avis.create({
        name : name,
        mail : mail,
        comment : comment,
    });

    return newAvis;
}


export async function getAllAvis(){
    const Aviss = await Avis.findAll();
    
    return Aviss;
}




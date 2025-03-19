import { DataTypes, Sequelize } from "sequelize";

/**
 * Init BDD
 */
const login = {
    database : "Postes",
    username : "Postes",
    password : "ntdwqv8lPx245Ko4",
};
export const sequelize = new Sequelize(login.database,login.username,login.password,{
    dialect:"postgres",
    host : "db.dcdunzuufqfotbxcyik.supabase.co",
    port : "5432",
    
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




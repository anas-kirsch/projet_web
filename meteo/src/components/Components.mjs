

export class Components{


    static data = {

        ville : document.querySelector(".ville-localisation"),
        temperature : document.querySelector(".temperature"),
        pays: document.querySelector(".pays-localisation"),
        
        containerCiel: document.querySelectorAll(".container-temps"),
        ciel : document.querySelector(".temps"),
        imgCiel : document.querySelector(".cloudCover"),

        precipitation:document.querySelector(".precipitation"),
        precipitationImg: document.querySelector(".precipitationImg"),

        pressure : document.querySelector(".pressure"),
        pressureImg: document.querySelector(".pressureImg"),
        humidity : document.querySelector(".humidity"),
        humidityImg : document.querySelector(".humidityImg"),

        containerDAYNIGHT: document.querySelector(".container-isday"),
        imgISDAYNIGHT :document.querySelector(".image-jour-nuit"),
    }


    static search = {

        barrederecherche : document.querySelector(".barrederecherche"),
        bouttonRecherche : document.querySelector(".validelarecherche"),
        formulaire : document.querySelector(".div-barrederecherche")

    }

    static css = {
        body : document.querySelector("body"),
        containerDirectMeteo: document.querySelector(".container-meteo-direct")
        
   
    }

    static infos = {

        btnInfos : document.querySelector(".fa-circle-info"),
        closebtn : document.querySelector(".fa-x"), 

        containerInfos :document.querySelector(".container-infos")
    }



}


/**
 * 
 * @param {{latitude:number,longitude:number}} coord Les coordonnées d'une position sur la carte du monde attention à ne pas mettre de valeurs negatives
 * @returns 
 */
export async function getstatfetch(coord){
    
    console.log(coord);
    // const getStat = fetch("https://api.open-meteo.com/v1/forecast?latitude=46.49233&longitude=0.64056&current=temperature_2m&timezone=auto");
    const getStat = fetch("https://api.open-meteo.com/v1/forecast?latitude="+coord.latitude+"&longitude="+coord.longitude+"&current=temperature_2m&timezone=auto");
    let arrayStat = await getStat.then((response)=>{
        return response.json();
    }).catch((error)=>{
        console.error(error);
        console.log(error.message);
    });
    
    return arrayStat;

}


export async function getstatbyCityName(){



    // const getStat = fetch("https://api.open-meteo.com/v1/forecast?latitude=43.1244&longitude=5.9284&current=temperature_2m&timezone=auto");

    // let arrayStat = await getStat.then((Response)=>{

    //     return Response.json();
    // }).catch((error)=>{
    //     console.log(error.message);
    // });
    
    // return arrayStat;





}
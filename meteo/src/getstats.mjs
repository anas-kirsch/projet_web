

/**
 * 
 * @param {{latitude:number,longitude:number}} coord Les coordonnées d'une position sur la carte du monde attention à ne pas mettre de valeurs negatives
 * @returns 
 */
export async function getstatfetch(coord){
    
    // console.log(coord);
    // const getStat = fetch("https://api.open-meteo.com/v1/forecast?latitude=46.49233&longitude=0.64056&current=temperature_2m&timezone=auto");
    const getStat = fetch("https://api.open-meteo.com/v1/forecast?latitude="+coord.latitude+"&longitude="+coord.longitude+"&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,is_day,rain,cloud_cover,precipitation,surface_pressure,weather_code,apparent_temperature,showers,pressure_msl,wind_speed_10m,wind_gusts_10m,wind_direction_10m,snowfall&timezone=auto");
    
    let arrayStat = await getStat.then((response)=>{
        return response.json();
    }).catch((error)=>{
        console.error(error);
        console.log(error.message);
    });
    
    return arrayStat;

}


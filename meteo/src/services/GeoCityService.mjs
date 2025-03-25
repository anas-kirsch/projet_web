

export class GeoCityServices {

    /**
     * @param {string} cityName 
     * @returns {Promise<Array<string>>}
     * 
     */
    static async getCityInfo(cityName){

        const getCityName = fetch("https://geocoding-api.open-meteo.com/v1/search?name="+cityName+"&count=10&language=fr&format=json")
        
        return getCityName.then((Response)=>{
            return Response.json();
        });
        

    }

}
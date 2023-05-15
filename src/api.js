// KEY: 7f6f70f7bb2d46e2924204023230504
// get weather api

const getWeatherAPI = (() => {
    async function getWeather(city) {
        const api = `https://api.weatherapi.com/v1/current.json?key=7f6f70f7bb2d46e2924204023230504&q=${city}&aqi=yes`; 
        const response = await fetch(api, {mode: 'cors'});
        const data = collectData(await response.json());

        //console log weather information for checking
        console.log(data)

        return data;
    }

    function collectData(data) {
        const {
            location: { name: cityName, country: countryName, localtime },
            current: { temp_c: celcuis, humidity, wind_mph: windSpeedinMPH, condition: { text, icon } },
        } = data;

        return { cityName, countryName, localtime, celcuis, humidity, windSpeedinMPH, text, icon };
    }
    
    return { getWeather };
})();

export default getWeatherAPI;
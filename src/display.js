const weatherInfo = (() => {
    function result(weatherData) {
        if (!weatherData) return;

        const content = document.getElementById('content');
        content.classList.add("active");

        //create main city card
        const city = document.createElement('div');
        city.classList.add('city');
        content.appendChild(city);

        //create upper city info
        const div1 = document.createElement('div');
        div1.classList.add('div1');
        city.appendChild(div1);

        const cityCountry = document.createElement('p');
        const text = document.createElement('p');
        const icon = document.createElement('img');
        
        cityCountry.classList.add('cityCountry');
        text.classList.add('text');
        icon.classList.add('icon');

        cityCountry.textContent = `${weatherData.cityName}` + `, ` + `${weatherData.countryName}`;
        text.textContent = `${weatherData.text}`;
        icon.src = `${weatherData.icon}`;

        div1.appendChild(cityCountry);
        div1.appendChild(text);
        div1.appendChild(icon);

        //create temp div info
        const tempDiv = document.createElement('div');
        tempDiv.classList.add('tempDiv');
        city.appendChild(tempDiv);

        const allTemps = document.createElement('div');
        allTemps.classList.add('allTemps');
        allTemps.textContent = `${weatherData.celcuis} °C`;
        tempDiv.appendChild(allTemps);

        //create lower city info
        const div2 = document.createElement('div');
        div2.classList.add('div2');
        city.appendChild(div2);

        const humidity = document.createElement('p');
        const windSpeedinMPH = document.createElement('p');

        humidity.textContent = `Humidity: ${weatherData.humidity} %`;
        windSpeedinMPH.textContent = `Wind: ${weatherData.windSpeedinMPH} km/h`;

        div2.appendChild(humidity);
        div2.appendChild(windSpeedinMPH);
    }

    return { result };
})();

export default weatherInfo;
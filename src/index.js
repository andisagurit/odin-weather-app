// for testing to see if its connected to the main.js
// alert("This is a test!");

import getWeatherAPI from "./api.js";
import display from "./display.js";

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("input-city");
const searchButton = document.querySelector(".search-button");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

searchButton.addEventListener("click", async () => {
    if (searchInput.value === "") return;
    
    const weatherData = await getWeatherAPI.getWeather(searchInput.value);
    display.result(weatherData);

    searchInput.value = '';
});
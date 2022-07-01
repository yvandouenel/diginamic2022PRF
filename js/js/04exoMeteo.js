import Town from "./component/Town.js";
import api_id from "./assets/settings.js";
console.log(`api_id`, api_id);
(function () {

  let current_town = null;

  // Gestion des événements
  const select = document.querySelector("select");
  select.onchange = function () {
    const city_name = select.value;
    if (city_name) {
      getWeather(city_name);
    }
  }
/**
 * Va chercher dans un premier temps les coordonnées (lon, lat) d'une ville puis 
 * va chercher la météo de la ville en question
 * @param {string} city_name 
 */
  async function getWeather(city_name) {
    try {
      const response_geocoding = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name},,fra&limit=1&appid=${api_id}`);

      const city = await response_geocoding.json()

      const response_weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&appid=${api_id}&lang=fr&units=metric`);

      const weather = await response_weather.json();
      console.log(`données météo : `, weather);
      const meteo = {
        temp: weather.main.temp,
        description: weather.weather[0].description,
        wind: weather.wind.speed
      }

      // Création d'une instance de Town
      if (current_town) {
        current_town.remove();
      }
      current_town = new Town(city_name, meteo);



    }
    catch (error) {
      console.log('Erreur attrapée dans getWeather: ', error);
    }
    
    
    
  }


})();

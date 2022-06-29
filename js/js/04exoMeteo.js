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
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name},,fra&limit=1&appid=${api_id}`)
        .then(response => {
          return response.json();
        })
        .then(city => {
          console.log(`city `, city);
          const lon = city[0].lon;
          const lat = city[0].lat;
          return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_id}&lang=fr&units=metric`)
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(`données météo : `, data);
          const meteo = {
            temp: data.main.temp,
            description: data.weather[0].description,
            wind: data.wind.speed
          }

          // Création d'une instance de Town
          if(current_town) {
            current_town.remove();
          }
          current_town = new Town(city_name, meteo);
        })
        .catch(error => {
          console.error(error);
        })
    }
  }


})();

import api_id from "./assets/settings.js";
console.log(`api_id`, api_id);
(function () {
  
  /**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajout un attribut en utilisant le paramètre attribute
   * @param {String} markup_name 
   * @param {String} text 
   * @param {domElement} parent 
   * @param {Object} attribute  (doit comprendre les propriétés name et value)
   * @returns domElement
   */
  function createMarkup(markup_name, text, parent, attribute) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    if (attribute && attribute.hasOwnProperty("name")) {
      markup.setAttribute(attribute.name, attribute.value);
    }
    return markup;
  }

  // Gestion des événements
  const select = document.querySelector("select");
  select.onchange = function() {
    const city_name = select.value;
    if(city_name) {
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
      })
      .catch(error => {
        console.error(error);
      })
    }
  }

  
})();

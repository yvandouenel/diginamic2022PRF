// fonction anonyme immédiate pour éviter d'avoir des variables globales
(function () {

  /*  const h1 = document.getElementById("h1");
   console.log(`h1 `, h1);
 
   h1.textContent = "Bob";
   h1.style.color = "red";
   h1.classList.toggle("toto");
  
   // Création d'un élément
   const section = document.createElement("section");
 
   // Ajout de texte dans l'élément
   section.textContent = "Hello";
 
   // insertion de l'élément comme dernier fils de body
   document.body.appendChild(section);
 
   // Utilisation de querySelector
   const li_warning = document.querySelector("li.warning");
   li_warning.style.color = "red"; */


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
  const header = createMarkup("header", "", document.body);
  const nav = createMarkup("nav", "", header);
  for (let i = 0; i < 4; i++) {
    createMarkup("button", "item " + (i + 1), nav);
  }

  const buttons = document.querySelectorAll("button:nth-child(2n+0)");
  buttons.forEach((button) => {
    button.style.color = "red";
  })





})();
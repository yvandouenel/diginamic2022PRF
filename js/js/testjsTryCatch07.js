// fonction anonyme immédiate pour éviter d'avoir des variables globales
(function () {
  try {
    console.log(`i : `, i);
  }
  catch (error) {
    console.error("Erreur attrapée " + error.message + " - " + error.name);
    createMarkup("p", "Variable non définie. Contactez le blaireau qui a codé : yvan@qsdf.fr",document.body);
  }

  function createMarkup(markup_name, text, parent, attribute) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    if (attribute && attribute.hasOwnProperty("name")) {
      markup.setAttribute(attribute.name, attribute.value);
    }
    return markup;
  }

})();
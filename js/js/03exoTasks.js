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

  // Création du formulaire
  const form = createMarkup("form", "", document.body);
  const input = createMarkup("input", "", form, {name: "type", value: "text"});
  const button_add = createMarkup("button", "Entrer", form);

  // Création du wrapper des taches
  const tasks_section = createMarkup("section", "", document.body);
  

  // Gestion des événements
  form.onsubmit = function(e) {
    e.preventDefault();
  }

  button_add.onclick = function() {
    console.log(`click sur button add`);
    // Récupération de la valeur entrée dans l'input
    const input_value = input.value;
    console.log(`input `, input_value);
    if(input_value) {
      
      // Création de la tâche avec un label et 2 boutons
      const task_section = createMarkup("section", "", tasks_section);
      task_section.style.display = "flex";
      
      const task_label = createMarkup("p", input_value, task_section);
      
      const btn_validate = createMarkup("button", "Valider", task_section);
      const btn_delete = createMarkup("button", "Supprimer", task_section);
      
      btn_delete.onclick = function() {
        task_section.remove();
      }
      btn_validate.onclick = function() {
        console.log(btn_validate.textContent);
        if(btn_validate.textContent == "Valider") {
          btn_validate.textContent = "Invalider";
          task_label.style.textDecoration = "line-through";
          tasks_section.appendChild(task_section);
        }
        else {
          btn_validate.textContent = "Valider";
          task_label.style.textDecoration = "none";
          tasks_section.prepend(task_section);
        }
       
      }
      
      // suppression de la value
      input.value = "";
    }
  }

  
})();
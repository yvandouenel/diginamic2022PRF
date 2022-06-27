// fonction anonyme immédiate pour éviter d'avoir des variables globales
(function () {
  /**
   * Fonction constructeur de Vehicle
   * 
   * @param {String} name 
   * @param {Number} weight 
   * return Object
   */
  function Vehicle(name, weight, color = "black") {// paramètres
    // Propriétés 
    this.name = name;
    this.weight = weight;
    this.color = color;

    this.move = function (a, b) {
      console.log(`Je me déplace de ${a} à ${b} avec mon ${this.name} ${this.color}`);
    }
  }
  Vehicle.prototype.break = function() {
  
    console.log(`Je freine grâce à ma fonction construteur Vehicle`);
  }
  Object.prototype.break = function() {
    console.log(`Je freine grâce à la propriété break du prototype d'Object`);
  }

  // Instanciation
  const my_bike = new Vehicle("tandem", 40);// arguments
  my_bike.move("Pérols", "Rio");
  my_bike.break();

  const my_small_bike = new Vehicle("Brompton", 11);
  my_small_bike.move("Lattes", "Irkoutz");
  my_small_bike.break();


  // Objets littéraux
  const my_mountain_bike = {
    name: "Rockrider",
    weight: 10,
    color: "red",
    move: function (a, b) {
      console.log(`this`, this);
      console.log(`Je me déplace de ${a} à ${b} avec mon ${this.name} ${this.color}`)
    }
  }
  my_mountain_bike.break();
  console.log(`my_mountain_bike : `, my_mountain_bike);
  console.log(`my_small_bike : `, my_small_bike);

})();
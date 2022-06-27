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
  Vehicle.prototype.break = function () {

    console.log(`Je freine grâce à ma fonction construteur Vehicle`);
  }
  Object.prototype.break = function () {
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

  // Constructeur de cercle
  function Cercle(rayon, nom) {
    this.nom = nom;
    this.rayon = rayon;

  }
  Cercle.prototype.pi = 3.14;
  Cercle.prototype.aire = () => {
    console.log(`this : `, this);
    console.log(`L'aire du cercle ${this.nom} est de ${this.pi * Math.pow(this.rayon, 2)}`);
  }
  const petit_cercle = new Cercle(2, "Petit Cercle");
  const grand_cercle = new Cercle(4, "Grand Cercle");

  petit_cercle.aire();
  grand_cercle.aire();
  console.log(`grand cercle : `, grand_cercle);
  console.log(`petit cercle : `, petit_cercle);
  console.log(petit_cercle.aire == grand_cercle.aire);

})();
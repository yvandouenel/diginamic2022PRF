// fonction anonyme immédiate pour éviter d'avoir des variables globales
(function () {

  class Bike {
    
    constructor(name, weight, color = "black") {
      this.name = name;
      this.weight = weight;
      this.color = color;
    }
    move(a, b) {
      console.log(`this : `, this);
      console.log(`Je me déplace de ${a} à ${b} avec mon ${this.name} ${this.color}`);
    }
  }

  const my_bike = new Bike("tandem", 40);
  console.log(`my_bike`, my_bike);
  my_bike.move("Perols", "Lattes");
  
  class ElectricBike extends Bike {
    constructor(name, weight, color, power) {
      super(name, weight, color);
      this.power = power;// Surcharge
    }
    move(a, b) {
      super.move(a,b);
      
      console.log(`... et je vais vite grâce à mon moteur`);
    }
  }
  const my_e_bike = new ElectricBike("Super 73", 28, "white", 90);
  console.log(`my_e_bike : `, my_e_bike);
  my_e_bike.move("Pérols", "La grande motte");
  
  class ElectricTandemBike extends ElectricBike {

    constructor(name, weight, color, power) {
      super(name, weight, color, power);
      this.seats = 2;// Surcharge
    }
    move(a, b) {
      super.move(a,b);
      
      console.log(`... et je vais vite grâce à mon moteur`);
      console.log(`... et on est 2 à pédaler`);
    }
  }
  const my_e_tandem_bike = new ElectricTandemBike("Super 74", 28, "white", 90);
  console.log(`my_e_tandem_bike : `, my_e_tandem_bike);
  my_e_tandem_bike.move("Pérols", "La grande motte");

  
  
})();
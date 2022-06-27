// fonction anonyme immédiate pour éviter d'avoir des variables globales
(function () {
  /**
   * ajoute les deux paramètres
   * @param {Number} a 
   * @param {Number} b 
   * @returns number
   */

  let add = function (a, b) { // paramètres
    return a + b;
  }

  let result = add; //arguments - result stocke le résultat de la fonction


  /* console.log(`résultat `, result(1, 2));
  let i = 1;
  function a() {
    let j = 2;
    let k;
    b();
    function b(){
      {
        let k = 3;
      }
      
      let l = 4;
      console.log("l : ", l);
    }
    console.log("k dans le scope de la fonction a() : ", k);
  }
  a(); */
  /* closure : la variable nom est dans la closure de la fonction affiche Nom */
  function creerFonction() {
    var nom = "toto";
    function afficheNom() {
      console.log(nom);
    }
    return afficheNom;
  }

  let maFonction = creerFonction()();// à ne pas confondre avec let maFonction = creerFonction;
  //maFonction();

  /* fonction anonyme immédiate IIFES */

  // Code ici

  let addArrow = (a, b) =>  a + b;

  result = addArrow(3, 8);
  console.log(`result avec fonction fléchée : `, result);

  // setInterval
  var cpt = 0;
  /* setInterval attend en premier paramètre une fonction (callback). setInterval est donc une higher order function */
  /* const interval_id = setInterval(() => {
    cpt ++;
    console.log(`cpt : `, cpt);
    if(cpt == 5) clearInterval(interval_id);
  },1000); */

  // setTimeout
  function dumpCpt() {
    setTimeout(() => {
      cpt ++;
      console.log(`cpt avec setTimeout : `, cpt);
      if(cpt != 5) dumpCpt(); // Appel récursif
    }, 1000);
    
  }
  dumpCpt();

})();
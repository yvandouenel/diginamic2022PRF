// fonction anonyme immédiate pour éviter d'avoir des variables globales
(function () {
  const h1 = document.querySelector("h1");
  const h2 = document.querySelector("h2");
  console.log(`h1 : `, h1);
  
  let test = function() {
    console.log(`this : `, this);
    console.log(`Clic sur h1`);
  };
  const test2 = test.bind(h2);
  h1.onclick = test2;

})();
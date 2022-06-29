// fonction anonyme immédiate pour éviter d'avoir des variables globales
(function () {
  const h1 = document.querySelector("h1");
  const h2 = document.querySelector("h2");
  const a = document.querySelector("a");
  let i = 12;
  a.onclick = (function (e) {
    handleClick = handleClick.bind(i);
    handleClick(e, "toto");
  });


  function handleClick(e, name) {
    console.log(`this : `, this);
    console.log(`name : `, name);
    console.log(`e.target : `, e.target);

    e.preventDefault();
  };
  h1.onclick = handleClick;

})();
// fonction anonyme immédiate pour éviter d'avoir des variables globales
(function () {

  let fruits = ["Banane", "Cerise","Kiwi"];// <li>Banane</li>
  console.log(fruits);

  fruits.forEach((fruit, index, array) => {
    console.log(`fruit : `, fruit);
    console.log(`index : `, index);
    console.log(`array : `, array);

  })

  for (let i = 0; i < fruits.length; i++) {
    console.log(`fruit : `, fruits[i]);
  }


  const fruits_li = fruits.map(fruit => `<li>${fruit}</li>`);
  console.log(`fruits_li`, fruits_li);

  fruits.push("Pomme");// Fonction impure car elle a un impact sur une variable qui lui est extérieur et elle renvoie quelque chose qui n'est pas directement ce qu'elle fait 

  console.log(`fruits `, fruits);

  const smaller_fruit = fruits.reduce(
    (previousValue, currentValue) => (previousValue.length < currentValue.length) ? previousValue : currentValue
  );
  console.log(`smaller_fruit `, smaller_fruit);

})();
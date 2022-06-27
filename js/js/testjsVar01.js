//console.log(`i : `, i); // hoisting ou hissage pour var et function
// déclaration d'une variable et affectation

var i = "Hello";

{
  console.log(`i : `, i);
  let i = 1; // Locale car déclarée dans un block de code
  //var i = 1; // Globale car déclarée en dehors d'une fonction
  console.log(`i : `, i);
}

console.log(`type de i : `, typeof(i));

// en js côté client, une variable globale devient 
// une propriété de window

console.log(`window.i : `, window.i);
console.log(`i : `, i);



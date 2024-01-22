var readSync = require('readline-sync');

var favoriteDish = readSync.question("Qual sua comida favorita? \n");

var allergy = readSync.question("Tem alguma alergia? \n");

var intolerance = readSync.question("Tem alguma intolerancia? \n");

/*
console.log(favoriteDish);
console.log(allergy);
console.log(intolerance);
*/

console.log(" Esse é o nosso tão aclamado cardapio: ");

var dishSelect = readSync.question("Qual comida voce escolhe? ");
if(favoriteDish === dishSelect) {
    console.log(" Sua comida favorita esta indo ate voce ");
} else {
    console.log("Ainda temos essas opcoes");
    console.log(" Pizzas ");
    console.log(" Lasanha ");
    console.log(" Carne assada ");
    console.log(" Espaguete ");
    console.log(" Pastel ");
    console.log(" Massa de pastel com molho ");
    console.log(" cachorro quente ");
    console.log(" Hamburguer ");
}



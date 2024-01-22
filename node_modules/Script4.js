/* 

var x = 20;
var y = 53;

var total = x + y;

console.log(" A soma entre " + x + " e " + y + " e igual a " + total); 

*/

var readsyc = require('readline-sync')

var x = readsyc.question("Digite um numero: ")
var y = readsyc.question("Digite outro numero: ")

var total = x + y

console.log(`A soma entre x e y é:  ${total}`)

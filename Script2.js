var readsync = require('readline-sync');


let nome1 = readsync.question(" Qual seu nome ? \n ");
let idade1 = readsync.question(" Qual a sua idade ? \n ");
let cpf = readsync.question(" Qual seu cpf ? \n ");

console.log( nome1 + " com sua idade de: " + idade1 + " foi candidato a vaga de software developer com o cpf " + cpf);
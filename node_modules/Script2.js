let readsync = require('readline-sync');

let nome = readsync.question(" Qual seu nome?\n")

let idade = readsync.question(" Qual sua idade?\n")

let cpf = readsync.question(" Qual e seu cpf?\n")

console.log (`Muito obrigado pela compra ${nome} portador do cpf ${cpf}`)
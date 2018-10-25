"use strict";
exports.__esModule = true;
//Importando o módulo de input do Typescript
var readline = require("readline-sync");
var nome = "Everson";
console.log("Olá sejam bem-vindo(s) " + nome);
function diaSemana(dia) {
    var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
    return dias[dia];
}
var nome2 = readline.question('Qual  o  seu  nome?  ');
console.log(nome2);
var data = new Date();
console.log("Hoje é " + nome2 + diaSemana(data.getDay()));
/*
console.log("Hoje é " + dias[data.getDay()])
console.log("Horas " + data.getHours())
console.log("Ano " + data.getFullYear())
console.log("Minutos " + data.getMinutes())
console.log("Mês do ano " + data.getMonth())
console.log("Dia do mês " + data.getDate())
*/ 
//aprimorar codigo

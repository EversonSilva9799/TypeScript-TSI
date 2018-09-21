"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var frases = ["Parabéns", "Sorte na vida",
    "Mais 10 anos de vida pra você", "Seja feliz", "Que deus abeçoe sua vida",];
var fraseDia = Math.floor(Math.random() * frases.length);
var frase = frases[fraseDia];
var nome = readline.question('Nome:  ');
console.log(frase + " " + nome);

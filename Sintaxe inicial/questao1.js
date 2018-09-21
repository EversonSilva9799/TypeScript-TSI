"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var nomes = ['Bruno', 'Elaine', 'José', 'Matheus',
    'Maria', 'Alana', 'Erika', 'Alison', 'Lucas',
    'Rickson', 'Alberto', 'Beatriz', 'Renata', 'Sayonara'];
//Adicionando dois elementos à lista
for (var i = 1; i < 3; i++) {
    var nome_1 = readline.question('Qual ' + i + ' nome: ');
    nomes.push(nome_1);
}
// Quantidade de elementos no Array
console.log("Quantidade de elementos " + nomes.length);
//Removendo o terceiro da lista
nomes.splice(2, 1);
console.log(nomes);
//Posição de um elemento qualquer
var nome = readline.question('Buscar nome: ');
console.log("A posição é " + nomes.indexOf(nome));
//Quanto elementos começam com A
var totalA = 0;
for (var i = 0; i < nomes.length; i++) {
    if (nomes[i][0] === "A") {
        totalA++;
    }
}
console.log("Nomes com inicial A: " + totalA);

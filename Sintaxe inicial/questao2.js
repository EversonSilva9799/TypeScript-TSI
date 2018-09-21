"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
/*  Faça  o  restante  do  seu  programa  a  partir  daqui  */
var numeroSecreto = obterInt(0, 30);
//console.log(numeroSecreto);
for (var i = 0; i < 5; i++) {
    var palpite = readline.questionInt("Digite  um  numero  (0  a  30):  ");
    if (palpite === numeroSecreto) {
        console.log("acertou");
        break;
    }
    else if (i === 4) {
        console.log("Tentativas zeradas! O numero secreto era " + numeroSecreto);
    }
    else if (palpite > numeroSecreto) {
        console.log("O numero secreto e menor");
    }
    else {
        console.log("O numero secreto e maior");
    }
}
/*  obtém  um  inteiro  no  intervalo  (min,  max)  incluindo  min  e  max  */
function obterInt(min, max) {
    min = Math.ceil(min); //arredonda  pra  cima 
    max = Math.floor(max); //arredonda  para  baixo 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

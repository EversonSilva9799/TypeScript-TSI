import * as readline from'readline-sync';

let frases: string[] =
 ["Parabéns", "Sorte na vida",
 "Mais 10 anos de vida pra você", "Seja feliz", "Que deus abeçoe sua vida",]

let fraseDia: number = Math.floor(Math.random() * frases.length);
let frase: string = frases[fraseDia] ;

let  nome:  string  =  readline.question('Nome:  ');

 console.log(`${frase} ${nome}`);
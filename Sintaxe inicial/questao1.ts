import * as readline from 'readline-sync';

let nomes:  string[]  =  
['Bruno',  'Elaine',  'José',  'Matheus',  
'Maria','Alana',  'Erika',  'Alison',  'Lucas',  
'Rickson',  'Alberto',  'Beatriz','Renata',  'Sayonara'];
 

//Adicionando dois elementos à lista
for(let i = 1; i < 3; i++){
    let  nome:  string  =  readline.question('Qual '+ i +' nome: ');
    nomes.push(nome);
}

// Quantidade de elementos no Array
console.log("Quantidade de elementos " + nomes.length);

//Removendo o terceiro da lista
nomes.splice(2,1);
console.log(nomes);

//Posição de um elemento qualquer
let  nome:  string  =  readline.question('Buscar nome: ');
console.log("A posição é " + nomes.indexOf(nome))

//Quanto elementos começam com A
let totalA: number = 0;
for(let i = 0; i < nomes.length; i++){
    if(nomes[i][0] === "A"){
        totalA++;
    }
}

console.log("Nomes com inicial A: " + totalA);
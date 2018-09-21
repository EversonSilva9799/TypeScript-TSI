//Importando o módulo de input do Typescript
import * as readline from 'readline-sync'; 


let nome: String = "Everson";
console.log("Olá sejam bem-vindo(s) " + nome);

function diaSemana(dia: number): string {
    const dias: string[] = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
    return dias[dia];
}

let  nome2: string  =  readline.question('Qual  o  seu  nome?  ');
console.log(nome2);

let data: Date = new Date();
console.log("Hoje é " + nome2 + diaSemana(data.getDay()));





/*
console.log("Hoje é " + dias[data.getDay()])
console.log("Horas " + data.getHours())
console.log("Ano " + data.getFullYear())
console.log("Minutos " + data.getMinutes())
console.log("Mês do ano " + data.getMonth())
console.log("Dia do mês " + data.getDate())
*/
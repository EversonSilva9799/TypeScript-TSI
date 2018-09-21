import { Biblioteca } from "./Biblioteca"
import { Livro } from "./Livro";

let livro1 = new Livro("5522", "Programação OO", 2005, "Emanuel cant", "Editora Racional");
let livro2 = new Livro("6253", "Python para iniciante", 2009,"Roberto Carlos", "Canto Quente");
let livro3 = new Livro("1247", "JavaScript", 1997, "Galileu Galilei", "Astro Astral");
let livro4 = new Livro("6352", "Java", 2000, "Thomas Edson", "Luz Para Todos");


let listaLivro = new Biblioteca();

listaLivro.adicionarLivro(livro1);
listaLivro.adicionarLivro(livro2);
listaLivro.adicionarLivro(livro3);
listaLivro.adicionarLivro(livro4);

//Adicionando livro
if (listaLivro.adicionarLivro(livro1)){
    console.log("O livro foi adicionado");
}else{
    console.log("Isbn existente");
}

console.log("");

//Consultando livro
if (listaLivro.consultarLivro("6352")){
    listaLivro.mostrarLivro("6352");
}else {
    console.log("Sem resultados");
}

// Removendo livros
listaLivro.removerLivro("5522");
listaLivro.removerLivro("6352");

console.log("");
//Consultando a quantidade de livros
console.log("Quantidade de livros no acervo: " + listaLivro.tamanho());

console.log("");
//Consultando livro
if (listaLivro.consultarLivro("5522")){
    listaLivro.mostrarLivro("5522");
}else {
    console.log("Sem resultados");
}

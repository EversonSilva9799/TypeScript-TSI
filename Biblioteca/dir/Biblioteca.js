"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.consultarLivro = function (isbn) {
        for (var i = 0; i < this.livros.length; i++) {
            if (this.livros[i].getIsbn() === isbn) {
                return true;
            }
        }
        return false;
    }; //--------------------------------------------consultarLivro()
    Biblioteca.prototype.adicionarLivro = function (livro) {
        for (var i = 0; i < this.livros.length; i++) {
            if (this.livros[i].getIsbn() === livro.getIsbn()) {
                return false;
            }
        }
        this.livros.push(livro);
        return true;
    }; //------------------------------------------------adicionarLivro()
    Biblioteca.prototype.mostrarLivro = function (isbn) {
        for (var i = 0; i < this.livros.length; i++) {
            if (this.livros[i].getIsbn() === isbn) {
                console.log("ISBN: " + this.livros[i].getIsbn());
                console.log("Título: " + this.livros[i].getTitulo());
                console.log("Ano de publicação: " + this.livros[i].getAnoPublicacao());
                console.log("Autor: " + this.livros[i].getAutor());
                console.log("Editora: " + this.livros[i].getEditora());
                break;
            }
        }
    }; //--------------------------------------------------mostrarLivro()
    Biblioteca.prototype.removerLivro = function (isbn) {
        for (var i = 0; i < this.livros.length; i++) {
            if (this.livros[i].getIsbn() === isbn) {
                this.livros.splice(i, 1);
                return true;
            }
        }
        return false;
    }; //-------------------------------------------removerLivro()
    /*
    public retornaLista(): void{
        for (let i = 0; i < this.livros.length; i++){
            console.log(this.livros[i].getIsbn());
            console.log(this.livros[i].getTitulo());
            console.log(this.livros[i].getAnoPublicacao());
            console.log(this.livros[i].getAutor());
            console.log(this.livros[i].getEditora());
            console.log("");
        }
    }
    
*/
    Biblioteca.prototype.tamanho = function () {
        return this.livros.length;
    }; //---------------------------------------tamanho()
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro = /** @class */ (function () {
    function Livro(isbn, titulo, anoPublicacao, autor, editora) {
        this.isbn = "null";
        this.titulo = "null";
        this.anoPublicacao = 0;
        this.autor = "null"; // Poderia ser do tipo Autor
        this.editora = "null"; // Poderia ser do tipo Editora
        this.setIsbn(isbn);
        this.setTitulo(titulo);
        this.setAnoPublicacao(anoPublicacao);
        this.setAutor(autor);
        this.setEditora(editora);
    } //------------------------------------Construtor
    // --------------------------Métodos getters e setters
    Livro.prototype.getIsbn = function () {
        return this.isbn;
    };
    Livro.prototype.setIsbn = function (isbn) {
        if (isbn.length === 4) {
            this.isbn = isbn;
        }
        else {
            this.isbn = "Indefinido";
        }
    };
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Livro.prototype.getAnoPublicacao = function () {
        return this.anoPublicacao;
    };
    Livro.prototype.setAnoPublicacao = function (anoPublicacao) {
        var ano = new Date();
        var anoAtual = ano.getFullYear();
        if (anoPublicacao <= anoAtual) {
            this.anoPublicacao = anoPublicacao;
        }
        else {
            this.anoPublicacao = 0;
        }
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Livro.prototype.getEditora = function () {
        return this.editora;
    };
    Livro.prototype.setEditora = function (editora) {
        this.editora = editora;
    }; //--------------------------------------Fim dos getters e setters
    return Livro;
}());
exports.Livro = Livro;

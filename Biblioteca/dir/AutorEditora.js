"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Autor = /** @class */ (function () {
    function Autor(nome, dataNascimento, cpf, endereco) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.endereco = endereco;
    }
    Autor.prototype.getNome = function () {
        return this.nome;
    };
    Autor.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Autor.prototype.getDataNascimento = function () {
        return this.dataNascimento;
    };
    Autor.prototype.setDataNascimento = function () {
        this.dataNascimento = this.dataNascimento;
    };
    Autor.prototype.getCpf = function () {
        return this.cpf;
    };
    Autor.prototype.setCpf = function (cpf) {
        this.cpf = cpf;
    };
    Autor.prototype.getEndereco = function () {
        return this.endereco;
    };
    Autor.prototype.setEndereco = function (endereco) {
        this.endereco = endereco;
    };
    return Autor;
}());
exports.Autor = Autor;
var Editora = /** @class */ (function () {
    function Editora(nome, cnpj, endereco, telefone) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    Editora.prototype.getNome = function () {
        return this.nome;
    };
    Editora.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Editora.prototype.getCnpj = function () {
        return this.cnpj;
    };
    Editora.prototype.setCnpj = function (cnpj) {
        this.cnpj = cnpj;
    };
    Editora.prototype.getEndereco = function () {
        return this.endereco;
    };
    Editora.prototype.setEndereco = function (endereco) {
        this.endereco = endereco;
    };
    Editora.prototype.getTelefone = function () {
        return this.telefone;
    };
    Editora.prototype.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
    return Editora;
}());
exports.Editora = Editora;

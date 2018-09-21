"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(codigo, valor, descricao) {
        this.codigo = codigo;
        this.valor = valor;
        this.descricao = descricao;
    }
    Produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produto.prototype.setCodigo = function (codigo) {
        this.codigo = codigo;
    };
    Produto.prototype.getValor = function () {
        return this.valor;
    };
    Produto.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    Produto.prototype.getDescricao = function () {
        return this.descricao;
    };
    Produto.prototype.setDescricao = function (descricao) {
        this.descricao = descricao;
    };
    return Produto;
}());
exports.Produto = Produto;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemPedido = /** @class */ (function () {
    function ItemPedido(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
    ItemPedido.prototype.getProduto = function () {
        return this.produto;
    };
    ItemPedido.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    return ItemPedido;
}());
exports.ItemPedido = ItemPedido;

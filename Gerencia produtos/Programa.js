"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemPedido_1 = require("./ItemPedido");
var Produto_1 = require("./Produto");
var Pedido_1 = require("./Pedido");
var p1 = new Produto_1.Produto(85963, 150, "Memória Ram 4GB");
var p2 = new Produto_1.Produto(95643, 225, "HD externo 1TB");
var p3 = new Produto_1.Produto(96536, 1899, "Processador intel i5");
var p4 = new Produto_1.Produto(95632, 32, "Pen Drive 16 GB");
var p5 = new Produto_1.Produto(96523, 99, "Teclado sem fio");
var ped1 = new ItemPedido_1.ItemPedido(p1, 5);
var ped2 = new ItemPedido_1.ItemPedido(p2, 21);
var ped3 = new ItemPedido_1.ItemPedido(p3, 12);
var ped4 = new ItemPedido_1.ItemPedido(p4, 60);
var ped5 = new ItemPedido_1.ItemPedido(p5, 30);
var listaCompra = new Pedido_1.Pedido();
listaCompra.adicionarItem(ped1);
listaCompra.adicionarItem(ped2);
listaCompra.adicionarItem(ped3);
listaCompra.adicionarItem(ped4);
listaCompra.adicionarItem(ped5);
//listaCompra.obterTotal();
// Buscando um produto
if (listaCompra.consultarProduto(8593)) {
    listaCompra.BuscarProduto(85963);
}
else {
    console.log("Não há resultados para para a pesquisa");
}
//Quantidade de tipos
console.log(listaCompra.tamanho() + " tipos de produtos no estoque");
//listaCompra.venderProduto(85963, 2);
//listaCompra.BuscarProduto(85963);

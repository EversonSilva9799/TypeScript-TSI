import { ItemPedido } from "./ItemPedido"
import { Produto } from "./Produto"
import { Pedido } from "./Pedido";


let p1 = new Produto(85963, 150, "Memória Ram 4GB");
let p2 = new Produto(95643, 225, "HD externo 1TB");
let p3 = new Produto(96536, 1899, "Processador intel i5");
let p4 = new Produto(95632, 32, "Pen Drive 16 GB");
let p5 = new Produto(96523, 99, "Teclado sem fio");


let ped1 = new ItemPedido(p1, 5);
let ped2 = new ItemPedido(p2, 21);
let ped3 = new ItemPedido(p3, 12);
let ped4 = new ItemPedido(p4, 60);
let ped5 = new ItemPedido(p5, 30);

let listaCompra = new Pedido();
listaCompra.adicionarItem(ped1);
listaCompra.adicionarItem(ped2);
listaCompra.adicionarItem(ped3);
listaCompra.adicionarItem(ped4);
listaCompra.adicionarItem(ped5);

//listaCompra.obterTotal();

// Buscando um produto
if (listaCompra.consultarProduto(8593)){
    listaCompra.BuscarProduto(85963);
} else{
    console.log("Não há resultados para para a pesquisa");
}

//Quantidade de tipos
console.log(`${listaCompra.tamanho()} tipos de produtos no estoque`);

//listaCompra.venderProduto(85963, 2);
//listaCompra.BuscarProduto(85963);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pedido = /** @class */ (function () {
    function Pedido() {
        this.itens = [];
        this.valorTotal = 0;
    }
    /*
        public constructor(item: ItemPedido, valorTotal: number){
            this.itens = [];
            this.valorTotal = valorTotal;
        }
        */
    // Adiciona um item ao estoque
    Pedido.prototype.adicionarItem = function (item) {
        this.itens.push(item);
    };
    // imprime todos os objetos com seus atributos
    Pedido.prototype.obterTotal = function () {
        for (var i = 0; i < this.itens.length; i++) {
            var codigo = this.itens[i].getProduto().getCodigo();
            var produto = this.itens[i].getProduto().getDescricao();
            var quantidade = this.itens[i].getQuantidade();
            var valorUnidade = this.itens[i].getProduto().getValor();
            var valorTotal = this.itens[i].getProduto().getValor() * this.itens[i].getQuantidade();
            console.log(codigo);
            console.log("Quantidade: " + quantidade + "\nProduto: " + produto + "\nValor: R$ " + valorTotal + "\nValor por unidade R$ " + valorUnidade);
            //console.log("");
        }
    };
    // Retorna um true se o produto existe
    Pedido.prototype.consultarProduto = function (codigo) {
        for (var i = 0; i < this.itens.length; i++) {
            if (codigo === this.itens[i].getProduto().getCodigo()) {
                return true;
            }
        }
        return false;
    };
    // Imprime o produto pesquisado se este existir
    Pedido.prototype.BuscarProduto = function (codigo) {
        for (var i = 0; i < this.itens.length; i++) {
            if (codigo === this.itens[i].getProduto().getCodigo()) {
                var codigo_1 = this.itens[i].getProduto().getCodigo();
                var produto = this.itens[i].getProduto().getDescricao();
                var valorUnidade = this.itens[i].getProduto().getValor();
                var quantidade = this.itens[i].getQuantidade();
                console.log("C\u00F3digo: " + codigo_1 + "\nProduto: " + produto + "\nValor Por unidade: " + valorUnidade + "\nQuantidade: " + quantidade);
                return true;
            }
        }
        return false;
    };
    /*
    public venderProduto(codigo: number, quantidade: number): boolean{
        for (let i = 0; i < this.itens.length; i++){
            if (codigo === this.itens[i].getProduto().getCodigo()){
                if (this.itens[i].getQuantidade() > 0){
                    this.itens[i].getQuantidade() = quantidade;
                    return true;
                }
                
            }
        }
        return false;
    }
    */
    //Retorna a quantidade de tipos de produto
    Pedido.prototype.tamanho = function () {
        return this.itens.length;
    };
    return Pedido;
}());
exports.Pedido = Pedido;

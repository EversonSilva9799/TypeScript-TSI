
import { ItemPedido } from "./ItemPedido";
import { Produto } from "./Produto";

export class Pedido{
    private itens: ItemPedido[] = [];
    private valorTotal: number = 0;

/*
    public constructor(item: ItemPedido, valorTotal: number){
        this.itens = [];
        this.valorTotal = valorTotal;
    }
    */

    // Adiciona um item ao estoque
    public adicionarItem(item: ItemPedido): void{
        this.itens.push(item);
    }

    // imprime todos os objetos com seus atributos
    public obterTotal(): void{
        for (let i = 0; i < this.itens.length; i++){
            
            let codigo = this.itens[i].getProduto().getCodigo();
            let produto = this.itens[i].getProduto().getDescricao();
            let quantidade = this.itens[i].getQuantidade();
            let valorUnidade = this.itens[i].getProduto().getValor()
            let valorTotal = this.itens[i].getProduto().getValor() * this.itens[i].getQuantidade();

            console.log(codigo);
            console.log(`Quantidade: ${quantidade}\nProduto: ${produto}\nValor: R$ ${valorTotal}\nValor por unidade R$ ${valorUnidade}`);
            //console.log("");

        }
    }

    // Retorna um true se o produto existe
    public consultarProduto(codigo: number): boolean{
        for (let i = 0; i < this.itens.length; i++){
            if (codigo === this.itens[i].getProduto().getCodigo()){
                return true;
            }
        }
        return false;
    }

    // Imprime o produto pesquisado se este existir
    public BuscarProduto(codigo: number): boolean{
        for (let i = 0; i < this.itens.length; i++){
            if (codigo === this.itens[i].getProduto().getCodigo()){

                let codigo = this.itens[i].getProduto().getCodigo();
                let produto = this.itens[i].getProduto().getDescricao();
                let valorUnidade = this.itens[i].getProduto().getValor();
                let quantidade = this.itens[i].getQuantidade();

                console.log(`Código: ${codigo}\nProduto: ${produto}\nValor Por unidade: ${valorUnidade}\nQuantidade: ${quantidade}`);
                return true;
            }
        }
        return false;
    }
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
    public tamanho(): number{
        return this.itens.length;
    }
}
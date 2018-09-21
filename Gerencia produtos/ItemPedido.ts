import { Produto } from "./Produto"

export class ItemPedido{
    private produto: Produto;
    private quantidade: number;


    public constructor(produto: Produto, quantidade: number){
        this.produto = produto;
        this.quantidade = quantidade;
    }


    public getProduto(): Produto{
        return this.produto;
    }

    public getQuantidade(): number{
        return this.quantidade;
    }
}
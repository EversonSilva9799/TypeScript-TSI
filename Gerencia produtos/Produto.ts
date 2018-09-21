export class Produto{
    private codigo: number;
    private valor: number;
    private descricao: string;


    public constructor(codigo: number, valor: number, descricao: string ){
        this.codigo = codigo;
        this.valor = valor;
        this.descricao = descricao;
    }

    public getCodigo(): number{
        return this.codigo;
    }

    public setCodigo(codigo: number): void{
        this.codigo = codigo;
    }

    public getValor(): number{
        return this.valor;
    }

    public setValor(valor: number): void{
        this.valor = valor;
    }

    public getDescricao(): string{
        return this.descricao;
    }

    public setDescricao(descricao: string): void{
        this.descricao = descricao;
    }


}
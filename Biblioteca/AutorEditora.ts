export class Autor{
    private nome: string;
    private dataNascimento: string;
    private cpf: number;
    private endereco: string;

    public constructor(nome: string, dataNascimento: string, cpf: number, endereco: string){
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.endereco = endereco;
    }


    public getNome(): string{
        return this.nome;
    }

    public setNome(nome: string): void{
        this.nome = nome;
    }

    public getDataNascimento(): string{
        return this.dataNascimento
    }

    public setDataNascimento(): void{
        this.dataNascimento = this.dataNascimento;
    }

    public getCpf(): number{
        return this.cpf;
    }

    public setCpf(cpf: number): void{
        this.cpf = cpf;
    }

    public getEndereco(): string{
        return this.endereco
    }

    public setEndereco(endereco: string): void{
        this.endereco = endereco;
    }
}



export class Editora{
    private nome: string;
    private cnpj: number;
    private endereco: string;
    private telefone: number;


    public constructor(nome: string, cnpj: number, endereco: string, telefone: number){
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    public getNome(): string{
        return this.nome;
    }

    public setNome(nome: string): void{
        this.nome = nome;
    }

    public getCnpj(): number{
        return this.cnpj;
    }

    public setCnpj(cnpj: number): void{
        this.cnpj = cnpj;
    }

    public getEndereco(): string{
        return this.endereco
    }

    public setEndereco(endereco: string): void{
        this.endereco = endereco;
    }

    public getTelefone(): number{
        return this.telefone;
    }

    public setTelefone(telefone: number): void{
        this.telefone = telefone;
    }
}
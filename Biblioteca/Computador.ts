class Computador{
    private processador: number;
    private ram: number;
    private hd: number;
    private tamanhoTela: number;



    public constructor(processador: number, ram: number, hd: number, tamanhotela: number){
        this.processador = processador;
        this.ram = ram;
        this.hd = hd;
        this.tamanhoTela = tamanhotela;
    }

    public getProcessador(): number{
        return this.processador;
    }

    public setProcessador(processador: number){
        this.processador = processador;
    }

    public getRam(): number{
        return this.ram;
    }

    public setRam(ram: number){
        this.ram = ram;
    }

    public getHd(): number{
        return this.hd;
    }

    public setHd(hd: number){
        this.hd = hd;
    }

    public getTamanhoTela(): number{
        return this.tamanhoTela;
    }

    public setTamanhoTela(tamanhoTela: number){
        this.tamanhoTela = tamanhoTela;
    }

    public calcularPreco(): number{
        let precoTotal = this.processador + this.ram + this.hd + this.tamanhoTela;
        return precoTotal;
    }
// Apesar de não possuir nenhum teste, a função calcularPreco foi criada e retornará
//O valor total do computador

//Como sendo o mais importante funcionar,optei por não criar um menu ou simplesmente uma
//lista para o usuário ver as peças

// não fiz nenhum tratamento de exceção
    
}

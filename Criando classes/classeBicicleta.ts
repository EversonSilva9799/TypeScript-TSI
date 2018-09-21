class bicicleta{
    private modelo: string;
    private cor: string;
    private velocidade: number;
    private coroa: number;
    private catraca: number;
    


    /* ===== Construtor personalizado =====*/
    constructor(modelo: string, cor: string, ){
        this.modelo = modelo;
        this.cor = cor;
        this.velocidade = 0;
        this.coroa = 1;
        this.catraca = 1;
        
        
    }

     /* ===== getters =====*/

     public getModelo(): string{
        return this.modelo;
    }

    public getCor(): string{
        return this.cor
    }
    public getVelocidade(): number{
        return this.velocidade;
    }
    public getMarcha(): any{
        return(`${this.coroa} ${this.catraca}`)
    }
    /* ===== Fim dos métodos getters =====*/

    
    /* ===== Métodos criados =====*/
    public pedalar(velocidade: number): void{
        if(this.velocidade + velocidade <= 70){
            this.velocidade += velocidade;
        }
        else{
            this.velocidade = 70;
        }
    }

    public frear(): boolean{
        if(this.velocidade > 0){
            this.velocidade -= 5;
            return true;
        }
        else{
            return false;
        }
    }

    public passarMarcha(coroa: number, catraca: number): boolean{
        if(coroa >= 1 && coroa <= 3 && catraca >= 1 && catraca <= 7){
            this.coroa = coroa;
            this.catraca = catraca;
            return true;    
        }return false;

    } /* ===== Fim dos métodos =====*/

    
}

/* ===== Instanciando a classe =====*/
let bicicleta1 = new bicicleta("BMX", "Preta");

console.log("Modelo: " + bicicleta1.getModelo());
console.log("Cor: " + bicicleta1.getCor());

bicicleta1.pedalar(20);
bicicleta1.pedalar(60);

console.log("Velocidade: " + bicicleta1.getVelocidade());

bicicleta1.pedalar(20);

console.log("Marcha: " + bicicleta1.getMarcha());

bicicleta1.passarMarcha(2, 5);
bicicleta1.frear();
bicicleta1.frear();

console.log("Velocidade: " + bicicleta1.getVelocidade());
console.log("Marcha: " + bicicleta1.getMarcha());



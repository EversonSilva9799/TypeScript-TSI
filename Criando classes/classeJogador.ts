class Jogador{
    private nome: string;
    private avatar: any;
    private vida: number;
    private posicaoNoMapa: string

    /* ===== Construtor personalizado ===== */
    constructor(nome: string){
        this.nome = nome;
        this.avatar = "Seu avatar";
        this.vida = 5;
        this.posicaoNoMapa = "Centro do mapa"
    }

    /* ===== Métodos acessores ===== */

    public getNome(): string{
        return this.nome;
    }

    public setNome(nome: string): void{
        this.nome = nome;
    }

    public getVida(): number{
        return this.vida;
    }

    public getPosicaoNoMapa(): string{
        return this.posicaoNoMapa;
    }

    /* ===== Fim dos métodos acessores ===== */

    /* ===== Métodos do objeto ===== */

    public movimentar(posicaoNoMapa: string): boolean{
        if(this.vida >= 1){
            if(posicaoNoMapa.toLowerCase() === "direita"
            || posicaoNoMapa.toLowerCase() === "esquerda"
            || posicaoNoMapa.toLowerCase() === "frente"
            || posicaoNoMapa.toLowerCase() === "trás" ){
                this.posicaoNoMapa = posicaoNoMapa;
                return true;
            }return false;
        }return false;
    }

    public pularObstaculo(): boolean{
        if(this.vida >= 1){
            return true;
        }return false;
    }

    public socar(): boolean{
        if(this.vida >= 1){
            return true;
        }return false;
        
    }

    public chutar(): boolean{
        if(this.vida >= 1){
            return true;
        }return false;
    }

    public arremessarObjeto(): boolean{
        if(this.vida >= 1){
            return true;
        }return false;
    }

    /* ===== Fim dos métodos do objeto ===== */

}

/* ===== Instanciando a classe ===== */

let jogadorx = new Jogador("Player1");

console.log("Nome: " + jogadorx.getNome());
console.log(" Jogador no mapa: " + jogadorx.getPosicaoNoMapa());
jogadorx.movimentar("Direita");
console.log(" Jogador no mapa: " + jogadorx.getPosicaoNoMapa());
jogadorx.movimentar("Frente");
console.log(" Jogador no mapa: " + jogadorx.getPosicaoNoMapa());


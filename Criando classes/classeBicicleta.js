"use strict";
var bicicleta = /** @class */ (function () {
    /* ===== Construtor personalizado =====*/
    function bicicleta(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
        this.velocidade = 0;
        this.coroa = 1;
        this.catraca = 1;
    }
    /* ===== getters =====*/
    bicicleta.prototype.getModelo = function () {
        return this.modelo;
    };
    bicicleta.prototype.getCor = function () {
        return this.cor;
    };
    bicicleta.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    bicicleta.prototype.getMarcha = function () {
        return (this.coroa + " " + this.catraca);
    };
    /* ===== Fim dos métodos getters =====*/
    /* ===== Métodos criados =====*/
    bicicleta.prototype.pedalar = function (velocidade) {
        if (this.velocidade + velocidade <= 70) {
            this.velocidade += velocidade;
        }
        else {
            this.velocidade = 70;
        }
    };
    bicicleta.prototype.frear = function () {
        if (this.velocidade > 0) {
            this.velocidade -= 5;
            return true;
        }
        else {
            return false;
        }
    };
    bicicleta.prototype.passarMarcha = function (coroa, catraca) {
        if (coroa >= 1 && coroa <= 3 && catraca >= 1 && catraca <= 7) {
            this.coroa = coroa;
            this.catraca = catraca;
            return true;
        }
        return false;
    }; /* ===== Fim dos métodos =====*/
    return bicicleta;
}());
/* ===== Instanciando a classe =====*/
var bicicleta1 = new bicicleta("BMX", "Preta");
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

"use strict";
var Jogador = /** @class */ (function () {
    /* ===== Construtor personalizado ===== */
    function Jogador(nome) {
        this.nome = nome;
        this.avatar = "Seu avatar";
        this.vida = 5;
        this.posicaoNoMapa = "Centro do mapa";
    }
    /* ===== Métodos acessores ===== */
    Jogador.prototype.getNome = function () {
        return this.nome;
    };
    Jogador.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Jogador.prototype.getVida = function () {
        return this.vida;
    };
    Jogador.prototype.getPosicaoNoMapa = function () {
        return this.posicaoNoMapa;
    };
    /* ===== Fim dos métodos acessores ===== */
    /* ===== Métodos do objeto ===== */
    Jogador.prototype.movimentar = function (posicaoNoMapa) {
        if (this.vida >= 1) {
            if (posicaoNoMapa.toLowerCase() === "direita"
                || posicaoNoMapa.toLowerCase() === "esquerda"
                || posicaoNoMapa.toLowerCase() === "frente"
                || posicaoNoMapa.toLowerCase() === "trás") {
                this.posicaoNoMapa = posicaoNoMapa;
                return true;
            }
            return false;
        }
        return false;
    };
    Jogador.prototype.pularObstaculo = function () {
        if (this.vida >= 1) {
            return true;
        }
        return false;
    };
    Jogador.prototype.socar = function () {
        if (this.vida >= 1) {
            return true;
        }
        return false;
    };
    Jogador.prototype.chutar = function () {
        if (this.vida >= 1) {
            return true;
        }
        return false;
    };
    Jogador.prototype.arremessarObjeto = function () {
        if (this.vida >= 1) {
            return true;
        }
        return false;
    };
    return Jogador;
}());
/* ===== Instanciando a classe ===== */
var jogadorx = new Jogador("Player1");
console.log("Nome: " + jogadorx.getNome());
console.log(" Jogador no mapa: " + jogadorx.getPosicaoNoMapa());
jogadorx.movimentar("Direita");
console.log(" Jogador no mapa: " + jogadorx.getPosicaoNoMapa());
jogadorx.movimentar("Frente");
console.log(" Jogador no mapa: " + jogadorx.getPosicaoNoMapa());

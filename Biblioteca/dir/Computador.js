"use strict";
var Computador = /** @class */ (function () {
    function Computador(processador, ram, hd, tamanhotela) {
        this.processador = processador;
        this.ram = ram;
        this.hd = hd;
        this.tamanhoTela = tamanhotela;
    }
    Computador.prototype.getProcessador = function () {
        return this.processador;
    };
    Computador.prototype.setProcessador = function (processador) {
        this.processador = processador;
    };
    Computador.prototype.getRam = function () {
        return this.ram;
    };
    Computador.prototype.setRam = function (ram) {
        this.ram = ram;
    };
    Computador.prototype.getHd = function () {
        return this.hd;
    };
    Computador.prototype.setHd = function (hd) {
        this.hd = hd;
    };
    Computador.prototype.getTamanhoTela = function () {
        return this.tamanhoTela;
    };
    Computador.prototype.setTamanhoTela = function (tamanhoTela) {
        this.tamanhoTela = tamanhoTela;
    };
    Computador.prototype.calcularPreco = function () {
        var precoTotal = this.processador + this.ram + this.hd + this.tamanhoTela;
        return precoTotal;
    };
    return Computador;
}());

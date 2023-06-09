"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    Direccion.prototype.print = function () {
        console.log("Dirección. Calle: " + this.calle + ". Número: " + this.numero + ". Piso: " + this.piso +
            ". Letra: " + this.letra + ". Código postal: " + this.codigoPostal + ". Población: "
            + this.poblacion + ". Provincia: " + this.provincia);
    };
    return Direccion;
}());
exports.Direccion = Direccion;

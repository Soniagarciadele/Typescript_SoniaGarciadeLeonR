"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    Mail.prototype.print = function () {
        console.log("Mail. Tipo: " + this.tipo + ". Dirección: " + this.direccion);
    };
    return Mail;
}());
exports.Mail = Mail;

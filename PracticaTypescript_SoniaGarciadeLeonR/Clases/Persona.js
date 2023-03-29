"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, birthday, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this._dni = dni;
        this.birthday = birthday;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.print = function () {
        console.log("Nombre: " + this.nombre + ". Apellidos: " + this.apellidos + ". Edad: " + this.edad + ". DNI: " + this._dni
            + ". Cumpleaños: " + this.birthday + ". Color favorito: " + this.colorFavorito + ". Sexo: " + this.sexo);
        for (var _i = 0, _a = this.direcciones; _i < _a.length; _i++) {
            var direccion = _a[_i];
            direccion.print();
        }
        for (var _b = 0, _c = this.mails; _b < _c.length; _b++) {
            var mail = _c[_b];
            mail.print();
        }
        for (var _d = 0, _e = this.telefonos; _d < _e.length; _d++) {
            var telefono = _e[_d];
            telefono.print();
        }
        for (var _f = 0, _g = this.notas; _f < _g.length; _f++) {
            var nota = _g[_f];
            console.log("Nota: " + nota);
        }
        console.log("\n");
    };
    Persona.prototype.addDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.addTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    Persona.prototype.addMail = function (mail) {
        this.mails.push(mail);
    };
    return Persona;
}());
exports.Persona = Persona;

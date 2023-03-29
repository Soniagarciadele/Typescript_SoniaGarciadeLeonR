import { Direccion } from './Direccion'
import { Mail } from './Mail'
import { Telefono } from './Telefono'
import { TipoSexo } from '../enums/TipoSexo'

export class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private _dni: string;
    private birthday: string;
    private colorFavorito: string;
    private sexo: TipoSexo;
    private direcciones: Direccion[];
    private mails: Mail[];
    private telefonos: Telefono[];
    notas: string[];
    
    constructor(nombre: string, apellidos: string, edad: number, dni: string, birthday: string, colorFavorito: string, sexo: TipoSexo,
        direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string[]){
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

    get dni () {
        return  this._dni;
    }

    print(): void {
        console.log("Nombre: " + this.nombre + ". Apellidos: " + this.apellidos + ". Edad: " + this.edad + ". DNI: " + this._dni
        + ". Cumpleaños: " + this.birthday + ". Color favorito: " + this.colorFavorito + ". Sexo: " + this.sexo);
        
        for(let direccion of this.direcciones) {
            direccion.print();
        }

        for(let mail of this.mails) {
            mail.print();
        }

        for(let telefono of this.telefonos) {
            telefono.print();
        }

        for(let nota of this.notas) {
            console.log("Nota: " + nota);
        }

        console.log("\n");
    }

    addDireccion (direccion: Direccion): void {
        this.direcciones.push(direccion);
    }
    addTelefono (telefono: Telefono): void {
        this.telefonos.push(telefono);
    }
    addMail (mail: Mail): void {
        this.mails.push(mail);
    }
}
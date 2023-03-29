import {TipoTelefono} from '../enums/TipoTelefono';
export class Telefono {
   private tipo: TipoTelefono;
   private numero: number;

    constructor(tipo: TipoTelefono, numero: number){
        this.tipo = tipo;
        this.numero = numero;
    }

    print(): void {
        console.log("Teléfono.  Tipo:" + this.tipo + ". Número: " + this.numero);
    }
}
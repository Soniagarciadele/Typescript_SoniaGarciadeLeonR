import {TipoMail} from '../enums/TipoMail';

export class Mail {
    private tipo: TipoMail;
    private direccion: string;

    constructor(tipo: TipoMail, direccion: string){
        this.tipo = tipo;
        this.direccion = direccion;
    }

    print(): void {
        console.log("Mail. Tipo: " + this.tipo + ". Dirección: " + this.direccion);
    }
}



export class Direccion {
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    private codigoPostal: number;
    private poblacion: string;
    private provincia: string;

    constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, poblacion: string, provincia: string) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }

    print(): void {
        console.log("Dirección. Calle: " + this.calle + ". Número: " + this.numero + ". Piso: " + this.piso +
        ". Letra: " + this.letra + ". Código postal: " + this.codigoPostal + ". Población: "
        + this.poblacion + ". Provincia: " + this.provincia);
    }  
}
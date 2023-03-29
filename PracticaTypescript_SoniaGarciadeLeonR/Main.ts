import { Persona } from './Clases/Persona'
import { Direccion } from './Clases/Direccion'
import { Mail } from './Clases/Mail'
import { Telefono } from './Clases/Telefono'
import { TipoSexo } from './enums/TipoSexo'
import { TipoMail } from './enums/TipoMail'
import { TipoTelefono } from './enums/TipoTelefono'

//Persona 1
var direccion1: Direccion[] = [new Direccion("Alcalá", 3, 2, "A", 28024, "Madrid", "Madrid") ];
var mail1: Mail[] = [new Mail (TipoMail.personal, "pepe@hotmail.com"), new Mail (TipoMail.corporativo, "ramires.santos@empresa.com")]
var telefono1: Telefono[] = [new Telefono(TipoTelefono.fijo, 91333333)]
var nota1: string[] = ["Usar el mail personal"]
var persona1: Persona = new Persona ("Pepe","Ramirez Santos", 25, "09876543A", "03/03/1998", "rojo", TipoSexo.hombre, direccion1, mail1,telefono1,nota1)

//Persona 2
var direccion2: Direccion[] = [new Direccion("Diagonal", 43, 3, "B", 38024, "Barcelona", "Barcelona"), new Direccion ("Fuencarral", 101, 7, "D", 28249, "Madrid", "Madrid")];
var mail2: Mail[] = [new Mail (TipoMail.personal, "max@hotmail.com"), new Mail (TipoMail.corporativo, "m.perez@empresa.com"), new Mail (TipoMail.personal, "max@gmail.com")]
var telefono2: Telefono[] = [new Telefono(TipoTelefono.fijo, 932222222), new Telefono(TipoTelefono.movil, 655555555)]
var nota2: string[] = ["Vivo en Barcelona pero trabajo en Madrid","Contactar por móvil"]
var persona2: Persona = new Persona ("Max","Perez Perez", 30, "01234567B", "22/02/1993", "morado", TipoSexo.otro, direccion2, mail2,telefono2,nota2)

//Persona 3
var direccion3: Direccion[] = [new Direccion("Madrid", 101, 1, "B", 28904, "Getafe", "Madrid") ];
var mail3: Mail[] = [new Mail (TipoMail.personal, "rosita@hotmail.com")]
var telefono3: Telefono[] = [new Telefono(TipoTelefono.fijo, 9188888), new Telefono (TipoTelefono.movil, 67777777)]
var nota3: string[] = ["Mejor contactar por móvil", "no mandar mail"]
var persona3: Persona = new Persona ("Rosa","Rodriguez Martinez", 26, "12340987C", "05/09/1996", "negro", TipoSexo.mujer, direccion3, mail3,telefono3,nota3)

persona1.print();
persona2.print();
persona3.print();

var persona: Persona = getPersonByDni("12340987C");

persona.addDireccion(new Direccion("Ayala", 23, 4, "B", 28025, "Madrid", "Madrid"));
persona.addMail(new Mail(TipoMail.corporativo,"rosa@empresa.com"));
persona.addTelefono(new Telefono(TipoTelefono.movil, 60000000));

persona1.print();
persona2.print();
persona3.print();

function getPersonByDni(dni: string): Persona {
    let personaAux: Persona = null;
    switch(dni){
        case persona1.dni:
            personaAux = persona1;
            break;
        case persona2.dni:
            personaAux = persona2;
            break;
        case persona3.dni:
            personaAux = persona3;
            break;
        default:
            console.log("El DNI de búsqueda no se ha encontrado");
            break;
    }  
    return personaAux;
}
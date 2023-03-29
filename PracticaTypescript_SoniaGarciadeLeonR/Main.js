"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Clases/Persona");
var Direccion_1 = require("./Clases/Direccion");
var Mail_1 = require("./Clases/Mail");
var Telefono_1 = require("./Clases/Telefono");
var TipoSexo_1 = require("./enums/TipoSexo");
var TipoMail_1 = require("./enums/TipoMail");
var TipoTelefono_1 = require("./enums/TipoTelefono");
//Persona 1
var direccion1 = [new Direccion_1.Direccion("Alcalá", 3, 2, "A", 28024, "Madrid", "Madrid")];
var mail1 = [new Mail_1.Mail(TipoMail_1.TipoMail.personal, "pepe@hotmail.com"), new Mail_1.Mail(TipoMail_1.TipoMail.corporativo, "ramires.santos@empresa.com")];
var telefono1 = [new Telefono_1.Telefono(TipoTelefono_1.TipoTelefono.fijo, 91333333)];
var nota1 = ["Usar el mail personal"];
var persona1 = new Persona_1.Persona("Pepe", "Ramirez Santos", 25, "09876543A", "03/03/1998", "rojo", TipoSexo_1.TipoSexo.hombre, direccion1, mail1, telefono1, nota1);
//Persona 2
var direccion2 = [new Direccion_1.Direccion("Diagonal", 43, 3, "B", 38024, "Barcelona", "Barcelona"), new Direccion_1.Direccion("Fuencarral", 101, 7, "D", 28249, "Madrid", "Madrid")];
var mail2 = [new Mail_1.Mail(TipoMail_1.TipoMail.personal, "max@hotmail.com"), new Mail_1.Mail(TipoMail_1.TipoMail.corporativo, "m.perez@empresa.com"), new Mail_1.Mail(TipoMail_1.TipoMail.personal, "max@gmail.com")];
var telefono2 = [new Telefono_1.Telefono(TipoTelefono_1.TipoTelefono.fijo, 932222222), new Telefono_1.Telefono(TipoTelefono_1.TipoTelefono.movil, 655555555)];
var nota2 = ["Vivo en Barcelona pero trabajo en Madrid", "Contactar por móvil"];
var persona2 = new Persona_1.Persona("Max", "Perez Perez", 30, "01234567B", "22/02/1993", "morado", TipoSexo_1.TipoSexo.otro, direccion2, mail2, telefono2, nota2);
//Persona 3
var direccion3 = [new Direccion_1.Direccion("Madrid", 101, 1, "B", 28904, "Getafe", "Madrid")];
var mail3 = [new Mail_1.Mail(TipoMail_1.TipoMail.personal, "rosita@hotmail.com")];
var telefono3 = [new Telefono_1.Telefono(TipoTelefono_1.TipoTelefono.fijo, 9188888), new Telefono_1.Telefono(TipoTelefono_1.TipoTelefono.movil, 67777777)];
var nota3 = ["Mejor contactar por móvil", "no mandar mail"];
var persona3 = new Persona_1.Persona("Rosa", "Rodriguez Martinez", 26, "12340987C", "05/09/1996", "negro", TipoSexo_1.TipoSexo.mujer, direccion3, mail3, telefono3, nota3);
persona1.print();
persona2.print();
persona3.print();
var persona = getPersonByDni("12340987C");
persona.addDireccion(new Direccion_1.Direccion("Ayala", 23, 4, "B", 28025, "Madrid", "Madrid"));
persona.addMail(new Mail_1.Mail(TipoMail_1.TipoMail.corporativo, "rosa@empresa.com"));
persona.addTelefono(new Telefono_1.Telefono(TipoTelefono_1.TipoTelefono.movil, 60000000));
persona1.print();
persona2.print();
persona3.print();
function getPersonByDni(dni) {
    var personaAux = null;
    switch (dni) {
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

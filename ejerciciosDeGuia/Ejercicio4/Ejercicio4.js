//EJERCICIO #4: Filter
//
//Crear una función filter que acepte un array y un callback y que:
//
//  • Por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
//  • Sí dicho callback devuelve true, pushea el elemento a un nuevo array.
//  • Devuelva el array final con los elementos que pasaron el "filtro".


console.log(`

         •  FLITRADO  •
________________________________

`);


const personas = [];

let Op = 0;

do {

 Op = parseInt(prompt(`
        ¿Qué deseas hacer?
        __________________________________

        1. Ingresar una nueva persona
        2. Ver la lista de personas
        3. Filtrar personas por ocupación
        0. Salir

`));

    switch (Op) {

     case 1:

     const id = parseInt(prompt("Ingresa el ID de la persona:"));
     const nombre = prompt("Ingresa el nombre de la persona:");
     const ocupacion = prompt("Ingresa la ocupación de la persona:");

     nuevoDato = {id,nombre,ocupacion};
     personas.push(nuevoDato);
             
     break;
 
     case 0:

     alert("Saliendo del programa...");
         
     break;


     case 2:

     if (personas.length > 0) {

        const listaPersonas = personas.map(persona => 

            `ID: ${persona.id} | Nombre: ${persona.nombre} | Ocupación: ${persona.ocupacion}`

        ).join("\n");

        alert("Lista de personas:\n" + listaPersonas);

     } else {

        alert("No hay personas registradas.");
     }

     break;

     case 3:

     const ocupacionFiltro = prompt("Ingresa la ocupación para ver la lista: ");

     const resultado = personas.filter(function (persona) {

        return persona.ocupacion.toLowerCase() === ocupacionFiltro.toLowerCase() 
     }) ;

        if (personas.length > 0) {

            const listaFiltrada = resultado.map(persona => 

                `ID: ${persona.id} | Nombre: ${persona.nombre} | Ocupación: ${persona.ocupacion}`

            ).join("\n");
            
            alert("Personas con ocupación " + ocupacionFiltro + ":\n" + listaFiltrada);

        } else {

            alert("No hay personas registradas.");
        }
             
     break;

     default:

     alert("///Error: ingrese un valor valido...///");
     break;
         
    }


} while (Op!==0);

console.table(personas);



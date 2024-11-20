//EJERCICIO #3: Map
//
//Crear una función map que acepte un array y un callback y que:
//
//  • Por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
//  • Obtenga el resultado.
//  • Lo pushee a un nuevo array.
//  • Devuelva el array final con el resultado de cada una de las llamadas al callback.


console.log(`

           •  MAP  •
________________________________

`);


    const nombre = [];

    let Op = 0;

    do {

        Op = parseInt(prompt(`
            Ingresar un nuevo Dato
            ______________________________________________________
    
            ¿Deseas ingresar un nuevo nombre al Array?
              • SI (1)
              • NO (0)
            _____________________________________________________

            - Para ver la lista de nombres = 2
    
            `));
    
            switch (Op) {

                case 1:

                    const nuevoNombre = prompt("Ingresa un nombre:");
                    nombre.push(nuevoNombre);
                    
                break;
        
                case 0:

                alert("Saliendo del programa");
                
                break;

                case 2:

                num = 1;
                const resultado = nombre.map(function (nombres) {
                return (num++) + ". " + nombres;

                });

                alert("Lista de nombres:\n" + resultado.join("\n"));
                    
                break;

                default:

                alert("///Error: ingrese un valor valido...///");
                break;
                
            }


    } while (Op!==0);

    console.table(nombre);

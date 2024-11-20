//EJERCICIO #5: Every
//
//Crear una función every que acepte un array y un callback y que:
//
//  • Por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
//  • Devuelva true si todas las llamadas al callback devolvieron true.


console.log(`

           •  EVERY  •
________________________________

`);



let alumnos = [] , Op = 0;


do {

    Op = parseInt(prompt(`
        ¿Qué deseas hacer?
        __________________________________

        1. Ingresar un nuevo estudiante
        2. Ver la lista de estudiantes
        3. Filtrar estudiantes con buenas notas
        0. Salir

`));


switch (Op) {
    case 1:
        const nombre = prompt("Ingresa el nombre del estudiante:");
        let notas;

        do {

            const notasEnTexto = prompt(`
            > Ingresa al menos 4 notas del estudiante, separadas por comas 
            (ejemplo: 8,9,10,8):
            `);

            notas = notasEnTexto.split(",").map(nota => parseFloat(nota.trim()));
            

            if (notas.length < 4) {
                alert("Debes ingresar al menos 4 notas. Intenta nuevamente.");
                continue;
            } 
            else if (notas.some(nota => nota < 1 || nota > 10 || isNaN(nota))) {

                alert("Debes ingresar notas entre el 1 al 10. Intenta nuevamente.");
                continue;

            } else {
                
                let suma = 0;

                for (let i = 0; i < notas.length; i++) {
                    suma += notas[i];  
                }

                const promedio = parseFloat((suma / notas.length).toFixed(2));

                const nuevoDato = {nombre, notas, promedio};
                alumnos.push(nuevoDato);
        
                alert("Alumno/a ingresado/a correctamente.");
            }
            
        } while (notas.lenght < 4);

        
    break;

    case 2:
        if (alumnos.length > 0){

            let listaAlumnos = alumnos.map( (alumno, index) => {
                
            return `> Alumno #${(index+1)}
            Nombre: ${alumno.nombre}
            Notas por periodo: ${alumno.notas.join(", ")}
            Nota Total: ${alumno.promedio}
            _______________________________________________
            `

            }).join("\n");

            alert(`
                Lista de estudiantes:
                ________________________________________

                ${listaAlumnos}
            `);

        } else {

            alert ("No hay datos disponibles en este momento...");
        }
        
    break;

    case 3:


        let Opciones = parseInt (prompt(`
            ¿Qué lista de notas desea ver?

            1.Aprobados
            2.Reprobados
            0.regresar
        `));


        const promedioMinimo = 5 ;

        if (Opciones === 0){

            alert("regresando...");
            break;
        }

        if (Opciones !==1 && Opciones !==2 && Opciones !==0){

            alert("////ERROR:Ingrese un valor valido////");
            continue;
        }

        const alumnosFiltrados = alumnos.filter(alumno => {

            const promedioAprobado = [alumno.promedio].every(prom => prom >= promedioMinimo);
            return Opciones === 1 ? promedioAprobado : !promedioAprobado;

        });



            if (alumnosFiltrados.length > 0) {

            let listaFiltrada = alumnosFiltrados.map ((alumno, index) =>
             `
             > Alumno #${(index+1)}
             Nombre: ${alumno.nombre}
             Notas por periodo: ${alumno.notas.join(", ")}
             Nota Total: ${alumno.promedio}
             _______________________________________________ 
             `
            ).join("\n");


            alert(`${Opciones === 1 ? 'Alumnos con promedio aprobado' : 'Alumnos con promedio reprobado'}:\n${listaFiltrada}`);


            } else {

                alert("No se encontraron datos...");
            }



    break;

    case 0:
        alert (`Cerrando el programa...`);
        
    break;

    default:
        alert (`////ERROR:Ingrese un valor valido////`);

    break;
}

    
} while (Op !== 0);

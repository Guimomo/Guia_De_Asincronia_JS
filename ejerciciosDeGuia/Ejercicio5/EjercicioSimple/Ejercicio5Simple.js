//EJERCICIO #5: Every versión simplificada
//
//Crear una función every que acepte un array y un callback y que:
//
//  • Por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
//  • Devuelva true si todas las llamadas al callback devolvieron true.


console.log(`

    •  EVERY  •
________________________________

`);

const numeros = [8, 15, 20, 30];

// const todosMayoresQue10 = numeros.every(num => num > 10);
const todosMayoresQue10 = numeros.every(num =>{

    return num > 10;
});

if (todosMayoresQue10) {
    console.log("Todos los números son mayores que 10.");
} else {
    console.log("No todos los números son mayores que 10.");
}

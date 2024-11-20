//EJERCICIO #7: Find
//
//Crear una función find que acepte un array y un callback y que:
//
//  • Por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
//  • Devuelva el elemento pasado como argumento del primer callback que devuelva true.
//  • Sí ningún callback devuelve true, devuelva undefined.

console.log(`

    •  FIND  •
________________________________

`);

const tortas = [
    { nombre: "Tarta de manzana", stock:0 },
    { nombre: "Pastel de chocolate", stock: 9 },
    { nombre: "Tarta de fresa", stock: 0 },
    { nombre: "Pastel de limón", stock: 8 }
];

const tortaSinStock = tortas.find(torta => torta.stock === 0);

console.table(tortaSinStock);

//EJERCICIO #8: FindIndex
//
//Crear una función findIndex que acepte un array y un callback y que:
//
//  • Por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
//  • Devuelva el elemento pasado como argumento del primer callback que devuelva true.
//  • Sí ningún callback devuelve true, devuelva undefined.</p>

console.log(`

    •  FIND INDEX  •
________________________________

`);

const tortas = [
    { nombre: "Tarta de manzana", stock: 1 },
    { nombre: "Pastel de chocolate", stock: 9 },
    { nombre: "Tarta de fresa", stock: 9 },
    { nombre: "Pastel de limón", stock: 8 }
];

//const tortaSinStock = tortas.findIndex(torta => torta.stock === 0);

const FindUndefined = (array, callback) => {

    const index = array.findIndex(callback);
    return index === -1 ? undefined : index;
}

const tortaSinStock = FindUndefined(tortas, torta => torta.stock === 0);

console.log(tortaSinStock);

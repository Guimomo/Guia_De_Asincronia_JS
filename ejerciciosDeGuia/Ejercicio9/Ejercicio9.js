//EJERCICIO #9: dropWhile
//
//Crear una función dropWhile que acepte un array y un callback y que: 
//
//  • Por cada elemento del array ejecute el callback pasándole dicho elemento como argumento. 
//  • Devuelva un array con los elementos a partir del primer callback que devolvió false. 
//  • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el 
//    callback de true, no los agrega, cuando el callback da false por primera vez agrega 
//    todos los elementos restantes a partir de dicho elemento inclusive).

console.log(`

    •  Drop While •
________________________________

`);

function dropWhile(array, predicate){

    let index = 0;

    while (index < array.length && predicate(array[index])) {
      index++;
    }
    
    return array.slice(index);

}

const inventario = [
    { producto: "Monitores HD" , cantidades: 0 },
    { producto: "CPU SnapDragon", cantidades: 5 },
    { producto: "Teclados RGB", cantidades: 10 },
    { producto: "MousePad", cantidades: 2 },
    { producto: "Silla ergonomica", cantidades: 8 },
    { producto: "Mouse ergonomico", cantidades: 3 }
]

const productosRenovables = dropWhile(inventario, (productos) => productos.cantidades < 5 );

console.log(`
    •  Inventario completo:
`);
console.table(inventario);

console.log(`
    •  productos a renovar:
`);
console.table(productosRenovables);
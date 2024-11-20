//EJERCICIO #6: Some
//
//Crear una función some que acepte un array y un callback y que:
//
//  • Por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
//  • Devuelva true si al menos una de las llamadas al callback devolvió true.

console.log(`

    •  SOME  •
________________________________

`);

const inventario = [
    {product: "Camisas talla L", stock:0},
    {product: "Zapatos de dama talla 35", stock:10},
    {product: "Jeans talla 35", stock:0},
    {product: "Gorras", stock:0},
    {product: "Zapatos de caballero talla 42", stock:10}
];

const sinStock = inventario.some (noStock => noStock.stock === 0);

if (sinStock) {

    productosAgotados = inventario
    .filter (producto => producto.stock ===0)
    .map (nombre => nombre.product)
    .join(", ")
    .replace(/,([^,]*)$/, " y$1");

    console.log(`
        Productos agotados (sin Stock):
        ${productosAgotados}
    `);
    
} else {

    console.log("Todos los productos tienen stock disponible.");
    
}

//EJERCICIO #13: Promesa en 3 segundos
//
// Crea una Promise que se resuelva después de 3 segundos y luego imprima<br>
// "Promise resuelta" cuando se cumpla.

console.log(`

  •  Promesas en 3 segundos •
________________________________

`);

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resuelta");
    }, 3000);
});

promesa.then(mensaje => console.log(mensaje));

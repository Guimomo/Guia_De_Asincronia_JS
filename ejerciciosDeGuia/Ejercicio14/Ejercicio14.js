//EJERCICIO #14: async y await
//
//Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
//diga "Operación completada". Utiliza async/await.

console.log(`

    •  ASYNC Y AWAIT •
  ________________________________
  
`);

function delay(ms) {
  return new Promise(resolve => {
      setTimeout(resolve, ms);
  });
}

async function operacionAsincronica() {
    await delay(1000); // Espera 1 segundo
    return "Operación completada";
}


operacionAsincronica().then(console.log);
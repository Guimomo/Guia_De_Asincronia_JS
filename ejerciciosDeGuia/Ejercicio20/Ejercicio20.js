//EJERCICIO #20: Promise.all()
//
//Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
//utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

// Crear tres promesas que se resuelvan después de diferentes intervalos de tiempo
const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa 1 resuelta después de 2 segundos');
  }, 2000); // 2 segundos
});

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa 2 resuelta después de 3 segundos');
  }, 3000); // 3 segundos
});

const promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa 3 resuelta después de 1 segundo');
  }, 1000); // 1 segundo
});

// Usar Promise.all para esperar que todas las promesas se resuelvan
Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    // Mostrar el mensaje cuando todas las promesas se hayan resuelto
    console.log('Todas las promesas se han resuelto:');
    resultados.map((resultado, index) => {
      console.log(`Resultado de promesa ${index + 1}: ${resultado}`);
    });
  })
  .catch((error) => {
    // En caso de que alguna promesa falle
    console.error('Error al resolver las promesas:', error);
});
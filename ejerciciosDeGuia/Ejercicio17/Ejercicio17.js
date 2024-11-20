//EJERCICIO #17: JSON
//
// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.


console.log(`

    •  JSON  •
________________________________

`);


async function obtenerDatos() {
  try {
    // Realizamos la solicitud y esperamos la respuesta
    const response = await fetch('Muestra.json');
    
    // Verificamos si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error('Error al obtener el archivo');
    }
    
    // Convertimos la respuesta a JSON
    const data = await response.json();
    
    // Mostramos los datos
    console.log('Datos de personas:', data.data);  // 'data' es el objeto JSON, 'data.data' es el array
  } catch (error) {
    // Manejo de errores
    console.error('Error:', error);
  }
}

// Llamamos a la función para obtener los datos
obtenerDatos();

//-----------------------------------------------------------------

// const personas = [];

// const fs = require('fs');

// fs.readFile('Muestra.json', (err, data) => {

//     if (err) {
//       console.error('Error al leer el archivo:', err);
//       return;
// }

// try {
    
//     const personas = JSON.parse(data);
//     console.log('Datos de personas:', personas);
    

//   } catch (error) {
//     console.error('Error al analizar el JSON:', error);
//   }

// });

// Usamos 'fetch' para obtener el archivo JSON

//-------------------------------------------------------------------

// fetch('Muestra.json')
//   .then(response => {
//     // Verificamos si la respuesta fue exitosa
//     if (!response.ok) {
//       throw new Error('Error al obtener el archivo');
//     }
//     // Convertimos la respuesta a JSON
//     return response.json();
//   })
//   .then(data => {
//     // Accedemos a los datos dentro de 'data' y mostramos los resultados
//     console.log('Datos de personas:', data.data);  // 'data' es el objeto JSON, 'data.data' es el array
//   })
//   .catch(error => {
//     // Manejo de errores
//     console.error('Error:', error);
//   });


//EJERCICIO #19: JSON asincrona
//
//Crea una función asincrónica que realice una llamada a un archivo local en formato json y
//luego manipule los datos recibidos para mostrar información específica.

// const fs = require('fs').promises; 

// async function obtenerDatosFiltrados(rutaArchivo) {
//     try {
//       // Leer el archivo JSON de manera asincrónica
//       const data = await fs.readFile(rutaArchivo, 'utf8');
  
//       // Parsear el contenido del archivo como JSON
//       const datos = JSON.parse(data);
  
//       // Filtrar personas cuyo cargo sea "Sistemas"
//       const filtradas = datos.data.filter(persona => persona.Cargo === 'Sistemas');
  
//       // Mostrar los resultados filtrados
//       console.log('Personas cuyo cargo es "Sistemas":', filtradas);
//     } catch (error) {
//       // Manejo de errores
//       console.error('Error al leer o procesar el archivo JSON:', error.message);
//     }
//   }
  
//   // Llamada a la función con la ruta del archivo
//   obtenerDatosFiltrados('Muestra.json');



async function obtenerYMostrarDatos() {
  try {
    // Realizamos la solicitud fetch para obtener el archivo JSON
    const response = await fetch('Muestra.json');
    
    // Verificamos si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error('Error al obtener el archivo JSON');
    }

    // Convertimos la respuesta a formato JSON
    const datos = await response.json();

    // Filtramos las personas cuyo Cargo sea "Sistemas"
    const personasSistemas = datos.data.filter(persona => persona.Cargo === 'Sistemas');

    // Si encontramos personas con el cargo "Sistemas", mostramos su nombre y apellido
    if (personasSistemas.length > 0) {

      console.log('Personas con Cargo "Sistemas":');

      personasSistemas.map(persona => {

        console.log(`Nombre: ${persona.nombre}, Apellido: ${persona.apellido}`);

      });
    } else {
      console.log('No se encontraron personas con el cargo "Sistemas".');
    }

  } catch (error) {
    // Manejo de errores en caso de que la solicitud falle o algo salga mal
    console.error('Error al procesar los datos:', error.message);
  }
}

// Llamamos a la función para obtener y mostrar los datos
obtenerYMostrarDatos();
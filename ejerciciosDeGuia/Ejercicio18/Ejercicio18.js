//EJERCICIO #18: Filtrado (JSON con THEN)
//
//Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
//para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios
//(por ejemplo, mostrar solo los nombres que comiencen con "A").

console.log(`

    •  JSON FILTRADO •
________________________________

`);


// const fs = require('fs').promises; // Usar fs.promises para trabajar con promesas

// fs.readFile('Muestra.json', 'utf8')

//   .then(data => {
//     // Analizar el contenido del archivo JSON
//     const datos = JSON.parse(data);

//     console.log('Datos originales de personas:', datos.data); // Mostrar datos originales

//     // Filtrar resultados y devolverlos en la promesa
//     return datos.data.filter(persona => persona.Cargo === 'Sistemas');
//   })
//   .then(filtradas => {
//     // Manejar los datos filtrados
//     console.log('Personas cuyo cargo es "Sistemas":', filtradas);
//   })
//   .catch(error => {
//     // Manejo de errores
//     console.error('Error al procesar el archivo JSON:', error.message);
//   });

const leer =async () => {
  try {
      const response = await fetch("Muestra.json");
      return await response.json();
  } catch (error) {
      console.log(error);
      
  }
}


leer().then(data => {

  console.table(data.data);
  // Ahora accedemos a 'data.data' para obtener el array que contiene los registros
  const filtro = data.data.filter(item => item.Cargo === "Sistemas");  // Filtramos por 'Cargo'
  console.table(filtro);  // Mostramos los resultados en una tabla

}).catch(error => {

  console.log('Error al procesar los datos:', error);  // Manejo de errores si hay algún fallo en la promesa
});
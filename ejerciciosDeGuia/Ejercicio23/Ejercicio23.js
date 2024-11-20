//EJERCICIO #23: Llamada a JSON
//
//Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
//try/catch para mostrar un mensaje de error en caso de fallo.

const leer = async () => {
    
    try {
        
        const response = await fetch("Muestra.json");
        return response.json(); 

    } catch (error) {
        
        console.log(error);
    }
}

leer().then(persona=>{
    if (persona && persona.data) {
        // Iteramos sobre cada persona en el array y mostramos su información
        persona.data.forEach(persona => {
            console.log('Nombre:', persona.nombre);
            console.log('Apellido:', persona.apellido);
            console.log('Cargo:', persona.Cargo);
            console.log('----------------------');  // Separador para mejor visualización
        });
    } else {
        console.log('No se encontraron datos o no hay propiedad "data" en el JSON.');
    }
});

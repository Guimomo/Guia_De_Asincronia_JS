//EJERCICIO #22: Bucle asincronico
//
// Crea un bucle que realice llamadas asincrónicas utilizando
// async/await para procesar una lista de elementos uno por uno.

async function procesarElemento(elemento) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Procesando: ${elemento}`);
          }, 1000); // Retraso de 1 segundo
        setTimeout(() => {

            resolve(`Resultado de ${elemento}`);
          }, 5000); // Retraso de 5 segundo
    })
}

async function listaSecuencial(lista) {
    
    for (let i=0; i < lista.length; i++) {

        const item = lista[i];

        try {
            
            const resultado = await procesarElemento(item);
            console.log(resultado);
            
            
        } catch (error) {
            console.error(`Error procesando el elemento ${item}:`, error);
        }
    }

}


const listaElementos = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

listaSecuencial(listaElementos);
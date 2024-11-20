//EJERCICIO #21: Promise.allSettled()
//
//Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza Promise.allSettled()
//para obtener información sobre el estado de todas las Promises.

let respuesta = parseInt (prompt("ingrese un número")); 

function promesa(param) {

    return new Promise ((resolve, reject)=>{

        if (param % 2 === 0) {
        
            resolve (`El número ${param} es par`);

        } else {
            
            reject (`El número ${param} es impar`);
        
        }

    });

    
}

function promesa2(param){

    return new Promise((resolve, reject) => {
       
        if (typeof param === 'number' && !isNaN(param)) {
            
            resolve (`${param} es un número`);
        } else {
            
            reject (`${param} no es un número`);
        }
    });
}

function promesa3(param){

    return new Promise((resolve, reject) => {
       
        if (param>=0) {
            
            resolve (`${param} es un número POSITIVO`);
        } else {
            
            reject (`${param} es un número NEGATIVO`);
        }
    });
}


Promise.allSettled([promesa(respuesta), promesa2(respuesta), promesa3(respuesta)])

.then((resultados) => {
    resultados.map((resultado) => {
        if (resultado.status === 'fulfilled') {
            console.log(`Resuelto: ${resultado.value}`);
        } else {
            console.log(`Rechazado: ${resultado.reason}`);
        }
    });
})
    
.catch((error) => {
    console.error("Error en alguna de las promesas:", error);
});


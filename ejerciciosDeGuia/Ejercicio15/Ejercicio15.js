//EJERCICIO #15: Error Promise
//
//Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
//"Error: Promise rechazada"

console.log(`

       •  ERROR PROMISE  •
  ________________________________
  
`);

const promesa = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        reject("Promise rechazada");
    }, 2000);
});

promesa.catch(error => console.log("Error: ", error));

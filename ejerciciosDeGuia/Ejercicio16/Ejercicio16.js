//EJERCICIO #16: Suma de Promesas
//
// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.


console.log(`

    •  SUMA DE PROMESAS  •
  ________________________________
  
`);

let num = 1;

function suma(numero) {

    return new Promise((valor) => {
    
    setTimeout(() => {
        console.log(`Valor de promise #${num++}: ${numero}`);
        valor(numero);
    }, 1000);
});

}

suma(5)

.then ((resultado1)=>{
    return suma (3).then( (resultado2) => resultado1+resultado2 )
})

.then ((primerResultado)=>{
    return suma (7).then( (resultado3) => primerResultado+resultado3 )
})

.then ((resultadoFinal)=>{

    setTimeout(() => {
        console.log(`La suma de los anteriores valores es: ${resultadoFinal}`);
    }, 1000);
    
});
//EJECICIO #11
//
//¿Cuál es el resultado del código a continuación?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// asumimos que el tiempo para ejecutar esta función es > 100 ms
for (let j = 0; j < 100000000; j++) {
    i++;
}

//Cuando el alert(i) finalmente se ejecute, el valor mostrado será: 100000000
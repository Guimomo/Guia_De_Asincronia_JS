//EJERCICIO #2: ¿Cuando se ejecutara?

//En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
//pesado que demora más de 100 ms en finalizar.
//
//¿Cuándo se ejecutará la función programada y por qué se ejecutará?
//  a) Después del bucle.
//  b) Antes del bucle.
//  c) Al comienzo del bucle.
//
//¿Qué va a mostrar alert()?

let i = 0;

setTimeout(() => alert(i), 100); // ?

//asumimos que el tiempo para ejercutar esta función es > 100 ms

for (let j = 0; j < 100000000; j++) {
    i++;
}

//Respuesta: a) Despues del bucle
// Como la mayoria cosas esto se ejecutara despues del bucle debido a que requerimos
// Un tiempo para el setTimeout, pero debido a la asincronia debemos esperar a que el bucle
// realice su función, y una vez listo se ejecutara el setTimeout.

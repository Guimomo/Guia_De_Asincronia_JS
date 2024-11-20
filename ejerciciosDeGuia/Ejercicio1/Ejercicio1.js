//EJERCICIO #1: Conteo y limitantes

//Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
//comenzando desde desde y terminando con hasta.
//Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
//
//     • Usando setInterval.
//     • Usando setTimeout anidado.


console.log(`

        •  SISTEMA DE CONTEO  •
    ________________________________

`);



function imprimirNumeros(desde,hasta) {

    desde = parseInt(prompt(`
        En el siguiente programa debes ingresar 
        un valor inicial y otro final.
        El valor inicial es donde comenzara el conteo
        y el valor final es el que terminara todo.
      ____________________________________________________________
  
      Ahora ingresa el número con el cual vas a comenzar a contar:
  `)) //Creo un prompt a traves del cual se ingresara el número inicial con el que comenzara mi conteo
  
  hasta = parseInt(prompt(`
      Ahora ingresa el número con el cual finalizaras el conteo:
  `)) //Luego creo otro prompt, pero enta vez sera el número que finalizara mi conteo


  if (isNaN(desde) || isNaN(hasta)) {
    console.log("   ERROR: ingresa números válidos");
    return; } 


  else if (desde>hasta) {

    console.log("   ERROR: El valor inicial debe ser menor que el final");
    return;

  } else {


    let Op = 0;


    do {

      Op = parseInt(prompt(`
        SetTimeout y SetInterval
        ______________________________________________________

        ¿Qué metodo del codigo desea utilizar para el conteo
        del ${desde} al ${hasta}?
          • SetTimeout  (1)
          • SetInterval (2)

        `));

        switch (Op) {

          case 1:

          for (let num = desde; num <= hasta; num++) {

            setTimeout(() => {
                console.log(num);
        
                if (num === hasta) {
        
                    console.log("¡Conteo finalizado!");
                } 
            }, 3000 + (num - desde) * 500);  }
        
            console.log(`Contando del ${desde} al ${hasta}...`);

            
            break;

          case 2:

            let numeroActual = desde; //LLevara el control del número que deseo utilizar
            
            let interval = setInterval(() => {

              console.log(numeroActual);

              if (numeroActual >= hasta) {

                clearInterval(interval);
                console.log("¡Conteo finalizado!"); }

              numeroActual++; 
              //Debemos ubicar el "numeroActual++" al final del callback para que cada vez que se cuente se incremente al proximo número y no desde el principio del conteo

            }, 500);

            console.log(`Contando del ${desde} al ${hasta}...`);

          break;
        
          default:

            alert("///Error: Ingrese un valor valido como 1 o 2...///");
          

          break;
        }

      
    } while ( Op!==1 && Op!==2 );
        

    }

}

imprimirNumeros();


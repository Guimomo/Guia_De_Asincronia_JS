//EJERCICIO #25: Proxy para validación
//
// Usar un proxy para la validación de los valores de propiedades...
//
//  • Cuando declaremos que el atributo es numérico solo perimimos que ingresen números
//  • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen letras
//  • Cuando declaremos que el atributo es un email, solo permitimos que ingresen correos
//  • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen fechas
//  • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
//  al final de estos y se debe mostrar el error personalizado por consola

console.log(`

        •  LogIn Proxy  •
_________________________________

`);


const user =
{
    userName: "",
    userCode: 0,
    email: "example@mail.com",
    date: "0000-00-00"
}


const medio = {

    get (obj,propiedad){

        console.log(`Accediendo a la propiedad: ${propiedad}`);
        return obj[propiedad]; 

    },
    set (obj,propiedad,valor){

        console.log(Object.keys(obj));

        const propiedadesValidas = Object.keys(obj)

        if (!propiedadesValidas.includes(propiedad)) {
            
            throw new Error(`ERROR: La propiedad '${propiedad}' no existe en el objeto.`);
        }

        if (propiedad == "userName" && !/^[A-Za-z\s]+$/.test(valor)) {
            throw new Error("ERROR: Ingrese un valor alfanumerico valido para nombre de usario");
            
        }

        if (propiedad == "userCode" && isNaN(valor)) {
            throw new Error("ERROR: Ingrese un codigo de usuario valido");
            
        }

        const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (propiedad == "email" && !mailRegex.test(valor)) {
            throw new Error("ERROR: Ingrese un email valido");
            
        }

        const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

        if (propiedad == "date" && !dateRegex.test(valor)) {

            throw new Error("ERROR: Ingrese una fecha valida por ejemplo YYYY-MM-DD");
            
        }



        console.log(`Estableciendo la propiedad: ${propiedad} con el valor: ${valor}`);
        obj[propiedad] = valor;  // Asigna el valor a la propiedad del objeto original
    }
}


function creadorCuenta() {
    const usuarioProxy = new Proxy(user, medio);

    let Op = 0;

    do {

        Op=parseInt(prompt(`
            Bienvenido a la CREACIÓN DE CUENTAS

            donde se va hacer prueba de uso de una proxy a la hora de ingresar datos,
            a continuación tendra un conjunto de opciones con las que podras alterar ciertas
            propiedades de un objeto llamado "user"...
            
            (1) revisar objeto user
            (2) crear un nombre de usuario
            (3) crear un codigo de usuario
            (4) ingresar un email
            (5) ingresar una fecha de nacimiento
            (0) Salir...
            `))


        switch (Op) {

            case 1:
                
                alert(`Objeto user:\n\nuserName: ${usuarioProxy.userName}\nuserCode: ${usuarioProxy.userCode}\nemail: ${usuarioProxy.email}\ndate: ${usuarioProxy.date}`);

            break;

            case 2:

                let name = prompt("Creé un user name usando unicamente caracteres alfanumericos");
                
                try {

                    usuarioProxy.userName = name; 
                } catch (error) {

                    alert(error.message);
                }
                
            break;
        
            case 3:

                let code = prompt("Creé un user code usando unicamente caracteres númericos");

                try {

                    usuarioProxy.userCode = code;
                } catch (error) {

                    alert(error.message);  
                }
                
                
            break;
                
            case 4:

                let mail= prompt("Creé un email");

                try {

                    usuarioProxy.email = mail;
                } catch (error) {

                    alert(error.message);  
                }
                
            break;

            case 5:

                let bornDate= prompt("Ingrese su fecha de nacimiento en el formato YYYY-MM-DD (Ejemplo: 2024-11-20)");

                try {

                    usuarioProxy.date = bornDate;
                } catch (error) {

                    alert(error.message);  
                }
                
            break;

            case 0:

                alert("Saliendo del programa...");
                
            break;

            default:

                alert("/// ERROR: Utiliza alguno de los cinco números presentes en el menu de opciones ///");

            break;
        }
        
    } while (Op!==0);

    
}

creadorCuenta();

console.table(user);



// usuarioProxy.email = "nuevoemail@mail.com";  // Activa el método set
// console.log(usuarioProxy.email);


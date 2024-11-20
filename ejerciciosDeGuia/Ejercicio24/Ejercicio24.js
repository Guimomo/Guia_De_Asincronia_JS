//EJERCICIO #24: PROXY
//
// Crear un objeto proxy usando la clase Proxy

const persona = {

    nombre:"Guillermo",
    edad: 21
}

const condiciones = {

    get(object, property){

        console.log(`Obteniendo la propiedad... ${property}`);
        return object [property];
        
    },

    set(object, property, value){
        console.log(Object.keys(object));
        console.log(Object.keys(object).indexOf(property));

        const propiedadesValidas = Object.keys(object)

        if (!propiedadesValidas.includes(property)) {
            
            throw new Error(`ERROR: La propiedad '${property}' no existe en el objeto.`);
        }

        if (property == "nombre" && !/^[A-Za-z\s]+$/.test(value)) {
            throw new Error("ERROR: valor no valido");
            
        }

        if (property == "edad" && isNaN(value)) {
            throw new Error("ERROR: valor no valido");
            
        }

        object[property] = value;
    }
}

const proxy = new Proxy (persona, condiciones);

// proxy.apellido = 'Guille';
// console.log(proxy.apellido);

proxy.nombre = 'Guille';
console.log(proxy.nombre);

proxy.edad = 18;
console.log(proxy.edad);
console.log(persona);

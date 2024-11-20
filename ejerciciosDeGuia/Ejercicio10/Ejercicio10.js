//EJERCICIO #10: takeWhile
//
//Crear una función takeWhile que acepte un array y un callback y que:
//
//  • Por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
//  • Devuelva un array con los elementos hasta el primer callback que devolvió false.
//  • (Inverso del dropWhile)

console.log(`

    •  Take While •
________________________________

`);

const takeWhile = (array, predicate) => {
    const result = [];

    for (const item of array) {

      if (!predicate(item)) break;
      result.push(item);
    }

    return result;
};

const numbers = [1, 4, 8, 15, 3, 9];
// const result = takeWhile(numbers, num => num < 10);
const result = takeWhile(numbers, function (num) {
  return num < 10;
});
console.log(result);


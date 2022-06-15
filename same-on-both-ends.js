// Dada una oración, retorna el número de palabras cuya primera y última letra sean iguales.
/* Example:
countSameEnds("Pop! goes the balloon") // => 1
countSameEnds("And the crowd goes wild!") // => 0
countSameEnds("No I am not in a gang.") // => 1 */
/* nota:
No cuentes palabras que tengan un solo caracter (tales como "I" y "a" en el ejemplo 3).
La función no debería ser case sensitive, es decir la "P" mayúscula debería coincidir con la "p" minúscula.
Ten ojo con los signos de puntuación u otros caracteres que no sean letras.
¡“Puntos” extra si usas expresiones regulares!*/

function countSameEnds(str) {
  const expReg = /[(!.*+-=#$%&,"@)\d]/g;
  const cleanStr = str.replace(expReg, "");
  const array = cleanStr.toLowerCase().split(" ");
  let count = 0;
  array.forEach(element => {
    if (element.length > 1) {
      if (element[0] === element[element.length-1]) {
        count += 1;
      }
    }
  });
  console.log(count);
  return count;

}

countSameEnds("Pop* goes the balloon");
// Se tienen dos arreglos de números enteros, a y b, cada uno de longitud dos. Calcule la suma de los valores de cada arreglo. Devuelva el array que tenga la mayor suma. 
// En caso de empate, devuelva el arreglo a.
/* biggerTwo([1, 2], [3, 4]) → [3, 4]
  biggerTwo([3, 4], [1, 2]) → [3, 4]
  biggerTwo([1, 1], [1, 2]) → [1, 2] */

function biggerTwo(a, b) {
  let countA = 0;
  let countB = 0;
  a.forEach(element => countA += element);
  b.forEach(element => countB += element);
  if (countA > countB) {
    return a;
  } else if (countA < countB) {
    return b;
  } else {
    return a;
  }

}
biggerTwo([1, 2], [3, 4]);
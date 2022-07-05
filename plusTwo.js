/*Dado dos arreglos de enteros, cada uno con longitud 2, retornar un nuevo arreglo, con longitud 4,
conteniendo todos los elementos de arreglos iniciales.
Ejemplo
  plusTwo([1, 2], [3, 4]) → 1,2,3,4
  plusTwo([4, 4], [2, 2]) → 4,4,2,2
  plusTwo([9, 2], [3, 4]) → 9,2,3,4*/

function plusTwo(a, b) {
  const newArray = a.concat(b);
  console.log(newArray);
  return newArray;
}

plusTwo([1, 2], [3, 4]);
plusTwo([4, 4], [2, 2]);
plusTwo([9, 2], [3, 4]);
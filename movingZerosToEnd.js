/*Escribe un algoritmo que recibe un arreglo con elementos y mueva todos los ceros al final, 
preservando el orden de los otros elementos que no sean cero.
Ejemplo 
Entrada: [false,1,0,1,2,0,1,3,"a"]
Salida: [false,1,1,2,1,3,"a",0,0]
Importante ❗
Considera el tipo de dato
¡No olvides retornar el arreglo con los ceros al final!*/
function moveZeros(arr) {
  for (let i = 1; i<arr.length; i++) {
    for (let j = 0; j < arr.length-i; j++) {
      if (arr[j] === 0) {
        arr[j] = arr[j+1];
        arr[j+1] = 0;
      }
    }
  }
  return arr;
}
moveZeros([false,1,0,1,2,0,1,3,"a"]);
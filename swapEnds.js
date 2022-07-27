/* Dado un arreglo de enteros, intercambia el primer y último elemento. Retorna el arreglo modificado. La longitud del arreglo será al menos de 1.
Ejemplo
  swapEnds([1, 2, 3, 4]) → [4,2,3,1]
  swapEnds([1, 2, 3]) → [3,2,1]
  swapEnds([8, 6, 7, 9, 5]) → [5,6,7,9,8]*/

function swapEnds(arr) {

  if (arr.length === 1) {
    return arr;

  } else {
    let firtsElem = arr.shift();
    let endElem = arr.pop();
    arr.unshift(endElem);
    arr.push(firtsElem);
    console.log(arr);
    return arr;
  }


}

swapEnds([1, 2, 3, 4]);
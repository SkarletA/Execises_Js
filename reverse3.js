// Dado un array de números enteros de longitud 3, devuelve un nuevo array con los elementos en orden inverso, 
// por lo que [1, 2, 3] se convierte en [3, 2, 1].
// example: 
// reverse3([1, 2, 3]) → [3, 2, 1]
// reverse3([5, 11, 9]) → [9, 11, 5]
// reverse3([7, 0, 0]) → [0, 0, 7]

function reverse3(num) {
  const numReverse = [];

  for (let i = 0; i<num.length; i++) {
    numReverse.unshift(num[i]);
  }
  return numReverse;
}

console.log(reverse3([7, 0, 0]));
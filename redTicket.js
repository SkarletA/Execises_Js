// Tienes un billete de lotería rojo que muestra los enteros a, b y c, cada uno de los cuales es 0, 1 o 2. Si todos tienen el valor 2, el resultado es 10.
// Si son todos iguales, el resultado es 5. Si b y c son diferentes de a, el resultado es 1. Si no, el resultado es 0.

/*Example:     
  redTicket(2, 2, 2) → 10
  redTicket(2, 2, 1) → 0
  redTicket(0, 0, 0) → 5*/

function redTicket(a, b, c) {
  if (a === 2 && b ===2 && c === 2) {
    return 10;
  } else if ( a === b && b === c) {
    return 5;
  } else if (a !== b && a !== c) {
    return 1;
  } else {
    return 0;
  }
  
}

redTicket(2, 2, 2);
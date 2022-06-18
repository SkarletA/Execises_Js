/*Escribe una función que reciba dos cadenas como parámetros e iteralas para trasformar la cadena source y termine convertida 
en la cadena target el resultado de cada iteración guardalo en un arreglo.
Ejemplos
transform('car','see') ➞ ["car", "sar", "ser", "see"]
transform('casa','buho') ➞ ["casa", "basa", "busa","buha","buho"]
transform('floor','brake') ➞ ["floor", "bloor", "broor", "braor", "brakr", "brake"]
transform('kata','math') ➞ ["kata", "mata", "math"]
Deberás retornar un array con los strings correspondientes a cada iteración
source y target siempre tendrán la misma longitud
Si una letra de source coincide al momento de iterar con otra letra de target entonces no hay transformación de letras */

function transform(source, target) {
  const arraySource = source.split("");
  const arrayTarget = target.split("");
  const arrayTransform = [source];

  for (let i = 0; i<arraySource.length; i++) {
    arraySource[i] = arrayTarget[i];
    let auxStr = arraySource.join("");
    if (!arrayTransform.includes(auxStr)) {
      arrayTransform.push(auxStr);
    }
  }
  return arrayTransform;
  
}
transform('kata','math'); 

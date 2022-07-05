/* Implementa una función que dado un arreglo de palabras devuelve una cadena con las palabras separadas con comas.
La última palabra debería estar separada por la palabra 'and' en lugar de una coma. El método recibe un array de cadenas 
y devuelve solo una cadena formateada.
Ejemplo
Entrada: ['ninja', 'samurai', 'ronin']
Salida: "ninja, samurai and ronin"
Importante ❗
Los strings con valores vacíos deben ser ignorados.
Los arrays vacíos o los valores null/nil/None que se pasen al la función deben dar como resultado una string vacío.*/

function formatWords(words) {
  let newStr = "";
  const newWord = clearWords(words);

  for (let i = 0; i< newWord.length; i++) {
    if (i === newWord.length-1) {
      newStr += newWord[i];

    } else if ( i === newWord.length-2) {
      newStr += newWord[i] + " and ";
    } else {
      newStr += newWord[i] + ", ";
    }
  }
  console.log(newStr);
  return newStr;
  function clearWords(word) {
    return words.filter((word) => word != "");
  }
}
formatWords(['ninja', 'samurai', 'ronin']);

/* Dada una cadena de longitud impar, devuelva una cadena de longitud 3 desde su centro, por lo que "Candy" produce "and". 
La longitud de la cadena será de al menos 3.
Example: 
  middleThree('Candy') → "and"
  middleThree('and') → "and"
  middleThree('solving') → "lvi"*/

function middleThree(str) {
  const lengthStr = parseInt(str.length / 2) - 1;

  return str[lengthStr]+str[lengthStr+1]+str[lengthStr+2];
  
}

middleThree('solving');
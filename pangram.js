/*Un pangrama es una sentencia donde cada letra del alfabeto Ingles aparece al menos una vez.
Dado un string sentence que contiene solo letras del Ingles en minúscula, retorna true si sentence es un pangrama, or false de otra forma.
Ejemplo 1
**Entrada:** sentence = "thequickbrownfoxjumpsoverthelazydog"
**Salida:** true
**Explicación**: sentence contiene al menos una de cada letra del alfabeto Ingles
Ejemplo 2
**Entrada**: sentence = "leetcode"
**Salida**: false
Importante ❗
sentence consiste solo de letras del alfabeto Ingles. */

function pangram(str) {
  const number_total_letter = 26;
  const cont_letter = [];

  for (let i = 0; i< str.length; i++) {
    if (!cont_letter.includes(str[i])) {
      cont_letter.push(str[i]);
    }
  }

  return cont_letter.length === number_total_letter;
}

console.log(pangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(pangram("leetcode"));
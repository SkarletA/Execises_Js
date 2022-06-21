# Exercises_Js
Resolution of javascript exercises to improve programming logic

## Newbie
- [1. Icy hot](#1-icy-hot)
- [2. Reverse 3](#2-reverse-3)
- [3. Biggertwo](#3-biggerTwo)
- [4. RedTicket](#4-redTicket)
- [5. MiddleThree](#5-middleThree)
- [6. Teensum](#6-teensum)
## Beginner
- [7. Same on bots ends](#7-same-on-bots-ends)
- [8. Remove Strings Spaces](#8-remove-strings-spaces)
- [9. Secret Society](#9-secret-society)
- [10. Abbreviate a Two Word Name](#10-abbreviate-a-two-word-name)
- [11. Remove First and Last Character](#11-remove-first-and-last-character)
- [12. Create Phone Number](#12-create-phone-number)
- [13. Moving Zeros To The End](#11-moving-zeros-to-the-end)
### Intermediate
- [14. Transformation iteration](#14-transformation-iteration)
- [15. Ask for missing details](#15-ask-for-missing-details)


### 1. Icy hot
(https://the-winter.github.io/codingjs/exercise.html?name=icyHot&title=Warmup-1)

Dadas dos temperaturas, devuelve true si una es menor que 0 y la otra es mayor que 100.

Ejemplos:
  icyHot(120, -1) → true
  icyHot(-1, 120) → true
  icyHot(2, 120) → false


### 2. Reverse 3
(https://the-winter.github.io/codingjs/exercise.html?name=reverse3&title=Array-1)

Dado un array de números enteros de longitud 3, devuelve un nuevo array con los elementos en orden inverso,  por lo que [1, 2, 3] se convierte en [3, 2, 1].
Ejemplo: 
  reverse3([1, 2, 3]) → [3, 2, 1]
  reverse3([5, 11, 9]) → [9, 11, 5]
  reverse3([7, 0, 0]) → [0, 0, 7]

### 3. Biggertwo
(https://the-winter.github.io/codingjs/exercise.html?name=biggerTwo&title=Array-1)

Se tienen dos arreglos de números enteros, a y b, cada uno de longitud dos. Calcule la suma de los valores de cada arreglo. Devuelva el array que tenga la mayor suma. En caso de empate, devuelva el arreglo a.

Ejemplo
  biggerTwo([1, 2], [3, 4]) → [3, 4]
  biggerTwo([3, 4], [1, 2]) → [3, 4]
  biggerTwo([1, 1], [1, 2]) → [1, 2]


### 4. RedTicket
(https://the-winter.github.io/codingjs/exercise.html?name=redTicket&title=Logic-1)

Tienes un billete de lotería rojo que muestra los enteros a, b y c, cada uno de los cuales es 0, 1 o 2. Si todos tienen el valor 2, el resultado es 10. Si son todos iguales, el resultado es 5. Si b y c son diferentes de a, el resultado es 1. Si no, el resultado es 0.

Ejemplo
  redTicket(2, 2, 2) → 10
  redTicket(2, 2, 1) → 0
  redTicket(0, 0, 0) → 5

### 5. MiddleThree
https://the-winter.github.io/codingjs/exercise.html?name=middleThree&title=String-1

Dada una cadena de longitud impar, devuelva una cadena de longitud 3 desde su centro, por lo que "Candy" produce "and". La longitud de la cadena será de al menos 3.

Ejemplo
  middleThree('Candy') → "and"
  middleThree('and') → "and"
  middleThree('solving') → "lvi"

### 6. Teensum
https://the-winter.github.io/codingjs/exercise.html?name=teenSum&title=Logic-1

Dados 2 enteros, a y b, devuelve la suma. Sin embargo, los valores "adolescentes" en el rango desde 13 hasta 19 inclusive, son más afortunados. Así que si cualquiera de los valores es un adolescente, simplemente devuelve 19.

Ejemplo
  teenSum(3, 4) → 7
  teenSum(10, 13) → 19
  teenSum(13, 2) → 19

### 7. Same on bots ends
https://edabit.com/challenge/JDDeK9jSFKJbfzhMt

Dada una oración, retorna el número de palabras cuya primera y última letra sean iguales.
Ejemplos:
countSameEnds("Pop! goes the balloon") // => 1
countSameEnds("And the crowd goes wild!") // => 0
countSameEnds("No I am not in a gang.") // => 1

Notas

No cuentes palabras que tengan un solo caracter (tales como "I" y "a" en el ejemplo 3).
La función no debería ser case sensitive, es decir la "P" mayúscula debería coincidir con la "p" minúscula.
Ten ojo con los signos de puntuación u otros caracteres que no sean letras.
¡“Puntos” extra si usas expresiones regulares!

### 8. Remove Strings Spaces
https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

Esto es demasiado sencillo, elimina los espacios de la cadena, luego devuelve la cadena resultante.
Ejemplos
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B') ➞ '8j8mBliB8gimjB8B8jlB'
noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd') ➞ '88Bifk8hB8BB8BBBB888chl8BhBfd'
noSpace('8aaaaa dddd r     ') ➞ '8aaaaaddddr'

Importante ❗
Las cadenas pasadas solo constarán de letras y espacios.

### 9. Secret Society
https://edabit.com/challenge/zQm9YZTTFPhNtYjDr

Un grupo de amigos ha decidido iniciar una sociedad secreta. El nombre de la sociedad será la primera letra de cada uno de ellos, ordenados alfabéticamente.
Crear una función que tome una serie de nombres y retorne el nombre de la sociedad secreta.

Ejemplos
societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"

Importante ❗

El nombre de la sociedad secreta debe ser enteramente en mayúsculas.

### 10. Abbreviate a Two Word Name
(https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript)

Escribe una función que convierte un nombre en iniciales. Esta función toma exactamente dos palabras con un espacio entre ellos.

La salida debe ser dos letras capitalizadas con un punto que las separa.

Ejemplo 1

  Entrada: Sam Harris
  Salida: S.H
  Ejemplo 2

  Entrada: Patrick Feeney
  Salida: P.F

### 11. Remove First and Last Character
(https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript)

El objetivo es crear una función que elimine el primer y último carácter del string. La función tiene como parámetro un string 'str'. No tienes que preocuparte por cadenas con menos de dos caracteres.

Ejemplos
  removeChar('eloquent') ➞ 'loquen';
  removeChar('country') ➞ 'ountr';

### 12. Create Phone Number
(https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript)

En este ejercicio deberás escribir una función que reciba una arreglo de 10 caracteres (los valores serán entre 0 y 9), como resultado retorna una cadena con los números en formato de número de teléfono.

Ejemplo
  Entrada: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  Salida: "(123) 456-7890"
  Explicación: En la entrada recibimos un arreglo el cual debemos utilizarlo para devolver un string con el formato de numero.

Importante ❗

El string devuelto debe contener el formato para ser correcto y completar este desafío.
¡No olvide el espacio que incluye después del paréntesis de cierre!

### 13. Moving Zeros To The End
(https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript)

Escribe un algoritmo que recibe un arreglo con elementos y mueva todos los ceros al final, preservando el orden de los otros elementos que no sean cero.

Ejemplo
  Entrada: [false,1,0,1,2,0,1,3,"a"]
  Salida: [false,1,1,2,1,3,"a",0,0]
Importante ❗
Considera el tipo de dato
¡No olvides retornar el arreglo con los ceros al final!

### 14. Transformation iteration
(https://www.codewars.com/kata/5872d59caa042821100001f8/train/javascript)

Escribe una función que reciba dos cadenas como parámetros e iteralas para trasformar la cadena source y termine convertida en la cadena target el resultado de cada iteración guardalo en un arreglo.

Ejemplos
transform('car','see') ➞ ["car", "sar", "ser", "see"]
transform('casa','buho') ➞ ["casa", "basa", "busa","buha","buho"]
transform('floor','brake') ➞ ["floor", "bloor", "broor", "braor", "brakr", "brake"]
transform('kata','math') ➞ ["kata", "mata", "math"]

Importante ❗

Deberás retornar un array con los strings correspondientes a cada iteración
source y target siempre tendrán la misma longitud
Si una letra de source coincide al momento de iterar con otra letra de target entonces no hay transformación de letras

### 15. Ask for missing details
(https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript)

Se le proporcionará un array de objetos que representan datos sobre los desarrolladores que se han inscrito para asistir a la próxima reunión.

Dado el siguiente array de entrada:
let list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

Escribe una función que:

Agregue la propiedad question a cada objeto del array de entrada donde el desarrollador no ha proporcionado los detalles relevantes (aquellas propiedades en las que el valor es null ). El valor de la propiedad question debe ser el siguiente string:

Hi, could you please provide your <property name>.

La función debe retornar sólo los desarrolladores con detalles faltantes:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
  question: 'Hi, could you please provide your language.' }
]
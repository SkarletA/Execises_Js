/* Escribe una función que convierte un nombre en iniciales. Esta función toma exactamente dos palabras con un espacio entre ellos.
La salida debe ser dos letras capitalizadas con un punto que las separa.
Ejemplo 1
Entrada: Sam Harris
Salida: S.H
Ejemplo 2
Entrada: Patrick Feeney
Salida: P.F */

function abbrevName(name){
  const array = name.toUpperCase().split(" ");
  const abbrev = array.map(element => element[0]);

  return abbrev.join(".");
}
abbrevName("Sam Harris");
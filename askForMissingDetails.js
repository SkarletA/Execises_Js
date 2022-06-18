/*Se le proporcionará un array de objetos que representan datos sobre los desarrolladores que se han inscrito para asistir a 
la próxima reunión. Dado el siguiente array de entrada: 
let list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];
Escribe una función que:
Agregue la propiedad question a cada objeto del array de entrada donde el desarrollador no ha proporcionado los detalles relevantes 
(aquellas propiedades en las que el valor es null ). El valor de la propiedad question debe ser el siguiente string:
Hi, could you please provide your <property name>.
La función debe retornar sólo los desarrolladores con detalles faltantes:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
  question: 'Hi, could you please provide your language.' }
]*/

function askForMissingDetails(list) {
 let newArray = [];
  list.forEach(element => {
    const arrayValues = Object.values(element);
    const position = arrayValues.indexOf(null);
    if ( position !== -1) {
      element.question = `Hi, could you please provide your ${Object.keys(element)[position]}.`;
      newArray.push(element);
    }
  });
  return newArray;
}

let list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];
askForMissingDetails(list1);
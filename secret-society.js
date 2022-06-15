/* Un grupo de amigos ha decidido iniciar una sociedad secreta. El nombre de la sociedad será la primera letra de cada uno de ellos, 
ordenados alfabéticamente. Crear una función que tome una serie de nombres y retorne el nombre de la sociedad secreta.*/

/* Example: societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"  */

// nota: El nombre de la sociedad secreta debe ser enteramente en mayúsculas.


function societyName(friends) {
  const nameSociety = friends.map((element) => element[0]);
  const alphabeticalOrder = nameSociety.sort();
	return alphabeticalOrder.join("").toUpperCase();
}

societyName(["Adam", "sarah", "Malcolm"]);
/* Fonctions de manipulation de chaînes */

// Inverser une chaîne
function inverser(str) {
  return str.split('').reverse().join('');
}
console.log("Inverser la chaîne :", inverser);

// Compter le nombre de caractères dans une chaîne
function countCaracters(str) {
  return str.length;
}
console.log("Nombre de caractères :", countCaracters);

// Mettre en majuscule la première lettre de chaque mot
function capitalizeWords(str) {
  var words = str.split(' ');
  var result = [];

  for (var i = 0; i < words.length; i++) {
      if (words[i]) {
          var capitalized = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
          result.push(capitalized);
      }
  }
  return result.join(' '); // Rejoint les mots pour former une phrase
}
console.log("Phrase avec majuscule :", capitalizeWords);

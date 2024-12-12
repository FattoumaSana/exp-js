/*Fonctions mathématiques*/

//Factorielle : n!=n×(n−1)×(n−2)×⋯×1 exp 5!=5×4×3×2×1=120

function factorielle(n) {
    if (n < 0) {
        return "La factorielle n'existe pas pour les nombres négatifs.";
    }
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i; // Multiplie le résultat par i
    }
    return result;
}

console.log("Factorielle de 5 :", factorielle)

//Vérification des nombres premiers 

function estPremier(n) {
    if (n <= 1) {
        return false; // Les nombres <= 1 ne sont pas premiers
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) { // Si n est divisible par i
            return false;
        }
    }
    return true;
}
        console.log("2 est-il un nombre premier ? :", estPremier(2));  // ➞ true
        console.log("4 est-il un nombre premier ? :", estPremier(4));  // ➞ false
        console.log("17 est-il un nombre premier ? :", estPremier(17)); // ➞ true


//suite de Fibonacci exp 0, 1, 1, 2, 3, 5, 8, 13, 21 et 34

function fibonacci(n) {
    // Vérification si l'entrée est un nombre positif
    if (n <= 0) {
        return "Veuillez entrer un nombre positif.";
    }

    var result = [];  // Tableau pour stocker les termes de la suite
    var a = 0;        // Premier terme de la suite
    var b = 1;        // Deuxième terme de la suite

    // Si n est supérieur ou égal à 1, on ajoute le premier terme
    if (n >= 1) {
        result.push(a);
    }

    // Si n est supérieur ou égal à 2, on ajoute le deuxième terme
    if (n >= 2) {
        result.push(b);
    }

    for (var i = 2; i < n; i++) {
        var nextTerm = a + b;   // Calcul du prochain terme
        result.push(nextTerm);  // Ajoute le terme calculé à la suite
        a = b;                  // Met à jour a pour le prochain calcul
        b = nextTerm;           // Met à jour b pour le prochain calcul
    }

    return result;  
}

console.log(fibonacci(10)); // Résultat : [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]




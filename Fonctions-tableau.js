/*Fonctions de tableau */

function resultat(arr) {
  
  var min = arr[0]; 
  var max = arr[0]; 
  var sum = 0;      

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];

  
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // return min, max, sum
  console.log("Le min est :", min, "Le max est:" , max,"La sommes est :", sum )
}


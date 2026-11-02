const prompt = require('prompt-sync')();

// Cas A

let hora = 9;
if (hora < 10 || hora > 18) {
console.log("Accés denegat");
}

// Accés denegat, perquè el || donarà bé si almenys una de les condicions es correcta

// Cas B

let hora2 = 15;
let capDeSetmana = false;
if (hora2 < 10 || hora2 > 18 || capDeSetmana) {
console.log("Accés denegat");
}

// No donarà Accés denegat, perquè totes son false

// Cas C
let hora3 = 17;
let capDeSetmana2 = true;
if (hora3 < 10 && hora3 > 18 && capDeSetmana2) {
console.log("Accés denegat");
}

// No donarà Accés denegat, perquè hi ha algunes condicions que no se compleixen
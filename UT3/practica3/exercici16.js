const prompt = require('prompt-sync')();

// && (AND): retorna true només si les dues condicions són correctes
// || (OR):  retorna true si almenys una de les condicions és correcta.
// !  (NOT): inverteix el valor

const edat = 20;
const tecarnet = true;

console.log(edat >= 18 && tecarnet);
console.log(edat < 18 || tecarnet);
console.log(!teCarnet);
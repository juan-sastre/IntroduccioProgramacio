const prompt = require('prompt-sync')();
const valor = prompt('Escriu algo');

console.log(`Has escrit ${valor}`);
console.log(`typeof ${valor}`);
console.log((Boolean) `${valor}`);
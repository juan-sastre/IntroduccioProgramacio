const prompt = require('prompt-sync')();

const valor1 = Number(prompt('Escriu un valor '));
const valor2 = Number(prompt('Escriu un altre valor '));

console.log(`La suma és ${valor1 + valor2}`);
console.log(`La resta és ${valor1 - valor2}`);
console.log(`La multiplicació és ${valor1 * valor2}`);
console.log(`La divisió és ${valor1 / valor2}`);
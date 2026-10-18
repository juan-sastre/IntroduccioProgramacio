const prompt = require('prompt-sync')();

const nom = prompt('Com et dius? ');
const edat = Number(prompt('Quants de anys tens? '));

console.log(`Hola ${nom}! tens ${edat} anys.`);
console.log(`L'any que ve en tendràs ${edat + 1}.`);
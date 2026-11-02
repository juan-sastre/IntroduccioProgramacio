const prompt = require('prompt-sync')();

const edat = Number(prompt('Escriu la teva edat: '));
const entrada = prompt('Tens entrada (si/no): ');

if (edat >= 18 && entrada == 'si') {
    console.log('Accés permès')
}   else {
    console.log('Accés denegat')
}
const prompt = require('prompt-sync')();

const edat = Number(prompt('Quina edat tens: '));
const carnet = prompt('Tens carnet de estudiant (si/no): ');

if (edat < 18 || edat > 65 || carnet == 'si') {
    console.log('Tens descompte')
}   else {
    console.log('Preu normal')
}
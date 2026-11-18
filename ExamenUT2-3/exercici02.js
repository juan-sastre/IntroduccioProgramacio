const prompt = require('prompt-sync')();

const NOM = prompt('Quin és el teu nom: ');
const HORES = Number(prompt('Quantes hores de ma de obra: '));
const PECES = Number(prompt('Quin és el cost de les peçes: '));
const CONTRA = Boolean(prompt('Tens contracte de manteniment (si/no): '));
const URGENT = Boolean(prompt('Es el servei urgent (si/no): '));

console.log('');
console.log('--- PRESSUPOST ---');

console.log(`Client: ${NOM}`);
console.log(`Mà de obra: ${HORES * 35}€`);

if (CONTRA == true) {
    let desco = HORES / 0.2
    console.log(`Descompte contracte: -${desco}€`)
}

console.log(`Peces: ${PECES}€`);

if (URGENT == true) {
    let reca = 15
    console.log(`Recarrec de urgencia: ${reca}€`)
}

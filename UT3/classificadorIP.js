const prompt = require('prompt-sync')();

console.log('=== CLASSIFICADOR DE ADRECES IP ===');

const octet1 = Number(prompt('Introdueix el primer octet: '));
const octet2 = Number(prompt('Introdueix el segon octet: '));
const octet3 = Number(prompt('Introdueix el tercer octet: '));
const octet4 = Number(prompt('Introdueix el quart octet: '));

let valida = true;

if (octet1 < 0 || octet1 > 255) {
    valida = false;
}
if (octet2 < 0 || octet2 > 255) {
    valida = false;
}
if (octet3 < 0 || octet3 > 255) {
    valida = false;
}
if (octet4 < 0 || octet4 > 255) {
    valida = false;
}

if (!valida) {
    console.log('Adreça no vàlida: cada octet ha de estar entre 0 i 255.');
    if (!valida) {
        return
    }
}   else {
    console.log(`La adreça IP és: ${octet1}.${octet2}.${octet3}.${octet4}`);
}

let classe = '';

if (octet1 >= 0 && octet1 <= 127) {
    classe = 'A';
} else if (octet1 >= 128 && octet1 <= 191) {
    classe = 'B';
} else if (octet1 >= 192 && octet1 <= 223) {
    classe = 'C';
} else if (octet1 >= 224 && octet1 <= 239) {
    classe = 'D';
} else if (octet1 >= 240 && octet1 <= 255) {
    classe = 'E';
} else {
    classe = 'No vàlida';
}

console.log(`La classe de l'adreça IP és: ${classe}`);

switch (classe) {
    case 'A':
        console.log('La mascara per defecte es 255.0.0.0');
        break;
    case 'B':
        console.log('La mascara per defecte es 255.255.0.0');
        break;
    case 'C':
        console.log('La mascara per defecte es 255.255.255.0');
        break;
    case 'D':
        console.log('La classe D no té mascara per defecte');
        break;
    case 'E':
        console.log('La classe E no té mascara per defecte');
        break;
    default:
        console.log('Classe no vàlida');
}

if (classe === 'A' || classe === 'B' || classe === 'C') {
    console.log('Tipus Privada')
}   else {
    console.log('Tipus Pública')
}
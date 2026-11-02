const prompt = require('prompt-sync')();

const numero1 = Number(prompt('Escriu un numero: '));
const numero2 = Number(prompt('Escriu un altre numero: '));
const operacio = (prompt('Escriu una operació (+,-,*,/): '));

if (operacio === '+') {
    console.log(numero1 + numero2)
}   else if (operacio === '-') {
    console.log(numero1 - numero2)
}   else if (operacio === '*') {
    console.log(numero1 * numero2)
}   else if (operacio === '/') {
    if (numero2 === 0) {
        console.log('No es pot dividir entre zero')
    }   else {
        console.log(numero1 / numero2)
    }
}   else {
    console.log('Operació no valida')
}


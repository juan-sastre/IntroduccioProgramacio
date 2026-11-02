const prompt = require('prompt-sync')();

const temp = Number(prompt('Quants de graus fa: '));

if (temp < 10) {
    console.log('Fa fred')
}   else if (temp < 25) {
    console.log('Temperatura moderada')
}   else if (temp >= 25) {
    console.log('Fa calor')
}
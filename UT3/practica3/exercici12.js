const prompt = require('prompt-sync')();

const pregunta = Number(prompt(`Escriu un numero: `));

if (pregunta === 7) {
    console.log('Has endevinat el número!')
}   else {
    console.log('No has encertat. Torna-ho a provar!')
}
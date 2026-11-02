const prompt = require('prompt-sync')();

const edat = Number( prompt(`Quina edat tens: `) );

if (edat > 18) {
    console.log(`Ets major de edat`)
}   else {
    console.log(`Ets menor de edat`)
}
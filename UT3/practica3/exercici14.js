const prompt = require('prompt-sync')();

let temperatura = 25;
let missatge;
missatge = (temperatura > 30) ? "Fa molta calor" : "La temperatura és agradable";
console.log(missatge);
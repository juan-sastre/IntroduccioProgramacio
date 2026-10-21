const prompt = require('prompt-sync')();

const KB = 1024;
const MB = KB * 1024;
const GB = MB *1024;

let bytes = Number(prompt('Escriu la quantitat de bytes: '));

console.log(`La quantitat de kylobytes son ${ (bytes / KB).toFixed(2) }`);
console.log(`La quantitat de megabytes son ${ (bytes / MB).toFixed(2) }`);
console.log(`La quantitat de gigabytes son ${ (bytes / GB).toFixed(2) }`);
    

let giga = Number(prompt('Escriu la quantitat de gigabytes: '));
console.log (`La quantitat de bytes son ${giga * GB}`);

let mida = Number(prompt('Escriu la mida del fitxer en gigabytes: '));
let Mbps = Number(prompt('Escriu la velocitat de la xarxa en Mbps: '));
let Bytes = mida * GB;
let bits = Bytes * 8;
let bps = Mbps * 1000000;
let segons = bits / bps;
let minuts = segons / 60;

console.log(`El temps de descàrrega del fitxer es de ${segons.toFixed(0)} segons`);
console.log(`El temps de descàrrega del fitxer es de ${minuts.toFixed(1)} minuts`);
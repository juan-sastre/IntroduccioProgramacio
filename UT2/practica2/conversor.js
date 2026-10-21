const prompt = require('prompt-sync')();

const KB = 1024;
const MB = KB * 1024;
const GB = MB *1024;

let bytes = prompt('Escriu la quantitat de bytes: ');

console.log(`La quantitat de kylobytes son ${bytes / KB}`);
console.log(`La quantitat de megabytes son ${bytes / MB}`);
console.log(`La quantitat de gigabytes son ${bytes / GB}`);
    
console.log(`${kb.toFixed(2)} KB`);
console.log(`${mb.toFixed(2)} MB`);
console.log(`${gb.toFixed(2)} GB`);

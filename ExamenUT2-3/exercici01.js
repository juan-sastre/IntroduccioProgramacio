const prompt = require('prompt-sync')();

const nom = "NetLlevant"
const any = 2026

let nomEquip
let memoria
let capacitat
let anyCompra
let garantia
let ip

let equip = prompt('Nom del equip: ');
let ram = prompt('Quantitat de RAM (GB): ');
let disc = prompt('Espai al disc (GB): ');
let anti = prompt('Antiguitat: ');
let garan = Boolean(prompt('Garantia (si/no): '));
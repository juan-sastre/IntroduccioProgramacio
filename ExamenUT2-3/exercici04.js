const prompt = require('prompt-sync')();

const TIPUS = prompt('Quin tipus de accident es (XARXA, HARDWARE o SOFTWARE): ');
const HORES = Number(prompt('Quantes hores han passat desde la incidentcia: '));
const EMP = Boolean(prompt('Ets una empresa (si/no): '));
const CLI = Boolean(prompt('El servei esta aturat (si/no): '));


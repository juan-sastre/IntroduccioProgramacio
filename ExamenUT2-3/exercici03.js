const prompt = require('prompt-sync')();

const VELO = Number(prompt('Quina velocitat tens contractada (Mbps): '));
const VELO2 = Number(prompt('Quina velocitat ha surtit al test (Mbps): '));
const PING = Number(prompt('Quan de ping tens (ms): '));
const PAQ = Number(prompt('Quants de paquets es perden (%): '));

if (VELO <= 0 || VELO2 <= 0 || PING <= 0) {
    console.log('Dades no valides')
}   else {
    let percen = 100 * VELO / 1000
    console.log(`Percentatge: ${percen}%`)

    if (percen >= 90 && PING < 30 && PAQ == 0) {
        console.log('ÒPTIMA')
    }   else if (percen >= 70 && PING <= 100 && PAQ <= 2) {
        console.log('ACCEPTABLE')
    }   else if (PING > 200 || PAQ > 10) {
        console.log('CRÍTICA')
    }   else {
        console.log('DEFICIENT')
    }
}
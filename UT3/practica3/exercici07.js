const prompt = require('prompt-sync')();

console.log(5 == "5"); // true (és el mateix nombre)
console.log(5 === "5"); // false (és el mateix nombre però no la mateixa categoria)
console.log(0 == false); // true (és el mateix nombre)
console.log(0 === false); // false (és el mateix nombre però no la mateixa categoria)

// El == és per veure si el contigut és igual al altre
// El === és per veure fer el mateix però és més estricte
// És recomanable utilitzar el === perquè així t'asegures que el nombre el mateix sempre
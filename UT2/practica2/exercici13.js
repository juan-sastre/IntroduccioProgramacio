let variableA = "A";
let variableB = "B";
let variableC = "C";

let temp = variableB;
variableB = variableC;
variableC = temp;

console.log(`A = ${variableA}`)
console.log(`B = ${variableB}`)
console.log(`C = ${variableC}`)
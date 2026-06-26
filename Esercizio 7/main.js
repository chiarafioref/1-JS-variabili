console.log("script JS caricato");

let name = "Sara";
let currentYear = 2026;
let presence = true;
let birthYear = 1996;

let age = currentYear - birthYear;

const message1 = "L'alunna " + name + " iscritta all'anno accademico " + currentYear + " ha " + age + " anni."
console.log(message1);

const message2 = `L'alunna ${name} iscritta all'anno accademico ${currentYear} ha ${age} anni.`
console.log(message2);
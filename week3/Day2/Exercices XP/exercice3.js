const prompt = require('prompt-sync')();

let nombre;

do {
  let saisie = prompt("Veuillez saisir un nombre : ");
  nombre = Number(saisie);

  if (isNaN(nombre)) {
    console.log("Ce n'est pas un nombre valide.");
  }
} while (isNaN(nombre) || nombre < 10);

console.log("Merci ! Le nombre est supérieur ou égal à 10.");

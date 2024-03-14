// const generateName = require("sillyname"); // CommonJS
import generateName from "sillyname"; // ECMAModules

const sillyname = generateName();

console.log(sillyname);

// SuperHeroes
import superheroes from "superheroes";
console.log(`I am ${superheroes.random()}!`);

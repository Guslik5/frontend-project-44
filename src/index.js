import getName from "./cli.js";
import selectGame from "../bin/brain-games.js";


console.log("Welcome to the Brain Games!")
const name = getName();
console.log(`Hello, ${name}!`)

selectGame()
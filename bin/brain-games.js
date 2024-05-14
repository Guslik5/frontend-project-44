import getName from '../src/cli.js';
import playGameParity from '../bin/brain-even.js'

console.log("Welcome to the Brain Games!")

const name = getName();

console.log(`Hello, ${name}!`)

playGameParity();


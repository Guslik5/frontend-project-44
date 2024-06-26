import playGameParity from '../bin/brain-even.js'
import playGameCalc from "./brain-calc.js";
import playGameGcd from "./brain-gcd.js";
import readlineSync from "readline-sync";
import playGameProgression from "./brain-progression.js";
import playGamePrime from "./brain-prime.js";

function selectGame(){
    let numberGame = readlineSync.question("What game do you want to play?\n1: even\n2: calc\n3: gcd\n4: progression\n5: prime\n")
    switch (numberGame) {
        case "1":
            playGameParity()
            break;
        case "2":
            playGameCalc()
            break;
        case "3":
            playGameGcd()
            break;
        case "4":
            playGameProgression()
            break;
        case "5":
            playGamePrime()
            break;
        default:
            console.log("Error: game is not found")
    }
}

export default selectGame








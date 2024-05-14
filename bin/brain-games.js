import playGameParity from '../bin/brain-even.js'
import playGameCalc from "./brain-calc.js";
import readlineSync from "readline-sync";

function selectGame(){
    let numberGame = readlineSync.question("What game do you want to play?\n1: even\n2: calc\n")
    switch (numberGame) {
        case "1":
            playGameParity()
            break;
        case "2":
            playGameCalc()
            break;
        default:
            console.log("Error: game is not found")
    }
}

export default selectGame








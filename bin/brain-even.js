import readlineSync from 'readline-sync';
import pkg from 'lodash/number.js';
const {random} = pkg;

function playGameParity() {
    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")
    let flag = 0
    for (let i = 0; i < 3; i++){
        let generateValue = random(0, 100)
        console.log(`Question: ${generateValue}`)
        let answer = generateValue % 2 === 0
        let answerUser = readlineSync.question('Your answer: ')
        if ((answerUser === "Yes") && answer) {
            console.log("Correct!")
            flag++
            continue
        }
        if (((answerUser === "No") && !answer)){
            console.log("Correct!")
            flag++
            continue
        }
        break;
    }
    if (flag === 3){
        console.log("Congratulations!")
    }
    else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.\n" +
            "Let's try again")
    }
}

export default playGameParity
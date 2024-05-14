import readlineSync from "readline-sync";
import pkg from "lodash/number.js";
const {random} = pkg;
import pkg2 from "lodash/string.js";
const {parseInt} = pkg2

function NOD(firstValue, secondValue){
    if (firstValue === secondValue){
        return firstValue
    }
    if (firstValue > secondValue){
        let next = firstValue - secondValue
        return NOD(next,secondValue)
    }
    else {
        let next = secondValue - firstValue
        return NOD(next, firstValue)
    }
}

function playGameGcd(){
    console.log("Find the greatest common divisor of given numbers.")
    for (let i = 0; i < 3; i++) {
        let generateFirstValue = random(0, 100)
        let generateSecondValue = random(0, 100)
        console.log(`Question: ${generateFirstValue} and ${generateSecondValue}`)
        let result = NOD(generateFirstValue, generateSecondValue)
        let answerUser = parseInt(readlineSync.question('Your answer: '))
        if (result !== answerUser){
            console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again`)
            return
        }
        console.log("Correct!")
    }
    console.log("Congratulations")
}

export default playGameGcd
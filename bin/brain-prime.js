import readlineSync from "readline-sync";
import pkg from "lodash/number.js";
const {random} = pkg;
import pkg2 from "lodash/string.js";
const {parseInt} = pkg2

function isPrime(value){
    for (let i = value/2+1; i > 1; i--){
        if (value % i === 0){
            return false;
        }
    }
    return true;
}

function playGamePrime(){
    console.log("Find the greatest common divisor of given numbers.")
    for (let i = 0; i < 3; i++) {
        let generateValue = random(0, 1000)
        console.log(`Question: ${generateValue}`)
        let result = isPrime(generateValue)
        let answerUser = readlineSync.question('Your answer: ')
        let temp = true
        if (answerUser === "Yes") temp = true
        if (answerUser === "No") temp = false
        if (result !== temp){
            console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again`)
            return
        }
        console.log("Correct!")
    }
    console.log("Congratulations")
}

export default playGamePrime
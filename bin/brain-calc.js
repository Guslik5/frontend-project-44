import pkg1 from "lodash/number.js";
import readlineSync from "readline-sync";
import pkg2 from "lodash/string.js";
const {parseInt} = pkg2
const {random} = pkg1

function getResult(firstValue, secondValue, operator){
    switch (operator){
        case "+": return firstValue + secondValue;
        case "-": return firstValue - secondValue;
        case "*": return firstValue * secondValue;
        default: console.log("Error operator")
            return 0
    }

}

function playGameCalc(){
    console.log("What is the result of the expression?")
    let arr = ["+", "-", "*"]
    for (let i = 0; i < 3; i++){
        let sym = arr[random(0,2)]
        let firstValue = random(0, 100)
        let secondValue = random(0, 100)
        console.log(`Question: ${firstValue} ${sym} ${secondValue}`)
        let answerUser = parseInt(readlineSync.question('Your answer: '))
        let result = getResult(firstValue,secondValue, sym)
        if (result !== answerUser){
            console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again`)
            return
        }
        console.log("Correct!")
    }
    console.log("Congratulations")
}

export default playGameCalc